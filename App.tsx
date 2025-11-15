// App.tsx
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';

import WelcomeScreen from './components/screens/WelcomeScreen';
import CreateSlidesScreen from './components/screens/CreateSlidesScreen';
import MnemonicScreen from './components/screens/MnemonicScreen';
import PasscodeScreen from './components/screens/PasscodeScreen';
import BiometricsScreen from './components/screens/BiometricsScreen';
import NotificationsScreen from './components/screens/NotificationsScreen';
import MainWalletScreen from './components/screens/MainWalletScreen';
import LoginScreen from './components/screens/LoginScreen';
import ImportWalletScreen from './components/screens/ImportWalletScreen';

import type { Wallet } from './type';
import { createDevnetWallet } from './lib/solanaWallet';

type Screen =
  | 'welcome'
  | 'createSlides'
  | 'showMnemonic'
  | 'passcode'
  | 'biometrics'
  | 'notifications'
  | 'login'
  | 'importWallet'
  | 'main';

// demo mnemonic fallback (only used if no real wallet yet)
const DEMO_MNEMONIC: string[] = [
  'gravity',
  'museum',
  'canvas',
  'elevator',
  'signal',
  'safety',
  'token',
  'feather',
  'window',
  'vertra',
  'occupant',
  'network',
  'ocean',
  'bridge',
  'hammer',
  'ledger',
  'vault',
  'silver',
  'random',
  'planet',
  'future',
  'metro',
  'cable',
  'vector',
];

