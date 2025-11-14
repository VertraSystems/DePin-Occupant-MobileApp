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

type Props = {
  wallet: Wallet | null;
};

type Tab = 'home' | 'activity' | 'compute' | 'data';

const MainWalletScreen: React.FC<Props> = ({ wallet }) => {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  let body: React.ReactNode;
  switch (activeTab) {
    case 'home':
      body = <HomeTab wallet={wallet} />;
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

  return (
    <View style={styles.mainWalletRoot}>
      {body}

      {/* Bottom nav */}
      <View style={styles.bottomNav}>
        <Pressable
          style={styles.bottomNavItem}
          onPress={() => setActiveTab('home')}
        >
          <Feather
            name="home"
            size={24}
            style={[
              styles.bottomNavIcon,
              activeTab === 'home' && styles.bottomNavIconActive,
            ]}
          />
          <Text
            style={[
              styles.bottomNavLabel,
              activeTab === 'home' && styles.bottomNavLabelActive,
            ]}
          >
            Home
          </Text>
        </Pressable>

        <Pressable
          style={styles.bottomNavItem}
          onPress={() => setActiveTab('activity')}
        >
          <Feather
            name="activity"
            size={24}
            style={[
              styles.bottomNavIcon,
              activeTab === 'activity' && styles.bottomNavIconActive,
            ]}
          />
          <Text
            style={[
              styles.bottomNavLabel,
              activeTab === 'activity' && styles.bottomNavLabelActive,
            ]}
          >
            Activity
          </Text>
        </Pressable>

        <Pressable
          style={styles.bottomNavItem}
          onPress={() => setActiveTab('compute')}
        >
          <Feather
            name="cpu"
            size={24}
            style={[
              styles.bottomNavIcon,
              activeTab === 'compute' && styles.bottomNavIconActive,
            ]}
          />
          <Text
            style={[
              styles.bottomNavLabel,
              activeTab === 'compute' && styles.bottomNavLabelActive,
            ]}
          >
            Compute
          </Text>
        </Pressable>

        <Pressable
          style={styles.bottomNavItem}
          onPress={() => setActiveTab('data')}
        >
          <Feather
            name="database"
            size={24}
            style={[
              styles.bottomNavIcon,
              activeTab === 'data' && styles.bottomNavIconActive,
            ]}
          />
          <Text
            style={[
              styles.bottomNavLabel,
              activeTab === 'data' && styles.bottomNavLabelActive,
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
