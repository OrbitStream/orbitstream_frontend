# OrbitStream Frontend

## Project
Next.js frontend for OrbitStream — a token streaming payroll platform on Stellar.

## Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- @stellar/stellar-sdk
- Freighter wallet integration

## What This App Does
Two user types:
1. Employer — creates/manages payroll streams, monitors runway
2. Employee — views earned balance live, claims tokens

## Pages
app/
  page.tsx                  - landing page
  dashboard/page.tsx        - role-aware dashboard
  streams/
    page.tsx                - all streams list
    create/page.tsx         - create new stream form
    [id]/page.tsx           - stream detail view
  settings/page.tsx

## Key Components
components/
  employer/
    StreamTable.tsx         - list of all active streams
    CreateStreamForm.tsx    - create stream form
    RunwayCard.tsx          - shows days of runway remaining
  employee/
    EarnedCounter.tsx       - live ticking earned balance
    ClaimButton.tsx         - triggers claim transaction
  ui/                       - shadcn components

## Hooks
hooks/
  useWallet.ts              - Freighter connection + address
  useStream.ts              - fetch stream data from backend
  useClaimable.ts           - real-time accrual (rate * elapsed, JS calc)

## lib/
  stellar.ts                - stellar-sdk setup
  contract.ts               - contract call wrappers
  api.ts                    - backend API client
  utils.ts

## Key Rules
- Live balance ticker is UX only — always confirm with backend before showing final amounts
- Never store private keys anywhere
- All contract interactions go through Freighter (user signs in browser)
- All data reads go through backend API (not direct chain calls)
- Mobile responsive — DeFi users are on mobile
- Human-readable error messages, never raw contract errors
- Role detection: if wallet address matches employer record = employer view

## Environment Variables
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_CONTRACT_ID=
NEXT_PUBLIC_STELLAR_NETWORK=testnet

## Component Rules
- Use shadcn/ui as base, customize with Tailwind
- No inline styles
- All forms validated client-side before submission
