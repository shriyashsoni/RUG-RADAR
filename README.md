# Rug Radar 🛡️

Real-time Solana token safety scanner powered by Birdeye Data.

## Features
- **Live Network Feed**: Monitor new Solana listings in real-time.
- **Security Dashboard**: Scan any token address for rug risk.
- **Safety Scoring**: Automated analysis of mint authority, freeze authority, and liquidity locks.
- **Premium UI**: Modern, responsive, dark-themed interface with 3D animations.

## Tech Stack
- **Frontend**: React + Vite + Vanilla CSS
- **Backend**: Node.js + Express + Axios
- **Data**: Birdeye API

## Setup
1. Clone the repo.
2. Run `npm install` in both `client` and `backend` directories.
3. Create a `.env` file in the `backend` directory with your `BIRDEYE_API_KEY`.
4. Run `npm run dev` in both directories.

## Endpoints Used
- `/defi/v3/token/new-listing`
- `/defi/token_security`

Built for degens, by degens.
