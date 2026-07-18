import useSWR from 'swr';
import { fetchSession, type CheckoutSession } from '../lib/api';

export function useCheckout(sessionId: string | null) {
  const { data, error, isLoading } = useSWR<CheckoutSession>(
    sessionId ? `/v1/checkout/sessions/${sessionId}` : null,
    () => fetchSession(sessionId!),
    {
      refreshInterval: (data) => (data?.status === 'pending' ? 3000 : 0),
      revalidateOnFocus: true,
    },
  );

  return {
    session: data,
    isLoading,
    error,
    isPaid: data?.status === 'paid',
    isExpired: data?.status === 'expired',
    isCancelled: data?.status === 'cancelled',
    isPending: data?.status === 'pending',
  };
}
