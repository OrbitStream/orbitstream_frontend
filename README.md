# 🖥️ OrbitStream Frontend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)

> **The web dashboard for OrbitStream — real-time token streaming on Stellar.**

OrbitStream Frontend is a Next.js 16 App Router application that lets users create, manage, and monitor token streams on Stellar. Connect your Freighter wallet, stream tokens to anyone, and watch earnings accrue in real time.

---

## ✨ Features

- 🔗 **Freighter Wallet** — one-click Stellar wallet connection, no sign-up required
- 🌊 **Stream Dashboard** — create, pause, resume, cancel, and top-up streams
- ⚡ **Live Updates** — WebSocket connection shows real-time balance changes per second
- 📊 **Stream History** — full list of active and past streams with claimable amounts
- 🌙 **Dark Theme** — clean dark UI built for DeFi power users
- 📱 **Responsive** — fully mobile-optimised layout

---

## 🗂️ Project Structure

```
app/
├── layout.tsx          # Root layout — metadata, fonts
├── globals.css         # Tailwind base + stream animations
└── page.tsx            # Landing page
public/                 # Static assets
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 20
- [Freighter Wallet](https://freighter.app) browser extension

### Install & Run

```bash
npm install
npm run dev
```

Optional: if you added new packages earlier, run `npm install` again to ensure lockfile is updated.

Open [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build && npm start
```

### Environment Variables

```env
NEXT_PUBLIC_STELLAR_NETWORK=TESTNET
NEXT_PUBLIC_BACKEND_URL=https://api.orbitstream.xyz
NEXT_PUBLIC_WS_URL=wss://api.orbitstream.xyz
NEXT_PUBLIC_STREAM_CONTRACT_ID=your-contract-id
```

---

## 🧱 Tech Stack

| Layer | Technology |
| ----- | ---------- |

# OrbitStream Frontend

Frontend for OrbitStream — a token-streaming payroll dashboard on Stellar.

## Summary

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- UI primitives: shadcn/ui-style components
- Wallet: Freighter (Stellar)
- Blockchain: Stellar (Horizon testnet integration via `@stellar/stellar-sdk`)

This repo contains the Next.js frontend used by employers and employees to create, monitor, and claim token streams. The UI shows live accruals (client-side ticker) while authoritative state comes from the backend API.

## Project Layout

app/
page.tsx - landing page
dashboard/page.tsx - role-aware dashboard
streams/
page.tsx - all streams list
create/page.tsx - create new stream form
[id]/page.tsx - stream detail view
settings/page.tsx

components/
employer/
StreamTable.tsx - list of active streams
CreateStreamForm.tsx - create stream form
RunwayCard.tsx - runway calculator
employee/
EarnedCounter.tsx - live earnings ticker (UX only)
ClaimButton.tsx - trigger claim via Freighter
ui/ - shared UI primitives (Button, Input, etc.)

hooks/
useWallet.ts - Freighter connection + address
useStream.ts - fetch stream data from backend
useClaimable.ts - local accrual calculator (rate \* elapsed)

lib/
stellar.ts - `stellar-sdk` setup (testnet)
contract.ts - contract call wrappers (if any)
api.ts - backend API client wrapper
utils.ts

## Environment

Create a `.env.local` with at least:

NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_CONTRACT_ID=
NEXT_PUBLIC_STELLAR_NETWORK=testnet

Do NOT store or commit private keys.

## Install & Run

Install dependencies and start dev server:

```bash
npm install
npm run dev
```

The app will be available at http://localhost:3000 (or the next available port).

## Notes & Conventions

- Live balance ticker is for UX only — always confirm final amounts with the backend before making on-chain transactions.
- All on-chain interactions must be signed client-side via Freighter; the app never stores private keys.
- UI components use Tailwind CSS and follow shadcn-style patterns; avoid inline styles.
- Role detection: if a connected wallet address matches an employer record, show employer views.

## What I scaffolded here

- Tailwind config and PostCSS integration
- Basic `useWallet` hook using `@stellar/freighter-api`
- `lib/stellar.ts` connecting to Horizon Testnet via `@stellar/stellar-sdk`
- Placeholder UI components and hooks to jumpstart development

## Contribution

If you'd like to contribute, open issues or PRs against `main`. Run the dev server and follow existing component patterns for UI and hooks.

## License

MIT.
