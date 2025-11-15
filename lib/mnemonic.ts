// lib/mnemonic.ts
import 'react-native-get-random-values';
import { generateMnemonic } from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';

export function generateNewMnemonic(words: 12 | 24 = 24): string[] {
  const strength = words === 12 ? 128 : 256;
  const phrase = generateMnemonic(wordlist, strength);
  return phrase.split(' ');
}
