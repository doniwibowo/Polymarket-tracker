// =============================================
// Polymarket Smart Money Dashboard
// =============================================

const DATA_API = 'https://data-api.polymarket.com';
const CLOB_API = 'https://clob.polymarket.com';
const GAMMA_API = 'https://gamma-api.polymarket.com';

// --- Top Wallets from Polymarket Overall Leaderboard ---
const SMART_WALLETS = [
    { rank: 1, name: 'Anonymous', address: '0x492442eab586f242b53bda933fd5de859c8a3782', profit: 7246836, volume: 34626683 },
    { rank: 2, name: 'Anonymous', address: '0x2a2c53bd278c04da9962fcf96490e17f3dfb9bc1', profit: 4090515, volume: 153852093 },
    { rank: 3, name: 'HorizonSplendidView', address: '0x02227b8f5a9636e895607edd3185ed6ee5598ff7', profit: 4016108, volume: 0 },
    { rank: 4, name: 'reachingthesky', address: '0xefbc5fec8d7b0acdc8911bdd9a98d6964308f9a2', profit: 3742635, volume: 0 },
    { rank: 5, name: 'beachboy4', address: '0xc2e7800b5af46e6093872b177b7a5e7f0563be51', profit: 3056810, volume: 16309805 },
    { rank: 6, name: 'gfjoigfsjoigsjoi', address: '0x36a3f17401e395ef4cb1b7f42bcdb8ab8e15fafb', profit: 2930573, volume: 22894560 },
    { rank: 7, name: 'majorexploiter', address: '0x019782cab5d844f02bafb71f512758be78579f3c', profit: 2416975, volume: 0 },
    { rank: 8, name: 'RN1', address: '0x2005d16a84ceefa912d4e380cd32e7ff827875ea', profit: 2379777, volume: 127739427 },
    { rank: 9, name: 'elkmonkey', address: '0xead152b855effa6b5b5837f53b24c0756830c76a', profit: 1987687, volume: 52614473 },
    { rank: 10, name: 'sovereign2013', address: '0xee613b3fc183ee44f9da9c05f53e2da107e3debf', profit: 1942774, volume: 51536745 },
    { rank: 11, name: 'CemeterySun', address: '0x37c1874a60d348903594a96703e0507c518fc53a', profit: 1927133, volume: 61776193 },
    { rank: 12, name: 'swisstony', address: '0x204f72f35326db932158cba6adff0b9a1da95e14', profit: 1897537, volume: 85625011 },
    { rank: 13, name: 'surfandturf', address: '0x9f2fe025f84839ca81dd8e0338892605702d2ca8', profit: 1884167, volume: 25598820 },
    { rank: 14, name: 'CarlosMC', address: '0x777d9f00c2b4f7b829c9de0049ca3e707db05143', profit: 1663302, volume: 11780607 },
    { rank: 15, name: 'lo34567Taipe', address: '0xf195721ad850377c96cd634457c70cd9e8308057', profit: 1454339, volume: 20 },
    { rank: 16, name: 'bcda', address: '0xb45a797faa52b0fd8adc56d30382022b7b12192c', profit: 1352112, volume: 27193107 },
    { rank: 17, name: 'Blessed-Sunshine', address: '0x59a0744db1f39ff3afccd175f80e6e8dfc239a09', profit: 1202927, volume: 0 },
    { rank: 18, name: 'Anointed-Connect', address: '0x8f037a2e4fd49d11267f4ab874ab7ba745ac64d6', profit: 1179971, volume: 531296 },
    { rank: 19, name: 'texaskid', address: '0xc8075693f48668a264b9fa313b47f52712fcc12b', profit: 1094368, volume: 20043015 },
    { rank: 20, name: 'GamblingIsAllYouNeed', address: '0x507e52ef684ca2dd91f90a9d26d149dd3288beae', profit: 1249393, volume: 83289715 },
];

// --- Sports & Esports Top Wallets (from Polymarket Sports Leaderboard API — Apr 2026) ---
// Sorted by efficiency (PNL/Volume ratio) — best signal quality first
const SPORT_WALLETS = [
    // === TIER 1: Elite efficiency (>80%) — sharpest bettors ===
    { rank: 'S1', name: 'Vatrer', address: '0x72d815133f9f8b6529e911cf3be492846ce05213', profit: 274201, volume: 171361, sportFocused: true },           // 160% eff, +$274K
    { rank: 'S2', name: 'justwins', address: '0xa2cced8bfae7d645f7f437fb76becf2fcbb70cbc', profit: 51640, volume: 39173, sportFocused: true },              // 132% eff, +$52K
    { rank: 'S3', name: 'Sassy-Bucket', address: '0x4bff30af91642dc7d2b19a8664378fe55c45fc26', profit: 342811, volume: 300000, sportFocused: true },        // 114% eff, +$343K
    { rank: 'S4', name: 'alwaysfade', address: '0xe5b70fd855af9258d9463992e4f1ed7987905ee3', profit: 61888, volume: 72575, sportFocused: true },             // 85% eff, +$62K
    { rank: 'S5', name: 'guongAI', address: '0x5bec79df9add70a3892041ab1a5516b60f53b215', profit: 448284, volume: 555990, sportFocused: true },              // 81% eff, +$448K — #1 sports PNL
    // === TIER 2: Strong efficiency (25-55%) — reliable ===
    { rank: 'S6', name: 'Mikee12', address: '0x84cb17a50bc2487e8d64029783c3d2abcba328ad', profit: 71987, volume: 134685, sportFocused: true },               // 53% eff, +$72K
    { rank: 'S7', name: 'Jdhdhduu', address: '0xdd92232bcdfbbac04132b3cbacbf32c2e5b16b2a', profit: 97358, volume: 207029, sportFocused: true },              // 47% eff, +$97K
    { rank: 'S8', name: 'beetlepimp', address: '0x0767aa79d578aead1c849fd9f0fdc6cdb50336b0', profit: 55251, volume: 153397, sportFocused: true },            // 36% eff, +$55K
    { rank: 'S9', name: 'SMCAOMCRL', address: '0x3b5c629f114098b0dee345fb78b7a3a013c7126e', profit: 64819, volume: 211291, sportFocused: true },             // 31% eff, +$65K
    { rank: 'S10', name: 'benwyatt', address: '0x1117eade222413335b7ec959e5b48c1d3dbc3532', profit: 72566, volume: 284557, sportFocused: true },             // 26% eff, +$73K
    // === TIER 3: High volume sports specialists ===
    { rank: 'S11', name: 'frankfrankfrank', address: '0xea2b4224411e723499a803ce3f4758779fb31fc6', profit: 53843, volume: 315900, sportFocused: true },      // 17% eff, +$54K
    { rank: 'S12', name: 'NRASCHATTER', address: '0x13414a77a4be48988851c73dfd824d0168e70853', profit: 52658, volume: 401690, sportFocused: true },          // 13% eff, +$53K
    { rank: 'S13', name: 'LaBradfordSmith22', address: '0x9495425feeb0c250accb89275c97587011b19a27', profit: 61072, volume: 665467, sportFocused: true },    // 9% eff, +$61K — high volume
    { rank: 'S14', name: 'ferrariChampions2026', address: '0xfe787d2da716d60e8acff57fb87eb13cd4d10319', profit: 81440, volume: 1871672, sportFocused: true },// 4% eff, $1.87M vol
    // === Biggest Winners This Month (frequent sports winners) ===
    { rank: 'S15', name: 'imnotawizard', address: '0x07bdcabf60da99be8fad11092bf4e8412cffe993', profit: 0, volume: 0, sportFocused: true },    // UCL, Serie A winner
    { rank: 'S16', name: 'blindStaking', address: '0x50b1db131a24a9d9450bbd0372a95d32ea88f076', profit: 0, volume: 0, sportFocused: true },     // La Liga winner
    { rank: 'S17', name: 'asdfjh', address: '0x0eb568f307e9a48af2c3e688ad6074236712c494', profit: 0, volume: 0, sportFocused: true },           // EPL winner
    { rank: 'S18', name: 'Lacosteboy', address: '0x2eb10cb8596bf8c8ef409f72cfb5eb6438054ea4', profit: 0, volume: 0, sportFocused: true },       // La Liga winner
    { rank: 'S19', name: 'Countryside', address: '0xbddf61af533ff524d27154e589d2d7a81510c684', profit: 0, volume: 0, sportFocused: true },      // NBA winner
    { rank: 'S20', name: 'DrPufferfish', address: '0xdb27bf2ac5d428a9c63dbc914611036855a6c56e', profit: 0, volume: 0, sportFocused: true },     // NBA winner
    { rank: 'S21', name: 'Dhdhsjsj', address: '0x5d58e38cd0a7e6f5fa67b7f9c2f70dd70df09a15', profit: 0, volume: 0, sportFocused: true },        // ATP tennis
    { rank: 'S22', name: 'jackiechann', address: '0x54ac09857c3e76d50a2e7da064b0293d9a9e7c14', profit: 0, volume: 0, sportFocused: true },      // Ligue 1 winner
    // === Extra high-efficiency picks ===
    { rank: 'S23', name: 'Tiger200', address: '0x6211f97a76ed5c4b1d658f637041ac5f293db89e', profit: 45312, volume: 53636, sportFocused: true },             // 85% eff
    { rank: 'S24', name: 'rustin', address: '0xaa075924e1dc7cff3b9fab67401126338c4d2125', profit: 37987, volume: 124330, sportFocused: true },               // 31% eff
    { rank: 'S25', name: 'SemyonMarmeladov', address: '0x37e4728b3c4607fb2b3b205386bb1d1fb1a8c991', profit: 37095, volume: 117584, sportFocused: true },     // 32% eff
];

// Combine all tracked wallets (dedup by address)
const ALL_WALLETS = (() => {
    const seen = new Set();
    const combined = [];
    for (const w of [...SMART_WALLETS, ...SPORT_WALLETS]) {
        const addr = w.address.toLowerCase();
        if (!seen.has(addr)) {
            seen.add(addr);
            combined.push(w);
        }
    }
    return combined;
})();

// --- State ---
let allTrades = [];
let marketCache = {};
let customWallets = JSON.parse(localStorage.getItem('smartMoneyWatchlist')) || [];
let currentSort = { key: 'profit', dir: 'desc' };
let feedFilterAddress = 'all';
let feedCategory = 'sports-esports';
let consensusCategory = 'sports-esports';
let signalCategory = 'all';
let watchlistCategory = 'all';
let hideEndedSignals = true;
let autoRefreshEnabled = true;
let _refreshSecsLeft = 300;
let _refreshInterval = null;
let isLoading = false;
let walletWinRates = {};
const WHALE_THRESHOLD = 500; // $500+ = whale trade

