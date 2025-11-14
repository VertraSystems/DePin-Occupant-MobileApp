// components/screens/MnemonicScreen.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../../style';
import { PrimaryButton, SecondaryButton } from '../Buttons';

type Props = {
  mnemonic: string[];
  // called when user has revealed AND confirmed they wrote it down
  onConfirmWritten: () => void;
  // called when user taps "Skip for now"
  onSkip: () => void;
};

const MnemonicScreen: React.FC<Props> = ({
  mnemonic,
  onConfirmWritten,
  onSkip,
}) => {
  const [revealed, setRevealed] = useState(false);

  const handlePrimaryPress = () => {
    if (!revealed) {
      // first press: reveal the words
      setRevealed(true);
    } else {
      // second press (after revealed): user says they wrote it down
      onConfirmWritten();
    }
  };

  return (
    <View style={styles.screenRoot}>
      {/* Header (pulled down a bit in styles) */}
      <View style={styles.mnemonicHeader}>
        <Text style={styles.mnemonicTitle}>Your secret phrase</Text>
        <Text style={styles.mnemonicSubtitle}>
          Write these {mnemonic.length} words down in order. Keep them offline
          and never share them.
        </Text>
      </View>

      {/* Card area */}
      <View style={styles.mnemonicCardOuter}>
        {!revealed ? (
          // Intro "Write it down" state
          <View style={styles.mnemonicIntroCard}>
            <Text style={styles.mnemonicIntroTitle}>Write it down</Text>
            <Text style={styles.mnemonicIntroBody}>
              Make sure no one is watching—this phrase gives full access to your
              wallet. Never share it with anyone.
            </Text>
          </View>
        ) : (
          // Revealed phrase in a scrollable grid
          <ScrollView
            style={styles.mnemonicScroll}
            contentContainerStyle={styles.mnemonicScrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.mnemonicGrid}>
              {mnemonic.map((word, idx) => (
                <View key={idx} style={styles.mnemonicWordBox}>
                  <Text style={styles.mnemonicIndex}>{idx + 1}.</Text>
                  <Text style={styles.mnemonicWord}>{word}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        )}
      </View>

      {/* Footer buttons */}
      <View style={styles.mnemonicFooter}>
        <PrimaryButton
          label={revealed ? 'I wrote it down' : 'Show phrase'}
          onPress={handlePrimaryPress}
        />
        <SecondaryButton label="Skip for now" onPress={onSkip} />
      </View>
    </View>
  );
};

export default MnemonicScreen;
