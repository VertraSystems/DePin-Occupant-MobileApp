// components/screens/MainWalletScreen.tsx
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from '../../style';
import type { Wallet } from '../../type';

import HomeTab from './HomeTab';
import ActivityTab from './ActivityTab';
import ComputeScreen from './ComputeTab';
import DataTab from './DataTab';

import SendScreen from './SendScreen';
import ReceiveScreen from './ReceiveScreen';
import ExchangeScreen from './ExchangeScreen';
import StakeScreen from './StakeScreen';

type Props = {
  wallet: Wallet | null;
  onLogout: () => void;
};

type Tab = 'home' | 'activity' | 'compute' | 'data';
type ActionView = 'none' | 'send' | 'receive' | 'exchange' | 'stake';

const MainWalletScreen: React.FC<Props> = ({ wallet, onLogout }) => {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [actionView, setActionView] = useState<ActionView>('none');

  // --- derive address safely without breaking the Wallet type ---
  const rawAddress =
    ((wallet as any)?.address as string | undefined) ||
    ((wallet as any)?.publicKey as string | undefined) ||
    ((wallet as any)?.solanaAddress as string | undefined) ||
    undefined;

  const displayAddress = rawAddress
    ? `${rawAddress.slice(0, 4)}…${rawAddress.slice(-4)}`
    : 'No address yet';

  // decide what to render in the main area
  let body: React.ReactNode;

  if (actionView === 'send') {
    body = <SendScreen onBack={() => setActionView('none')} />;
  } else if (actionView === 'receive') {
    body = <ReceiveScreen onBack={() => setActionView('none')} />;
  } else if (actionView === 'exchange') {
    body = <ExchangeScreen onBack={() => setActionView('none')} />;
  } else if (actionView === 'stake') {
    body = <StakeScreen onBack={() => setActionView('none')} />;
  } else {
    // normal tab content
    switch (activeTab) {
      case 'home':
        body = (
          <HomeTab
            wallet={wallet}
            onOpenSend={() => setActionView('send')}
            onOpenReceive={() => setActionView('receive')}
            onOpenExchange={() => setActionView('exchange')}
            onOpenStake={() => setActionView('stake')}
            onLogout={onLogout}
          />
        );
        break;
      case 'activity':
        body = <ActivityTab />;
        break;
      case 'compute':
        body = <ComputeScreen wallet={wallet} />;
        break;
      case 'data':
        body = <DataTab />;
        break;
      default:
        body = null;
    }
  }

  return (
    <View style={styles.mainWalletRoot}>
      {/* --- top wallet address bar --- */}
      <View
        style={{
          paddingTop: 24,
          paddingBottom: 8,
          paddingHorizontal: 20,
          borderBottomWidth: 1,
          borderBottomColor: '#111827',
          backgroundColor: '#020307',
        }}
      >
        <Text
          style={{
            color: '#6b7280',
            fontSize: 12,
            textTransform: 'uppercase',
            letterSpacing: 1,
            marginBottom: 2,
          }}
        >
          Wallet address
        </Text>
        <Text
          style={{
            color: '#ffffff',
            fontSize: 14,
            fontWeight: '600',
          }}
        >
          {displayAddress}
        </Text>
      </View>

      {/* main tab content */}
      <View style={{ flex: 1 }}>{body}</View>

      {/* Bottom nav always visible */}
      <View style={styles.bottomNav}>
        <Pressable
          style={styles.bottomNavItem}
          onPress={() => {
            setActionView('none');
            setActiveTab('home');
          }}
        >
          <Feather
            name="home"
            size={24}
            style={[
              styles.bottomNavIcon,
              activeTab === 'home' &&
                actionView === 'none' &&
                styles.bottomNavIconActive,
            ]}
          />
          <Text
            style={[
              styles.bottomNavLabel,
              activeTab === 'home' &&
                actionView === 'none' &&
                styles.bottomNavLabelActive,
            ]}
          >
            Home
          </Text>
        </Pressable>

        <Pressable
          style={styles.bottomNavItem}
          onPress={() => {
            setActionView('none');
            setActiveTab('activity');
          }}
        >
          <Feather
            name="activity"
            size={24}
            style={[
              styles.bottomNavIcon,
              activeTab === 'activity' &&
                actionView === 'none' &&
                styles.bottomNavIconActive,
            ]}
          />
          <Text
            style={[
              styles.bottomNavLabel,
              activeTab === 'activity' &&
                actionView === 'none' &&
                styles.bottomNavLabelActive,
            ]}
          >
            Activity
          </Text>
        </Pressable>

        <Pressable
          style={styles.bottomNavItem}
          onPress={() => {
            setActionView('none');
            setActiveTab('compute');
          }}
        >
          <Feather
            name="cpu"
            size={24}
            style={[
              styles.bottomNavIcon,
              activeTab === 'compute' &&
                actionView === 'none' &&
                styles.bottomNavIconActive,
            ]}
          />
          <Text
            style={[
              styles.bottomNavLabel,
              activeTab === 'compute' &&
                actionView === 'none' &&
                styles.bottomNavLabelActive,
            ]}
          >
            Compute
          </Text>
        </Pressable>

        <Pressable
          style={styles.bottomNavItem}
          onPress={() => {
            setActionView('none');
            setActiveTab('data');
          }}
        >
          <Feather
            name="database"
            size={24}
            style={[
              styles.bottomNavIcon,
              activeTab === 'data' &&
                actionView === 'none' &&
                styles.bottomNavIconActive,
            ]}
          />
          <Text
            style={[
              styles.bottomNavLabel,
              activeTab === 'data' &&
                actionView === 'none' &&
                styles.bottomNavLabelActive,
            ]}
          >
            Data
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MainWalletScreen;
