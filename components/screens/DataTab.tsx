// components/screens/DataTab.tsx
import React from 'react';
import { ScrollView, View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from '../../style';

type Session = {
  id: string;
  name: string;
  city: string;
  area: string;
  tests: {
    vibration: boolean;
    audio: boolean;
    meta: boolean;
  };
};

const SESSIONS: Session[] = [
  {
    id: '1',
    name: 'Midtown Tower – South',
    city: 'NYC',
    area: 'Midtown',
    tests: { vibration: true, audio: true, meta: true },
  },
  {
    id: '2',
    name: '8th Ave Office – Lobby',
    city: 'NYC',
    area: 'Chelsea',
    tests: { vibration: true, audio: false, meta: true },
  },
  {
    id: '3',
    name: 'Tribeca Lofts – Car A',
    city: 'NYC',
    area: 'Tribeca',
    tests: { vibration: false, audio: true, meta: true },
  },
  {
    id: '4',
    name: 'SoHo Retail – Freight',
    city: 'NYC',
    area: 'SoHo',
    tests: { vibration: true, audio: true, meta: false },
  },
  {
    id: '5',
    name: 'Queens Plaza – Tower 2',
    city: 'NYC',
    area: 'Queens',
    tests: { vibration: true, audio: false, meta: false },
  },
  {
    id: '6',
    name: 'Brooklyn Point – North Cab',
    city: 'NYC',
    area: 'Brooklyn',
    tests: { vibration: false, audio: true, meta: false },
  },
  {
    id: '7',
    name: 'Hudson Yards – Service',
    city: 'NYC',
    area: 'Hudson Yards',
    tests: { vibration: true, audio: true, meta: true },
  },
];

const DataTab: React.FC = () => {
  return (
    <ScrollView
      style={styles.mainWalletScroll}
      contentContainerStyle={styles.pageScrollContent}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.screenTitle}>Data sessions</Text>
      <Text style={styles.screenSubtitle}>
        Each record represents a building session with Vibration, Audio, and Meta tests.
      </Text>

      <View style={styles.cardList}>
        {SESSIONS.map(session => (
          <Pressable key={session.id} style={styles.listRow}>
            <View style={styles.listRowIconCircle}>
              <Text style={styles.listRowIconText}>
                {session.name.charAt(0).toUpperCase()}
              </Text>
            </View>

            <View style={styles.listRowText}>
              <Text style={styles.listRowTitle}>{session.name}</Text>
              <Text style={styles.listRowSub}>
                {session.city} · {session.area}
              </Text>

              {/* test chips – using timeframeChip styles so we don’t add more */}
              <View style={{ flexDirection: 'row', marginTop: 8, gap: 8 }}>
                <View
                  style={[
                    styles.timeframeChip,
                    session.tests.vibration && styles.timeframeChipSelected,
                  ]}
                >
                  <Text
                    style={[
                      styles.timeframeChipLabel,
                      session.tests.vibration && styles.timeframeChipLabelSelected,
                    ]}
                  >
                    {session.tests.vibration ? '✓ Vibration' : '– Vibration'}
                  </Text>
                </View>

                <View
                  style={[
                    styles.timeframeChip,
                    session.tests.audio && styles.timeframeChipSelected,
                  ]}
                >
                  <Text
                    style={[
                      styles.timeframeChipLabel,
                      session.tests.audio && styles.timeframeChipLabelSelected,
                    ]}
                  >
                    {session.tests.audio ? '✓ Audio' : '– Audio'}
                  </Text>
                </View>

                <View
                  style={[
                    styles.timeframeChip,
                    session.tests.meta && styles.timeframeChipSelected,
                  ]}
                >
                  <Text
                    style={[
                      styles.timeframeChipLabel,
                      session.tests.meta && styles.timeframeChipLabelSelected,
                    ]}
                  >
                    {session.tests.meta ? '✓ Meta' : '– Meta'}
                  </Text>
                </View>
              </View>
            </View>

            <Feather name="chevron-right" size={18} style={styles.listRowChevron} />
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default DataTab;
