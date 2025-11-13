import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../../style';
import { PrimaryButton } from '../Buttons';

type Props = {
  mnemonic: string[];
  onContinue: () => void;
};

const MnemonicScreen: React.FC<Props> = ({ mnemonic, onContinue }) => {
  return (
    <View style={styles.screenRoot}>
      <Text style={styles.sectionTitle}>Your secret phrase</Text>
      <Text style={styles.sectionSub}>
        Write these {mnemonic.length} words down in order. Keep them offline and never
        share them.
      </Text>

      <ScrollView
        style={styles.mnemonicScroll}
        contentContainerStyle={styles.mnemonicGrid}
      >
        {mnemonic.map((word, index) => (
          <View key={index} style={styles.mnemonicWordBox}>
            <Text style={styles.mnemonicIndex}>{index + 1}.</Text>
            <Text style={styles.mnemonicWord}>{word}</Text>
          </View>
        ))}
      </ScrollView>

      <PrimaryButton label="I wrote it down" onPress={onContinue} />
    </View>
  );
};

export default MnemonicScreen;
