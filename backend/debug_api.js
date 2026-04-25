const axios = require('axios');

const API_KEY = '17902a44690247c2910c97f1b2f0c79e';
const headers = { 
    'X-API-KEY': API_KEY, 
    'x-chain': 'solana' 
};

async function test() {
    try {
        console.log('Testing v3/token/list with creation_time...');
        const r1 = await axios.get('https://public-api.birdeye.so/defi/v3/token/list?limit=5&sort_by=creation_time&sort_type=desc', { headers });
        console.log('Token list success:', r1.data.success);
        if (r1.data.data) console.log('Sample item:', r1.data.data.items[0]?.symbol);
    } catch (e) {
        console.error('Token list fail:', e.response?.data || e.message);
    }

    try {
        console.log('\nTesting security...');
        const r2 = await axios.get('https://public-api.birdeye.so/defi/token_security?address=So11111111111111111111111111111111111111112', { headers });
        console.log('Security success:', r2.data.success);
    } catch (e) {
        console.error('Security fail:', e.response?.data || e.message);
    }
}

test();
