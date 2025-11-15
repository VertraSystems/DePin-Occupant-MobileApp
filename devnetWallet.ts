// devnetWallet.ts
// Simple helper to create/load a Solana devnet wallet for this device.

import * as SecureStore from 'expo-secure-store';
import { Keypair } from '@solana/web3.js';

const STORAGE_KEY = 'vertra-devnet-keypair';

/**
 * Load an existing devnet keypair from secure storage, or create a new one.
 * The secret key never leaves the device – we store it as a JSON array of bytes.
 */
export async function getOrCreateDevnetWallet(): Promise<Keypair> {
  try {
    const stored = await SecureStore.getItemAsync(STORAGE_KEY);

    if (stored) {
      const arr = JSON.parse(stored) as number[];
      const secretKey = Uint8Array.from(arr);
      return Keypair.fromSecretKey(secretKey);
    }

    const keypair = Keypair.generate();
    await SecureStore.setItemAsync(
      STORAGE_KEY,
      JSON.stringify(Array.from(keypair.secretKey)),
    );
    return keypair;
  } catch (err) {
    console.error('getOrCreateDevnetWallet error', err);
    throw err;
  }
}
