// lib/mnemonic.ts
import 'react-native-get-random-values';
import { generateMnemonic } from '@scure/bip39';
// TS doesn't ship types for this sub-path, but it exists at runtime.
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { wordlist } from '@scure/bip39/wordlists/english';

/**
 * Generate a real BIP-39 mnemonic (12 or 24 words).
 * Compatible with Phantom, Ledger, etc.
 */
export function generateNewMnemonic(words: 12 | 24 = 24): string[] {
  const strength = words === 12 ? 128 : 256; // 12 = 128 bits, 24 = 256 bits
  const phrase = generateMnemonic(wordlist, strength);
  return phrase.split(' ');
}
