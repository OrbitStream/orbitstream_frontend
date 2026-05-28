'use client';

import { useState, useEffect } from 'react';
import { useWallet } from '../../hooks/useWallet';
import { merchantLogin } from '../../lib/api';

export default function MerchantDashboard() {
  const { address, connect, isConnected } = useWallet();
  const [token, setToken] = useState<string | null>(null);
  const [loggingIn, setLoggingIn] = useState(false);

  const handleLogin = async () => {
    if (!address) return;
    setLoggingIn(true);
    try {
      const result = await merchantLogin(address);
      setToken(result.access_token);
    } catch (err) {
      console.error('Login failed:', err);
    } finally {
      setLoggingIn(false);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-zinc-800/60 bg-zinc-950/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
              <span className="text-xs font-black text-white">O</span>
            </div>
            <span className="text-sm font-bold text-white">OrbitStream</span>
          </div>
          <a href="/" className="text-sm text-zinc-400 hover:text-white">
            Home
          </a>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        {!isConnected ? (
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold mb-4">Merchant Dashboard</h1>
            <p className="text-zinc-400 mb-6">Connect your Stellar wallet to access your dashboard.</p>
            <button
              onClick={connect}
              className="px-6 py-3 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors"
            >
              Connect Freighter Wallet
            </button>
          </div>
        ) : !token ? (
          <div className="text-center py-20">
            <h1 className="text-2xl font-bold mb-4">Welcome Back</h1>
            <p className="text-zinc-400 mb-2">Wallet: <code className="text-zinc-300 text-xs">{address}</code></p>
            <button
              onClick={handleLogin}
              disabled={loggingIn}
              className="px-6 py-3 text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 disabled:bg-zinc-700 text-white rounded-lg transition-colors mt-4"
            >
              {loggingIn ? 'Logging in...' : 'Sign In'}
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-sm text-zinc-500">{address}</p>
              </div>
              <a
                href="/merchant/settings"
                className="px-4 py-2 text-sm text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg transition-colors"
              >
                Settings
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Total Sessions', value: '—' },
                { label: 'Payments Received', value: '—' },
                { label: 'Revenue', value: '—' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
                  <p className="text-xs text-zinc-500 mb-1">{stat.label}</p>
                  <p className="text-2xl font-black font-mono text-white">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
              <h2 className="text-sm font-bold text-white mb-4">Recent Payments</h2>
              <p className="text-sm text-zinc-500">No payments yet. Create a checkout session to get started.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
