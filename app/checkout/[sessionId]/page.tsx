'use client';

import { useParams } from 'next/navigation';
import { useCheckout } from '../../../hooks/useCheckout';
import { CheckoutForm } from '../../../components/checkout/CheckoutForm';

export default function CheckoutPage() {
  const params = useParams();
  const sessionId = params.sessionId as string;
  const { session, isLoading, error } = useCheckout(sessionId);

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center">
              <span className="text-xs font-black text-white">O</span>
            </div>
            <span className="text-sm font-bold text-white">OrbitStream</span>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          {isLoading && (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mx-auto mb-3" />
              <p className="text-sm text-zinc-500">Loading checkout...</p>
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <div className="w-12 h-12 rounded-full bg-red-950 border border-red-800 flex items-center justify-center mx-auto mb-3">
                <span className="text-red-400 text-xl">!</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Session Not Found</h3>
              <p className="text-sm text-zinc-500">This checkout link is invalid or has expired.</p>
            </div>
          )}

          {session && <CheckoutForm session={session} />}
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-zinc-700 mt-6">
          Powered by OrbitStream
        </p>
      </div>
    </div>
  );
}