// --- DOM refs ---
const leaderboardBody = document.getElementById('leaderboardBody');
const feedContainer = document.getElementById('feedContainer');
const consensusGrid = document.getElementById('consensusGrid');
const signalsGrid = document.getElementById('signalsGrid');
const whaleAlerts = document.getElementById('whaleAlerts');
const whaleBadge = document.getElementById('whaleBadge');
const feedFilter = document.getElementById('feedFilter');
const watchlistItems = document.getElementById('watchlistItems');
const totalProfitEl = document.getElementById('totalProfit');
const lastUpdatedEl = document.getElementById('lastUpdated');
const trackingCountEl = document.getElementById('trackingCount');

// --- Utility ---
function formatMoney(n) {
    if (n >= 1e6) return '$' + (n / 1e6).toFixed(1) + 'M';
    if (n >= 1e3) return '$' + (n / 1e3).toFixed(0) + 'K';
    return '$' + n.toFixed(0);
}

function shortAddr(addr) {
    return addr.slice(0, 6) + '...' + addr.slice(-4);
}

function getEfficiency(profit, volume) {
    if (!volume || volume === 0) return null;
    return (profit / volume) * 100;
}

function getEfficiencyColor(eff) {
    if (eff === null) return 'var(--text-muted)';
    if (eff >= 15) return 'var(--profit)';
    if (eff >= 8) return '#22d3ee';
    if (eff >= 3) return 'var(--gold)';
    return 'var(--text-secondary)';
}

function delay(ms) {
    return new Promise(r => setTimeout(r, ms));
}

function getWalletName(address) {
    const w = ALL_WALLETS.find(w => w.address.toLowerCase() === address.toLowerCase());
    return w ? w.name : shortAddr(address);
}

// --- Category Detection ---
const SPORT_PATTERNS = [
    /^epl-/, /^nba-/, /^nfl-/, /^mlb-/, /^nhl-/, /^mls-/,
    /^lal-/, /^fl1-/, /^bun-/, /^sea-/, /^ucl-/, /^uel-/,
    /^atp-/, /^wta-/, /^ufc-/, /^f1-/, /^scop-/,
    /^copa-/, /^wnba-/, /^cfb-/, /^cbb-/, /^pga-/,
    /-vs-/, /-draw$/, /-over-/, /-under-/,
    /champion/, /winner/, /mvp/, /serie-a/
];
const ESPORT_PATTERNS = [
    /csgo/i, /valorant/i, /dota/i, /league-of-legends/i,
    /lol-/i, /overwatch/i, /rocket-league/i, /esport/i,
    /^lec-/, /^lcs-/, /^lck-/, /^lpl-/, /^vct-/
];
const POLITICS_PATTERNS = [
    /politic/i, /president/i, /election/i, /senate/i,
    /congress/i, /governor/i, /trump/i, /biden/i,
    /democrat/i, /republican/i, /vote/i, /parliament/i
];
const CRYPTO_PATTERNS = [
    /bitcoin/i, /ethereum/i, /crypto/i, /btc/i, /eth-/i,
    /solana/i, /token/i, /defi/i, /nft/i, /blockchain/i,
    /binance/i, /coinbase/i
];

function detectCategory(trade) {
    const slug = (trade.eventSlug || trade.slug || '').toLowerCase();
    const title = (trade.title || '').toLowerCase();
    const combined = slug + ' ' + title;

    for (const p of ESPORT_PATTERNS) {
        if (p.test(combined)) return 'esports';
    }
    for (const p of SPORT_PATTERNS) {
        if (p.test(combined)) return 'sports';
    }
    for (const p of POLITICS_PATTERNS) {
        if (p.test(combined)) return 'politics';
    }
    for (const p of CRYPTO_PATTERNS) {
        if (p.test(combined)) return 'crypto';
    }
    return 'other';
}

function matchesCategory(trade, category) {
    if (category === 'all') return true;
    const cat = detectCategory(trade);
    if (category === 'sports-esports') return cat === 'sports' || cat === 'esports';
    return cat === category;
}

// --- Category Filter Event Handlers ---
function setupCategoryFilters(containerId, setter, rerenderFn) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            container.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            setter(btn.dataset.cat);
            rerenderFn();
        });
    });
}

// --- Tab Navigation ---
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
});

// --- Win Rate Tracker ---
async function computeWinRates() {
    const btn = document.getElementById('winRateBtn');
    if (btn) { btn.textContent = '⏳ Computing...'; btn.disabled = true; }

    const result = {};
    const walletsToProcess = ALL_WALLETS.slice(0, 25);
    let processed = 0;

    for (const w of walletsToProcess) {
        try {
            const res = await fetch(`${DATA_API}/trades?user=${w.address}&limit=300&sortBy=TIMESTAMP&sortDirection=DESC`);
            const trades = await res.json();
            if (!Array.isArray(trades)) { processed++; continue; }

            const now = Date.now() / 1000;
            const tokenMap = {}; // assetId -> { outcome, net }
            for (const t of trades) {
                const endTs = t.end_date_iso ? new Date(t.end_date_iso).getTime() / 1000 : null;
                if (!endTs || endTs > now) continue;
                const assetId = t.assetId || t.asset_id;
                if (!assetId) continue;
                if (!tokenMap[assetId]) tokenMap[assetId] = { outcome: t.outcome, net: 0 };
                const side = (t.side || 'BUY').toUpperCase();
                tokenMap[assetId].net += (side === 'BUY') ? parseFloat(t.size || 0) : -parseFloat(t.size || 0);
            }

            const assetIds = Object.keys(tokenMap);
            if (assetIds.length === 0) { processed++; continue; }

            // Batch-fetch market resolution
            const winnerMap = {}; // assetId -> bool
            for (let i = 0; i < assetIds.length; i += 20) {
                const batch = assetIds.slice(i, i + 20);
                try {
                    const r = await fetch(`${GAMMA_API}/markets?clob_token_ids=${batch.join(',')}`);
                    const markets = await r.json();
                    if (Array.isArray(markets)) {
                        for (const m of markets) {
                            if (!m.tokens) continue;
                            for (const tok of m.tokens) {
                                if (tok.winner !== undefined) winnerMap[tok.token_id] = !!tok.winner;
                            }
                        }
                    }
                } catch(e) {}
                await delay(150);
            }

            let wins = 0, losses = 0;
            for (const [assetId, pos] of Object.entries(tokenMap)) {
                if (winnerMap[assetId] === undefined) continue;
                const isWinner = winnerMap[assetId];
                const isLong = pos.net > 0;
                if ((isLong && isWinner) || (!isLong && !isWinner)) wins++;
                else losses++;
            }
            result[w.address.toLowerCase()] = { wins, losses };

            processed++;
            if (btn) btn.textContent = `⏳ ${processed}/${walletsToProcess.length}`;
        } catch(e) {
            processed++;
        }
        await delay(100);
    }

    walletWinRates = result;
    if (btn) { btn.textContent = '🔄 Refresh Rates'; btn.disabled = false; }
    renderLeaderboard();
}

// --- Smart Wallet Classifier ---
let smartWalletData = {};
const SMART_CATEGORIES = ['sports', 'esports', 'politics', 'crypto', 'other'];
const CAT_NAMES = { sports: '⚽ Sports', esports: '🎮 Esports', politics: '🏛 Politics', crypto: '₿ Crypto', other: '📦 Other' };

async function computeSmartWallets() {
    const btn = document.getElementById('smartWalletBtn');
    if (btn) { btn.textContent = '⏳ Analyzing...'; btn.disabled = true; }

    const result = {};
    const walletsToProcess = ALL_WALLETS.slice(0, 30);
    let processed = 0;

    for (const w of walletsToProcess) {
        try {
            const res = await fetch(`${DATA_API}/trades?user=${w.address}&limit=500&sortBy=TIMESTAMP&sortDirection=DESC`);
            const trades = await res.json();
            if (!Array.isArray(trades)) { processed++; continue; }

            const now = Date.now() / 1000;

            // Most recent trade = first item (sorted DESC)
            const lastTradeTs = trades[0] ? (new Date(trades[0].timestamp || trades[0].created_at || 0).getTime() / 1000) : 0;
            const daysSince = lastTradeTs > 0 ? Math.floor((now - lastTradeTs) / 86400) : 999;
            const isActive = daysSince <= 30;

            const tokenMap = {};
            for (const t of trades) {
                const endTs = t.end_date_iso ? new Date(t.end_date_iso).getTime() / 1000 : null;
                if (!endTs || endTs > now) continue;
                const assetId = t.assetId || t.asset_id;
                if (!assetId) continue;
                if (!tokenMap[assetId]) tokenMap[assetId] = { net: 0, tradeRef: t };
                const side = (t.side || 'BUY').toUpperCase();
                tokenMap[assetId].net += (side === 'BUY') ? parseFloat(t.size || 0) : -parseFloat(t.size || 0);
            }

            const assetIds = Object.keys(tokenMap);
            if (assetIds.length === 0) { processed++; continue; }

            const winnerMap = {};
            const categoryMap = {};

            for (let i = 0; i < assetIds.length; i += 20) {
                const batch = assetIds.slice(i, i + 20);
                try {
                    const r = await fetch(`${GAMMA_API}/markets?clob_token_ids=${batch.join(',')}`);
                    const markets = await r.json();
                    if (Array.isArray(markets)) {
                        for (const m of markets) {
                            if (!m.tokens) continue;
                            const cat = detectCategory({
                                eventSlug: m.slug || m.groupItemTitle || '',
                                title: m.question || m.title || ''
                            });
                            for (const tok of m.tokens) {
                                if (tok.winner !== undefined) winnerMap[tok.token_id] = !!tok.winner;
                                categoryMap[tok.token_id] = cat;
                            }
                        }
                    }
                } catch(e) {}
                await delay(150);
            }

            let overall = { wins: 0, losses: 0 };
            const catStats = {};
            SMART_CATEGORIES.forEach(c => catStats[c] = { wins: 0, losses: 0 });

            for (const [assetId, pos] of Object.entries(tokenMap)) {
                if (winnerMap[assetId] === undefined) continue;
                const won = (pos.net > 0 && winnerMap[assetId]) || (pos.net <= 0 && !winnerMap[assetId]);
                if (won) overall.wins++; else overall.losses++;
                const cat = categoryMap[assetId] || 'other';
                if (catStats[cat]) { if (won) catStats[cat].wins++; else catStats[cat].losses++; }
            }

            let bestCat = null, bestCatWR = 0, bestCatTotal = 0;
            for (const [cat, s] of Object.entries(catStats)) {
                const total = s.wins + s.losses;
                if (total < 5) continue;
                const wr = s.wins / total;
                if (wr > bestCatWR) { bestCatWR = wr; bestCat = cat; bestCatTotal = total; }
            }

            const totalResolved = overall.wins + overall.losses;
            const overallWR = totalResolved > 0 ? overall.wins / totalResolved : 0;
            const eff = getEfficiency(w.profit, w.volume);

            let label;
            if (overallWR >= 0.55 && totalResolved >= 10 && w.profit > 0) {
                label = 'SMART MONEY';
            } else if (bestCat && bestCatWR >= 0.60 && w.profit > 0) {
                label = 'SPECIALIST';
            } else if (w.volume >= 50000 && (eff === null || eff < 5)) {
                label = 'HIGH VOLUME ONLY';
            } else {
                label = 'UNCLASSIFIED';
            }

            result[w.address.toLowerCase()] = { overall, catStats, bestCat, bestCatWR, bestCatTotal, overallWR, totalResolved, label, wallet: w, isActive, daysSince };
            walletWinRates[w.address.toLowerCase()] = { wins: overall.wins, losses: overall.losses };

            processed++;
            if (btn) btn.textContent = `⏳ ${processed}/${walletsToProcess.length}`;
        } catch(e) { processed++; }
        await delay(100);
    }

    smartWalletData = result;
    if (btn) { btn.textContent = '🔄 Re-analyze'; btn.disabled = false; }
    renderSmartWallets();
    renderLeaderboard();
}

