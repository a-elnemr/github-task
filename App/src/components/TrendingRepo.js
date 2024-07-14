import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../config/color';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/AntDesign';

function TrendingRepo({starCount}) {
  const darkMode = useSelector(state => state.theme.darkMode);

  return (
    <View style={styles.firstSection}>
      <Text
        style={
          darkMode
            ? [styles.lightTrendingText, styles.darkTrendingText]
            : styles.lightTrendingText
        }>
        Trending repository
      </Text>
      <View style={styles.iconsView}>
        <Icon
          style={styles.iconStyle}
          name="staro"
          size={16}
          color={colors.lightCyan}
        />
        <Text
          style={
            darkMode
              ? [styles.lightStarText, styles.darkStarText]
              : styles.lightStarText
          }>
          Star
        </Text>
        <View
          style={
            darkMode
              ? [styles.lightStarCountContainer, styles.darkStarCountContainer]
              : styles.lightStarCountContainer
          }>
          <Text
            style={
              darkMode
                ? [styles.lightStarCounrText, styles.darkStarCountText]
                : styles.lightStarCounrText
            }>
            {starCount}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  firstSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  lightTrendingText: {
    flex: 1,
    fontFamily: 'Silka Medium',
    fontSize: 8,
    color: colors.grey,
  },
  darkTrendingText: {
    color: colors.white,
  },
  iconsView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  iconStyle: {
    marginRight: 2,
  },

  lightStarCountContainer: {
    backgroundColor: colors.lightestGray,
    borderRadius: 6,
    paddingVertical: 3,
    marginRight: 2,
    paddingHorizontal: 7,
  },
  darkStarCountContainer: {
    backgroundColor: colors.lightGreen,
  },
  lightStarCounrText: {
    fontSize: 11,
    color: colors.purple,
  },
  darkStarCountText: {
    color: colors.lightCyan,
  },
  lightStarText: {
    fontSize: 11,
    marginRight: 12,
    color: colors.black,
  },
  darkStarText: {
    color: colors.white,
  },
});

export default TrendingRepo;
