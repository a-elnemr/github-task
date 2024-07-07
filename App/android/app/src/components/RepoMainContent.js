import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../config/color';
import Icon from 'react-native-vector-icons/AntDesign';

function RepoMainContent({RepoTitle, RepoDescription}) {
  const darkMode = useSelector(state => state.theme.darkMode);
  return (
    <>
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
    </>
  );
}

const styles = StyleSheet.create({
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
});

export default RepoMainContent;
