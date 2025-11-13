import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../style';
import { PrimaryButton, ToggleButton } from '../Buttons';

type Props = {
  choice: 'yes' | 'no' | null;
  onChoose: (c: 'yes' | 'no') => void;
  onContinue: () => void;
};

const NotificationsScreen: React.FC<Props> = ({ choice, onChoose, onContinue }) => {
  return (
    <View style={styles.screenRoot}>
      <Text style={styles.sectionTitle}>Enable notifications?</Text>
      <Text style={styles.sectionSub}>
        Get alerts when your rewards change or your data sessions complete.
      </Text>

      <View style={styles.buttonRow}>
        <ToggleButton
          label="Enable"
          selected={choice === 'yes'}
          onPress={() => onChoose('yes')}
        />
        <ToggleButton
          label="Maybe later"
          selected={choice === 'no'}
          onPress={() => onChoose('no')}
        />
      </View>

      <PrimaryButton
        label="Create wallet"
        onPress={onContinue}
        disabled={!choice}
      />
    </View>
  );
};

export default NotificationsScreen;
