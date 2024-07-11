import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useSelector} from 'react-redux';
import colors from '../config/color';
import moment from 'moment';

function ExploreRepoDetails({RepoUpdatedAt, RepoLang}) {
  const darkMode = useSelector(state => state.theme.darkMode);
  const timeAgo = moment(RepoUpdatedAt).fromNow();

  return (
    <View style={styles.detailsContainer}>
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
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
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

export default ExploreRepoDetails;
