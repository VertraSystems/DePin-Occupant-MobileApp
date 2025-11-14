// components/screens/MainWalletScreen.tsx
import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import { styles } from '../../style';
import type { Wallet } from '../../type';

type Props = {
  wallet: Wallet | null;
};

type LocalAccount = {
  id: string;
  label: string;
};

type BottomTab = 'home' | 'tx' | 'search' | 'wallet';

const LOCAL_ACCOUNTS: LocalAccount[] = [
  { id: 'main', label: 'Main Wallet' },
  { id: 'elevator', label: 'Elevator Ops' },
  { id: 'test', label: 'Test Wallet' },
];

const MainWalletScreen: React.FC<Props> = ({ wallet }) => {
  const [activeAccountId, setActiveAccountId] = useState<string>('main');
  const [showAccountsDropdown, setShowAccountsDropdown] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [activeTab, setActiveTab] = useState<BottomTab>('home');

  const activeAccount =
    LOCAL_ACCOUNTS.find(a => a.id === activeAccountId) ?? LOCAL_ACCOUNTS[0];

  const toggleAccounts = () => {
    setShowAccountsDropdown(v => !v);
    setShowSettingsDropdown(false);
  };

  const toggleSettings = () => {
    setShowSettingsDropdown(v => !v);
    setShowAccountsDropdown(false);
  };

  const handleAccountSelect = (id: string) => {
    setActiveAccountId(id);
    setShowAccountsDropdown(false);
  };

  const handleSettingsPress = (label: string) => {
    console.log('Settings item pressed:', label);
  };

  const handleTabPress = (tab: BottomTab) => {
    setActiveTab(tab);
    console.log('Bottom tab pressed:', tab);
    // later you can actually switch content based on tab
  };

  return (
    <View style={styles.walletRoot}>
      {/* MAIN SCROLL CONTENT ------------------------------------------------ */}
      <ScrollView
        style={styles.walletScroll}
        contentContainerStyle={styles.walletScrollContent}
      >
        {/* Top bar */}
        <View style={styles.topBar}>
          <Pressable onPress={toggleAccounts} style={styles.walletSelector}>
            <Text style={styles.walletSelectorLabel}>{activeAccount.label}</Text>
            <Text style={styles.chevron}>
              {showAccountsDropdown ? '▴' : '▾'}
            </Text>
          </Pressable>

          <Pressable onPress={toggleSettings} style={styles.moreButton}>
            <Text style={styles.moreDots}>⋯</Text>
          </Pressable>
        </View>

        {/* Accounts dropdown */}
        {showAccountsDropdown && (
          <View style={styles.walletDropdown}>
            {LOCAL_ACCOUNTS.map(account => {
              const isActive = account.id === activeAccount.id;
              return (
                <Pressable
                  key={account.id}
                  onPress={() => handleAccountSelect(account.id)}
                  style={[
                    styles.walletDropdownItem,
                    isActive && styles.walletDropdownItemActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.walletDropdownLabel,
                      isActive && styles.walletDropdownLabelActive,
                    ]}
                  >
                    {account.label}
                  </Text>
                  {isActive && (
                    <Text style={styles.walletDropdownBadge}>Current</Text>
                  )}
                </Pressable>
              );
            })}

            <Pressable
              onPress={() => handleSettingsPress('Add wallet')}
              style={styles.walletDropdownAddRow}
            >
              <Text style={styles.walletDropdownAddPlus}>＋</Text>
              <Text style={styles.walletDropdownAddText}>Add new wallet</Text>
            </Pressable>
          </View>
        )}

        {/* Settings dropdown (right-side menu) */}
        {showSettingsDropdown && (
          <View style={styles.settingsDropdown}>
            <Text style={styles.settingsSectionTitle}>Wallet</Text>
            <Pressable
              style={styles.settingsItemRow}
              onPress={() => handleSettingsPress('Manage Accounts')}
            >
              <Text style={styles.settingsItemLabel}>Manage accounts</Text>
            </Pressable>
            <Pressable
              style={styles.settingsItemRow}
              onPress={() => handleSettingsPress('Preferences')}
            >
              <Text style={styles.settingsItemLabel}>Preferences</Text>
            </Pressable>
            <Pressable
              style={styles.settingsItemRow}
              onPress={() => handleSettingsPress('Security & Privacy')}
            >
              <Text style={styles.settingsItemLabel}>Security & privacy</Text>
            </Pressable>

            <Text style={styles.settingsSectionTitle}>Network</Text>
            <Pressable
              style={styles.settingsItemRow}
              onPress={() => handleSettingsPress('Active Networks')}
            >
              <Text style={styles.settingsItemLabel}>Active networks</Text>
            </Pressable>
            <Pressable
              style={styles.settingsItemRow}
              onPress={() => handleSettingsPress('Address Book')}
            >
              <Text style={styles.settingsItemLabel}>Address book</Text>
            </Pressable>
            <Pressable
              style={styles.settingsItemRow}
              onPress={() => handleSettingsPress('Connected Apps')}
            >
              <Text style={styles.settingsItemLabel}>Connected apps</Text>
            </Pressable>

            <Text style={styles.settingsSectionTitle}>More</Text>
            <Pressable
              style={styles.settingsItemRow}
              onPress={() => handleSettingsPress('Developer Settings')}
            >
              <Text style={styles.settingsItemLabel}>Developer settings</Text>
            </Pressable>
            <Pressable
              style={styles.settingsItemRow}
              onPress={() => handleSettingsPress('Help & Support')}
            >
              <Text style={styles.settingsItemLabel}>Help & support</Text>
            </Pressable>
            <Pressable
              style={styles.settingsItemRow}
              onPress={() => handleSettingsPress('Invite friends')}
            >
              <Text style={styles.settingsItemLabel}>Invite your friends</Text>
            </Pressable>
            <Pressable
              style={styles.settingsItemRow}
              onPress={() => handleSettingsPress('About Vertra')}
            >
              <Text style={styles.settingsItemLabel}>About Vertra</Text>
            </Pressable>
          </View>
        )}

        {/* Balance card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Total balance</Text>
          <Text style={styles.balanceValue}>0.00 PUTE</Text>
          <Text style={styles.balanceSub}>$0.00 USD</Text>
        </View>

        <View style={styles.dailyRow}>
          <Text style={styles.dailyLabel}>Today</Text>
          <Text style={styles.dailyValue}>+0.00%</Text>
        </View>

        {/* Actions grid */}
        <View style={styles.actionsGrid}>
          {[
            { key: 'receive', label: 'Receive', letter: 'R' },
            { key: 'buy', label: 'Buy', letter: 'B' },
            { key: 'swap', label: 'Swap', letter: 'S' },
            { key: 'stake', label: 'Stake', letter: 'S' },
            { key: 'send', label: 'Send', letter: 'S' },
            { key: 'mine', label: 'Mine', letter: 'M' },
            { key: 'data', label: 'Data', letter: 'D' },
            { key: 'explore', label: 'Explore', letter: 'E' },
          ].map(action => (
            <Pressable
              key={action.key}
              style={styles.actionButton}
              onPress={() => console.log('Pressed action:', action.key)}
            >
              <View style={styles.actionIconPlaceholder}>
                <Text style={styles.actionIconText}>{action.letter}</Text>
              </View>
              <Text style={styles.actionLabel}>{action.label}</Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.debugNote}>
          (Demo wallet only — not for real funds. Real key generation and
          balances coming next.)
        </Text>
      </ScrollView>

      {/* BOTTOM NAV BAR ----------------------------------------------------- */}
      <View style={styles.bottomNavBar}>
        <Pressable
          style={[
            styles.bottomNavItem,
            activeTab === 'home' && styles.bottomNavItemActive,
          ]}
          onPress={() => handleTabPress('home')}
        >
          {activeTab === 'home' && <View style={styles.bottomNavIndicator} />}
          <Text style={styles.bottomNavIcon}>🏠</Text>
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
          style={[
            styles.bottomNavItem,
            activeTab === 'tx' && styles.bottomNavItemActive,
          ]}
          onPress={() => handleTabPress('tx')}
        >
          {activeTab === 'tx' && <View style={styles.bottomNavIndicator} />}
          <Text style={styles.bottomNavIcon}>↻</Text>
          <Text
            style={[
              styles.bottomNavLabel,
              activeTab === 'tx' && styles.bottomNavLabelActive,
            ]}
          >
            Activity
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.bottomNavItem,
            activeTab === 'search' && styles.bottomNavItemActive,
          ]}
          onPress={() => handleTabPress('search')}
        >
          {activeTab === 'search' && <View style={styles.bottomNavIndicator} />}
          <Text style={styles.bottomNavIcon}>🔍</Text>
          <Text
            style={[
              styles.bottomNavLabel,
              activeTab === 'search' && styles.bottomNavLabelActive,
            ]}
          >
            Search
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.bottomNavItem,
            activeTab === 'wallet' && styles.bottomNavItemActive,
          ]}
          onPress={() => handleTabPress('wallet')}
        >
          {activeTab === 'wallet' && <View style={styles.bottomNavIndicator} />}
          <Text style={styles.bottomNavIcon}>👛</Text>
          <Text
            style={[
              styles.bottomNavLabel,
              activeTab === 'wallet' && styles.bottomNavLabelActive,
            ]}
          >
            Wallet
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default MainWalletScreen;
