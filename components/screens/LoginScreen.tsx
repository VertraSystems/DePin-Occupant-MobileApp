// components/screens/LoginScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from '../../style';
import { PrimaryButton, SecondaryButton } from '../Buttons';

type Props = {
  // passcode we stored on the wallet (can be undefined)
  expectedPasscode?: string;
  // called when the user enters the correct passcode
  onSuccess: () => void;
  // go back to the very start / welcome screen
  onBackToWelcome: () => void;
};

const LoginScreen: React.FC<Props> = ({
  expectedPasscode,
  onSuccess,
  onBackToWelcome,
}) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleUnlock = () => {
    // If for some reason no passcode is set, just let them in
    if (!expectedPasscode || expectedPasscode.length === 0) {
      onSuccess();
      return;
    }

    if (input === expectedPasscode) {
      setError(null);
      onSuccess();
    } else {
      setError('Incorrect passcode. Try again.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.passcodeRoot}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.passcodeHeader}>
        <Text style={styles.passcodeTitle}>Unlock wallet</Text>
        <Text style={styles.passcodeSubtitle}>
          Enter the passcode you set during wallet setup to access your Vertra
          wallet again.
        </Text>
      </View>

      <View style={styles.passcodeBody}>
        <TextInput
          style={styles.passcodeInput}
          secureTextEntry
          keyboardType="number-pad"
          value={input}
          onChangeText={setInput}
          placeholder="••••"
          placeholderTextColor="#4b5563"
        />

        {error && (
          <Text
            style={{
              color: '#ff6b6b',
              textAlign: 'center',
              marginTop: 8,
              fontSize: 13,
            }}
          >
            {error}
          </Text>
        )}
      </View>

      <View style={styles.passcodeFooter}>
        <PrimaryButton label="Unlock" onPress={handleUnlock} />

        <SecondaryButton
          label="Back to start"
          onPress={onBackToWelcome}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
