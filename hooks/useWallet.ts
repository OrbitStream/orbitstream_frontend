import { useState, useCallback } from 'react';
import freighterApi from '@stellar/freighter-api';

export function useWallet() {
  const [address, setAddress] = useState<string | null>(null);

  const connect = useCallback(async () => {
    try {
      const resp = await freighterApi.getAddress();
      setAddress(resp?.address ?? null);
    } catch {
      setAddress(null);
    }
  }, []);

  const disconnect = useCallback(() => {
    setAddress(null);
  }, []);

  const signTransaction = useCallback(async (xdr: string) => {
    try {
      const result = await freighterApi.signTransaction(xdr, {
        networkPassphrase: process.env.NEXT_PUBLIC_STELLAR_NETWORK === 'mainnet'
          ? 'Public Global Stellar Network ; September 2015'
          : 'Test SDF Network ; September 2015',
      });
      return result.signedTxXdr;
    } catch (err: any) {
      throw new Error(err?.message ?? 'Transaction signing failed');
    }
  }, []);

  return {
    address,
    connect,
    disconnect,
    signTransaction,
    isConnected: !!address,
  };
}
