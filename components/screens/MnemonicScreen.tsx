// components/screens/MnemonicScreen.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { styles } from '../../style';
import { PrimaryButton, SecondaryButton } from '../Buttons';

type Props = {
  mnemonic: string[];
  // called when user taps "Continue" (after revealing)
  onConfirm: () => void;
  // user taps "Skip for now"
  onSkip: () => void;
};

const MnemonicScreen: React.FC<Props> = ({ mnemonic, onConfirm, onSkip }) => {
  const [revealed, setRevealed] = useState(false);

  const handleShow = () => setRevealed(true);

  return (
    <View style={styles.screenRoot}>
      {/* Top centered title like screenshot */}
      <View style={styles.mnemonicHeader}>
        <Text style={styles.mnemonicHeaderTitle}>Your Recovery Phrase</Text>
        <Text style={styles.mnemonicHeaderSub}>
          Write these {mnemonic.length} words down in order. Keep them offline and
          never share them with anyone.
        </Text>
      </View>

      {/* Big card in the middle */}
      <View style={[styles.mnemonicCardOuter, !revealed && styles.mnemonicCardHidden]}>
        {!revealed ? (
          // Hidden state — "Write it down" + eye button inside the card
          <View style={styles.mnemonicIntroCard}>
            <Text style={styles.mnemonicIntroTitle}>Write it down</Text>
            <Text style={styles.mnemonicIntroBody}>
              Make sure no one is watching—this phrase gives full access to your wallet.
              Never share it with anyone.
            </Text>

            <Pressable style={styles.mnemonicShowRow} onPress={handleShow}>
              <Text style={styles.mnemonicShowIcon}>👁️</Text>
              <Text style={styles.mnemonicShowLabel}>Show</Text>
            </Pressable>
          </View>
        ) : (
          // Revealed 12/24-word grid
          <ScrollView
            style={styles.mnemonicScroll}
            contentContainerStyle={styles.mnemonicScrollContent}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.mnemonicGrid}>
              {mnemonic.map((word, idx) => (
                <View key={idx} style={styles.mnemonicWordBox}>
                  <Text style={styles.mnemonicIndex}>{idx + 1}</Text>
                  <Text style={styles.mnemonicWord}>{word}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        )}
      </View>

      {/* Bottom CTAs like Phantom: Continue + Skip */}
      <View style={styles.mnemonicFooter}>
        <PrimaryButton
          label="Continue"
          onPress={onConfirm}
          disabled={!revealed}
        />
        <SecondaryButton label="Skip for now" onPress={onSkip} />
      </View>
    </View>
  );
};

export default MnemonicScreen;
