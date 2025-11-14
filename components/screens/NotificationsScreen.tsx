// components/screens/NotificationsScreen.tsx
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../../style';
import { PrimaryButton } from '../Buttons';

type Props = {
  choice: 'yes' | 'no' | null;
  onChoose: (value: 'yes' | 'no') => void;
  onContinue: () => void;
};

const NotificationsScreen: React.FC<Props> = ({
  choice,
  onChoose,
  onContinue,
}) => {
  return (
    <View style={styles.screenRoot}>
      {/* Centered title + subtitle + choice buttons */}
      <View style={styles.notificationsCenter}>
        <View style={styles.notificationsHeader}>
          <Text style={styles.notificationsTitle}>Enable notifications?</Text>
          <Text style={styles.notificationsSub}>
            Get alerts when your rewards change or your data sessions complete.
          </Text>
        </View>

        <View style={styles.notificationsChoiceRow}>
          <Pressable
            onPress={() => onChoose('yes')}
            style={[
              styles.notificationsChoiceButton,
              choice === 'yes' && styles.notificationsChoiceButtonActive,
            ]}
          >
            <Text
              style={[
                styles.notificationsChoiceText,
                choice === 'yes' && styles.notificationsChoiceTextActive,
              ]}
            >
              Enable
            </Text>
          </Pressable>

          <Pressable
            onPress={() => onChoose('no')}
            style={[
              styles.notificationsChoiceButton,
              choice === 'no' && styles.notificationsChoiceButtonActive,
            ]}
          >
            <Text
              style={[
                styles.notificationsChoiceText,
                choice === 'no' && styles.notificationsChoiceTextActive,
              ]}
            >
              Maybe later
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Bottom CTA */}
      <View style={styles.notificationsFooter}>
        <PrimaryButton label="Create wallet" onPress={onContinue} />
      </View>
    </View>
  );
};

export default NotificationsScreen;
