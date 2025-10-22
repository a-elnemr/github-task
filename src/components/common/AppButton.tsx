/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

const AppButton: React.FC<Props> = ({ title, onPress, disabled }) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        { backgroundColor: colors.primary, opacity: disabled ? 0.6 : 1 },
      ]}
    >
      <Text style={[styles.text, { color: colors.textContrast }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 8,
    alignItems: 'center',
  },
  text: {
    fontWeight: '600',
    fontSize: 16,
  },
});

export { AppButton };
