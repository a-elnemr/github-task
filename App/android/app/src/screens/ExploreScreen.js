import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../config/color';

function ExploreScreen(props) {
  const darkMode = useSelector(state => state.theme.darkMode);
  return (
    <View
      style={
        darkMode ? [styles.container, styles.darkContainer] : styles.container
      }>
      <Text>hhh</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  darkContainer: {
    backgroundColor: colors.darker,
  },
});

export default ExploreScreen;
