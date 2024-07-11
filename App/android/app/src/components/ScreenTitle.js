import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../config/color';
import {useSelector} from 'react-redux';

function ScreenTitle({title}) {
  const darkMode = useSelector(state => state.theme.darkMode);
  return (
    <View
      style={
        darkMode
          ? [styles.lightContainer, styles.darkContainer]
          : styles.lightContainer
      }>
      <Text
        style={
          darkMode ? [styles.lightText, styles.darkText] : styles.lightText
        }>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    paddingVertical: 35,
    paddingHorizontal: 20,
    backgroundColor: colors.lightGray,
  },
  darkContainer: {
    backgroundColor: colors.darker,
  },
  lightText: {
    fontFamily: 'Silka Medium',
    fontSize: 17,
    color: colors.black,
  },
  darkText: {
    color: colors.white,
  },
});

export default ScreenTitle;