function renderSmartWallets() {
    const container = document.getElementById('smartWalletGrid');
    if (!container) return;

    const entries = Object.values(smartWalletData);
    if (!entries.length) return;

    const ORDER = { 'SMART MONEY': 0, 'SPECIALIST': 1, 'UNCLASSIFIED': 2, 'HIGH VOLUME ONLY': 3 };
    entries.sort((a, b) => {
        // Active wallets always before inactive
        if (a.isActive !== b.isActive) return a.isActive ? -1 : 1;
        const lo = ORDER[a.label] ?? 99, hi = ORDER[b.label] ?? 99;
        if (lo !== hi) return lo - hi;
        return b.overallWR - a.overallWR;
    });

    const LABEL_STYLE = {
        'SMART MONEY':    { bg: 'rgba(34,197,94,0.15)',    color: 'var(--profit)', icon: '🧠' },
        'SPECIALIST':     { bg: 'rgba(34,211,238,0.15)',   color: '#22d3ee',       icon: '🎯' },
        'HIGH VOLUME ONLY': { bg: 'rgba(245,158,11,0.15)', color: 'var(--gold)',   icon: '🐋' },
        'UNCLASSIFIED':   { bg: 'rgba(148,163,184,0.08)',  color: 'var(--text-muted)', icon: '❓' }
    };

    container.innerHTML = entries.map(e => {
        const w = e.wallet;
        const s = LABEL_STYLE[e.label];
        const wrPct = e.totalResolved > 0 ? (e.overallWR * 100).toFixed(0) : '?';
        const wrColor = e.overallWR >= 0.55 ? 'var(--profit)' : e.overallWR >= 0.45 ? 'var(--gold)' : 'var(--sell)';
        const eff = getEfficiency(w.profit, w.volume);
        const effStr = eff !== null ? eff.toFixed(1) + '%' : 'N/A';

        const bestCatHtml = e.bestCat ? `
            <div class="smart-best-cat">
                <span class="cat-tag">${CAT_NAMES[e.bestCat]}</span>
                <span class="cat-wr">${(e.bestCatWR * 100).toFixed(0)}% WR</span>
                <span class="cat-markets">${e.bestCatTotal} markets</span>
            </div>` : '';

        const footerHtml = SMART_CATEGORIES
            .filter(c => (e.catStats[c].wins + e.catStats[c].losses) > 0)
            .map(c => {
                const total = e.catStats[c].wins + e.catStats[c].losses;
                const wr = (e.catStats[c].wins / total * 100).toFixed(0);
                return `<span class="cat-mini" title="${CAT_NAMES[c]}: ${wr}% WR (${total} mkts)">${CAT_NAMES[c].split(' ')[0]} ${wr}%</span>`;
            }).join('');

        const insiderFlag = (() => {
            const active = SMART_CATEGORIES.filter(c => (e.catStats[c].wins + e.catStats[c].losses) >= 5);
            if (active.length === 1 && e.overallWR > 0.65) return `<span title="Concentrated in single category — possible insider" style="font-size:0.72rem;color:var(--gold)">⚠ Single-category focus</span>`;
            return '';
        })();

        const activityBadge = e.isActive
            ? `<span style="font-size:0.68rem;color:var(--profit);font-weight:600">🟢 Active ${e.daysSince === 0 ? 'today' : e.daysSince + 'd ago'}</span>`
            : `<span style="font-size:0.68rem;color:var(--text-muted);font-weight:600">🔴 Inactive ${e.daysSince}d</span>`;

        return `
        <div class="smart-card" style="--card-accent:${s.color};opacity:${e.isActive ? 1 : 0.55}">
            <div class="smart-card-header">
                <span class="smart-label-badge" style="background:${s.bg};color:${s.color}">${s.icon} ${e.label}</span>
                <div style="display:flex;align-items:center;gap:8px">${activityBadge}<a href="https://polymarket.com/profile/${w.address}" target="_blank" class="smart-trader-link">↗</a></div>
            </div>
            <div class="smart-trader-name">${w.name}</div>
            <div class="smart-trader-addr">${shortAddr(w.address)}</div>
            <div class="smart-stats">
                <div class="smart-stat">
                    <div class="smart-stat-label">PnL</div>
                    <div class="smart-stat-value profit">+${formatMoney(w.profit)}</div>
                </div>
                <div class="smart-stat">
                    <div class="smart-stat-label">Win Rate</div>
                    <div class="smart-stat-value" style="color:${wrColor}">${wrPct}%</div>
                </div>
                <div class="smart-stat">
                    <div class="smart-stat-label">Mkts</div>
                    <div class="smart-stat-value">${e.totalResolved}</div>
                </div>
                <div class="smart-stat">
                    <div class="smart-stat-label">Eff</div>
                    <div class="smart-stat-value">${effStr}</div>
                </div>
            </div>
            ${bestCatHtml}
            ${insiderFlag}
            ${footerHtml ? `<div class="smart-card-footer">${footerHtml}</div>` : ''}
        </div>`;
    }).join('');
}

// --- Leaderboard ---
function renderLeaderboard() {
    const wallets = [...SMART_WALLETS].sort((a, b) => {
        let aVal, bVal;
        if (currentSort.key === 'efficiency') {
            aVal = getEfficiency(a.profit, a.volume) ?? -1;
            bVal = getEfficiency(b.profit, b.volume) ?? -1;
        } else {
            aVal = a[currentSort.key];
            bVal = b[currentSort.key];
        }
        return currentSort.dir === 'desc' ? bVal - aVal : aVal - bVal;
    });

    const totalProfit = SMART_WALLETS.reduce((s, w) => s + w.profit, 0);
    totalProfitEl.textContent = formatMoney(totalProfit);
    trackingCountEl.textContent = ALL_WALLETS.length + customWallets.length;

    leaderboardBody.innerHTML = wallets.map((w, i) => {
        const eff = getEfficiency(w.profit, w.volume);
        const effStr = eff !== null ? eff.toFixed(1) + '%' : 'N/A';
        const effColor = getEfficiencyColor(eff);
        const effWidth = eff !== null ? Math.min(eff * 3, 100) : 0;
        const rankClass = w.rank <= 3 ? `rank-${w.rank}` : '';

        const wr = walletWinRates[w.address.toLowerCase()];
        const wrTotal = wr ? wr.wins + wr.losses : 0;
        const wrPct = wrTotal > 0 ? (wr.wins / wrTotal * 100) : null;
        const wrStr = wrPct !== null ? `${wrPct.toFixed(0)}%` : '—';
        const wrSub = wrTotal > 0 ? `${wr.wins}W / ${wr.losses}L` : '';
        const wrColor = wrPct !== null
            ? (wrPct >= 55 ? 'var(--profit)' : wrPct >= 45 ? 'var(--gold)' : 'var(--sell)')
            : 'var(--text-muted)';

        return `
            <tr>
                <td class="rank-cell ${rankClass}">${w.rank}</td>
                <td>
                    <div class="trader-cell">
                        <span class="trader-name">${w.name}</span>
                        <span class="trader-address">
                            <a href="https://polymarket.com/profile/${w.address}" target="_blank">${shortAddr(w.address)}</a>
                        </span>
                    </div>
                </td>
                <td class="profit-cell">+${formatMoney(w.profit)}</td>
                <td class="volume-cell">${w.volume > 0 ? formatMoney(w.volume) : '—'}</td>
                <td>
                    <div class="efficiency-cell">
                        <div class="efficiency-bar">
                            <div class="efficiency-fill" style="width:${effWidth}%;background:${effColor}"></div>
                        </div>
                        <span class="efficiency-label" style="color:${effColor}">${effStr}</span>
                    </div>
                </td>
                <td style="font-weight:700;font-size:0.88rem;color:${wrColor}">
                    ${wrStr}
                    ${wrSub ? `<div style="font-size:0.68rem;color:var(--text-muted);font-weight:400;margin-top:1px">${wrSub}</div>` : ''}
                </td>
                <td>
                    <div class="actions-cell">
                        <button class="btn btn-sm btn-track" onclick="trackWallet('${w.address}')">⚡ Track</button>
                        <a href="https://polymarket.com/profile/${w.address}" target="_blank" class="btn btn-sm btn-profile">↗</a>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Sorting
document.querySelectorAll('.sortable').forEach(th => {
    th.addEventListener('click', () => {
        const key = th.dataset.sort;
        if (currentSort.key === key) {
            currentSort.dir = currentSort.dir === 'desc' ? 'asc' : 'desc';
        } else {
            currentSort = { key, dir: 'desc' };
        }
        renderLeaderboard();
    });
});

// --- Fetch Trades ---
async function fetchTradesForWallet(address) {
    try {
        const res = await fetch(`${DATA_API}/trades?user=${address}&limit=100`);
        if (!res.ok) return [];
        const data = await res.json();
        if (!Array.isArray(data)) return [];
        return data.map(t => ({ ...t, _walletAddress: address }));
    } catch (e) {
        console.error('Error fetching trades for', shortAddr(address), e);
        return [];
    }
}

async function loadAllTrades() {
    if (isLoading) return;
    isLoading = true;

    feedContainer.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Loading trades from smart money wallets...</p></div>';
    consensusGrid.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Analyzing smart money positions...</p></div>';
    signalsGrid.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Calculating copy-trade signals...</p></div>';

    allTrades = [];
    const allWallets = [...ALL_WALLETS.map(w => w.address), ...customWallets];

    // Fetch in batches of 4 to avoid rate limiting
    for (let i = 0; i < allWallets.length; i += 4) {
        const batch = allWallets.slice(i, i + 4);
        const results = await Promise.all(batch.map(addr => fetchTradesForWallet(addr)));
        results.forEach(trades => allTrades.push(...trades));
        if (i + 4 < allWallets.length) await delay(300);
    }

    // Sort by timestamp (newest first) — timestamp is unix seconds
    allTrades.sort((a, b) => b.timestamp - a.timestamp);

    // Only keep trades from the last 24 hours
    const cutoff24h = Math.floor(Date.now() / 1000) - (24 * 60 * 60);
    allTrades = allTrades.filter(t => (t.timestamp || 0) >= cutoff24h);

    lastUpdatedEl.textContent = new Date().toLocaleTimeString();
    isLoading = false;
    startAutoRefresh();

    renderFeed();
    renderConsensus();
    renderSignals();
    populateFeedFilter();
    renderWatchlistConsensus();
}

// --- Render Feed ---
function renderFeed() {
    let trades = allTrades;
    if (feedFilterAddress !== 'all') {
        trades = trades.filter(t => t._walletAddress.toLowerCase() === feedFilterAddress.toLowerCase());
    }
    // Apply category filter
    trades = trades.filter(t => matchesCategory(t, feedCategory));

    // Whale alerts
    const whaleTrades = trades.filter(t => parseFloat(t.size || 0) >= WHALE_THRESHOLD);
    if (whaleTrades.length > 0) {
        whaleBadge.textContent = whaleTrades.length;
        whaleBadge.classList.add('visible');
        whaleAlerts.innerHTML = `<div class="whale-label">🐋 ${whaleTrades.length} Whale Trade${whaleTrades.length > 1 ? 's' : ''} Detected</div>` +
            whaleTrades.slice(0, 5).map(t => {
                const marketName = t.title || 'Unknown';
                const marketLink = t.eventSlug ? `https://polymarket.com/event/${t.eventSlug}` : '#';
                const walletName = t.name || getWalletName(t._walletAddress);
                const sideClass = (t.side || 'BUY').toUpperCase() === 'BUY' ? 'side-buy' : 'side-sell';
                const size = parseFloat(t.size || 0).toFixed(2);
                const price = parseFloat(t.price || 0).toFixed(3);
                const time = new Date(t.timestamp * 1000).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
                return `
                    <div class="whale-card">
                        <div class="trade-time">${time}</div>
                        <div class="trade-market"><a href="${marketLink}" target="_blank">${marketName}</a></div>
                        <div class="trade-wallet">${walletName}</div>
                        <div class="trade-side ${sideClass}">${(t.side || 'BUY').toUpperCase()}</div>
                        <div class="trade-size">$${size}</div>
                        <div class="trade-price">@${price}</div>
                    </div>`;
            }).join('');
    } else {
        whaleBadge.classList.remove('visible');
        whaleAlerts.innerHTML = '';
    }

    if (trades.length === 0) {
        feedContainer.innerHTML = '<div class="empty-state"><span class="empty-icon">📭</span><p>No trades found for this category. Try a different filter.</p></div>';
        return;
    }

    feedContainer.innerHTML = trades.slice(0, 80).map(t => {
        const marketName = t.title || 'Unknown Market';
        const marketLink = t.eventSlug ? `https://polymarket.com/event/${t.eventSlug}` : '#';
        const outcome = t.outcome || '';
        const walletName = t.name || getWalletName(t._walletAddress);
        const sideClass = (t.side || 'BUY').toUpperCase() === 'BUY' ? 'side-buy' : 'side-sell';
        const size = parseFloat(t.size || 0).toFixed(2);
        const price = parseFloat(t.price || 0).toFixed(3);
        const isWhale = parseFloat(t.size || 0) >= WHALE_THRESHOLD;
        const time = new Date(t.timestamp * 1000).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });

        return `
            <div class="trade-card${isWhale ? ' whale-card' : ''}">
                <div class="trade-time">${time}</div>
                <div class="trade-market">
                    <a href="${marketLink}" target="_blank">${marketName}</a>
                    ${outcome ? ` <span style="color:var(--text-muted);font-size:0.75rem">(${outcome})</span>` : ''}
                </div>
                <div class="trade-wallet">${walletName}</div>
                <div class="trade-side ${sideClass}">${(t.side || 'BUY').toUpperCase()}</div>
                <div class="trade-size">$${size}</div>
                <div class="trade-price">@${price}</div>
            </div>
        `;
    }).join('');
}

