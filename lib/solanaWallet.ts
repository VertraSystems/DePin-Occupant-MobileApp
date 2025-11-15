// lib/solanaWallet.ts
import 'react-native-get-random-values';
import {
  Connection,
  Keypair,
  PublicKey,
  LAMPORTS_PER_SOL,
  clusterApiUrl,
} from '@solana/web3.js';

export type SolanaWallet = {
  keypair: Keypair;
  address: string;
};

/**
 * Create a random devnet wallet.
 * (For now this is not tied to the mnemonic – just a real devnet keypair.)
 */
export function createDevnetWallet(): SolanaWallet {
  const keypair = Keypair.generate();
  return {
    keypair,
    address: keypair.publicKey.toBase58(),
  };
}

export const devnetConnection = new Connection(
  clusterApiUrl('devnet'),
  'confirmed'
);

/**
 * Optional helper: request a small airdrop on devnet so the wallet has funds.
 */
export async function requestDevnetAirdrop(
  address: string,
  sol: number = 0.1
) {
  const pubkey = new PublicKey(address);
  const sig = await devnetConnection.requestAirdrop(
    pubkey,
    sol * LAMPORTS_PER_SOL
  );
  await devnetConnection.confirmTransaction(sig, 'confirmed');
  return sig;
}
