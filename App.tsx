import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import { WalletConnectModal, useWalletConnectModal } from '@walletconnect/modal-react-native';
import Constants from 'expo-constants';
import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';

// --- 1. Get Project ID from app.json ---
const WC_PROJECT_ID = (Constants?.expoConfig?.extra as any)?.EXPO_PUBLIC_WC_PROJECT_ID ?? '';

// --- 2. Define Connection Metadata ---
const providerMetadata = {
  name: 'Vertra Community',
  description: 'Community app sign-in with Solana wallet.',
  url: 'https:vertra.app',
  icons: ['https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/solana.svg'],
  redirect: {
    native: 'vertra-community://',
    universal: 'https:vertra.app',
  },
};

// --- 3. Define Session Parameters (THIS IS THE FIX) ---
// The key is 'namespaces', not 'requiredNamespaces'
const sessionParams = {
  namespaces: {
    solana: {
      chains: ['solana:103'], // devnet: 103, mainnet: 101
      methods: ['solana_signTransaction', 'solana_signMessage'],
      events: [],
    },
  },
};

export default function App() {
  const { isConnected, address, open, close } = useWalletConnectModal();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.card}>
        <Text style={styles.title}>Vertra Community</Text>
        <Text style={styles.subtitle}>Sign in with your Solana wallet</Text>

        {!isConnected ? (
          <TouchableOpacity
            style={[styles.btn, styles.btnPrimary]}
            // open() call is empty
            onPress={() => open()}
          >
            <Text style={styles.btnText}>Connect Phantom</Text>
          </TouchableOpacity>
        ) : (
          <>
            <View style={styles.addressBox}>
              <Text style={styles.label}>Connected</Text>
              <Text style={styles.addr}>{short(address)}</Text>
            </View>
            <TouchableOpacity style={[styles.btn, styles.btnGhost]} onPress={() => close()}>
              <Text style={styles.btnText}>Disconnect</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* --- 4. Render the Modal (THIS IS THE FIX) --- */}
      <WalletConnectModal
        projectId={WC_PROJECT_ID}
        providerMetadata={providerMetadata}
        sessionParams={sessionParams} // Pass the 'namespaces' object here
      />
    </SafeAreaView>
  );
}

// Helper function to shorten the address
function short(pk?: string, n = 6) {
  if (!pk) return '—';
  return pk.length <= 2 * n ? pk : `${pk.slice(0, n)}…${pk.slice(-n)}`;
}

// --- Styles (no changes) ---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0f',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: '#111118',
    borderColor: '#23232f',
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
  },
  title: { color: 'white', fontSize: 22, fontWeight: '800' },
  subtitle: { color: '#9aa0aa', marginTop: 6, marginBottom: 16 },
  addressBox: {
    backgroundColor: '#0f1320',
    borderColor: '#27314b',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  label: { color: '#8ea0c0', fontSize: 12, marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.5 },
  addr: { color: 'white', fontFamily: 'monospace', fontSize: 16 },
  btn: { borderRadius: 12, paddingVertical: 14, alignItems: 'center' },
  btnPrimary: { backgroundColor: '#6c5ce7' },
  btnGhost: { backgroundColor: '#1b1b24', borderWidth: 1, borderColor: '#2a2a3a' },
  btnText: { color: 'white', fontWeight: '700' },
});