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
|-------|-----------|
| Framework | Next.js 16 App Router |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Fonts | Geist Sans + Mono |
| Wallet | Freighter (Stellar) |
| Blockchain | Stellar / Soroban |

---

## 🔗 Related Repos

- [OrbitStream Contracts](https://github.com/OrbitStream/orbitstream-contracts) — Soroban smart contracts
- [OrbitStream Backend](https://github.com/OrbitStream/OrbitStream_backend) — NestJS API + WebSocket
- [OrbitStream Docs](https://github.com/OrbitStream/orbitstream-docs) — Full documentation

---

## 📜 License

MIT License. Copyright (c) 2026 OrbitStream Protocol.
