// components/screens/ActivityTab.tsx
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from '../../style';

const ActivityTab: React.FC = () => {
  return (
    <ScrollView
      style={styles.mainWalletScroll}
      contentContainerStyle={styles.pageScrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.screenTitle}>Activity</Text>
      <Text style={styles.screenSubtitle}>
        Token transfers, staking, mining rewards, and data payouts will appear here.
      </Text>

      <View style={styles.tabPlaceholder}>
        <Feather name="activity" size={40} style={{ color: '#4b5563', marginBottom: 12 }} />
        <Text style={styles.tabPlaceholderTitle}>No activity yet</Text>
        <Text style={styles.tabPlaceholderSub}>
          Once you send, receive, stake, or mine with this wallet, events will be
          listed here like a commit log.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ActivityTab;
