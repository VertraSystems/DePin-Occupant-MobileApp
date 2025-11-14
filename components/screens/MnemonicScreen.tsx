// components/screens/MnemonicScreen.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../../style';
import { PrimaryButton, SecondaryButton } from '../Buttons';

type Props = {
  mnemonic: string[];
  onConfirm: () => void; // user tapped "I wrote it down"
  onSkip: () => void;    // user tapped "Skip for now"
};

const MnemonicScreen: React.FC<Props> = ({ mnemonic, onConfirm, onSkip }) => {
  const [revealed, setRevealed] = useState(false);

  const handlePrimaryPress = () => {
    if (!revealed) {
      setRevealed(true);
    } else {
      onConfirm();
    }
  };

  return (
    <View style={styles.screenRoot}>
      {/* Header */}
      <View style={styles.mnemonicHeader}>
        <Text style={styles.mnemonicTitle}>Your secret phrase</Text>
        <Text style={styles.mnemonicSubtitle}>
          Write these {mnemonic.length} words down in order. Keep them offline and
          never share them.
        </Text>
      </View>

      {/* Card area */}
      <View style={styles.mnemonicCardOuter}>
        {!revealed ? (
          <View style={styles.mnemonicIntroCard}>
            <Text style={styles.mnemonicIntroTitle}>Write it down</Text>
            <Text style={styles.mnemonicIntroBody}>
              Make sure no one is watching—this phrase gives full access to your wallet.
              Never share it with anyone.
            </Text>
          </View>
        ) : (
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
