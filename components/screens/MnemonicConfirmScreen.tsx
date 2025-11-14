// components/screens/MnemonicConfirmScreen.tsx
import React, { useMemo, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../../style';
import { PrimaryButton, SecondaryButton } from '../Buttons';

type Props = {
  mnemonic: string[];
  onSuccess: () => void; // all 3 correct -> continue to passcode
  onSkip: () => void;    // user bails out -> treat as "Skip for now"
};

function humanIndex(i: number) {
  return i + 1;
}

const MnemonicConfirmScreen: React.FC<Props> = ({
  mnemonic,
  onSuccess,
  onSkip,
}) => {
  // pick up to 3 unique random indices from the phrase
  const quizIndices = useMemo(() => {
    const total = mnemonic.length;
    const count = Math.min(3, total);
    const indices: number[] = [];

    while (indices.length < count && total > 0) {
      const n = Math.floor(Math.random() * total);
      if (!indices.includes(n)) indices.push(n);
    }
    return indices;
  }, [mnemonic]);

  const [answers, setAnswers] = useState<string[]>(
    () => Array(quizIndices.length).fill('')
  );
  const [error, setError] = useState<string | null>(null);

  const handleChangeAnswer = (i: number, value: string) => {
    setAnswers(prev => {
      const next = [...prev];
      next[i] = value;
      return next;
    });
    if (error) setError(null);
  };

  const allFilled =
    answers.length === quizIndices.length &&
    answers.every(a => a.trim().length > 0);

  const handleConfirm = () => {
    const allCorrect = quizIndices.every((mnIdx, i) => {
      const expected = mnemonic[mnIdx]?.trim().toLowerCase();
      const given = answers[i]?.trim().toLowerCase();
      return expected === given;
    });

    if (!allCorrect) {
      setError('One or more words are incorrect. Double-check and try again.');
      return;
    }

    onSuccess();
  };

  return (
    <View style={styles.screenRoot}>
      {/* Header */}
      <View style={styles.mnemonicConfirmHeader}>
        <Text style={styles.mnemonicConfirmTitle}>Confirm Recovery Phrase</Text>
        <Text style={styles.mnemonicConfirmSub}>
          Type the words from your recovery phrase at the positions below.
        </Text>
      </View>

      {/* Inputs in the middle of the screen */}
      <View style={styles.mnemonicConfirmForm}>
        {quizIndices.map((mnIdx, i) => (
          <View key={mnIdx} style={styles.mnemonicConfirmRow}>
            <Text style={styles.mnemonicConfirmLabel}>
              Word {humanIndex(mnIdx)}
            </Text>
            <TextInput
              style={styles.mnemonicConfirmInput}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Type the word"
              placeholderTextColor="#5b6278"
              value={answers[i]}
              onChangeText={text => handleChangeAnswer(i, text)}
            />
          </View>
        ))}

        {error && (
          <Text style={styles.mnemonicConfirmError}>{error}</Text>
        )}
      </View>

      {/* Footer buttons */}
      <View style={styles.mnemonicFooter}>
        <PrimaryButton
          label="Confirm & Continue"
          onPress={handleConfirm}
          disabled={!allFilled}
        />
        <SecondaryButton label="Skip for now" onPress={onSkip} />
      </View>
    </View>
  );
};

export default MnemonicConfirmScreen;
