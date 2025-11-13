import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import { styles } from './style';
import WelcomeScreen from './components/screens/WelcomeScreen';
import CreateSlidesScreen from './components/screens/CreateSlidesScreen';
import MnemonicScreen from './components/screens/MnemonicScreen';
import PasscodeScreen from './components/screens/PasscodeScreen';
import BiometricsScreen from './components/screens/BiometricsScreen';
import NotificationsScreen from './components/screens/NotificationsScreen';
import MainWalletScreen from './components/screens/MainWalletScreen';
import type { Wallet } from './type';

type Screen =
  | 'welcome'
  | 'createSlides'
  | 'showMnemonic'
  | 'passcode'
  | 'biometrics'
  | 'notifications'
  | 'main';

// TEMP: demo mnemonic. DO NOT use this for real funds.
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
  const [notificationsChoice, setNotificationsChoice] = useState<'yes' | 'no' | null>(
    null,
  );

  // Auto-advance slides every 5 seconds
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

  const handleStartCreateWallet = () => {
    setWallet({ mnemonic: DEMO_MNEMONIC });
    setScreen('createSlides');
  };

  const handleSlidesContinue = () => setScreen('showMnemonic');
  const handleMnemonicContinue = () => setScreen('passcode');

  const handlePasscodeContinue = () => {
    setWallet(prev => (prev ? { ...prev, passcode } : prev));
    setScreen('biometrics');
  };

  const handleBiometricsContinue = () => {
    setWallet(prev =>
      prev ? { ...prev, biometricsEnabled: biometricsChoice === 'yes' } : prev,
    );
    setScreen('notifications');
  };

  const handleNotificationsContinue = () => {
    setWallet(prev =>
      prev ? { ...prev, notificationsEnabled: notificationsChoice === 'yes' } : prev,
    );
    setScreen('main');
  };

  let content: React.ReactNode = null;

  switch (screen) {
    case 'welcome':
      content = (
        <WelcomeScreen
          onCreateWallet={handleStartCreateWallet}
          onImportWallet={() => {
            alert('Import wallet coming soon.');
          }}
        />
      );
      break;
    case 'createSlides':
      content = (
        <CreateSlidesScreen
          slideIndex={slideIndex}
          onNextSlide={() => setSlideIndex(i => Math.min(2, i + 1))}
          onContinue={handleSlidesContinue}
        />
      );
      break;
    case 'showMnemonic':
      content = (
        <MnemonicScreen
          mnemonic={wallet?.mnemonic ?? DEMO_MNEMONIC}
          onContinue={handleMnemonicContinue}
        />
      );
      break;
    case 'passcode':
      content = (
        <PasscodeScreen
          passcode={passcode}
          onChangePasscode={setPasscode}
          onContinue={handlePasscodeContinue}
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
    case 'main':
      content = <MainWalletScreen wallet={wallet} />;
      break;
  }

  return (
    <SafeAreaView style={styles.appRoot}>
      <StatusBar barStyle="light-content" />
      {content}
    </SafeAreaView>
  );
}
