// components/screens/BiometricsScreen.tsx (TOP)
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import * as LocalAuthentication from 'expo-local-authentication';
import { styles } from '../../style';
import { PrimaryButton, ToggleButton } from '../Buttons';

export type BiometricsChoice = 'yes' | 'no' | null;

type Props = {
  choice: BiometricsChoice;
  onChoose: (choice: Exclude<BiometricsChoice, null>) => void;
  onContinue: () => void;
};

// ✅ NOW THIS MATCHES THE REAL FILE:
const LOCK_VIDEO = require('../../assets/lock_video.mp4');

// If you rename the file to `lock-animation.mp4`, then change to:
// const LOCK_VIDEO = require('../../assets/lock-animation.mp4');

const BiometricsScreen: React.FC<Props> = ({
  choice,
  onChoose,
  onContinue,
}) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanSucceeded, setScanSucceeded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const runBiometricScan = async () => {
    setError(null);
    setIsScanning(true);
    setScanSucceeded(false);

    try {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      const enrolled = await LocalAuthentication.isEnrolledAsync();

      if (!compatible || !enrolled) {
        setError('Biometrics are not set up on this device.');
        onChoose('no');
        setIsScanning(false);
        return;
      }

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Use Face ID to enable quick unlock',
        fallbackLabel: 'Use passcode',
      });

      setIsScanning(false);

      if (result.success) {
        onChoose('yes');
        setScanSucceeded(true);
      } else {
        setError('Scan cancelled or failed. You can try again or choose Not now.');
        onChoose('no');
      }
    } catch (e) {
      console.warn('Biometrics error', e);
      setIsScanning(false);
      setError('Something went wrong while enabling biometrics.');
      onChoose('no');
    }
  };

  const handleEnablePress = () => {
    if (isScanning) return;
    runBiometricScan();
  };

  const handleNotNowPress = () => {
    if (isScanning) return;
    setError(null);
    setScanSucceeded(false);
    onChoose('no');
  };

  // Continue allowed if:
  // - user chose "no", or
  // - user chose "yes" and the scan actually succeeded
  const canContinue =
    choice === 'no' || (choice === 'yes' && scanSucceeded);

  return (
    <View style={styles.screenRoot}>
      {/* text + lock animation */}
      <View style={styles.biometricsContent}>
        <View style={styles.biometricsTextBlock}>
          <Text style={styles.biometricsTitle}>Unlock quicker</Text>
          <Text style={styles.biometricsSubtitle}>
            Use Face ID or fingerprint so you don&apos;t have to type your
            passcode every time you open Vertra.
          </Text>
        </View>

        <View style={styles.biometricsVideoWrapper}>
          <Video
            source={LOCK_VIDEO}
            style={styles.biometricsVideo}
            resizeMode={ResizeMode.CONTAIN}
            isLooping={false}
            shouldPlay
            isMuted
          />
        </View>

        {error && (
          <Text style={styles.biometricsError}>{error}</Text>
        )}
        {scanSucceeded && choice === 'yes' && !error && (
          <Text style={styles.biometricsSuccess}>
            Face ID enabled for this wallet.
          </Text>
        )}
      </View>

      {/* buttons */}
      <View style={styles.biometricsFooter}>
        <View style={styles.biometricsToggleRow}>
          <ToggleButton
            label={isScanning ? 'Scanning…' : 'Yes, enable'}
            selected={choice === 'yes'}
            onPress={handleEnablePress}
          />
          <ToggleButton
            label="Not now"
            selected={choice === 'no'}
            onPress={handleNotNowPress}
          />
        </View>

        <PrimaryButton
          label="Continue"
          onPress={onContinue}
          disabled={!canContinue || isScanning}
        />
      </View>
    </View>
  );
};

export default BiometricsScreen;
