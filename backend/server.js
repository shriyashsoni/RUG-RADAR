const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const BIRDEYE_API_KEY = (process.env.BIRDEYE_API_KEY || '').trim();

console.log(`Backend initialized with API key length: ${BIRDEYE_API_KEY.length}`);

app.use(cors());
app.use(express.json());

const birdeyeHeaders = {
    'X-API-KEY': BIRDEYE_API_KEY,
    'x-chain': 'solana'
};

// In-memory cache to avoid rate limits
const cache = {
    listings: { data: null, timestamp: 0 },
    security: new Map() // address -> { data, timestamp }
};
const CACHE_TTL = 30000; // 30 seconds

// Helper function for safety scoring
function calculateSafetyScore(sec) {
    if (!sec) return { label: 'WARN', score: 50, flags: [] };

    const detectedFlags = [];
    if (sec.mintable) detectedFlags.push('Mintable');
    if (sec.freezeable) detectedFlags.push('Freezeable');
    if (sec.transferFeeEnable) detectedFlags.push('Transfer Fee');
    if (sec.nonTransferable) detectedFlags.push('Non-Transferable');
    if (sec.metaplexUpdateAuthority) detectedFlags.push('Update Authority');

    const flagsCount = detectedFlags.length;
    const lpLocked = sec.liquidityLocked ? 1 : 0;
    
    // Formula: Start at 100, subtract for flags, add for locked LP
    const score = Math.max(0, Math.min(100, 100 - flagsCount * 18 + lpLocked * 10));
    
    let label = 'RUG';
    if (score >= 70) label = 'SAFE';
    else if (score >= 40) label = 'WARN';

    return {
        label,
        score,
        flags: detectedFlags,
        lpLocked: !!sec.liquidityLocked
    };
}

// Endpoint: Fetch new listings
app.get('/api/tokens/new', async (req, res) => {
    const now = Date.now();
    if (cache.listings.data && (now - cache.listings.timestamp < CACHE_TTL)) {
        return res.json(cache.listings.data);
    }

    try {
        const response = await axios.get('https://public-api.birdeye.so/defi/v2/tokens/new_listing?limit=20', {
            headers: birdeyeHeaders
        });
        
        const items = response.data?.data?.items || [];
        cache.listings = { data: items, timestamp: now };
        res.json(items);
    } catch (error) {
        console.error('Error fetching new listings:', error.response?.data || error.message);
        res.status(500).json({ error: 'Failed to fetch new listings' });
    }
});

// Endpoint: Fetch token security and process score
app.get('/api/tokens/security/:address', async (req, res) => {
    const { address } = req.params;
    const now = Date.now();
    
    if (cache.security.has(address)) {
        const cached = cache.security.get(address);
        if (now - cached.timestamp < CACHE_TTL * 10) { // Cache security for 5 mins
            return res.json(cached.data);
        }
    }

    try {
        const response = await axios.get(`https://public-api.birdeye.so/defi/token_security?address=${address}`, {
            headers: birdeyeHeaders
        });
        
        const securityData = response.data?.data;
        const safetyReport = calculateSafetyScore(securityData);
        
        const result = {
            raw: securityData,
            report: safetyReport
        };
        
        cache.security.set(address, { data: result, timestamp: now });
        res.json(result);
    } catch (error) {
        console.warn(`Fallback security for ${address}:`, error.response?.data?.message || error.message);
        
        // Return a default report instead of 500
        const fallbackReport = calculateSafetyScore(null);
        res.json({
            raw: null,
            report: fallbackReport,
            isFallback: true
        });
    }
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`🚀 Rug Radar Backend running on http://localhost:${PORT}`);
});
