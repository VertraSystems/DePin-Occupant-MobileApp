// components/screens/ImportWalletScreen.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { styles } from '../../style';
import { PrimaryButton, SecondaryButton } from '../Buttons';
import { validateMnemonic } from '@scure/bip39';
import { wordlist } from '@scure/bip39/wordlists/english';

type Props = {
  onImported: (words: string[]) => void;
  onCancel: () => void;
};

const ImportWalletScreen: React.FC<Props> = ({ onImported, onCancel }) => {
  const [phrase, setPhrase] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleImport = () => {
    const cleaned = phrase.trim().toLowerCase().replace(/\s+/g, ' ');
    const words = cleaned ? cleaned.split(' ') : [];

    if (words.length !== 12 && words.length !== 24) {
      setError('Recovery phrase must be 12 or 24 words.');
      return;
    }

    const isValid = validateMnemonic(cleaned, wordlist);
    if (!isValid) {
      setError('Invalid BIP-39 recovery phrase.');
      return;
    }

    setError(null);
    onImported(words);
  };

  return (
    <KeyboardAvoidingView
      style={styles.screenRoot}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 32 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ marginTop: 48, marginBottom: 24 }}>
          <Text style={styles.sectionTitle}>Import existing wallet</Text>
          <Text style={styles.sectionSub}>
            Paste or type your 12 or 24 word recovery phrase in order. Make sure
            no one can see your screen.
          </Text>
        </View>

        <View
          style={{
            backgroundColor: '#050b11',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: '#181f30',
            padding: 16,
            marginBottom: 16,
          }}
        >
          <TextInput
            style={{
              minHeight: 140,
              color: '#ffffff',
              fontSize: 15,
              textAlignVertical: 'top',
            }}
            placeholder="example: gravity museum canvas elevator ..."
            placeholderTextColor="#6b7280"
            value={phrase}
            onChangeText={setPhrase}
            multiline
            autoCapitalize="none"
            autoCorrect={false}
            spellCheck={false}
          />
        </View>

        {error && (
          <Text
            style={{
              color: '#ff6b6b',
              textAlign: 'center',
              marginBottom: 16,
              fontSize: 13,
            }}
          >
            {error}
          </Text>
        )}

        <View style={{ gap: 12, marginTop: 'auto' }}>
          <PrimaryButton label="Import wallet" onPress={handleImport} />
          <SecondaryButton label="Cancel" onPress={onCancel} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ImportWalletScreen;
