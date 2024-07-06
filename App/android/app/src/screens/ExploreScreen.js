import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../config/color';
import ScreenTitle from '../components/ScreenTitle';

function ExploreScreen(props) {
  const darkMode = useSelector(state => state.theme.darkMode);
  return (
    <View
      style={
        darkMode ? [styles.container, styles.darkContainer] : styles.container
      }>
      <ScreenTitle title="Explore Popular" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray,
  },
  darkContainer: {
    backgroundColor: colors.darker,
  },
});

export default ExploreScreen;