function populateFeedFilter() {
    const walletNames = SMART_WALLETS.map(w => ({ address: w.address, name: w.name }));
    customWallets.forEach(addr => walletNames.push({ address: addr, name: shortAddr(addr) }));

    feedFilter.innerHTML = '<option value="all">All Wallets</option>' +
        walletNames.map(w => `<option value="${w.address}">${w.name}</option>`).join('');
}

feedFilter.addEventListener('change', () => {
    feedFilterAddress = feedFilter.value;
    renderFeed();
});

document.getElementById('refreshFeed').addEventListener('click', () => {
    loadAllTrades();
});

// --- Consensus ---
function buildMarketGroups(categoryFilter) {
    const marketGroups = {};
    for (const trade of allTrades) {
        if (!matchesCategory(trade, categoryFilter)) continue;
        const key = trade.eventSlug || trade.slug || trade.conditionId;
        if (!key) continue;
        if (!marketGroups[key]) {
            marketGroups[key] = {
                eventSlug: trade.eventSlug,
                title: trade.title || 'Unknown',
                buys: 0, sells: 0, totalSize: 0,
                traders: new Set(),
                traderNames: new Map(),
                traderAddresses: new Map(),
                trades: [],
                endDate: trade.end_date_iso || null
            };
        }
        const g = marketGroups[key];
        const side = (trade.side || 'BUY').toUpperCase();
        const size = parseFloat(trade.size || 0);
        if (side === 'BUY') g.buys += size; else g.sells += size;
        g.totalSize += size;
        g.traders.add(trade._walletAddress);
        g.traderNames.set(trade._walletAddress, trade.name || getWalletName(trade._walletAddress));
        g.traderAddresses.set(trade._walletAddress, trade._walletAddress);
        g.trades.push(trade);
        if (trade.end_date_iso && !g.endDate) g.endDate = trade.end_date_iso;
    }
    return marketGroups;
}

function renderConsensusCard(g) {
    const marketLink = g.eventSlug ? `https://polymarket.com/event/${g.eventSlug}` : '#';
    const total = g.buys + g.sells;
    const buyPct = total > 0 ? (g.buys / total * 100).toFixed(0) : 50;
    const sellPct = 100 - buyPct;
    const traderTags = [...g.traderNames.values()].slice(0, 5).map(name => `<span class="consensus-trader-tag">${name}</span>`).join('');
    const dominantSide = g.buys > g.sells ? 'BUY' : 'SELL';
    const dominantColor = dominantSide === 'BUY' ? 'var(--buy)' : 'var(--sell)';
    return `
        <div class="consensus-card">
            <div class="consensus-market"><a href="${marketLink}" target="_blank">${g.title}</a></div>
            <div class="consensus-stats">
                <div class="consensus-stat"><span class="consensus-stat-label">Smart Wallets</span><span class="consensus-stat-value" style="color:var(--accent)">${g.traders.size}</span></div>
                <div class="consensus-stat"><span class="consensus-stat-label">Total Volume</span><span class="consensus-stat-value">${formatMoney(g.totalSize)}</span></div>
                <div class="consensus-stat"><span class="consensus-stat-label">Dominant Side</span><span class="consensus-stat-value" style="color:${dominantColor}">${dominantSide}</span></div>
            </div>
            <div class="consensus-bar"><div class="consensus-bar-buy" style="width:${buyPct}%"></div><div class="consensus-bar-sell" style="width:${sellPct}%"></div></div>
            <div style="display:flex;justify-content:space-between;font-size:0.65rem;color:var(--text-muted);margin-bottom:10px"><span>BUY ${buyPct}%</span><span>SELL ${sellPct}%</span></div>
            <div class="consensus-traders">${traderTags}</div>
        </div>`;
}

function renderConsensus() {
    const groups = buildMarketGroups(consensusCategory);
    const sorted = Object.values(groups)
        .filter(g => g.traders.size >= 2)
        .sort((a, b) => b.traders.size - a.traders.size || b.totalSize - a.totalSize);

    if (sorted.length === 0) {
        consensusGrid.innerHTML = '<div class="empty-state"><span class="empty-icon">🎯</span><p>No consensus found for this category.<br>Try a different filter or check back later.</p></div>';
        return;
    }
    consensusGrid.innerHTML = sorted.slice(0, 12).map(renderConsensusCard).join('');
}

