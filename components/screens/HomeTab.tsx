// components/screens/HomeTab.tsx
import React from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from '../../style';
import type { Wallet } from '../../type';

type Props = {
  wallet: Wallet | null;
};

const ACTIONS = [
  { key: 'send',    label: 'Send',    sub: 'Send tokens to another wallet address.' },
  { key: 'receive', label: 'Receive', sub: 'Show your wallet address and QR.' },
  { key: 'exchange',label: 'Exchange',sub: 'Swap supported tokens inside Vertra.' },
  { key: 'stake',   label: 'Stake',   sub: 'Stake tokens and track rewards.' },
];

const ACTIVITY_ROWS = [
  {
    key: 'a1',
    icon: 'R',
    title: 'Received 0.25 PUTE',
    sub: 'From GkzL…3a · 2 min ago',
  },
  {
    key: 'a2',
    icon: 'S',
    title: 'Staked 10 PUTE',
    sub: 'Validator VertraNode01 · 1 hr ago',
  },
  {
    key: 'a3',
    icon: 'S',
    title: 'Sent 0.10 PUTE',
    sub: 'To 9xZ…ab · Yesterday',
  },
];

const HomeTab: React.FC<Props> = ({ wallet }) => {
  // static for now; adjust later once we know Wallet shape
  const displayName = 'Main Wallet';
  const initials = displayName.slice(0, 1).toUpperCase();

  return (
    <ScrollView
      style={styles.mainWalletScroll}
      contentContainerStyle={styles.pageScrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Profile card */}
      <View style={styles.profileCard}>
        <View style={styles.profileCover}>
          <Text style={styles.profileCoverHint}>Add cover photo</Text>
        </View>

        <View style={styles.profileRow}>
          <View style={styles.profileAvatar}>
            <Text style={styles.profileAvatarInitials}>{initials}</Text>
          </View>

          <View style={styles.profileTextBlock}>
            <Text style={styles.profileName}>{displayName}</Text>
            <Text style={styles.profileHandle}>@VertraDemo</Text>
            <Text style={styles.profileTagline}>
              Demo wallet — real balances and live tokens coming soon.
            </Text>
          </View>
        </View>
      </View>

      {/* Actions */}
      <Text style={styles.mainSectionTitle}>Actions</Text>
      <View style={styles.cardList}>
        {ACTIONS.map(action => (
          <Pressable key={action.key} style={styles.listRow}>
            <View style={styles.listRowIconCircle}>
              <Text style={styles.listRowIconText}>{action.label[0]}</Text>
            </View>
            <View style={styles.listRowText}>
              <Text style={styles.listRowTitle}>{action.label}</Text>
              <Text style={styles.listRowSub}>{action.sub}</Text>
            </View>
            <Feather name="chevron-right" size={18} style={styles.listRowChevron} />
          </Pressable>
        ))}
      </View>

      {/* Recent activity preview */}
      <Text style={styles.mainSectionTitle}>Recent activity</Text>
      <View style={styles.cardList}>
        {ACTIVITY_ROWS.map(row => (
          <View key={row.key} style={styles.listRow}>
            <View style={styles.listRowIconCircle}>
              <Text style={styles.listRowIconText}>{row.icon}</Text>
            </View>
            <View style={styles.listRowText}>
              <Text style={styles.listRowTitle}>{row.title}</Text>
              <Text style={styles.listRowSub}>{row.sub}</Text>
            </View>
            <Feather name="chevron-right" size={18} style={styles.listRowChevron} />
          </View>
        ))}
      </View>

      <Text style={styles.debugNote}>
        (Demo wallet only — not for real funds. Real key generation and balances coming next.)
      </Text>
    </ScrollView>
  );
};

export default HomeTab;
