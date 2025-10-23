import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useTheme } from '../hooks/useTheme';
import { ChevronDownIcon, ChevronUpIcon } from 'react-native-heroicons/outline';

const DropDownComponent = ({
  title,
  value,
  onPress,
  isExpanded,
}: {
  title: string;
  value: string;
  onPress: () => void;
  isExpanded?: boolean;
}) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: colors.headerBackgroundColor },
      ]}
      activeOpacity={0.7}
      onPress={() => {
        onPress();
      }}
    >
      <View style={styles.viewCountTextContainer}>
        <Text style={[styles.titleText, { color: colors.grayTextColors }]}>
          {title}
        </Text>

        <Text style={[styles.valueText, { color: colors.textColorMain }]}>
          {value}
        </Text>
      </View>
      {isExpanded ? (
        <ChevronUpIcon color={colors.textColorMain} size={20} />
      ) : (
        <ChevronDownIcon color={colors.textColorMain} size={20} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  viewCountTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    lineHeight: 20,
  },
  titleText: {
    fontFamily: 'Silka Normal',
  },
  valueText: {
    fontFamily: 'Silka Medium',
  },
});

DropDownComponent.displayName = 'DropDownComponent';

export default DropDownComponent;