// --- Copy-Trade Signals ---
function renderSignals() {
    const groups = buildMarketGroups(signalCategory);
    
    // Build wallet efficiency map (all wallets including sports)
    const walletEfficiency = {};
    ALL_WALLETS.forEach(w => {
        const eff = getEfficiency(w.profit, w.volume);
        if (eff !== null) walletEfficiency[w.address.toLowerCase()] = eff;
    });

    // Score each market
    const signals = Object.values(groups)
        .filter(g => g.traders.size >= 2)
        .map(g => {
            const total = g.buys + g.sells;
            const dominantSide = g.buys > g.sells ? 'BUY' : 'SELL';
            const dominance = Math.max(g.buys, g.sells) / total; // 0.5-1.0
            
            // Count high-efficiency wallets
            let highEffCount = 0;
            g.traders.forEach(addr => {
                const eff = walletEfficiency[addr.toLowerCase()];
                if (eff && eff >= 5) highEffCount++;
            });

            // Confidence: more traders + higher efficiency + more dominance = stronger
            const confidence = (g.traders.size * 25) + (highEffCount * 15) + (dominance * 30);
            
            const avgPrice = g.trades
                .filter(t => (t.side || 'BUY').toUpperCase() === dominantSide)
                .reduce((sum, t) => sum + parseFloat(t.price || 0), 0) / 
                Math.max(g.trades.filter(t => (t.side || 'BUY').toUpperCase() === dominantSide).length, 1);

            // Group trades by trader for position breakdown
            const traderPositions = {};
            g.trades.forEach(t => {
                const addr = t._walletAddress;
                const name = t.name || getWalletName(addr);
                if (!traderPositions[addr]) {
                    traderPositions[addr] = { name, address: addr, trades: [] };
                }
                traderPositions[addr].trades.push(t);
            });

            return { ...g, dominantSide, dominance, highEffCount, confidence, avgPrice, traderPositions };
        })
        .sort((a, b) => b.confidence - a.confidence);

    // Handle Solo Signals (High efficiency solo trades)
    const soloSignals = [];
    Object.values(groups).forEach(g => {
        if (g.traders.size === 1) {
            const addr = [...g.traders][0].toLowerCase();
            const eff = walletEfficiency[addr];
            if (eff && eff >= 12) { // 12% efficiency threshold for solo signals
                const trade = g.trades[0];
                soloSignals.push({
                    ...g,
                    dominantSide: (trade.side || 'BUY').toUpperCase(),
                    confidence: eff * 5, // Efficiency based confidence
                    avgPrice: parseFloat(trade.price || 0.5),
                    highEffCount: 1,
                    isSolo: true,
                    eff: eff
                });
            }
        }
    });
    
    soloSignals.sort((a, b) => b.confidence - a.confidence);

    if (signals.length === 0 && soloSignals.length === 0) {
        signalsGrid.innerHTML = '<div class="empty-state"><span class="empty-icon">📡</span><p>No copy-trade signals for this category yet.<br>Signals appear when 2+ smart wallets agree on a market.</p></div>';
        return;
    }

    // Split into active vs ended, sort each by newest trade timestamp
    const now = new Date();
    const getNewest = (s) => Math.max(...s.trades.map(t => t.timestamp || 0));

    const activeSignals = signals.filter(s => !s.endDate || new Date(s.endDate) > now).sort((a, b) => getNewest(b) - getNewest(a));
    const endedSignals = signals.filter(s => s.endDate && new Date(s.endDate) <= now).sort((a, b) => getNewest(b) - getNewest(a));
    const activeSolo = soloSignals.filter(s => !s.endDate || new Date(s.endDate) > now).sort((a, b) => getNewest(b) - getNewest(a));
    const endedSolo = soloSignals.filter(s => s.endDate && new Date(s.endDate) <= now).sort((a, b) => getNewest(b) - getNewest(a));

    // --- Render helpers ---
    function renderSignalCard(s) {
        const marketLink = s.eventSlug ? `https://polymarket.com/event/${s.eventSlug}` : '#';
        const strengthLevel = s.confidence >= 80 ? 'strong' : s.confidence >= 50 ? 'medium' : 'weak';
        const strengthLabel = s.confidence >= 80 ? 'STRONG' : s.confidence >= 50 ? 'MEDIUM' : 'WEAK';
        const filledDots = s.confidence >= 80 ? 5 : s.confidence >= 60 ? 4 : s.confidence >= 40 ? 3 : 2;
        const dots = Array.from({length: 5}, (_, i) => `<div class="signal-dot${i < filledDots ? ' filled' : ''}"></div>`).join('');
        const sc = s.dominantSide === 'BUY' ? 'buy-signal' : 'sell-signal';
        // Detect dominant outcome across all trader positions
        const _ov = {};
        s.trades.forEach(t => {
            const oc = t.outcome || '';
            if (!oc) return;
            if (!_ov[oc]) _ov[oc] = { buy: 0, sell: 0, vol: 0, traders: new Set() };
            const _side = (t.side || 'BUY').toUpperCase();
            const _sz = parseFloat(t.size || 0);
            _ov[oc][_side === 'BUY' ? 'buy' : 'sell'] += _sz;
            _ov[oc].vol += _sz;
            _ov[oc].traders.add(t._walletAddress);
        });
        const _topOc = Object.entries(_ov).sort((a, b) => b[1].traders.size - a[1].traders.size || b[1].vol - a[1].vol)[0];
        const dominantOutcomeName = _topOc ? _topOc[0] : '';
        const _totalTr = s.traders.size || 1;
        const outcomeRows = Object.entries(_ov)
            .sort((a, b) => b[1].traders.size - a[1].traders.size)
            .map(([oc, d]) => {
                const pct = Math.round(d.traders.size / _totalTr * 100);
                const netSide = d.buy >= d.sell ? 'BUY' : 'SELL';
                const isDom = oc === dominantOutcomeName;
                const barCol = netSide === 'BUY' ? 'var(--buy)' : 'var(--sell)';
                return `<div style="margin-bottom:5px">
                    <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.7rem;margin-bottom:2px">
                        <span style="color:${isDom ? 'var(--gold)' : 'var(--text-secondary)'};font-weight:${isDom ? 700 : 400}">${isDom ? '\u{1F3AF} ' : ''}${oc}</span>
                        <span style="color:${barCol};font-weight:600">${netSide} \u00b7 ${d.traders.size}/${_totalTr} (${pct}%)</span>
                    </div>
                    <div style="height:4px;background:var(--border);border-radius:2px"><div style="height:100%;width:${pct}%;background:${barCol};border-radius:2px"></div></div>
                </div>`;
            }).join('');
        const positionRows = s.traderPositions ? Object.values(s.traderPositions).map(tp => {
            let totalBuy = 0, totalSell = 0;
            let latestTrade = tp.trades[0];
            const outcomes = new Set();
            tp.trades.forEach(t => {
                const side = (t.side || 'BUY').toUpperCase();
                const size = parseFloat(t.size || 0);
                if (side === 'BUY') totalBuy += size; else totalSell += size;
                if (t.outcome) outcomes.add(t.outcome);
                if ((t.timestamp || 0) > (latestTrade.timestamp || 0)) latestTrade = t;
            });
            const netSide = totalBuy >= totalSell ? 'BUY' : 'SELL';
            const netSize = totalBuy + totalSell;
            const sideC = netSide === 'BUY' ? 'side-buy' : 'side-sell';
            const outcomeStr = outcomes.size > 0 ? [...outcomes].join(', ') : '';
            const time = new Date((latestTrade.timestamp || 0) * 1000).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
            const eff = walletEfficiency[tp.address.toLowerCase()];
            const profileLink = `https://polymarket.com/profile/${tp.address}`;
            return `<div class="signal-position-row">
                <div class="signal-pos-trader">
                    <a href="${profileLink}" target="_blank" class="signal-pos-name" style="color:inherit;text-decoration:none;border-bottom:1px dashed var(--text-muted)">${tp.name}</a>
                    ${eff ? `<span class="signal-pos-eff">${eff.toFixed(1)}% eff</span>` : ''}
                </div>
                <div class="signal-pos-side ${sideC}">${netSide}</div>
                <div class="signal-pos-detail">
                    <span class="signal-pos-size">$${netSize.toFixed(2)}</span>
                    <span class="signal-pos-price">@${parseFloat(latestTrade.price || 0).toFixed(3)}</span>
                </div>
                ${outcomeStr ? `<div class="signal-pos-outcome">${outcomeStr}</div>` : ''}
                <div class="signal-pos-time">${time}</div>
            </div>`;
        }).join('') : '';
        return `<div class="signal-card ${strengthLevel === 'strong' ? 'strong' : ''}">
            <div class="signal-strength">
                <div class="signal-dots">${dots}</div>
                <span class="signal-label ${strengthLevel}">${strengthLabel} SIGNAL</span>
            </div>
            <div class="consensus-market"><a href="${marketLink}" target="_blank">${s.title}</a></div>
            <div class="consensus-stats">
                <div class="consensus-stat"><span class="consensus-stat-label">Smart Wallets</span><span class="consensus-stat-value" style="color:var(--accent)">${s.traders.size}</span></div>
                <div class="consensus-stat"><span class="consensus-stat-label">High-Eff Wallets</span><span class="consensus-stat-value" style="color:var(--profit)">${s.highEffCount}</span></div>
                <div class="consensus-stat"><span class="consensus-stat-label">Avg Price</span><span class="consensus-stat-value">@${s.avgPrice.toFixed(3)}</span></div>
                <div class="consensus-stat"><span class="consensus-stat-label">Volume</span><span class="consensus-stat-value">${formatMoney(s.totalSize)}</span></div>
            </div>
            ${positionRows ? `<div class="signal-positions-section"><div class="signal-positions-header">🐋 Whale Positions</div><div class="signal-positions-list">${positionRows}</div></div>` : ''}
            ${outcomeRows ? `<div style="margin:8px 0 4px;padding:8px;background:rgba(0,0,0,0.2);border-radius:6px">${outcomeRows}</div>` : ''}
            <div class="signal-action ${sc}">${s.dominantSide === 'BUY' ? '↑' : '↓'} ${s.dominantSide}${dominantOutcomeName ? ' ' + dominantOutcomeName : ''} @ ${s.avgPrice.toFixed(3)}</div>
        </div>`;
    }

    function renderSoloCard(s, dimmed) {
        const sc = s.dominantSide === 'BUY' ? 'buy-signal' : 'sell-signal';
        const ml = s.eventSlug ? `https://polymarket.com/event/${s.eventSlug}` : '#';
        const tn = [...s.traderNames.values()][0];
        const ta = [...s.traderAddresses.values()][0];
        const tpl = `https://polymarket.com/profile/${ta}`;
        // Aggregate outcome + timing from all trades
        const outcomes = new Set();
        let latestTs = 0;
        s.trades.forEach(t => {
            if (t.outcome) outcomes.add(t.outcome);
            if ((t.timestamp || 0) > latestTs) latestTs = t.timestamp || 0;
        });
        const outcomeStr = [...outcomes].join(' / ');
        const timeStr = latestTs ? new Date(latestTs * 1000).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '--';
        // Trade rows sorted newest first
        const sortedTrades = [...s.trades].sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0));
        const tradeRows = sortedTrades.slice(0, 8).map(t => {
            const side = (t.side || 'BUY').toUpperCase();
            const sideC = side === 'BUY' ? 'side-buy' : 'side-sell';
            const ts = t.timestamp ? new Date(t.timestamp * 1000).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '--';
            return `<div class="signal-position-row">
                <div class="signal-pos-side ${sideC}">${side}</div>
                <div class="signal-pos-detail">
                    <span class="signal-pos-size">$${parseFloat(t.size || 0).toFixed(2)}</span>
                    <span class="signal-pos-price">@${parseFloat(t.price || 0).toFixed(3)}</span>
                </div>
                ${t.outcome ? `<div class="signal-pos-outcome">${t.outcome}</div>` : ''}
                <div class="signal-pos-time">${ts}</div>
            </div>`;
        }).join('');
        return `<div class="signal-card solo-signal"${dimmed ? ' style="opacity:0.65"' : ''}>
            <div class="signal-strength"><span class="signal-label weak">SOLO SMART MOVE</span></div>
            <div class="consensus-market"><a href="${ml}" target="_blank">${s.title}</a></div>
            <div class="consensus-stats">
                <div class="consensus-stat"><span class="consensus-stat-label">Trader</span><span class="consensus-stat-value" style="color:var(--profit)"><a href="${tpl}" target="_blank" style="color:inherit;text-decoration:none;border-bottom:1px dashed var(--profit)">${tn}</a></span></div>
                <div class="consensus-stat"><span class="consensus-stat-label">Efficiency</span><span class="consensus-stat-value">${s.eff.toFixed(1)}%</span></div>
                <div class="consensus-stat"><span class="consensus-stat-label">Avg Price</span><span class="consensus-stat-value">@${s.avgPrice.toFixed(3)}</span></div>
                <div class="consensus-stat"><span class="consensus-stat-label">Total Size</span><span class="consensus-stat-value">$${s.totalSize.toFixed(2)}</span></div>
            </div>
            ${outcomeStr ? `<div style="font-size:0.72rem;color:var(--gold);margin:6px 0 2px">🎯 Position: <strong>${s.dominantSide} ${outcomeStr}</strong></div>` : ''}
            <div style="font-size:0.7rem;color:var(--text-muted);margin-bottom:8px">🕐 Latest: ${timeStr}</div>
            ${tradeRows ? `<div class="signal-positions-section"><div class="signal-positions-header">📋 Trade History</div><div class="signal-positions-list">${tradeRows}</div></div>` : ''}
            <div class="signal-action ${sc}">${s.dominantSide === 'BUY' ? '↑' : '↓'} ${s.dominantSide}${outcomeStr ? ' ' + outcomeStr : ''} @ ${s.avgPrice.toFixed(3)}</div>
        </div>`;
    }

    const activeCount = activeSignals.length + activeSolo.length;
    const endedCount = endedSignals.length + endedSolo.length;

    let html = '';

    // --- Active Markets ---
    html += `<div class="signals-section-header" style="font-weight:800;font-size:1rem;color:var(--profit);display:flex;align-items:center;gap:8px;margin:10px 0 6px">🟢 Active Markets (${activeCount})</div>`;
    if (activeSignals.length > 0) {
        html += `<div style="font-weight:700;font-size:0.85rem;color:var(--accent);margin:4px 0">🤝 Consensus (${activeSignals.length})</div>`;
        html += `<div class="signals-row">${activeSignals.slice(0, 30).map(s => renderSignalCard(s)).join('')}</div>`;
    }
    if (activeSolo.length > 0) {
        html += `<div style="font-weight:700;font-size:0.85rem;color:var(--text-secondary);margin:12px 0 4px">🧠 Solo Smart Moves (${activeSolo.length})</div>`;
        html += `<div class="signals-row">${activeSolo.slice(0, 20).map(s => renderSoloCard(s, false)).join('')}</div>`;
    }
    if (activeCount === 0) {
        html += '<div class="empty-state"><span class="empty-icon">📡</span><p>No active signals right now.</p></div>';
    }

    // --- Ended Markets ---
    if (hideEndedSignals) {
        if (endedCount > 0) {
            html += `<div style="margin-top:20px;padding-top:16px;border-top:1px solid var(--border);text-align:center">
                <button class="btn btn-sm" onclick="toggleEndedSignals()" style="opacity:0.6;font-size:0.78rem">⏹ ${endedCount} ended market${endedCount !== 1 ? 's' : ''} hidden — click to show</button>
            </div>`;
        }
    } else {
        html += `<div class="signals-section-header" style="font-weight:800;font-size:1rem;color:var(--text-muted);display:flex;align-items:center;gap:8px;margin:30px 0 6px;border-top:1px solid var(--border);padding-top:20px">⏹ Ended Markets (${endedCount})</div>`;
        if (endedSignals.length > 0) {
            html += `<div style="font-weight:700;font-size:0.85rem;color:var(--accent);opacity:0.6;margin:4px 0">🤝 Consensus (${endedSignals.length})</div>`;
            html += `<div class="signals-row">${endedSignals.slice(0, 30).map(s => renderSignalCard(s)).join('')}</div>`;
        }
        if (endedSolo.length > 0) {
            html += `<div style="font-weight:700;font-size:0.85rem;color:var(--text-secondary);opacity:0.6;margin:12px 0 4px">🧠 Solo Smart Moves (${endedSolo.length})</div>`;
            html += `<div class="signals-row">${endedSolo.slice(0, 20).map(s => renderSoloCard(s, true)).join('')}</div>`;
        }
        if (endedCount === 0) {
            html += '<div class="empty-state"><span class="empty-icon">⏹</span><p>No ended markets in the last 24h.</p></div>';
        }
    }

    signalsGrid.innerHTML = html;
}

