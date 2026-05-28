'use client';

import { useWallet } from '../../hooks/useWallet';

interface WalletConnectProps {
  onPay: () => void;
  isPayinging?: boolean;
}

export function WalletConnect({ onPay, isPaying }: WalletConnectProps) {
  const { address, connect, isConnected } = useWallet();

  if (!isConnected) {
    return (
      <button
        onClick={connect}
        className="w-full px-4 py-3 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
      >
        Connect Freighter Wallet
      </button>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2">
        <div className="w-2 h-2 rounded-full bg-emerald-400" />
        <span className="text-xs text-zinc-400 truncate">{address}</span>
      </div>
      <button
        onClick={onPay}
        disabled={isPaying}
        className="w-full px-4 py-3 text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 disabled:bg-zinc-700 disabled:text-zinc-500 text-white rounded-lg transition-colors"
      >
        {isPaying ? 'Signing...' : 'Pay with Freighter'}
      </button>
    </div>
  );
}
