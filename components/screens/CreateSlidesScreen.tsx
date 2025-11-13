import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../../style';
import { PrimaryButton } from '../Buttons';

type Props = {
  slideIndex: number;
  onNextSlide: () => void;
  onContinue: () => void;
};

const slides = [
  {
    title: 'Self-Custody',
    subtitle: 'Your wallet, your keys. Think of it like a Ledger vault in your pocket.',
    icon: '📟',
  },
  {
    title: 'Vault Locked',
    subtitle: 'Your keys stay locked away. The app only uses them with your approval.',
    icon: '🧱',
  },
  {
    title: 'Write It Down',
    subtitle:
      'Grab a pen and paper. You’ll get a secret phrase that can recover your wallet.',
    icon: '✒️',
  },
];

const CreateSlidesScreen: React.FC<Props> = ({
  slideIndex,
  onNextSlide,
  onContinue,
}) => {
  const slide = slides[slideIndex];

  const handleTap = () => {
    if (slideIndex < slides.length - 1) {
      onNextSlide();
    } else {
      onContinue();
    }
  };

  return (
    <View style={styles.screenRoot}>
      {/* Instagram-style progress bars */}
      <View style={styles.storyProgressRow}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.storyBar,
              i <= slideIndex ? styles.storyBarActive : undefined,
            ]}
          />
        ))}
      </View>

      {/* Tappable slide card (tap anywhere to advance) */}
      <Pressable style={styles.slideCard} onPress={handleTap}>
        <Text style={styles.slideIcon}>{slide.icon}</Text>
        <Text style={styles.slideTitle}>{slide.title}</Text>
        <Text style={styles.slideSubtitle}>{slide.subtitle}</Text>
      </Pressable>

      {/* Only show big CTA on the last slide */}
      {slideIndex === slides.length - 1 && (
        <View style={styles.buttonRow}>
          <PrimaryButton label="Continue" onPress={onContinue} />
        </View>
      )}
    </View>
  );
};

export default CreateSlidesScreen;