// --- Auto Refresh ---
function startAutoRefresh() {
    clearInterval(_refreshInterval);
    _refreshSecsLeft = 300;
    _refreshInterval = setInterval(() => {
        if (!autoRefreshEnabled) return;
        _refreshSecsLeft--;
        const el = document.getElementById('refreshCountdown');
        if (el) {
            const m = Math.floor(_refreshSecsLeft / 60);
            const s = _refreshSecsLeft % 60;
            el.textContent = `${m}:${s.toString().padStart(2, '0')}`;
        }
        if (_refreshSecsLeft <= 0) {
            loadAllTrades();
        }
    }, 1000);
}

function toggleAutoRefresh() {
    autoRefreshEnabled = !autoRefreshEnabled;
    const pill = document.getElementById('refreshPill');
    const label = document.getElementById('refreshLabel');
    const countdown = document.getElementById('refreshCountdown');
    if (!autoRefreshEnabled) {
        if (label) label.textContent = 'Auto-refresh';
        if (countdown) countdown.textContent = 'Paused';
        if (pill) pill.style.opacity = '0.45';
    } else {
        _refreshSecsLeft = 300;
        if (label) label.textContent = 'Next refresh';
        if (countdown) countdown.textContent = '5:00';
        if (pill) pill.style.opacity = '1';
    }
}

function toggleEndedSignals() {
    hideEndedSignals = !hideEndedSignals;
    const btn = document.getElementById('toggleEndedBtn');
    if (btn) btn.textContent = hideEndedSignals ? '🔽 Show Ended' : '🔼 Hide Ended';
    renderSignals();
}

// --- Track Wallet (switch to feed filtered) ---
window.trackWallet = function(address) {
    feedFilterAddress = address;
    feedFilter.value = address;
    renderFeed();
    // Switch to feed tab
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    document.querySelector('[data-tab="feed"]').classList.add('active');
    document.getElementById('tab-feed').classList.add('active');
};

// --- Watchlist ---
function renderWatchlist() {
    if (customWallets.length === 0) {
        watchlistItems.innerHTML = '<div class="empty-state"><span class="empty-icon">👁</span><p>No custom wallets added yet.<br>Add a wallet address above to start tracking.</p></div>';
        return;
    }

    watchlistItems.innerHTML = customWallets.map(addr => `
        <div class="watchlist-card">
            <div class="watchlist-info">
                <span class="watchlist-addr">${addr}</span>
                <span class="watchlist-trades">
                    <a href="https://polymarket.com/profile/${addr}" target="_blank" style="color:var(--accent);text-decoration:none">View Profile ↗</a>
                </span>
            </div>
            <div style="display:flex;gap:6px">
                <button class="btn btn-sm btn-track" onclick="trackWallet('${addr}')">⚡ Track</button>
                <button class="btn btn-sm btn-remove" onclick="removeWatchlist('${addr}')">✕ Remove</button>
            </div>
        </div>
    `).join('');
    renderWatchlistConsensus();
}

function renderWatchlistConsensus() {
    const section = document.getElementById('watchlist-consensus-section');
    const grid = document.getElementById('watchlistConsensusGrid');
    if (!section || !grid) return;

    if (customWallets.length === 0) {
        section.style.display = 'none';
        return;
    }
    section.style.display = 'block';

    if (!allTrades.length) {
        grid.innerHTML = '<div class="loading-state"><div class="spinner"></div><p>Loading trades from your watchlist wallets...</p></div>';
        return;
    }

    const watchSet = new Set(customWallets.map(a => a.toLowerCase()));
    const wTrades = allTrades.filter(t => watchSet.has((t._walletAddress || '').toLowerCase()));

    if (!wTrades.length) {
        grid.innerHTML = '<div class="empty-state"><span class="empty-icon">📭</span><p>No recent trades (last 24h) found from your watchlist wallets.<br>Try adding more wallets or check back later.</p></div>';
        return;
    }

    // Build market groups from watchlist trades only
    const groups = {};
    for (const t of wTrades) {
        if (!matchesCategory(t, watchlistCategory)) continue;
        const key = t.eventSlug || t.slug || t.conditionId;
        if (!key) continue;
        if (!groups[key]) groups[key] = {
            eventSlug: t.eventSlug, title: t.title || 'Unknown',
            buys: 0, sells: 0, totalSize: 0,
            traders: new Set(), traderNames: new Map(),
            trades: [], endDate: t.end_date_iso || null
        };
        const g = groups[key];
        const side = (t.side || 'BUY').toUpperCase();
        const size = parseFloat(t.size || 0);
        if (side === 'BUY') g.buys += size; else g.sells += size;
        g.totalSize += size;
        g.traders.add(t._walletAddress.toLowerCase());
        g.traderNames.set(t._walletAddress.toLowerCase(), shortAddr(t._walletAddress));
        g.trades.push(t);
        if (t.end_date_iso && !g.endDate) g.endDate = t.end_date_iso;
    }

    const sorted = Object.values(groups).sort((a, b) => b.traders.size - a.traders.size || b.totalSize - a.totalSize);

    if (!sorted.length) {
        grid.innerHTML = '<div class="empty-state"><span class="empty-icon">🎯</span><p>No markets found for this category.</p></div>';
        return;
    }

    grid.innerHTML = sorted.slice(0, 24).map(g => {
        const marketLink = g.eventSlug ? `https://polymarket.com/event/${g.eventSlug}` : '#';
        const dominantSide = g.buys >= g.sells ? 'BUY' : 'SELL';
        const sc = dominantSide === 'BUY' ? 'var(--buy)' : 'var(--sell)';
        const isEnded = g.endDate && new Date(g.endDate) <= new Date();
        const latestTs = Math.max(...g.trades.map(t => t.timestamp || 0));
        const timeStr = latestTs ? new Date(latestTs * 1000).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) : '--';

        // Per-outcome wallet-count breakdown
        const ov = {};
        g.trades.forEach(t => {
            const oc = t.outcome || '';
            if (!oc) return;
            if (!ov[oc]) ov[oc] = { buy: 0, sell: 0, traders: new Set() };
            const side = (t.side || 'BUY').toUpperCase();
            ov[oc][side === 'BUY' ? 'buy' : 'sell'] += parseFloat(t.size || 0);
            ov[oc].traders.add(t._walletAddress.toLowerCase());
        });
        const totalTr = g.traders.size || 1;
        const topOc = Object.entries(ov).sort((a, b) => b[1].traders.size - a[1].traders.size || (b[1].buy + b[1].sell) - (a[1].buy + a[1].sell))[0];
        const dominantOcName = topOc ? topOc[0] : '';
        const outcomeRowsHtml = Object.entries(ov)
            .sort((a, b) => b[1].traders.size - a[1].traders.size)
            .map(([oc, d]) => {
                const pct = Math.round(d.traders.size / totalTr * 100);
                const netSide = d.buy >= d.sell ? 'BUY' : 'SELL';
                const isDom = oc === dominantOcName;
                const barCol = netSide === 'BUY' ? 'var(--buy)' : 'var(--sell)';
                return `<div style="margin-bottom:5px">
                    <div style="display:flex;justify-content:space-between;align-items:center;font-size:0.7rem;margin-bottom:2px">
                        <span style="color:${isDom ? 'var(--gold)' : 'var(--text-secondary)'};font-weight:${isDom ? 700 : 400}">${isDom ? '\u{1F3AF} ' : ''}${oc}</span>
                        <span style="color:${barCol};font-weight:600">${netSide} \u00b7 ${d.traders.size}/${totalTr} (${pct}%)</span>
                    </div>
                    <div style="height:4px;background:var(--border);border-radius:2px"><div style="height:100%;width:${pct}%;background:${barCol};border-radius:2px"></div></div>
                </div>`;
            }).join('');

        // Average price for dominant side
        const domTrades = g.trades.filter(t => (t.side || 'BUY').toUpperCase() === dominantSide);
        const avgPrice = domTrades.length ? domTrades.reduce((s, t) => s + parseFloat(t.price || 0), 0) / domTrades.length : 0;

        const traderTags = [...g.traderNames.values()].map(n => `<span class="consensus-trader-tag">${n}</span>`).join('');

        // Fallback bar if no outcome data
        const total = g.buys + g.sells;
        const buyPct = total > 0 ? Math.round(g.buys / total * 100) : 50;
        const sellPct = 100 - buyPct;
        const fallbackBar = `<div class="consensus-bar"><div class="consensus-bar-buy" style="width:${buyPct}%"></div><div class="consensus-bar-sell" style="width:${sellPct}%"></div></div>
            <div style="display:flex;justify-content:space-between;font-size:0.65rem;color:var(--text-muted);margin-bottom:10px"><span>BUY ${buyPct}%</span><span>SELL ${sellPct}%</span></div>`;

        return `<div class="consensus-card"${isEnded ? ' style="opacity:0.6"' : ''}>
            ${isEnded ? '<div style="font-size:0.68rem;color:var(--text-muted);margin-bottom:4px">\u23f9 Ended</div>' : ''}
            <div class="consensus-market"><a href="${marketLink}" target="_blank">${g.title}</a></div>
            <div class="consensus-stats">
                <div class="consensus-stat"><span class="consensus-stat-label">Wallets</span><span class="consensus-stat-value" style="color:var(--accent)">${g.traders.size}</span></div>
                <div class="consensus-stat"><span class="consensus-stat-label">Volume</span><span class="consensus-stat-value">${formatMoney(g.totalSize)}</span></div>
                <div class="consensus-stat"><span class="consensus-stat-label">Latest</span><span class="consensus-stat-value">${timeStr}</span></div>
            </div>
            ${outcomeRowsHtml
                ? `<div style="margin:8px 0 4px;padding:8px;background:rgba(0,0,0,0.2);border-radius:6px">${outcomeRowsHtml}</div>`
                : fallbackBar}
            <div class="consensus-traders">${traderTags}</div>
            <div style="margin-top:10px;padding:8px 12px;border-radius:6px;text-align:center;font-weight:700;font-size:0.82rem;background:rgba(0,0,0,0.2);color:${sc}">
                ${dominantSide === 'BUY' ? '\u2191' : '\u2193'} ${dominantSide}${dominantOcName ? ' ' + dominantOcName : ''} @ ${avgPrice.toFixed(3)}
            </div>
        </div>`;
    }).join('');
}

