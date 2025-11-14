// components/screens/WelcomeScreen.tsx
import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Image,
  Animated,
  Easing,
  Pressable,
} from 'react-native';
import { styles } from '../../style';
import { PrimaryButton, SecondaryButton } from '../Buttons';

const VertraLogoGreen = require('../../assets/vertra-logo-green.png');

type Props = {
  onCreateWallet: () => void;
  onImportWallet: () => void;
};

const WelcomeScreen: React.FC<Props> = ({ onCreateWallet, onImportWallet }) => {
  // Slide the logo down from top into center (JS-driven)
  const slideY = useRef(new Animated.Value(-90)).current;

  // Ripple effect on press
  const rippleOpacity = useRef(new Animated.Value(0)).current;
  const rippleScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(slideY, {
      toValue: 0,
      duration: 900,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false, // JS-driven to avoid mixed-driver issues
    }).start();
  }, [slideY]);

  const onLogoPress = () => {
    rippleScale.setValue(1);
    rippleOpacity.setValue(1);

    Animated.parallel([
      Animated.timing(rippleScale, {
        toValue: 1.2,
        duration: 400,
        easing: Easing.out(Easing.quad),
        useNativeDriver: false,
      }),
      Animated.timing(rippleOpacity, {
        toValue: 0,
        duration: 450,
        easing: Easing.out(Easing.quad),
        useNativeDriver: false, // opacity JS-driven too
      }),
    ]).start();
  };

  return (
    <View style={styles.screenRoot}>
      {/* Logo area with slide + ripple */}
      <Animated.View
        style={[
          styles.logoContainer,
          { transform: [{ translateY: slideY }] },
        ]}
      >
        <Pressable onPress={onLogoPress} style={styles.logoPressTarget}>
          <Animated.View
            style={[
              styles.logoRipple,
              {
                opacity: rippleOpacity,
                transform: [{ scale: rippleScale }],
              },
            ]}
          />
          <Image source={VertraLogoGreen} style={styles.heroImage} />
        </Pressable>
      </Animated.View>

      {/* Text + buttons block */}
      <View style={styles.contentBelowLogo}>
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
    </View>
  );
};

export default WelcomeScreen;
