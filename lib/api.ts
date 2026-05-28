const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

export interface CheckoutSession {
  id: string;
  amount: string;
  assetCode: string;
  assetIssuer: string | null;
  receivingAccount: string;
  memo: string | null;
  status: 'pending' | 'paid' | 'expired' | 'cancelled';
  successUrl: string | null;
  cancelUrl: string | null;
  expiresAt: string;
  createdAt: string;
}

export async function fetchSession(sessionId: string): Promise<CheckoutSession> {
  const res = await fetch(`${API_URL}/v1/checkout/sessions/${sessionId}`);
  if (!res.ok) throw new Error('Session not found');
  return res.json();
}

export async function registerMerchant(walletAddress: string, businessName: string, email: string) {
  const res = await fetch(`${API_URL}/merchants/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ walletAddress, businessName, email }),
  });
  if (!res.ok) throw new Error('Registration failed');
  return res.json();
}

export async function merchantLogin(walletAddress: string) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ walletAddress }),
  });
  if (!res.ok) throw new Error('Login failed');
  return res.json();
}
