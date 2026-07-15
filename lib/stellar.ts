import { Horizon } from '@stellar/stellar-sdk';
import { Networks } from '@stellar/stellar-sdk';

const horizonUrl =
  process.env.NEXT_PUBLIC_STELLAR_HORIZON_URL ?? 'https://horizon-testnet.stellar.org';

const isMainnet =
  process.env.NEXT_PUBLIC_STELLAR_NETWORK === 'mainnet' ||
  process.env.NEXT_PUBLIC_STELLAR_NETWORK === 'PUBLIC';

const server = new Horizon.Server(horizonUrl);
const networkPassphrase = isMainnet ? Networks.PUBLIC : Networks.TESTNET;

export { server, networkPassphrase, isMainnet };
