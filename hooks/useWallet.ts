import { useState, useEffect, useCallback } from "react";
import freighterApi from "@stellar/freighter-api";

export function useWallet() {
  const [address, setAddress] = useState<string | null>(null);

  const connect = useCallback(async () => {
    try {
      const resp = await freighterApi.getPublicKey();
      setAddress(resp);
    } catch (e) {
      setAddress(null);
    }
  }, []);

  useEffect(() => {
    // no-op for now; consumer calls connect()
  }, []);

  return { address, connect };
}
