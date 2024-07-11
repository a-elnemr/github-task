import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '../config/color';
import {useSelector} from 'react-redux';

function RepoDetails({RepoLang, starCount, forkCount}) {
  const darkMode = useSelector(state => state.theme.darkMode);

  return (
    <View style={styles.detailsContainer}>
      <Text
        style={
          darkMode
            ? [styles.lightLastSecText, styles.darkLastSecText]
            : styles.lightLastSecText
        }>
        {RepoLang}
      </Text>
      <View style={styles.starCountContainer}>
        <Icon
          style={styles.iconStyle}
          name="staro"
          size={16}
          color={colors.lightCyan}
        />
        <Text
          style={
            darkMode
              ? [styles.lightLastSecText, styles.darkLastSecText]
              : styles.lightLastSecText
          }>
          {starCount}
        </Text>
      </View>
      <View style={styles.starCountContainer}>
        <Icon
          style={styles.iconStyle}
          name="fork"
          size={16}
          color={colors.lightCyan}
        />
        <Text
          style={
            darkMode
              ? [styles.lightLastSecText, styles.darkLastSecText]
              : styles.lightLastSecText
          }>
          {forkCount}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: 'row',
  },
  lightLastSecText: {
    marginRight: 20,
    color: colors.black,
    fontSize: 10,
    fontFamily: 'Silka Medium',
  },
  darkLastSecText: {
    color: colors.white,
  },
  iconStyle: {
    marginRight: 2,
  },
  starCountContainer: {
    flexDirection: 'row',
  },
});

export default RepoDetails;
