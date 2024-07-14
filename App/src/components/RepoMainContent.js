import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../config/color';
import Icon from 'react-native-vector-icons/AntDesign';

function RepoMainContent({RepoTitle, RepoDescription, children}) {
  const darkMode = useSelector(state => state.theme.darkMode);
  return (
    <View
      style={
        darkMode
          ? [styles.lightContainer, styles.darkContainer]
          : styles.lightContainer
      }>
      {children?.isTrending}
      <View style={styles.TitleContainer}>
        <Icon style={styles.bookIcon} name="book" size={22} />
        <Text style={darkMode ? styles.darkRepoTitle : styles.lightRepoTitle}>
          {RepoTitle}
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text
          style={
            darkMode
              ? [styles.lightDescription, styles.darkDescription]
              : styles.lightDescription
          }>
          {RepoDescription}
        </Text>
      </View>
      <View
        style={
          darkMode ? [styles.lightLine, styles.darkLine] : styles.lightLine
        }></View>
      {children?.repoDetails}
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
  TitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  bookIcon: {
    marginRight: 10,
    color: colors.lightCyan,
  },
  lightRepoTitle: {
    color: colors.purple,
    fontSize: 16,
    flex: 1,
  },
  darkRepoTitle: {
    color: colors.white,
  },
  descriptionContainer: {
    marginBottom: 22,
  },
  lightDescription: {
    fontSize: 9,
    color: colors.black,
    fontFamily: 'Silka Medium',
    lineHeight: 13,
  },
  darkDescription: {
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
});

export default RepoMainContent;
