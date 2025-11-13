import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../../style';
import { PrimaryButton } from '../Buttons';

type Props = {
  passcode: string;
  onChangePasscode: (value: string) => void;
  onContinue: () => void;
};

const PasscodeScreen: React.FC<Props> = ({
  passcode,
  onChangePasscode,
  onContinue,
}) => {
  return (
    <View style={styles.screenRoot}>
      <Text style={styles.sectionTitle}>Set a passcode</Text>
      <Text style={styles.sectionSub}>
        Add a 4–6 digit passcode to open your wallet on this device.
      </Text>

      <TextInput
        style={styles.passcodeInput}
        value={passcode}
        onChangeText={onChangePasscode}
        keyboardType="numeric"
        secureTextEntry
        maxLength={6}
        placeholder="••••"
        placeholderTextColor="#555a66"
      />

      <PrimaryButton
        label="Continue"
        onPress={onContinue}
        disabled={passcode.length < 4}
      />
    </View>
  );
};

export default PasscodeScreen;