document.getElementById('addWatchlistBtn').addEventListener('click', () => {
    const input = document.getElementById('watchlistInput');
    const addr = input.value.trim();
    if (!addr || !addr.startsWith('0x') || addr.length < 10) {
        alert('Please enter a valid wallet address starting with 0x');
        return;
    }
    if (customWallets.includes(addr.toLowerCase())) {
        alert('This wallet is already in your watchlist.');
        return;
    }
    customWallets.push(addr.toLowerCase());
    localStorage.setItem('smartMoneyWatchlist', JSON.stringify(customWallets));
    input.value = '';
    renderWatchlist();
    trackingCountEl.textContent = ALL_WALLETS.length + customWallets.length;
    // Re-fetch trades to include the new wallet
    loadAllTrades();
});

window.removeWatchlist = function(addr) {
    customWallets = customWallets.filter(w => w !== addr);
    localStorage.setItem('smartMoneyWatchlist', JSON.stringify(customWallets));
    renderWatchlist();
    trackingCountEl.textContent = ALL_WALLETS.length + customWallets.length;
};

// --- Init ---
async function init() {
    renderLeaderboard();
    renderWatchlist();

    // Setup category filters
    setupCategoryFilters('feedCategoryFilters', cat => { feedCategory = cat; }, renderFeed);
    setupCategoryFilters('consensusCategoryFilters', cat => { consensusCategory = cat; }, renderConsensus);
    setupCategoryFilters('signalCategoryFilters', cat => { signalCategory = cat; }, renderSignals);
    setupCategoryFilters('watchlistCatFilters', cat => { watchlistCategory = cat; }, renderWatchlistConsensus);

    await loadAllTrades();
}

init();

// =============================================
// Paper Trading Module
// =============================================

const PAPER_STARTING_BALANCE = 10;
const PAPER_STORAGE_KEY = 'polymarket_paper_trade';

// --- Paper Trade State ---
let paperState = loadPaperState();
let paperCategory = 'sports-esports';

function getDefaultPaperState() {
    return {
        balance: PAPER_STARTING_BALANCE,
        positions: [],      // { id, market, eventSlug, side, entryPrice, quantity, size, timestamp }
        history: [],         // { id, market, eventSlug, action, price, size, pnl, timestamp }
        totalDeposited: PAPER_STARTING_BALANCE,
    };
}

function loadPaperState() {
    try {
        const saved = localStorage.getItem(PAPER_STORAGE_KEY);
        if (saved) {
            const parsed = JSON.parse(saved);
            // Ensure all required fields exist
            if (typeof parsed.balance === 'number' && Array.isArray(parsed.positions)) {
                return parsed;
            }
        }
    } catch (e) {
        console.error('Failed to load paper state:', e);
    }
    return getDefaultPaperState();
}

function savePaperState() {
    try {
        localStorage.setItem(PAPER_STORAGE_KEY, JSON.stringify(paperState));
    } catch (e) {
        console.error('Failed to save paper state:', e);
    }
}

