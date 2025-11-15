// type.ts
export type Wallet = {
  mnemonic: string[];

  passcode?: string;
  biometricsEnabled?: boolean;
  notificationsEnabled?: boolean;

  // 👇 new fields
  solanaAddress?: string;               // base58 address
  network?: 'devnet' | 'testnet' | 'mainnet-beta';
};
