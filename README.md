# Polymarket Smart Money Tracker

A high-performance prediction market dashboard designed to isolate alpha by tracking top-tier "Smart Money" wallets on Polymarket. This tool transforms raw trade data into actionable trading signals using category-specific filtering and a consensus engine.

## 🚀 Key Features

*   **Smart Money Surveillance**: Real-time tracking of the top 30+ most profitable wallets on the Polymarket leaderboard.
*   **Specialist Classification**: Automatically categorizes trades into **Sports, Esports, Politics, Crypto,** and more using a regex-based pattern matching engine.
*   **Consensus Engine**: Identifies markets where multiple expert traders are taking the same position, providing a high-confidence "Copy-Trade" signal.
*   **Whale Alerts**: Instant visual highlights for large trades ($500+) that often signal significant market moves.
*   **Historical Win-Rate Analysis**: Background processing to calculate the actual success rate of tracked wallets across resolved markets.
*   **Local Watchlist**: Add and track your own custom wallet addresses (persisted via `localStorage`).

## 🛠 Tech Stack

*   **Frontend**: Vanilla HTML5, CSS3 (Modern Dark Mode UI), and ES6+ JavaScript.
*   **APIs**: Integration with Polymarket Data API, Gamma API, and CLOB API.
*   **Storage**: `localStorage` for personalized watchlist and UI settings.

## 📦 Installation & Usage

1.  Clone the repository or download the files.
2.  Open `index.html` in any modern web browser.
3.  The dashboard will automatically begin fetching and analyzing trades from the default "Smart Money" list.
4.  Use the **Tabs** to switch between the Live Feed, Consensus analysis, and Smart Wallet classifications.

## 📊 How it Works

1.  **Fetcher**: The app polls the Polymarket Data API for the latest trades of curated wallets.
2.  **Classifier**: Trades are analyzed by a logic engine to detect which specific category the bet belongs to.
3.  **Analyzer**: The app groups trades by Market ID to see if experts are agreeing or disagreeing on an outcome.
4.  **Signal**: If high-ROI specialists reach a consensus, a signal is highlighted in the "Consensus" tab.

## ⚠️ Disclaimer

This tool is for informational and research purposes only. Trading on prediction markets involves significant risk. Historical performance of "Smart Money" wallets does not guarantee future results.

---
Built for the Polymarket ecosystem.
