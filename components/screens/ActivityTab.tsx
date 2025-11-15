// components/screens/ActivityTab.tsx
import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from '../../style';

const ACTIVITY_ROWS = [
  {
    id: '1',
    icon: 'R',
    title: 'Received 0.25 PUTE',
    sub: 'From GkzL…3a · 2 min ago',
  },
  {
    id: '2',
    icon: 'S',
    title: 'Staked 10 PUTE',
    sub: 'Validator VertraNode01 · 1 hr ago',
  },
  {
    id: '3',
    icon: 'M',
    title: 'Mining reward · 0.015 PUTE',
    sub: '3090 Rig – Office · Today, 09:12',
  },
  {
    id: '4',
    icon: 'D',
    title: 'Data session payout · 0.008 PUTE',
    sub: 'Midtown Tower – South · Yesterday',
  },
  {
    id: '5',
    icon: 'S',
    title: 'Sent 0.10 PUTE',
    sub: 'To 9xZ…ab · 2 days ago',
  },
];

const ActivityTab: React.FC = () => {
  return (
    <ScrollView
      style={styles.mainWalletScroll}
      contentContainerStyle={styles.pageScrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* push content down a bit more */}
      <View style={{ marginTop: 64 }}>
        <Text style={styles.screenTitle}>Activity</Text>
        <Text style={styles.screenSubtitle}>
          Token transfers, staking, mining rewards, and data payouts for this wallet.
        </Text>

        {/* Activity list */}
        <View style={styles.cardList}>
          {ACTIVITY_ROWS.map(row => (
            <View key={row.id} style={styles.listRow}>
              <View style={styles.listRowIconCircle}>
                <Text style={styles.listRowIconText}>{row.icon}</Text>
              </View>

              <View style={styles.listRowText}>
                <Text style={styles.listRowTitle}>{row.title}</Text>
                <Text style={styles.listRowSub}>{row.sub}</Text>
              </View>

              <Feather
                name="chevron-right"
                size={18}
                style={styles.listRowChevron}
              />
            </View>
          ))}
        </View>

        {/* Small hint at the bottom */}
        <Text style={styles.debugNote}>
          Older events will appear here as you continue to use this wallet.
        </Text>
      </View>
    </ScrollView>
  );
};

export default ActivityTab;
