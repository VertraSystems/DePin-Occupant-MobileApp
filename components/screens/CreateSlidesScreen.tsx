// components/screens/CreateSlidesScreen.tsx
import React from 'react';
import {
  View,
  Text,
  Pressable,
  GestureResponderEvent,
  Dimensions,
} from 'react-native';
import { styles } from '../../style';
import { PrimaryButton } from '../Buttons';

type Props = {
  slideIndex: number;
  onNextSlide: () => void;
  onPrevSlide: () => void;
  onContinue: () => void;
};

const SLIDES = [
  {
    icon: '📟',
    title: 'Self-Custody',
    body: 'Your wallet, your keys. Think of it like a Ledger vault in your pocket.',
  },
  {
    icon: '🧱',
    title: 'Vault Locked',
    body: 'Your keys stay locked away. The app only uses them with your approval.',
  },
  {
    icon: '🖊️',
    title: 'Write It Down',
    body: 'Write your secret phrase down and keep it somewhere safe offline. It’s the only way to recover your wallet.',
  },
];

const screenWidth = Dimensions.get('window').width;

const CreateSlidesScreen: React.FC<Props> = ({
  slideIndex,
  onNextSlide,
  onPrevSlide,
  onContinue,
}) => {
  const clampedIndex = Math.min(Math.max(slideIndex, 0), SLIDES.length - 1);
  const slide = SLIDES[clampedIndex];

  const handleTap = (evt: GestureResponderEvent) => {
    const { locationX } = evt.nativeEvent;

    if (locationX < screenWidth / 2) {
      // Left side → previous slide
      if (clampedIndex > 0) {
        onPrevSlide();
      }
    } else {
      // Right side → next slide or finish
      if (clampedIndex < SLIDES.length - 1) {
        onNextSlide();
      } else {
        onContinue();
      }
    }
  };

  const handlePrimaryPress = () => {
    if (clampedIndex < SLIDES.length - 1) {
      onNextSlide();
    } else {
      onContinue();
    }
  };

  return (
    <View style={styles.screenRoot}>
      {/* Story-style progress bars at the very top */}
      <View style={styles.storyProgressRow}>
        {SLIDES.map((_, idx) => (
          <View
            key={idx}
            style={[
              styles.storyBar,
              idx <= clampedIndex && styles.storyBarActive,
            ]}
          />
        ))}
      </View>

      {/* Full-screen tap area – card sits in the middle, fills ~3/4 of height */}
      <Pressable style={styles.slideTapArea} onPress={handleTap}>
        <View style={styles.slideCardContainer}>
          <View style={styles.slideCard}>
            <Text style={styles.slideIcon}>{slide.icon}</Text>
            <Text style={styles.slideTitle}>{slide.title}</Text>
            <Text style={styles.slideSubtitle}>{slide.body}</Text>
          </View>
        </View>
      </Pressable>

      <PrimaryButton
        label={clampedIndex < SLIDES.length - 1 ? 'Continue' : 'View'}
        onPress={handlePrimaryPress}
      />
    </View>
  );
};

export default CreateSlidesScreen;
