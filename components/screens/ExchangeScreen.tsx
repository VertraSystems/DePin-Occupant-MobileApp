// components/screens/ExchangeScreen.tsx
import React from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from '../../style';

type Props = {
  onBack: () => void;
};

const ExchangeScreen: React.FC<Props> = ({ onBack }) => {
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
        <Text style={styles.screenTitle}>Exchange</Text>
        <Text style={styles.screenSubtitle}>
          Jupiter swap integration for Solana coming next. You&apos;ll be able to
          swap PUTE and other tokens directly inside Vertra.
        </Text>

        <View style={styles.cardList}>
          <View style={styles.listRow}>
            <View style={styles.listRowText}>
              <Text style={styles.listRowTitle}>Powered by Jupiter</Text>
              <Text style={styles.listRowSub}>
                We&apos;ll use Jupiter&apos;s APIs on devnet/mainnet for routing.
              </Text>
            </View>
          </View>

          <View style={styles.listRow}>
            <View style={styles.listRowText}>
              <Text style={styles.listRowTitle}>Route preview</Text>
              <Text style={styles.listRowSub}>
                Once wired, you&apos;ll see best route, price impact, fees and output.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ExchangeScreen;
