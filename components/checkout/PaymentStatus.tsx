'use client';

interface PaymentStatusProps {
  status: 'pending' | 'paid' | 'expired' | 'cancelled';
  txHash?: string;
}

const EXPLORER_URL = process.env.NEXT_PUBLIC_STELLAR_EXPLORER_URL ?? 'https://stellar.expert/explorer/testnet';

export function PaymentStatus({ status, txHash }: PaymentStatusProps) {
  if (status === 'paid') {
    return (
      <div className="text-center py-6">
        <div className="w-12 h-12 rounded-full bg-emerald-950 border border-emerald-800 flex items-center justify-center mx-auto mb-3">
          <span className="text-emerald-400 text-xl">✓</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">Payment Confirmed</h3>
        {txHash && (
          <a
            href={`${EXPLORER_URL}/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-indigo-400 hover:text-indigo-300 font-mono"
          >
            View on Explorer
          </a>
        )}
      </div>
    );
  }

  if (status === 'expired') {
    return (
      <div className="text-center py-6">
        <div className="w-12 h-12 rounded-full bg-red-950 border border-red-800 flex items-center justify-center mx-auto mb-3">
          <span className="text-red-400 text-xl">✕</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">Session Expired</h3>
        <p className="text-sm text-zinc-500">This checkout session has expired.</p>
      </div>
    );
  }

  if (status === 'cancelled') {
    return (
      <div className="text-center py-6">
        <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mx-auto mb-3">
          <span className="text-zinc-400 text-xl">—</span>
        </div>
        <h3 className="text-lg font-bold text-white mb-1">Cancelled</h3>
        <p className="text-sm text-zinc-500">This checkout was cancelled.</p>
      </div>
    );
  }

  return (
    <div className="text-center py-6">
      <div className="w-12 h-12 rounded-full bg-indigo-950 border border-indigo-800 flex items-center justify-center mx-auto mb-3 animate-pulse">
        <span className="text-indigo-400 text-xl">⟳</span>
      </div>
      <h3 className="text-lg font-bold text-white mb-1">Waiting for Payment</h3>
      <p className="text-sm text-zinc-500">Scan the QR code or pay with your wallet.</p>
    </div>
  );
}