// --- Toast Notifications ---
function showPaperToast(message, type = 'success') {
    const existing = document.querySelectorAll('.paper-toast');
    existing.forEach(el => el.remove());

    const toast = document.createElement('div');
    toast.className = `paper-toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3200);
}

// --- Get current market price from loaded trades ---
function getMarketPrice(eventSlug) {
    // Find the most recent trade for this market
    const trade = allTrades.find(t => (t.eventSlug || t.slug) === eventSlug);
    if (trade) return parseFloat(trade.price || 0.5);
    return null;
}

// --- Build unique markets from loaded trades ---
function getAvailableMarkets(category) {
    const marketMap = {};
    for (const trade of allTrades) {
        if (!matchesCategory(trade, category)) continue;
        const key = trade.eventSlug || trade.slug;
        if (!key) continue;
        if (!marketMap[key]) {
            const side = (trade.side || 'BUY').toUpperCase();
            const size = parseFloat(trade.size || 0);
            marketMap[key] = {
                eventSlug: key,
                title: trade.title || 'Unknown Market',
                latestPrice: parseFloat(trade.price || 0.5),
                traderCount: new Set(),
                totalVolume: 0,
                buys: 0,
                sells: 0,
                latestTimestamp: trade.timestamp || 0,
            };
        }
        const m = marketMap[key];
        const size = parseFloat(trade.size || 0);
        const side = (trade.side || 'BUY').toUpperCase();
        if (side === 'BUY') m.buys += size; else m.sells += size;
        m.totalVolume += size;
        m.traderCount.add(trade._walletAddress);
        // Use most recent price
        if ((trade.timestamp || 0) > m.latestTimestamp) {
            m.latestPrice = parseFloat(trade.price || 0.5);
            m.latestTimestamp = trade.timestamp;
        }
    }
    return Object.values(marketMap)
        .sort((a, b) => b.traderCount.size - a.traderCount.size || b.totalVolume - a.totalVolume);
}

// --- Execute Paper Trade ---
window.paperBuy = function(eventSlug, title) {
    const inputEl = document.getElementById(`paper-amount-${CSS.escape(eventSlug)}`);
    const amount = parseFloat(inputEl?.value || 1);
    if (isNaN(amount) || amount <= 0) {
        showPaperToast('Enter a valid amount', 'error');
        return;
    }
    if (amount > paperState.balance) {
        showPaperToast(`Insufficient balance. You have $${paperState.balance.toFixed(2)}`, 'error');
        return;
    }

    const price = getMarketPrice(eventSlug);
    if (!price) {
        showPaperToast('Could not determine market price', 'error');
        return;
    }

    const quantity = amount / price;
    const position = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        market: title,
        eventSlug,
        side: 'LONG',
        entryPrice: price,
        quantity,
        size: amount,
        timestamp: Date.now(),
    };

    paperState.balance -= amount;
    paperState.positions.push(position);
    paperState.history.unshift({
        id: position.id,
        market: title,
        eventSlug,
        action: 'BUY',
        price,
        size: amount,
        pnl: null,
        timestamp: Date.now(),
    });

    savePaperState();
    renderPaperTrade();
    showPaperToast(`Bought $${amount.toFixed(2)} of "${title}" @ ${price.toFixed(3)}`, 'success');
};

window.paperSell = function(eventSlug, title) {
    const inputEl = document.getElementById(`paper-amount-${CSS.escape(eventSlug)}`);
    const amount = parseFloat(inputEl?.value || 1);
    if (isNaN(amount) || amount <= 0) {
        showPaperToast('Enter a valid amount', 'error');
        return;
    }
    if (amount > paperState.balance) {
        showPaperToast(`Insufficient balance. You have $${paperState.balance.toFixed(2)}`, 'error');
        return;
    }

    const price = getMarketPrice(eventSlug);
    if (!price) {
        showPaperToast('Could not determine market price', 'error');
        return;
    }

    const quantity = amount / price;
    const position = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        market: title,
        eventSlug,
        side: 'SHORT',
        entryPrice: price,
        quantity,
        size: amount,
        timestamp: Date.now(),
    };

    paperState.balance -= amount;
    paperState.positions.push(position);
    paperState.history.unshift({
        id: position.id,
        market: title,
        eventSlug,
        action: 'SELL',
        price,
        size: amount,
        pnl: null,
        timestamp: Date.now(),
    });

    savePaperState();
    renderPaperTrade();
    showPaperToast(`Shorted $${amount.toFixed(2)} of "${title}" @ ${price.toFixed(3)}`, 'success');
};

window.closePosition = function(positionId) {
    const idx = paperState.positions.findIndex(p => p.id === positionId);
    if (idx === -1) return;

    const pos = paperState.positions[idx];
    const currentPrice = getMarketPrice(pos.eventSlug);
    const closePrice = currentPrice || pos.entryPrice;

    let pnl = 0;
    if (pos.side === 'LONG') {
        // PNL = (closePrice - entryPrice) * quantity
        pnl = (closePrice - pos.entryPrice) * pos.quantity;
    } else {
        // SHORT: PNL = (entryPrice - closePrice) * quantity
        pnl = (pos.entryPrice - closePrice) * pos.quantity;
    }

    const returnAmount = pos.size + pnl;
    paperState.balance += Math.max(returnAmount, 0);

    paperState.history.unshift({
        id: pos.id + '_close',
        market: pos.market,
        eventSlug: pos.eventSlug,
        action: 'CLOSE',
        price: closePrice,
        size: pos.size,
        pnl: pnl,
        timestamp: Date.now(),
    });

    paperState.positions.splice(idx, 1);
    savePaperState();
    renderPaperTrade();

    const pnlStr = pnl >= 0 ? `+$${pnl.toFixed(2)}` : `-$${Math.abs(pnl).toFixed(2)}`;
    showPaperToast(`Closed "${pos.market}" — PNL: ${pnlStr}`, pnl >= 0 ? 'success' : 'error');
};

// --- Calculate Portfolio Stats ---
function calcPortfolioStats() {
    let unrealizedPnl = 0;
    for (const pos of paperState.positions) {
        const currentPrice = getMarketPrice(pos.eventSlug) || pos.entryPrice;
        if (pos.side === 'LONG') {
            unrealizedPnl += (currentPrice - pos.entryPrice) * pos.quantity;
        } else {
            unrealizedPnl += (pos.entryPrice - currentPrice) * pos.quantity;
        }
    }

    const investedInPositions = paperState.positions.reduce((s, p) => s + p.size, 0);
    const equity = paperState.balance + investedInPositions + unrealizedPnl;
    const totalPnl = equity - PAPER_STARTING_BALANCE;
    const pnlPct = (totalPnl / PAPER_STARTING_BALANCE) * 100;

    // Win rate from closed trades
    const closedTrades = paperState.history.filter(h => h.action === 'CLOSE');
    const wins = closedTrades.filter(h => h.pnl > 0).length;
    const winRate = closedTrades.length > 0 ? (wins / closedTrades.length * 100).toFixed(0) + '%' : '--';

    return { equity, totalPnl, pnlPct, unrealizedPnl, winRate, totalTrades: paperState.history.length };
}

// --- Render Paper Trade ---
function renderPaperTrade() {
    const stats = calcPortfolioStats();

    // Portfolio cards
    document.getElementById('paperBalance').textContent = `$${paperState.balance.toFixed(2)}`;
    document.getElementById('paperEquity').textContent = `$${stats.equity.toFixed(2)}`;

    const pnlEl = document.getElementById('paperPnl');
    const pnlPctEl = document.getElementById('paperPnlPct');
    pnlEl.textContent = stats.totalPnl >= 0 ? `+$${stats.totalPnl.toFixed(2)}` : `-$${Math.abs(stats.totalPnl).toFixed(2)}`;
    pnlEl.style.color = stats.totalPnl >= 0 ? 'var(--profit)' : 'var(--loss)';
    pnlPctEl.textContent = `${stats.pnlPct >= 0 ? '+' : ''}${stats.pnlPct.toFixed(2)}%`;
    pnlPctEl.style.color = stats.totalPnl >= 0 ? 'var(--profit)' : 'var(--loss)';
    pnlPctEl.style.background = stats.totalPnl >= 0 ? 'var(--profit-bg)' : 'var(--loss-bg)';

    document.getElementById('paperTradeCount').textContent = stats.totalTrades;
    document.getElementById('paperWinRate').textContent = stats.winRate;

    // Open positions
    const posContainer = document.getElementById('paperPositions');
    if (paperState.positions.length === 0) {
        posContainer.innerHTML = '<div class="empty-state"><span class="empty-icon">📊</span><p>No open positions.<br>Use the markets below to place paper trades.</p></div>';
    } else {
        posContainer.innerHTML = paperState.positions.map(pos => {
            const currentPrice = getMarketPrice(pos.eventSlug) || pos.entryPrice;
            let pnl = 0;
            if (pos.side === 'LONG') {
                pnl = (currentPrice - pos.entryPrice) * pos.quantity;
            } else {
                pnl = (pos.entryPrice - currentPrice) * pos.quantity;
            }
            const pnlPct = (pnl / pos.size * 100).toFixed(1);
            const pnlClass = pnl >= 0 ? 'position-pnl-positive' : 'position-pnl-negative';
            const sideClass = pos.side === 'LONG' ? 'position-long' : 'position-short';
            const sideLabel = pos.side === 'LONG' ? 'long' : 'short';

            return `
                <div class="position-card ${sideClass}">
                    <div class="position-market">${pos.market}</div>
                    <div class="position-side ${sideLabel}">${pos.side}</div>
                    <div class="position-detail">
                        <span class="position-detail-label">Size</span>
                        <span class="position-detail-value">$${pos.size.toFixed(2)}</span>
                    </div>
                    <div class="position-detail">
                        <span class="position-detail-label">Entry</span>
                        <span class="position-detail-value">@${pos.entryPrice.toFixed(3)}</span>
                    </div>
                    <div class="position-detail">
                        <span class="position-detail-label">PNL</span>
                        <span class="position-detail-value ${pnlClass}">${pnl >= 0 ? '+' : ''}$${pnl.toFixed(2)} (${pnl >= 0 ? '+' : ''}${pnlPct}%)</span>
                    </div>
                    <button class="btn-close-position" onclick="closePosition('${pos.id}')">✕ Close</button>
                </div>
            `;
        }).join('');
    }

    // Available markets
    renderPaperMarkets();

    // Trade history
    renderPaperHistory();
}

function renderPaperMarkets() {
    const marketsContainer = document.getElementById('paperMarkets');
    const markets = getAvailableMarkets(paperCategory);

    if (markets.length === 0) {
        marketsContainer.innerHTML = '<div class="empty-state"><span class="empty-icon">📭</span><p>No markets available for this category.<br>Try refreshing or selecting a different filter.</p></div>';
        return;
    }

    marketsContainer.innerHTML = markets.slice(0, 30).map(m => {
        const marketLink = m.eventSlug ? `https://polymarket.com/event/${m.eventSlug}` : '#';
        const dominantSide = m.buys > m.sells ? 'BUY' : 'SELL';
        const smartCount = m.traderCount.size;
        const escapedSlug = CSS.escape(m.eventSlug);

        return `
            <div class="paper-market-card">
                <div class="paper-market-info">
                    <div class="paper-market-name">
                        <a href="${marketLink}" target="_blank">${m.title}</a>
                    </div>
                    <div class="paper-market-meta">
                        <span>${smartCount} whale${smartCount !== 1 ? 's' : ''}</span>
                        <span>Vol: ${formatMoney(m.totalVolume)}</span>
                        <span>Signal: <span style="color:${dominantSide === 'BUY' ? 'var(--buy)' : 'var(--sell)'}">${dominantSide}</span></span>
                    </div>
                </div>
                <div class="paper-market-price">@${m.latestPrice.toFixed(3)}</div>
                <div class="paper-trade-amount">
                    <span style="color:var(--text-muted);font-size:0.75rem">$</span>
                    <input type="number" id="paper-amount-${escapedSlug}" value="1" min="0.1" max="${paperState.balance.toFixed(2)}" step="0.1">
                </div>
                <div class="paper-trade-actions">
                    <button class="btn-paper-buy" onclick="paperBuy('${m.eventSlug}', '${m.title.replace(/'/g, "\\'")}')">↑ Buy</button>
                    <button class="btn-paper-sell" onclick="paperSell('${m.eventSlug}', '${m.title.replace(/'/g, "\\'")}')">↓ Sell</button>
                </div>
            </div>
        `;
    }).join('');
}

function renderPaperHistory() {
    const historyContainer = document.getElementById('paperHistory');

    if (paperState.history.length === 0) {
        historyContainer.innerHTML = '<div class="empty-state"><span class="empty-icon">📜</span><p>No trades yet. Start paper trading to build your history.</p></div>';
        return;
    }

    historyContainer.innerHTML = paperState.history.slice(0, 50).map(h => {
        const time = new Date(h.timestamp).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
        const actionClass = h.action === 'BUY' ? 'buy' : h.action === 'SELL' ? 'sell' : 'close';
        const pnlStr = h.pnl !== null ? (h.pnl >= 0 ? `+$${h.pnl.toFixed(2)}` : `-$${Math.abs(h.pnl).toFixed(2)}`) : '--';
        const pnlColor = h.pnl !== null ? (h.pnl >= 0 ? 'var(--profit)' : 'var(--loss)') : 'var(--text-muted)';

        return `
            <div class="history-card">
                <div class="history-time">${time}</div>
                <div class="history-market">${h.market}</div>
                <div class="history-action ${actionClass}">${h.action}</div>
                <div class="history-detail">$${h.size.toFixed(2)}</div>
                <div class="history-detail">@${h.price.toFixed(3)}</div>
                <div class="history-pnl" style="color:${pnlColor}">${pnlStr}</div>
            </div>
        `;
    }).join('');
}

// --- Reset Paper Trade ---
document.getElementById('resetPaperTrade').addEventListener('click', () => {
    if (confirm('Reset paper trading account? This will clear all positions and history, and reset balance to $10.')) {
        paperState = getDefaultPaperState();
        savePaperState();
        renderPaperTrade();
        showPaperToast('Paper trading account reset to $10.00', 'info');
    }
});

// --- Paper Trade Category Filters ---
setupCategoryFilters('paperCategoryFilters', cat => { paperCategory = cat; }, renderPaperMarkets);

// --- Initial render of paper trade (after trades loaded) ---
const origLoadAllTrades = loadAllTrades;
// Patch loadAllTrades to also re-render paper trade after data loads
const _origInit = loadAllTrades;
const patchedLoad = async function() {
    await _origInit.call(this);
    renderPaperTrade();
};
// We can't easily re-assign loadAllTrades since it's used in multiple places,
// so instead we use a MutationObserver on lastUpdated to know when data finishes
const _paperObserver = new MutationObserver(() => {
    renderPaperTrade();
});
_paperObserver.observe(lastUpdatedEl, { childList: true, characterData: true, subtree: true });

// Initial render
renderPaperTrade();
