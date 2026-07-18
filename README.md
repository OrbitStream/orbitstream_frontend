# OrbitStream Frontend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)

> **The checkout UI and merchant dashboard for OrbitStream — Stripe-like payments on Stellar.**

Next.js 16 application with two user flows: a customer-facing checkout page (QR code + wallet payment) and a merchant dashboard (API keys, transactions, webhooks).

---

## Features

- **Checkout Page** — customer-facing payment page with QR code, Freighter wallet connect, and real-time status polling
- **Merchant Dashboard** — wallet login, API key management, transaction history
- **Settings** — webhook URL configuration, API key generation/revocation
- **Dark Theme** — clean UI built for crypto-native users
- **Mobile Responsive** — customers pay on any device

---

## Pages

| Route                   | Description                                     |
| ----------------------- | ----------------------------------------------- |
| `/`                     | Landing page — features, how it works, CTA      |
| `/checkout/[sessionId]` | Customer checkout — QR code, wallet pay, status |
| `/merchant`             | Merchant dashboard — login, stats, payments     |
| `/merchant/settings`    | Settings — API keys, webhook config             |

---

## Project Structure

```
app/
├── layout.tsx                  # Root layout
├── page.tsx                    # Landing page
├── checkout/[sessionId]/page.tsx  # Checkout page
├── merchant/page.tsx           # Dashboard
└── merchant/settings/page.tsx  # Settings
components/
├── checkout/
│   ├── AssetSelector.tsx       # USDC/XLM selector
│   ├── QRCode.tsx              # Stellar payment QR
│   ├── WalletConnect.tsx       # Freighter connect + pay
│   ├── PaymentStatus.tsx       # Pending/confirmed/expired
│   └── CheckoutForm.tsx        # Composes all above
└── ui/                         # shadcn components
hooks/
├── useWallet.ts                # Freighter connection + signing
└── useCheckout.ts              # Session polling with SWR
lib/
├── api.ts                      # Backend API client
├── stellar.ts                  # SDK setup
└── stellar-uri.ts              # web+stellar:pay? URI builder
```

---

## Getting Started

### Prerequisites

- Node.js >= 20
- [Freighter Wallet](https://freighter.app) browser extension

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_STELLAR_NETWORK=testnet
NEXT_PUBLIC_STELLAR_HORIZON_URL=https://horizon-testnet.stellar.org
NEXT_PUBLIC_STELLAR_EXPLORER_URL=https://stellar.expert/explorer/testnet
```

### Build

```bash
npm run build && npm start
```

---

## Tech Stack

| Layer         | Technology                    |
| ------------- | ----------------------------- |
| Framework     | Next.js 16 (App Router)       |
| Language      | TypeScript 5                  |
| Styling       | Tailwind CSS 4, shadcn/ui     |
| Data Fetching | SWR                           |
| Blockchain    | Stellar SDK, Freighter Wallet |
| QR Codes      | qrcode.react                  |

---

## Related Repositories

- [OrbitStream_backend](https://github.com/OrbitStream/OrbitStream_backend) — Backend API
- [orbitstream_contracts](https://github.com/OrbitStream/orbitstream_contracts) — Escrow contract
- [orbitstream_docs](https://github.com/OrbitStream/orbitstream_docs) — Documentation
- [stellar-checkout-sdk](https://github.com/OrbitStream/stellar-checkout-sdk) — JS/TS SDK

---

## License

MIT License. Copyright (c) 2026 OrbitStream.
