import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../style';
import { PrimaryButton, ToggleButton } from '../Buttons';

type Props = {
  choice: 'yes' | 'no' | null;
  onChoose: (c: 'yes' | 'no') => void;
  onContinue: () => void;
};

const BiometricsScreen: React.FC<Props> = ({ choice, onChoose, onContinue }) => {
  return (
    <View style={styles.screenRoot}>
      <Text style={styles.sectionTitle}>Use Face ID / biometrics?</Text>
      <Text style={styles.sectionSub}>
        Quickly unlock your wallet with Face ID or fingerprint on this device.
      </Text>

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

      <PrimaryButton label="Continue" onPress={onContinue} disabled={!choice} />
    </View>
  );
};

export default BiometricsScreen;
