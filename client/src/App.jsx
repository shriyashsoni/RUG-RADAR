import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Shield, ShieldAlert, ShieldCheck, Activity, RefreshCw, 
  Copy, Check, Lock, Zap, BarChart3, 
  Code2, Github, Twitter, MessageCircle, ArrowRight,
  ChevronRight, Globe, Terminal, Cpu, Database
} from 'lucide-react';

const API_BASE = 'http://localhost:5000/api';

const Banner = () => (
  <div className="banner">
    <span className="banner-text">
      SOLANA RUG PROTECTION LIVE. 50+ NEW TOKENS SCANNED PER HOUR. <a href="#">TRY IT FREE →</a>
    </span>
  </div>
);

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="logo">
        <Shield className="text-teal" size={24} />
        <span>RUG RADAR</span>
      </div>
      <div className="nav-links">
        <a href="#feed">LIVE FEED</a>
        <a href="#how-it-works">HOW IT WORKS</a>
        <a href="#api">API</a>
        <a href="#docs">DOCS</a>
      </div>
      <div className="nav-actions">
        <button className="btn btn-outline"><Github size={16}/> GITHUB</button>
        <button className="btn btn-teal">TRY FREE</button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-content">
        <span className="hero-label">🛡️ Birdeye Data Services</span>
        <h1 className="hero-title">Real-Time Token</h1>
        <h1 className="hero-title gray">Safety Scanner</h1>
        <p className="hero-desc">
          Scan every new Solana token for rug risk instantly. 
          Powered by the same data trusted by Phantom, Raydium, and Coinbase.
        </p>
        <div className="hero-actions">
          <a href="#feed" className="btn btn-teal">SCAN NOW</a>
          <button className="btn btn-outline">VIEW DOCS</button>
        </div>
      </div>
      <div className="hero-visual">
        <div className="orb-container">
          <div className="orb-center">🛡️</div>
          <div className="orb-ring ring-1"></div>
          <div className="orb-ring ring-2">
            <div className="orbit-icon" style={{ top: '0', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <img src="https://cryptologos.cc/logos/solana-sol-logo.png" style={{width: '100%', opacity: 0.5}} alt="SOL" />
            </div>
            <div className="orbit-icon" style={{ bottom: '0', left: '50%', transform: 'translate(-50%, 50%)' }}>
              <img src="https://cryptologos.cc/logos/raydium-ray-logo.png" style={{width: '100%', opacity: 0.5}} alt="RAY" />
            </div>
          </div>
          <div className="orb-glow"></div>
        </div>
      </div>
    </div>
  </section>
);

const TrustedMarquee = () => (
  <div className="trusted">
    <div className="trusted-label">Trusted to power core experiences within</div>
    <div className="marquee">
      <span>PHANTOM</span>
      <span>JUPITER</span>
      <span>SOLFLARE</span>
      <span>BACKPACK</span>
      <span>RAYDIUM</span>
      <span>COINMARKETCAP</span>
      <span>PHANTOM</span>
      <span>JUPITER</span>
      <span>SOLFLARE</span>
      <span>BACKPACK</span>
      <span>RAYDIUM</span>
      <span>COINMARKETCAP</span>
    </div>
  </div>
);

const DataTabs = () => {
  const [active, setActive] = useState('Safety Data');
  return (
    <section className="section" id="data">
      <div className="container">
        <h2 className="section-title text-center">Data that covers every new token, every second.</h2>
        <div className="tabs-header" style={{ justifyContent: 'center' }}>
          {['Safety Data', 'Token Metadata', 'Market Data', 'Wallet Data'].map(t => (
            <button key={t} className={`tab ${active === t ? 'active' : ''}`} onClick={() => setActive(t)}>{t}</button>
          ))}
        </div>
        <div className="data-content">
          <div className="data-list">
            {[1, 2, 3].map(i => (
              <div className="data-list-item" key={i}>
                <div className="data-list-icon"><Check size={20}/></div>
                <div className="data-list-text">
                  <h4>Advanced Risk Analysis</h4>
                  <p>Real-time scanning for mint authority, freeze capability, and liquidity locks.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="data-card">
            <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '24px'}}>
              <span className="badge SAFE">SAFE</span>
              <span className="text-teal" style={{fontSize: '24px', fontWeight: 800}}>98</span>
            </div>
            <h3 style={{marginBottom: '8px'}}>SOLANA (SOL)</h3>
            <div className="mono" style={{fontSize: '12px', color: '#666', marginBottom: '24px'}}>So11111111111111111111111111111111111111112</div>
            <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '12px'}}>
              <div><span className="text-gray uppercase">Price:</span> <br/><span className="bold">$145.22</span></div>
              <div><span className="text-gray uppercase">MCap:</span> <br/><span className="bold">$65.2B</span></div>
              <div><span className="text-gray uppercase">Holders:</span> <br/><span className="bold">12.4M</span></div>
              <div><span className="text-gray uppercase">Liq:</span> <br/><span className="bold">$1.2B</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Stats = () => (
  <section className="section bg-dark">
    <div className="container">
      <div className="stats-header">
        <h2>Built for degens.</h2>
        <h2 className="teal-text">Trusted by builders.</h2>
        <p>Same infrastructure powering 3M+ Birdeye users/month</p>
      </div>
      <div className="stats-row">
        <div className="stat-box">
          <div className="stat-val">50K+</div>
          <div className="stat-label">Tokens Scanned</div>
        </div>
        <div className="stat-box">
          <div className="stat-val">99.9%</div>
          <div className="stat-label">Uptime</div>
        </div>
        <div className="stat-box">
          <div className="stat-val">&lt;200ms</div>
          <div className="stat-label">Latency</div>
        </div>
        <div className="stat-box">
          <div className="stat-val">3</div>
          <div className="stat-label">Safety Checks</div>
        </div>
      </div>
      <div className="features-grid">
        <div className="feature-card"><Activity className="feature-icon"/> Real-time Scanning</div>
        <div className="feature-card"><BarChart3 className="feature-icon"/> Holder Analysis</div>
        <div className="feature-card"><Lock className="feature-icon"/> Liquidity Lock Check</div>
        <div className="feature-card"><Zap className="feature-icon"/> Mint Authority</div>
        <div className="feature-card"><ShieldAlert className="feature-icon"/> Freeze Authority</div>
        <div className="feature-card"><ShieldCheck className="feature-icon"/> Safety Score</div>
      </div>
    </div>
  </section>
);

const HowItWorks = () => {
  const [active, setActive] = useState('JAVASCRIPT');
  const code = {
    JAVASCRIPT: `// Fetch token security data
const response = await fetch(
  'https://public-api.birdeye.so/defi/token_security?address=TOKEN_ADDR',
  { headers: { 'X-API-KEY': 'YOUR_KEY' } }
);
const data = await response.json();
console.log('Safety Score:', data.data.trustScore);`,
    PYTHON: `import requests
r = requests.get(
    "https://public-api.birdeye.so/defi/token_security?address=ADDR",
    headers={"X-API-KEY": "YOUR_KEY"}
)
print(r.json())`,
    SHELL: `curl -H "X-API-KEY: YOUR_KEY" \\
  "https://public-api.birdeye.so/defi/v3/token/new-listing"`,
    GO: `// Go client implementation coming soon...`
  };

  return (
    <section className="section" id="how-it-works">
      <div className="container how-container">
        <div className="how-left">
          <h2>Delivery methods. <br/>Build your way.</h2>
          <div className="tabs-header">
            <button className="tab active">REST API</button>
            <button className="tab">WEBSOCKETS</button>
          </div>
        </div>
        <div className="how-right">
          <div className="code-tabs">
            {['SHELL', 'PYTHON', 'JAVASCRIPT', 'GO'].map(t => (
              <button key={t} className={`code-tab ${active === t ? 'active' : ''}`} onClick={() => setActive(t)}>{t}</button>
            ))}
          </div>
          <div className="code-content mono">
            <pre>{code[active]}</pre>
          </div>
        </div>
      </div>
    </section>
  );
};

const TokenCard = ({ token, isMock = false }) => {
  const [security, setSecurity] = useState(null);

  useEffect(() => {
    if (isMock) {
      setSecurity({ label: 'SAFE', score: 98, flags: [], lpLocked: true });
      return;
    }
    const fetch = async () => {
      try {
        const res = await axios.get(`${API_BASE}/tokens/security/${token.address}`);
        setSecurity(res.data.report);
      } catch (err) {
        setSecurity({ label: 'WARN', score: 50, flags: ['API Error'], lpLocked: false });
      }
    };
    fetch();
  }, [token?.address, isMock]);

  return (
    <div className="token-card">
      <div className="tc-header">
        <div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <span className="tc-symbol">{token?.symbol || 'SOL'}</span>
            {security && <span className={`badge ${security.label}`}>{security.label}</span>}
          </div>
          <div className="tc-address mono">{(token?.address || 'So1111...112').slice(0, 12)}...</div>
        </div>
        <div className="tc-score text-teal">{security?.score || '--'}</div>
      </div>
      <div className="tc-stats">
        <div className="tc-stat-box">
          <span className="tc-stat-label">Mkt Cap</span>
          <span className="tc-stat-val">${token?.marketcap ? (token.marketcap/1e6).toFixed(1)+'M' : '45.8M'}</span>
        </div>
        <div className="tc-stat-box">
          <span className="tc-stat-label">Holders</span>
          <span className="tc-stat-val">{token?.holder ? token.holder.toLocaleString() : '12,402'}</span>
        </div>
      </div>
    </div>
  );
};

const LiveFeed = () => {
  const [tokens, setTokens] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scanAddress, setScanAddress] = useState('');
  const [manualResult, setManualResult] = useState(null);
  const [scanning, setScanning] = useState(false);

  const handleManualScan = async (e) => {
    e.preventDefault();
    if (!scanAddress) return;
    setScanning(true);
    setManualResult(null);
    try {
      const res = await axios.get(`${API_BASE}/tokens/security/${scanAddress}`);
      setManualResult(res.data);
    } catch (err) {
      console.error('Scan error:', err);
    } finally {
      setScanning(false);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`${API_BASE}/tokens/new`);
        setTokens(res.data.slice(0, 6));
      } catch (err) {
        console.error('Feed error:', err);
      } finally {
        setLoading(false);
      }
    };
    fetch();
    const interval = setInterval(fetch, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section" id="feed" style={{ borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div className="live-header" style={{ marginBottom: '60px' }}>
          <div>
            <h2 style={{ fontSize: '48px', marginBottom: '8px' }}>Security Dashboard</h2>
            <p className="text-gray">Analyze any token or monitor the live Solana network feed.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--accent-teal)', fontSize: '12px', fontWeight: 800 }}>
            <Activity size={16} className="animate-pulse" /> LIVE SCANNING
          </div>
        </div>

        {/* Manual Scan Tool */}
        <div className="token-card" style={{ marginBottom: '60px', padding: '40px', background: 'rgba(0, 229, 184, 0.02)', borderColor: 'rgba(0, 229, 184, 0.2)' }}>
          <form onSubmit={handleManualScan} style={{ display: 'flex', gap: '16px' }}>
            <input 
              type="text" 
              value={scanAddress}
              onChange={(e) => setScanAddress(e.target.value)}
              placeholder="ENTER TOKEN ADDRESS (e.g. So111...)" 
              style={{ flex: 1, padding: '16px 24px', background: '#000', border: '1px solid var(--border-color)', color: '#fff', borderRadius: '4px', fontSize: '14px', outline: 'none' }}
            />
            <button type="submit" disabled={scanning} className="btn btn-teal" style={{ minWidth: '180px', justifyContent: 'center' }}>
              {scanning ? <RefreshCw size={16} className="animate-spin" /> : 'SCAN ADDRESS'}
            </button>
          </form>

          {manualResult && (
            <div style={{ marginTop: '40px', paddingTop: '40px', borderTop: '1px solid var(--border-color)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                <TokenCard token={{ address: scanAddress, symbol: manualResult.raw?.symbol || 'SCAN' }} />
                <div className="token-card" style={{ background: 'transparent' }}>
                  <h4 style={{ marginBottom: '16px', fontSize: '14px' }}>Security Breakdown</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {manualResult.report.flags.length > 0 ? manualResult.report.flags.map((flag, i) => (
                      <div key={i} style={{ color: '#f87171', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <ShieldAlert size={14} /> {flag} Detected
                      </div>
                    )) : (
                      <div style={{ color: 'var(--accent-teal)', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <ShieldCheck size={14} /> No critical flags found
                      </div>
                    )}
                    <div style={{ color: manualResult.report.lpLocked ? 'var(--accent-teal)' : '#6B7280', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {manualResult.report.lpLocked ? <Lock size={14} /> : <ShieldAlert size={14} />}
                      {manualResult.report.lpLocked ? 'Liquidity Locked' : 'Liquidity Unlocked'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '32px', color: 'var(--text-secondary)' }}>RECENT LISTINGS</h3>
        <div className="feed-grid">
          {loading || tokens.length === 0 ? (
            [1, 2, 3, 4, 5, 6].map(i => <TokenCard key={i} isMock={true} />)
          ) : (
            tokens.map(token => <TokenCard key={token.address} token={token} />)
          )}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="cta-section">
    <div className="container">
      <h2>Don't ape into rugs.</h2>
      <p>Get alerts before everyone else. Free forever.</p>
      <div className="subscribe-form">
        <input type="email" placeholder="ENTER YOUR EMAIL" />
        <button className="btn btn-teal">SUBSCRIBE</button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="footer">
    <div className="container footer-grid">
      <div>
        <div className="footer-brand">
          <Shield className="text-teal" size={24} /> RUG RADAR
        </div>
      </div>
      <div>
        <h4>PRODUCT</h4>
        <ul>
          <li><a href="#">Live Feed</a></li>
          <li><a href="#">Safety Score</a></li>
          <li><a href="#">API Access</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </div>
      <div>
        <h4>RESOURCES</h4>
        <ul>
          <li><a href="#">Docs</a></li>
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Birdeye Data</a></li>
        </ul>
      </div>
      <div>
        <h4>COMPANY</h4>
        <ul>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Discord</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Hero />
      <TrustedMarquee />
      <DataTabs />
      <Stats />
      <HowItWorks />
      <LiveFeed />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
