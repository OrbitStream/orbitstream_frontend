import { Server } from "@stellar/stellar-sdk/rpc";
import { Networks } from "@stellar/stellar-base";

const server = new Server("https://horizon-testnet.stellar.org");
const networkPassphrase = Networks.TESTNET;

export { Server, Networks, server, networkPassphrase };
