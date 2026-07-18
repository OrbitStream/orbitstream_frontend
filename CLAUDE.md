# OrbitStream Frontend

## Project

Next.js frontend for OrbitStream — a Stripe-like merchant payment gateway for Stellar.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS + shadcn/ui
- @stellar/stellar-sdk
- Freighter wallet integration
- SWR for data fetching

## What This App Does

Two user flows:

1. **Customer** — views checkout page, scans QR or connects wallet to pay
2. **Merchant** — manages API keys, views transactions, configures webhooks

## Pages

app/
page.tsx - landing page (merchant-facing)
checkout/[sessionId]/page.tsx - customer-facing checkout page
merchant/page.tsx - merchant dashboard
merchant/settings/page.tsx - webhook config, API key management

## Key Components

components/
checkout/
AssetSelector.tsx - USDC/XLM radio group
QRCode.tsx - Stellar payment URI QR code
WalletConnect.tsx - Freighter connect + pay button
PaymentStatus.tsx - polls session, shows pending/confirmed/expired
CheckoutForm.tsx - composes all checkout components
ui/ - shadcn components (Button, Input)

## Hooks

hooks/
useWallet.ts - Freighter connection + signTransaction
useCheckout.ts - fetch checkout session with SWR polling

## lib/

stellar.ts - Stellar SDK setup (Horizon server, network)
stellar-uri.ts - buildStellarPayURI() for QR codes
api.ts - backend API client

## Key Rules

- Checkout page polls session status every 3s while pending
- QR codes use web+stellar:pay? URI scheme
- All payment signing happens in Freighter (never on backend)
- Mobile responsive — customers pay on any device
- Dark theme by default

## Environment Variables

NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_STELLAR_NETWORK=testnet
NEXT_PUBLIC_STELLAR_HORIZON_URL=https://horizon-testnet.stellar.org
NEXT_PUBLIC_STELLAR_EXPLORER_URL=https://stellar.expert/explorer/testnet
