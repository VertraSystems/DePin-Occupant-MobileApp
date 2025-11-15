// components/screens/ReceiveScreen.tsx
import React from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from '../../style';

type Props = {
  onBack: () => void;
};

const ReceiveScreen: React.FC<Props> = ({ onBack }) => {
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
        <Text style={styles.screenTitle}>Receive tokens</Text>
        <Text style={styles.screenSubtitle}>
          Scan this QR or copy your Solana address to receive funds.
        </Text>

        {/* QR + address */}
        <View
          style={{
            marginTop: 16,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* QR placeholder */}
          <View
            style={{
              width: 220,
              height: 220,
              borderRadius: 16,
              backgroundColor: '#050b11',
              borderWidth: 1,
              borderColor: '#181f30',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Feather name="grid" size={60} style={{ color: '#2f3548' }} />
            <Text
              style={{
                color: '#6f768f',
                fontSize: 12,
                marginTop: 10,
              }}
            >
              QR code coming soon
            </Text>
          </View>

          <View style={{ marginTop: 20, width: '100%' }}>
            <Text style={styles.mnemonicConfirmLabel}>Your address</Text>
            <View
              style={[
                styles.listRow,
                {
                  borderRadius: 12,
                  marginBottom: 0,
                },
              ]}
            >
              <View style={styles.listRowText}>
                <Text style={styles.listRowTitle}>9xZ…demoAddr</Text>
                <Text style={styles.listRowSub}>Tap to copy</Text>
              </View>
              <Feather name="copy" size={18} style={styles.listRowChevron} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ReceiveScreen;
