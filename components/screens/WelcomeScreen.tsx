import React, { useEffect, useRef } from 'react';
import { View, Text, Image, Animated, Easing } from 'react-native';
import { styles } from '../../style';
import { PrimaryButton, SecondaryButton } from '../Buttons';

const VertraLogoGreen = require('../../assets/vertra-logo-green.png');

type Props = {
  onCreateWallet: () => void;
  onImportWallet: () => void;
};

const WelcomeScreen: React.FC<Props> = ({ onCreateWallet, onImportWallet }) => {
  // Slide the hero down
  const slideY = useRef(new Animated.Value(-90)).current;
  // Glow opacity behind the card
  const glowOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(slideY, {
        toValue: 0,
        duration: 900,                 // slower, smoother
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,        // translateY is supported
      }),
      Animated.timing(glowOpacity, {
        toValue: 1,
        duration: 900,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,        // opacity is supported
      }),
    ]).start();
  }, [slideY, glowOpacity]);

  return (
    <View style={styles.screenRoot}>
      {/* Glowing green layer behind the card */}
      <Animated.View
        style={[
          styles.heroGlow,
          {
            opacity: glowOpacity,
            transform: [{ translateY: slideY }],
          },
        ]}
      />

      {/* Green hero card sliding down */}
      <Animated.View
        style={[
          styles.heroCard,
          {
            transform: [{ translateY: slideY }],
          },
        ]}
      >
        <Image source={VertraLogoGreen} style={styles.heroImage} />
      </Animated.View>

      {/* Copy + buttons are lower on the screen */}
      <Text style={styles.appName}>VERTRA OCCUPANT</Text>

      <Text style={styles.heroText}>
        Your Wallet. <Text style={styles.heroHighlight}>Your Data.</Text>
      </Text>

      <Text style={styles.heroSub}>
        Own your building data and earn by contributing secure compute.
      </Text>

      <View style={styles.buttonColumn}>
        <PrimaryButton label="Create wallet" onPress={onCreateWallet} />
        <SecondaryButton
          label="I already have a wallet"
          onPress={onImportWallet}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
