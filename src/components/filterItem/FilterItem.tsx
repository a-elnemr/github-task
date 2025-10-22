import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { fonts } from '../../fonts';

interface FilterItemProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
  baseTextColor: string;
}

const FilterItem: React.FC<FilterItemProps> = ({
  label,
  isActive,
  onPress,
  baseTextColor,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.optionButton,
        {
          backgroundColor: isActive
            ? colors.primary
            : colors.cardBackground || '#eee',
          borderColor: colors.primary,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          color: isActive ? '#fff' : baseTextColor,
          fontWeight: isActive ? '700' : '500',
          fontFamily: fonts.regular,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  optionButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderWidth: 1.5,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
});

export { FilterItem };
