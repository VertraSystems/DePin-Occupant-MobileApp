// components/screens/HomeTab.tsx
import React from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from '../../style';
import type { Wallet } from '../../type';

type Props = {
  wallet: Wallet | null;
  onOpenSend: () => void;
  onOpenReceive: () => void;
  onOpenExchange: () => void;
  onOpenStake: () => void;
  onLogout: () => void;
};

const ACTIONS = [
  { key: 'send',    label: 'Send',    sub: 'Send tokens to another wallet address.' },
  { key: 'receive', label: 'Receive', sub: 'Show your wallet address and QR.' },
  { key: 'exchange',label: 'Exchange',sub: 'Swap supported tokens inside Vertra.' },
  { key: 'stake',   label: 'Stake',   sub: 'Stake tokens and track rewards.' },
];

const HomeTab: React.FC<Props> = ({
  wallet,
  onOpenSend,
  onOpenReceive,
  onOpenExchange,
  onOpenStake,
  onLogout,
}) => {
  const address = wallet?.solanaAddress;

  const displayName = address
    ? `${address.slice(0, 4)}…${address.slice(-4)}`
    : 'Devnet wallet';

  const initials = address
    ? address.slice(0, 2).toUpperCase()
    : 'MW';

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
            {/* 👇 title: shortened address */}
            <Text style={styles.profileName}>{displayName}</Text>

            {/* 👇 subtitle: full address or placeholder */}
            <Text style={styles.profileHandle}>
              {address ?? 'No address yet'}
            </Text>

            <Text style={styles.profileTagline}>
              {(wallet?.network ?? 'devnet')} · Demo UI — not for real funds yet.
            </Text>
          </View>
        </View>
      </View>

      {/* Actions */}
      <Text style={styles.mainSectionTitle}>Actions</Text>
      <View style={styles.cardList}>
        {ACTIONS.map(action => {
          const onPress =
            action.key === 'send'
              ? onOpenSend
              : action.key === 'receive'
              ? onOpenReceive
              : action.key === 'exchange'
              ? onOpenExchange
              : onOpenStake;

          return (
            <Pressable
              key={action.key}
              style={styles.listRow}
              onPress={onPress}
            >
              <View style={styles.listRowIconCircle}>
                <Text style={styles.listRowIconText}>{action.label[0]}</Text>
              </View>
              <View style={styles.listRowText}>
                <Text style={styles.listRowTitle}>{action.label}</Text>
                <Text style={styles.listRowSub}>{action.sub}</Text>
              </View>
              <Feather name="chevron-right" size={18} style={styles.listRowChevron} />
            </Pressable>
          );
        })}
      </View>

      {/* Simple logout at bottom of home tab */}
      <Pressable
        style={[
          styles.listRow,
          { marginTop: 16, backgroundColor: '#120b11', borderColor: '#3b1a22' },
        ]}
        onPress={onLogout}
      >
        <View style={styles.listRowIconCircle}>
          <Feather name="log-out" size={16} style={{ color: '#fb7185' }} />
        </View>
        <View style={styles.listRowText}>
          <Text style={[styles.listRowTitle, { color: '#fb7185' }]}>
            Log out
          </Text>
          <Text style={styles.listRowSub}>
            You’ll need to re-enter your phrase or passcode to get back in.
          </Text>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default HomeTab;
