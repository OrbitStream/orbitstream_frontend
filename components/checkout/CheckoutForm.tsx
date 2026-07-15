'use client';

import { useState } from 'react';
import {
  TransactionBuilder,
  Asset,
  Memo,
  Operation,
} from '@stellar/stellar-sdk';
import { server, networkPassphrase } from '../../lib/stellar';
import { useWallet } from '../../hooks/useWallet';
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
  const [payError, setPayError] = useState<string | null>(null);
  const { address, signTransaction } = useWallet();

  const payURI = buildStellarPayURI({
    destination: session.receivingAccount,
    amount: session.amount,
    assetCode: session.assetCode,
    assetIssuer: session.assetIssuer ?? undefined,
    memo: session.memo ?? undefined,
  });

  const handlePay = async () => {
    if (!address) return;
    setIsPaying(true);
    setPayError(null);

    try {
      const asset =
        session.assetCode === 'XLM'
          ? Asset.native()
          : new Asset(session.assetCode, session.assetIssuer!);

      const account = await server.loadAccount(address);
      const baseFee = await server.fetchBaseFee();

      const txBuilder = new TransactionBuilder(account, {
        fee: baseFee.toString(),
        networkPassphrase,
      })
        .addOperation(
          Operation.payment({
            destination: session.receivingAccount,
            asset,
            amount: session.amount,
          }),
        )
        .setTimeout(180);

      if (session.memo) {
        txBuilder.addMemo(Memo.text(session.memo));
      }

      const tx = txBuilder.build();
      const signedXdr = await signTransaction(tx.toXDR());
      const signedTx = TransactionBuilder.fromXDR(signedXdr, networkPassphrase);

      await server.submitTransaction(signedTx);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Payment failed';
      setPayError(message);
    } finally {
      setIsPaying(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <p className="text-3xl font-black font-mono text-white">{session.amount}</p>
        <p className="text-sm text-zinc-500">{session.assetCode}</p>
      </div>

      <PaymentStatus status={session.status} />

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

          {payError && (
            <div className="bg-red-950 border border-red-800 rounded-lg px-3 py-2">
              <p className="text-xs text-red-400">{payError}</p>
            </div>
          )}

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
