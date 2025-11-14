// components/screens/BiometricsScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { styles } from '../../style';
import { PrimaryButton, ToggleButton } from '../Buttons';

// what the user can pick on this screen
export type BiometricsChoice = 'yes' | 'no' | null;

type Props = {
  choice: BiometricsChoice;
  onChoose: (choice: Exclude<BiometricsChoice, null>) => void;
  onContinue: () => void;
};

const LOCK_VIDEO = require('../../assets/lock_video.mp4');
const BiometricsScreen: React.FC<Props> = ({
  choice,
  onChoose,
  onContinue,
}) => {
  const canContinue = choice !== null;

  return (
    <View style={styles.screenRoot}>
      {/* Centered title + copy + lock animation */}
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
            isLooping={false}   // play once
            shouldPlay          // start immediately
            isMuted             // no sound
          />
        </View>
      </View>

      {/* Choice buttons + continue */}
      <View style={styles.biometricsFooter}>
        <View style={styles.biometricsToggleRow}>
          <ToggleButton
            label="Yes, enable"
            selected={choice === 'yes'}
            onPress={() => onChoose('yes')}
          />
          <ToggleButton
            label="Not now"
            selected={choice === 'no'}
            onPress={() => onChoose('no')}
          />
        </View>

        <PrimaryButton
          label="Continue"
          onPress={onContinue}
          disabled={!canContinue}
        />
      </View>
    </View>
  );
};

export default BiometricsScreen;
