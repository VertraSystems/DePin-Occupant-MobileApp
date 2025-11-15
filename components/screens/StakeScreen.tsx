// components/screens/StakeScreen.tsx
import React from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from '../../style';

type Props = {
  onBack: () => void;
};

const StakeScreen: React.FC<Props> = ({ onBack }) => {
  return (
    <ScrollView
      style={styles.mainWalletScroll}
      contentContainerStyle={styles.pageScrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ marginTop: 40 }}>
        {/* Back row */}
        <Pressable
          style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}
          onPress={onBack}
        >
          <Feather
            name="chevron-left"
            size={20}
            style={{ color: '#d6daff', marginRight: 4 }}
          />
          <Text style={{ color: '#d6daff', fontSize: 14 }}>Back</Text>
        </Pressable>

        {/* Header */}
        <Text style={styles.screenTitle}>Stake</Text>
        <Text style={styles.screenSubtitle}>
          Delegate tokens to validators and track staking rewards over time.
        </Text>

        <View style={styles.cardList}>
          <View style={styles.listRow}>
            <View style={styles.listRowText}>
              <Text style={styles.listRowTitle}>VertraNode01 (demo)</Text>
              <Text style={styles.listRowSub}>
                APY coming soon · 0 PUTE staked
              </Text>
            </View>
            <Feather
              name="arrow-up-right"
              size={18}
              style={styles.listRowChevron}
            />
          </View>

          <View style={styles.listRow}>
            <View style={styles.listRowText}>
              <Text style={styles.listRowTitle}>Stake dashboard</Text>
              <Text style={styles.listRowSub}>
                We&apos;ll show rewards, epochs, and validator health here.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default StakeScreen;
