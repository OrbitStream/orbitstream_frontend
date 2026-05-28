'use client';

import { useState } from 'react';
import { AssetSelector } from './AssetSelector';
import { QRCodeDisplay } from './QRCode';
import { WalletConnect } from './WalletConnect';
import { PaymentStatus } from './PaymentStatus';
import { buildStellarPayURI } from '../../lib/stellar-uri';
import type { CheckoutSession } from '../../lib/api';

interface CheckoutFormProps {
  session: CheckoutSession;
}

export function CheckoutForm({ session }: CheckoutFormProps) {
  const [isPaying, setIsPaying] = useState(false);

  const payURI = buildStellarPayURI({
    destination: session.receivingAccount,
    amount: session.amount,
    assetCode: session.assetCode,
    assetIssuer: session.assetIssuer ?? undefined,
    memo: session.memo ?? undefined,
  });

  const handlePay = async () => {
    setIsPaying(true);
    // In a real implementation, this would build and sign a Stellar transaction via Freighter
    // For now, the user scans the QR code
    setTimeout(() => setIsPaying(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Amount Display */}
      <div className="text-center">
        <p className="text-3xl font-black font-mono text-white">{session.amount}</p>
        <p className="text-sm text-zinc-500">{session.assetCode}</p>
      </div>

      {/* Status */}
      <PaymentStatus status={session.status} />

      {/* QR Code (only when pending) */}
      {session.status === 'pending' && (
        <>
          <QRCodeDisplay uri={payURI} address={session.receivingAccount} />

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-zinc-950 px-2 text-zinc-500">or</span>
            </div>
          </div>

          <WalletConnect onPay={handlePay} isPaying={isPaying} />

          {/* Memo */}
          {session.memo && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2">
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Memo (required)</p>
              <code className="text-xs text-zinc-300 font-mono">{session.memo}</code>
            </div>
          )}
        </>
      )}
    </div>
  );
}
