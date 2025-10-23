import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ScreenTitle = ({ title }: { title: string }) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.textColorMain }]}>
        {title}
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Silka SemiBold',
  },
});

export default ScreenTitle;
