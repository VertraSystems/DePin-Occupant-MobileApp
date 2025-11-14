import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from '../style';

type ButtonVariant = 'default' | 'onGreen';

type ButtonProps = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: ButtonVariant;
};

/* ---------- Primary button ---------- */

export const PrimaryButton: React.FC<ButtonProps> = ({
  label,
  onPress,
  disabled,
  variant = 'default',
}) => {
  return (
    <TouchableOpacity
      onPress={disabled ? undefined : onPress}
      style={[
        styles.primaryButton,
        variant === 'onGreen' && styles.primaryButtonOnGreen,
        disabled && styles.buttonDisabled,
      ]}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.primaryButtonText,
          variant === 'onGreen' && styles.primaryButtonTextOnGreen,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

/* ---------- Secondary button ---------- */

export const SecondaryButton: React.FC<ButtonProps> = ({
  label,
  onPress,
  disabled,
  variant = 'default',
}) => {
  return (
    <TouchableOpacity
      onPress={disabled ? undefined : onPress}
      style={[
        styles.secondaryButton,
        variant === 'onGreen' && styles.secondaryButtonOnGreen,
        disabled && styles.buttonDisabled,
      ]}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.secondaryButtonText,
          variant === 'onGreen' && styles.secondaryButtonTextOnGreen,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

/* ---------- Toggle button (for biometrics / notifications) ---------- */

type ToggleButtonProps = {
  label: string;
  selected?: boolean;
  onPress: () => void;
};

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  label,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.toggleButton,
        selected && styles.toggleButtonSelected,
      ]}
      activeOpacity={0.85}
    >
      <Text
        style={[
          styles.toggleButtonText,
          selected && styles.toggleButtonTextSelected,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};