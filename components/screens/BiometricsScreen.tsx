import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Easing } from 'react-native';
import { styles } from './../../style';
import { PrimaryButton, ToggleButton } from '../Buttons';

type Props = {
  choice: 'yes' | 'no' | null;
  onChoose: (c: 'yes' | 'no') => void;
  onContinue: () => void;
};

const BiometricsScreen: React.FC<Props> = ({ choice, onChoose, onContinue }) => {
  const shackleOffset = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shackleOffset, {
          toValue: -6,
          duration: 550,
          easing: Easing.out(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(shackleOffset, {
          toValue: 0,
          duration: 550,
          easing: Easing.in(Easing.quad),
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [shackleOffset]);

  return (
    <View style={styles.screenRoot}>
      {/* Header, moved slightly down from the very top */}
      <View style={styles.biometricsHeader}>
        <Text style={styles.sectionTitle}>Unlock quicker</Text>
        <Text style={styles.sectionSub}>
          Use Face ID or fingerprint so you don&apos;t have to type your
          passcode every time you open Vertra.
        </Text>
      </View>

      {/* Lock animation, centered in the free vertical space */}
      <View style={styles.biometricsLockArea}>
        <View style={styles.lockCircle}>
          <Animated.View
            style={[
              styles.lockShackle,
              { transform: [{ translateY: shackleOffset }] },
            ]}
          />
          <View style={styles.lockBody} />
        </View>
      </View>

      {/* Choice + primary action, nudged up from bottom */}
      <View style={styles.biometricsButtons}>
        <View style={styles.buttonRow}>
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
          disabled={!choice}
        />
      </View>
    </View>
  );
};

export default BiometricsScreen;
