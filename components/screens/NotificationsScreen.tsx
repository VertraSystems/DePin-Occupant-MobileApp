// components/screens/NotificationsScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../style';
import { PrimaryButton, ToggleButton } from '../Buttons';

// Keep this aligned with App.tsx: 'yes' | 'no' | null
export type NotificationsChoice = 'yes' | 'no' | null;

type Props = {
  choice: NotificationsChoice;
  onChoose: (choice: Exclude<NotificationsChoice, null>) => void;
  onContinue: () => void;
};

const NotificationsScreen: React.FC<Props> = ({
  choice,
  onChoose,
  onContinue,
}) => {
  const canContinue = choice !== null;

  return (
    <View style={styles.screenRoot}>
      {/* Centered title + copy + placeholder for future animation */}
      <View style={styles.notificationsContent}>
        <View style={styles.notificationsTextBlock}>
          <Text style={styles.notificationsTitle}>Enable notifications?</Text>
          <Text style={styles.notificationsSubtitle}>
            Get alerts when your rewards change or your data sessions complete.
          </Text>
        </View>

        {/* Circle reserved for future video / animation */}
        <View style={styles.notificationsVideoPlaceholder} />
      </View>

      {/* Choice buttons + create wallet/continue */}
      <View style={styles.notificationsFooter}>
        <View style={styles.notificationsToggleRow}>
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
          disabled={!canContinue}
        />
      </View>
    </View>
  );
};

export default NotificationsScreen;
