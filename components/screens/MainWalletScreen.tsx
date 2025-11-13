import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../../style';
import type { Wallet } from '../../type';

type Props = {
  wallet: Wallet | null;
};

const MainWalletScreen: React.FC<Props> = ({ wallet }) => {
  return (
    <View style={styles.screenRoot}>
      {/* Top bar */}
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.walletSelector}>
          <Text style={styles.walletSelectorLabel}>Main Wallet</Text>
          <Text style={styles.chevron}>▾</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.moreButton}>
          <Text style={styles.moreDots}>⋯</Text>
        </TouchableOpacity>
      </View>

      {/* Balance card */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Total balance</Text>
        <Text style={styles.balanceValue}>0.00 PUTE</Text>
        <Text style={styles.balanceSub}>$0.00 USD</Text>
      </View>

      {/* Daily % gain */}
      <View style={styles.dailyRow}>
        <Text style={styles.dailyLabel}>Today</Text>
        <Text style={styles.dailyValue}>+0.00%</Text>
      </View>

      {/* Action grid */}
      <View style={styles.actionsGrid}>
        {['Receive', 'Buy', 'Swap', 'Stake', 'Send', 'Mine', 'Data', 'Explore'].map(
          label => (
            <TouchableOpacity
              key={label}
              style={styles.actionButton}
              onPress={() => {
                alert(`${label} coming soon`);
              }}
            >
              <View style={styles.actionIconPlaceholder}>
                <Text style={styles.actionIconText}>{label[0]}</Text>
              </View>
              <Text style={styles.actionLabel}>{label}</Text>
            </TouchableOpacity>
          ),
        )}
      </View>

      {wallet?.mnemonic && (
        <Text style={styles.debugNote}>
          (Demo wallet only – not for real funds. We’ll plug in real key generation
          next.)
        </Text>
      )}
    </View>
  );
};

export default MainWalletScreen;
