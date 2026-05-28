export function buildStellarPayURI(params: {
  destination: string;
  amount: string;
  assetCode?: string;
  assetIssuer?: string;
  memo?: string;
}): string {
  const searchParams = new URLSearchParams();
  searchParams.set('destination', params.destination);
  searchParams.set('amount', params.amount);

  if (params.assetCode && params.assetCode !== 'XLM') {
    searchParams.set('asset_code', params.assetCode);
    if (params.assetIssuer) {
      searchParams.set('asset_issuer', params.assetIssuer);
    }
  }

  if (params.memo) {
    searchParams.set('memo', params.memo);
    searchParams.set('memo_type', 'MEMO_TEXT');
  }

  return `web+stellar:pay?${searchParams.toString()}`;
}