export default function App() {
  const [screen, setScreen] = useState<Screen>('welcome');
  const [wallet, setWallet] = useState<Wallet | null>(null);

  const [slideIndex, setSlideIndex] = useState(0);
  const [passcode, setPasscode] = useState('');
  const [biometricsChoice, setBiometricsChoice] = useState<'yes' | 'no' | null>(null);
  const [notificationsChoice, setNotificationsChoice] =
    useState<'yes' | 'no' | null>(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mnemonicConfirmed, setMnemonicConfirmed] = useState(false);

  // auto-advance intro slides
  useEffect(() => {
    if (screen !== 'createSlides') return;

    setSlideIndex(0);
    const timer = setInterval(() => {
      setSlideIndex(prev => {
        if (prev >= 2) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [screen]);

  /* ---------- CREATE NEW WALLET FLOW ---------- */

  const handleStartCreateWallet = () => {
    // create a real devnet keypair + address
    const devWallet = createDevnetWallet();

    // store mnemonic + address in our app-level Wallet object
    setWallet({
      mnemonic: DEMO_MNEMONIC,
      solanaAddress: devWallet.address,
      network: 'devnet',
    });
    setScreen('createSlides');
  };

  const handleSlidesContinue = () => setScreen('showMnemonic');

  const handleMnemonicConfirmed = () => {
    setMnemonicConfirmed(true);
    setScreen('passcode');
  };

  const handleMnemonicSkipped = () => {
    setMnemonicConfirmed(false);
    setScreen('passcode');
  };

  const handlePasscodeContinue = () => {
    if (passcode.length > 0) {
      setWallet(prev =>
        prev
          ? { ...prev, passcode }
          : {
              mnemonic: DEMO_MNEMONIC,
              passcode,
              // if somehow no wallet existed, create a devnet address on the fly
              ...(() => {
                const devWallet = createDevnetWallet();
                return {
                  solanaAddress: devWallet.address,
                  network: 'devnet' as const,
                };
              })(),
            },
      );
    }
    setScreen('biometrics');
  };

  const handlePasscodeSkipped = () => {
    setScreen('biometrics');
  };

  const handleBiometricsContinue = () => {
    setWallet(prev =>
      prev
        ? { ...prev, biometricsEnabled: biometricsChoice === 'yes' }
        : prev,
    );
    setScreen('notifications');
  };

  const handleNotificationsContinue = () => {
    setWallet(prev => {
      // if for some reason we don't have a wallet yet, create one now
      const base: Wallet =
        prev ??
        (() => {
          const devWallet = createDevnetWallet();
          return {
            mnemonic: DEMO_MNEMONIC,
            solanaAddress: devWallet.address,
            network: 'devnet' as const,
          } as Wallet;
        })();

      return {
        ...base,
        notificationsEnabled: notificationsChoice === 'yes',
      };
    });

    setIsLoggedIn(true);
    setScreen('main');
  };

  /* ---------- IMPORT EXISTING WALLET ---------- */

  const handleStartImportWallet = () => {
    setScreen('importWallet');
  };

  const handleImportedWallet = (words: string[]) => {
    // Phrase is validated inside ImportWalletScreen using @scure/bip39.
    // For now we still generate a devnet keypair here so the app can
    // show a real address without pulling in Node-only deps.
    const devWallet = createDevnetWallet();

    const importedWallet: Wallet = {
      mnemonic: words,
      solanaAddress: devWallet.address,
      network: 'devnet', // you can switch to 'mainnet-beta' once you wire RPC
    };

    setWallet(importedWallet);
    setIsLoggedIn(true);
    setScreen('main');
  };

  const handleCancelImport = () => {
    setScreen('welcome');
  };

  /* ---------- LOGIN / LOGOUT ---------- */

  const handleLogout = () => {
    if (wallet?.passcode) {
      // lock wallet, go to passcode / login UI
      setIsLoggedIn(false);
      setScreen('login');
    } else {
      // no passcode -> full reset
      setWallet(null);
      setPasscode('');
      setIsLoggedIn(false);
      setScreen('welcome');
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setScreen('main');
  };

  const handleBackToWelcomeFromLogin = () => {
    setIsLoggedIn(false);
    setWallet(null);
    setPasscode('');
    setScreen('welcome');
  };

  /* ---------- SCREEN SWITCH ---------- */

  let content: React.ReactNode = null;

  switch (screen) {
    case 'welcome':
      content = (
        <WelcomeScreen
          onCreateWallet={handleStartCreateWallet}
          onImportWallet={handleStartImportWallet}
        />
      );
      break;

    case 'createSlides':
      content = (
        <CreateSlidesScreen
          slideIndex={slideIndex}
          onNextSlide={() => setSlideIndex(i => Math.min(2, i + 1))}
          onPrevSlide={() => setSlideIndex(i => Math.max(0, i - 1))}
          onContinue={handleSlidesContinue}
        />
      );
      break;

    case 'showMnemonic':
      content = (
        <MnemonicScreen
          mnemonic={wallet?.mnemonic ?? DEMO_MNEMONIC}
          onConfirm={handleMnemonicConfirmed}
          onSkip={handleMnemonicSkipped}
        />
      );
      break;

    case 'passcode':
      content = (
        <PasscodeScreen
          passcode={passcode}
          onChangePasscode={setPasscode}
          onContinue={handlePasscodeContinue}
          canSkipPasscode={mnemonicConfirmed}
          onSkipPasscode={mnemonicConfirmed ? handlePasscodeSkipped : undefined}
        />
      );
      break;

    case 'biometrics':
      content = (
        <BiometricsScreen
          choice={biometricsChoice}
          onChoose={setBiometricsChoice}
          onContinue={handleBiometricsContinue}
        />
      );
      break;

    case 'notifications':
      content = (
        <NotificationsScreen
          choice={notificationsChoice}
          onChoose={setNotificationsChoice}
          onContinue={handleNotificationsContinue}
        />
      );
      break;

    case 'importWallet':
      content = (
        <ImportWalletScreen
          onImported={handleImportedWallet}
          onCancel={handleCancelImport}
        />
      );
      break;

    case 'login':
      content = (
        <LoginScreen
          expectedPasscode={wallet?.passcode}
          onSuccess={handleLoginSuccess}
          onBackToWelcome={handleBackToWelcomeFromLogin}
        />
      );
      break;

    case 'main':
      content = (
        <MainWalletScreen
          wallet={wallet}
          onLogout={handleLogout}
        />
      );
      break;
  }

  return (
    <SafeAreaView style={styles.appRoot}>
      <StatusBar barStyle="light-content" />
      {content}
    </SafeAreaView>
  );
}
