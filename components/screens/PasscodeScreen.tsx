// components/screens/PasscodeScreen.tsx
import React, { useState, useRef } from 'react';
import { View, Text, Pressable, Animated } from 'react-native';
import { styles } from '../../style';
import { PrimaryButton, SecondaryButton } from '../Buttons';

type Props = {
  passcode: string;
  onChangePasscode: (value: string) => void;
  onContinue: () => void;
  canSkipPasscode?: boolean;
  onSkipPasscode?: () => void;
};

const MIN_LENGTH = 4;
const MAX_LENGTH = 6;

/** Single animated keypad key */
const AnimatedKey: React.FC<{
  label: string;
  onPress: () => void;
}> = ({ label, onPress }) => {
  const scale = useRef(new Animated.Value(1)).current;
  const highlight = useRef(new Animated.Value(0)).current;

  const bgColor = highlight.interpolate({
    inputRange: [0, 1],
    outputRange: ['#181c27', '#19e470'],
  });

  const borderColor = highlight.interpolate({
    inputRange: [0, 1],
    outputRange: ['#3b4258', '#19e470'],
  });

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 0.9,
        friction: 5,
        tension: 120,
        useNativeDriver: false,
      }),
      Animated.timing(highlight, {
        toValue: 1,
        duration: 70,
        useNativeDriver: false,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        friction: 6,
        tension: 140,
        useNativeDriver: false,
      }),
      Animated.timing(highlight, {
        toValue: 0,
        duration: 130,
        useNativeDriver: false,
      }),
    ]).start();
  };

  return (
    <Pressable
      onPress={onPress}           // fire instantly
      onPressIn={handlePressIn}   // just for animation
      onPressOut={handlePressOut} // just for animation
      style={styles.keypadPressable}
    >
      <Animated.View
        style={[
          styles.keypadKey,
          {
            transform: [{ scale }],
            backgroundColor: bgColor,
            borderColor,
          },
        ]}
      >
        <Text style={styles.keypadKeyText}>{label}</Text>
      </Animated.View>
    </Pressable>
  );
};

const PasscodeScreen: React.FC<Props> = ({
  passcode,
  onChangePasscode,
  onContinue,
  canSkipPasscode,
  onSkipPasscode,
}) => {
  const [showPasscode, setShowPasscode] = useState(false);

  const handleDigitPress = (digit: string) => {
    if (passcode.length >= MAX_LENGTH) return;
    onChangePasscode(passcode + digit);
  };

  const handleBackspace = () => {
    if (!passcode.length) return;
    onChangePasscode(passcode.slice(0, -1));
  };

  const canContinue = passcode.length >= MIN_LENGTH;

  return (
    <View style={styles.passcodeRoot}>
      {/* Header (pulled down from the very top) */}
      <View style={styles.passcodeHeader}>
        <Text style={styles.passcodeTitle}>Set a passcode</Text>
        <Text style={styles.passcodeSubtitle}>
          Add a {MIN_LENGTH}–{MAX_LENGTH} digit passcode to open your wallet on
          this device.
        </Text>
      </View>

      {/* Centered dots + keypad */}
      <View style={styles.passcodeBody}>
        {/* Dots row */}
        <View style={styles.passcodeDotsRow}>
          {Array.from({ length: MAX_LENGTH }).map((_, idx) => {
            const filled = idx < passcode.length;
            return (
              <View
                key={idx}
                style={[
                  styles.passcodeDot,
                  filled && styles.passcodeDotFilled,
                ]}
              />
            );
          })}
        </View>

        {/* Show / hide toggle + plain text */}
        <View style={styles.passcodeToggleRow}>
          <Pressable
            onPress={() => setShowPasscode(v => !v)}
            style={styles.passcodeToggleBtn}
          >
            <Text style={styles.passcodeToggleIcon}>
              {showPasscode ? '🙈' : '👁️'}
            </Text>
            <Text style={styles.passcodeToggleText}>
              {showPasscode ? 'Hide passcode' : 'Show passcode'}
            </Text>
          </Pressable>
        </View>

        {showPasscode && (
          <Text style={styles.passcodePlainText}>
            {passcode || '••••'}
          </Text>
        )}

        {/* Keypad */}
        <View style={styles.keypadGrid}>
          {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map(d => (
            <AnimatedKey key={d} label={d} onPress={() => handleDigitPress(d)} />
          ))}

          {/* spacer */}
          <View style={styles.keypadSpacer} />

          {/* 0 */}
          <AnimatedKey label="0" onPress={() => handleDigitPress('0')} />

          {/* backspace */}
          <Pressable onPress={handleBackspace} style={styles.keypadPressable}>
            <Animated.View style={styles.keypadKey}>
              <Text style={styles.keypadKeyIcon}>⌫</Text>
            </Animated.View>
          </Pressable>
        </View>
      </View>

      {/* Footer buttons */}
      <View style={styles.passcodeFooter}>
        <PrimaryButton
          label="Continue"
          onPress={onContinue}
          disabled={!canContinue && !canSkipPasscode}
        />

        {canSkipPasscode && onSkipPasscode && (
          <View style={{ marginTop: 12 }}>
            <SecondaryButton
              label="Skip for now"
              onPress={onSkipPasscode}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default PasscodeScreen;
