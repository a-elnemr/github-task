import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../config/color';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import moment from 'moment';
import RepoMainContent from './RepoMainContent';

function ExploreCard({
  starCount,
  RepoTitle,
  RepoDescription,
  RepoUpdatedAt,
  RepoLang,
}) {
  const timeAgo = moment(RepoUpdatedAt).fromNow();
  const darkMode = useSelector(state => state.theme.darkMode);
  return (
    <View
      style={
        darkMode
          ? [styles.lightContainer, styles.darkContainer]
          : styles.lightContainer
      }>
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
                ? [
                    styles.lightStarCountContainer,
                    styles.darkStarCountContainer,
                  ]
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
      <RepoMainContent
        RepoTitle={RepoTitle}
        RepoDescription={RepoDescription}
      />

      <View
        style={
          darkMode ? [styles.lightLine, styles.darkLine] : styles.lightLine
        }></View>
      <View style={styles.fourthSection}>
        <Text
          style={
            darkMode
              ? [styles.lightLastSecText, styles.darkLastSecText]
              : styles.lightLastSecText
          }>
          updated: {timeAgo}
        </Text>
        <Text
          style={
            darkMode
              ? [styles.lightLastSecText, styles.darkLastSecText]
              : styles.lightLastSecText
          }>
          {RepoLang}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lightContainer: {
    backgroundColor: colors.white,
    borderRadius: 13,
    overflow: 'hidden',
    paddingHorizontal: 13,
    paddingVertical: 25,
    marginBottom: 20,
  },
  darkContainer: {
    backgroundColor: colors.dark,
  },
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

  lightLine: {
    width: '100%',
    height: 1.5,
    backgroundColor: colors.lightGray,
    marginBottom: 22,
  },
  darkLine: {
    backgroundColor: colors.lightCyan,
    height: 0.7,
  },
  fourthSection: {
    flexDirection: 'row',
  },
  lightLastSecText: {
    marginRight: 30,
    color: colors.black,
    fontSize: 10,
    fontFamily: 'Silka Medium',
  },
  darkLastSecText: {
    color: colors.white,
  },
});

export default ExploreCard;
