import { useState, useCallback } from 'react';
import freighterApi from '@stellar/freighter-api';
import { networkPassphrase } from '../lib/stellar';

export function useWallet() {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = useCallback(async () => {
    setIsConnecting(true);
    try {
      const isInstalled = await freighterApi.isConnected();
      if (!isInstalled) {
        throw new Error(
          'Freighter wallet is not installed. Please install the Freighter browser extension.',
        );
      }
      const resp = await freighterApi.getAddress();
      setAddress(resp?.address ?? null);
    } catch (err) {
      setAddress(null);
      throw err;
    } finally {
      setIsConnecting(false);
    }
  }, []);

  const disconnect = useCallback(() => {
    setAddress(null);
  }, []);

  const signTransaction = useCallback(async (xdr: string) => {
    try {
      const result = await freighterApi.signTransaction(xdr, {
        networkPassphrase,
      });
      return result.signedTxXdr;
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Transaction signing failed';
      throw new Error(message);
    }
  }, []);

  return {
    address,
    connect,
    disconnect,
    signTransaction,
    isConnected: !!address,
    isConnecting,
  };
}
