import { useState, useEffect, useCallback } from "react";
import freighterApi from "@stellar/freighter-api";

export function useWallet() {
  const [address, setAddress] = useState<string | null>(null);

  const connect = useCallback(async () => {
    try {
      // freighter-api exposes `getAddress()` which returns an object with `address`.
      const resp = await freighterApi.getAddress();
      setAddress(resp?.address ?? null);
    } catch (e) {
      setAddress(null);
    }
  }, []);

  useEffect(() => {
    // no-op for now; consumer calls connect()
  }, []);

  return { address, connect };
}
