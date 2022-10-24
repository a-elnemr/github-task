import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colorPallete from 'src/assets/constants/colorPallete';
import Star from 'src/assets/images/star.svg';
import Fork from 'src/assets/images/fork.svg';
import RepoIcon from 'src/assets/images/repoIcon.svg';
import {ShadowView} from '@dimaportenko/react-native-shadow-view';
const RepsRepoTile = ({repo}: any) => {
  return (
    <ShadowView style={styles.tileContainer}>
      <View style={styles.tileTitle}>
        <RepoIcon />
        <Text style={styles.tileTitleText}>{repo.full_name}</Text>
      </View>
      <Text style={styles.tileDescription}>
        {repo.description ?? 'No Description Available'}
      </Text>
      <View style={styles.tileSeparator} />
      <View style={styles.tileFooter}>
        <Text style={styles.tileFooterText}>{repo.language}</Text>
        <View style={styles.footerItemContainer}>
          <Star />
          <Text style={styles.tileFooterText}>{repo.stargazers_count}</Text>
        </View>
        <View style={styles.footerItemContainer}>
          <Fork />
          <Text style={styles.tileFooterText}>{repo.forks_count}</Text>
        </View>
      </View>
    </ShadowView>
  );
};

export default RepsRepoTile;

const styles = StyleSheet.create({
  tileContainer: {
    marginRight: 25,
    marginVertical: 10,
    backgroundColor: colorPallete.white,
    width: '100%',
    paddingHorizontal: 18,
    paddingBottom: 10,
    borderRadius: 13,
    shadowColor: colorPallete.background,
    shadowOpacity: 0.33,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
  },
  tileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tileHeaderText: {
    color: colorPallete.darkBackGround,
    fontSize: 10,
    fontFamily: 'Silka-Medium',
  },
  tileHeaderStarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignrepos: 'center',
  },
  tileHeaderRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tileHeaderStar: {
    fontFamily: 'Silka-Medium',
    fontSize: 12,
    marginHorizontal: 4,
  },
  tileHeaderRateContainer: {
    flexDirection: 'row',
    backgroundColor: colorPallete.secondary + '11',
    paddingHorizontal: 9,
    height: 25,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tileHeaderRate: {
    color: colorPallete.secondary,
    fontFamily: 'Silka-Medium',
    fontSize: 12,
  },
  tileTitle: {
    flexDirection: 'row',
    marginVertical: 18,
  },
  tileTitleText: {
    fontFamily: 'Silka-SemiBold',
    fontSize: 18,
    color: colorPallete.secondary,
    marginHorizontal: 13,
  },
  tileDescription: {
    fontFamily: 'Silka-Regular',
    fontSize: 12,
    lineHeight: 18,
  },
  tileSeparator: {
    backgroundColor: colorPallete.background,
    height: 1,
    opacity: 0.37,
    marginTop: 15.5,
    marginBottom: 17.5,
  },
  tileFooter: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  tileFooterText: {
    marginHorizontal: 10,
    fontFamily: 'Silka-Regular',
    fontSize: 12,
    textAlignVertical: 'center',
  },
  footerItemContainer: {flexDirection: 'row', marginHorizontal: 10},
});
