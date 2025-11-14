// components/screens/ComputeScreen.tsx
import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from '../../style';
import type { Wallet } from '../../type';

type Props = {
  // ✅ make wallet optional so it’s not required everywhere
  wallet?: Wallet | null;
};

type TimeframeKey =
  | 'live'
  | 'minute'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'quarter'
  | 'year';

const TIMEFRAMES: { key: TimeframeKey; label: string }[] = [
  { key: 'live',    label: 'Live' },
  { key: 'minute',  label: '1 min' },
  { key: 'hour',    label: 'Hour' },
  { key: 'day',     label: 'Day' },
  { key: 'week',    label: 'Week' },
  { key: 'month',   label: 'Month' },
  { key: 'quarter', label: 'Quarter' },
  { key: 'year',    label: 'Year' },
];

type MetricsView = 'hashrate' | 'utilization';

const INSTANCE = {
  name: '3090 Rig – Office',
  location: 'NYC · Midtown',
  region: 'us-east-1',
  privateIp: '10.0.0.42',
  publicIp: '34.201.12.8',
  status: 'Running',
};

// ✅ accept props (wallet is currently unused but ready for later)
const ComputeScreen: React.FC<Props> = ({ wallet }) => {
  const [selectedFrames, setSelectedFrames] = useState<TimeframeKey[]>([
    'live',
    'hour',
    'day',
  ]);

  const [metricsView, setMetricsView] = useState<MetricsView>('hashrate');

  const toggleTimeframe = (key: TimeframeKey) => {
    setSelectedFrames(prev => {
      const isSelected = prev.includes(key);

      if (isSelected) {
        if (prev.length <= 3) return prev;
        return prev.filter(k => k !== key);
      }

      return [...prev, key];
    });
  };

  return (
    <ScrollView
      style={styles.mainWalletScroll}
      contentContainerStyle={styles.pageScrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.screenTitle}>Compute</Text>
      <Text style={styles.screenSubtitle}>
        Monitor miners and GPU hashrate over time.
      </Text>

      {/* Instance card */}
      <View style={styles.instanceCard}>
        <View style={styles.instanceHeaderRow}>
          <View style={styles.instanceNameBlock}>
            <Text style={styles.instanceName}>{INSTANCE.name}</Text>
            <Text style={styles.instanceSub}>{INSTANCE.location}</Text>
          </View>

          <View style={styles.instanceStatusPill}>
            <View style={styles.instanceStatusDot} />
            <Text style={styles.instanceStatusText}>{INSTANCE.status}</Text>
          </View>
        </View>

        <View style={styles.instanceMetaList}>
          <View style={styles.instanceMetaRow}>
            <Text style={styles.instanceMetaLabel}>Region</Text>
            <Text style={styles.instanceMetaValue}>{INSTANCE.region}</Text>
          </View>
          <View style={styles.instanceMetaRow}>
            <Text style={styles.instanceMetaLabel}>Private IP</Text>
            <Text style={styles.instanceMetaValue}>{INSTANCE.privateIp}</Text>
          </View>
          <View style={styles.instanceMetaRow}>
            <Text style={styles.instanceMetaLabel}>Public IP</Text>
            <Text style={styles.instanceMetaValue}>{INSTANCE.publicIp}</Text>
          </View>
        </View>

        <View style={styles.instanceActionsRow}>
          <Pressable style={styles.instanceActionButton}>
            <Feather name="play" size={14} style={styles.instanceActionIcon} />
            <Text style={styles.instanceActionText}>Start</Text>
          </Pressable>
          <Pressable style={styles.instanceActionButton}>
            <Feather name="square" size={14} style={styles.instanceActionIcon} />
            <Text style={styles.instanceActionText}>Stop</Text>
          </Pressable>
          <Pressable style={styles.instanceActionButton}>
            <Feather
              name="rotate-ccw"
              size={14}
              style={styles.instanceActionIcon}
            />
            <Text style={styles.instanceActionText}>Restart</Text>
          </Pressable>
          <Pressable style={styles.instanceActionButton}>
            <Feather
              name="more-horizontal"
              size={14}
              style={styles.instanceActionIcon}
            />
            <Text style={styles.instanceActionText}>More</Text>
          </Pressable>
        </View>
      </View>

      {/* Timeframes */}
      <View style={styles.timeframeRow}>
        {TIMEFRAMES.map(tf => {
          const selected = selectedFrames.includes(tf.key);
          return (
            <Pressable
              key={tf.key}
              style={[
                styles.timeframeChip,
                selected && styles.timeframeChipSelected,
              ]}
              onPress={() => toggleTimeframe(tf.key)}
            >
              <Text
                style={[
                  styles.timeframeChipLabel,
                  selected && styles.timeframeChipLabelSelected,
                ]}
              >
                {tf.label}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Metric toggle */}
      <View style={styles.metricsToggleRow}>
        <Pressable
          style={[
            styles.metricsToggleChip,
            metricsView === 'hashrate' && styles.metricsToggleChipActive,
          ]}
          onPress={() => setMetricsView('hashrate')}
        >
          <Text
            style={[
              styles.metricsToggleLabel,
              metricsView === 'hashrate' && styles.metricsToggleLabelActive,
            ]}
          >
            Hashrate
          </Text>
        </Pressable>

        <Pressable
          style={[
            styles.metricsToggleChip,
            metricsView === 'utilization' && styles.metricsToggleChipActive,
          ]}
          onPress={() => setMetricsView('utilization')}
        >
          <Text
            style={[
              styles.metricsToggleLabel,
              metricsView === 'utilization' && styles.metricsToggleLabelActive,
            ]}
          >
            Utilization
          </Text>
        </Pressable>
      </View>

      {/* Chart */}
      <View style={styles.computeChartCard}>
        <Text style={styles.computeChartTitle}>
          {metricsView === 'hashrate' ? 'GPU hashrate' : 'GPU utilization'}
        </Text>
        <Text style={styles.computeChartSub}>
          Select at least 3 timeframes to compare trends.
        </Text>

        <View style={styles.computeChartBody}>
          <View style={styles.computeChartGrid}>
            <View style={styles.computeChartGridLine} />
            <View style={styles.computeChartGridLine} />
            <View style={styles.computeChartGridLine} />
          </View>

          <View style={styles.computeChartBarsRow}>
            {selectedFrames.map(key => (
              <View key={key} style={styles.computeChartBarGroup}>
                <View
                  style={[
                    styles.computeChartBar,
                    metricsView === 'utilization' && { height: 60 },
                  ]}
                />
                <Text style={styles.computeChartBarLabel}>
                  {TIMEFRAMES.find(tf => tf.key === key)?.label}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <Text style={styles.computeChartEmptyText}>
          Connect a miner to start streaming live{' '}
          {metricsView === 'hashrate' ? 'hashrate (MH/s)' : 'utilization (%)'}{' '}
          for each timeframe.
        </Text>
      </View>

      <View style={styles.computeLegendRow}>
        <View style={styles.computeLegendDotPrimary} />
        <Text style={styles.computeLegendLabel}>
          {metricsView === 'hashrate'
            ? 'Hashrate (MH/s)'
            : 'GPU utilization (%)'}
        </Text>

        <View style={styles.computeLegendDotSecondary} />
        <Text style={styles.computeLegendLabel}>Rewards (PUTE)</Text>
      </View>
    </ScrollView>
  );
};

export default ComputeScreen;
