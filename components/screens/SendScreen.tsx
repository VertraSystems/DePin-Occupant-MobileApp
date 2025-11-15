// components/screens/SendScreen.tsx
import React from 'react';
import { ScrollView, View, Text, Pressable, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from '../../style';

type Props = {
  onBack: () => void;
};

const SendScreen: React.FC<Props> = ({ onBack }) => {
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
        <Text style={styles.screenTitle}>Send tokens</Text>
        <Text style={styles.screenSubtitle}>
          Enter a Solana address and amount to send from this wallet.
        </Text>

        {/* Form */}
        <View style={{ gap: 12, marginTop: 4 }}>
          <Text style={styles.mnemonicConfirmLabel}>Recipient address</Text>
          <TextInput
            placeholder="Enter Solana address"
            placeholderTextColor="#4b5165"
            style={styles.mnemonicConfirmInput}
          />

          <Text style={styles.mnemonicConfirmLabel}>Amount</Text>
          <TextInput
            placeholder="0.00"
            keyboardType="decimal-pad"
            placeholderTextColor="#4b5165"
            style={styles.mnemonicConfirmInput}
          />

          <Text style={styles.mnemonicConfirmLabel}>Token</Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <View style={{ flex: 1 }}>
              <View style={styles.listRow}>
                <View style={styles.listRowText}>
                  <Text style={styles.listRowTitle}>PUTE</Text>
                  <Text style={styles.listRowSub}>Demo token (devnet)</Text>
                </View>
                <Feather
                  name="chevron-down"
                  size={18}
                  style={styles.listRowChevron}
                />
              </View>
            </View>
          </View>
        </View>

        {/* CTA */}
        <View style={{ marginTop: 24 }}>
          <Pressable
            style={{
              backgroundColor: '#19e470',
              paddingVertical: 14,
              borderRadius: 14,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                color: '#020307',
                fontSize: 16,
                fontWeight: '700',
              }}
            >
              Review send
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default SendScreen;
