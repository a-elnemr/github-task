import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colorPallete from 'src/assets/constants/colorPallete';
import Star from 'src/assets/images/star.svg';
import RepoIcon from 'src/assets/images/repoIcon.svg';
const RepoTile = ({item, index}: any) => {
  return (
    <View key={index.toString()} style={styles.tileContainer}>
      <View style={styles.tileHeader}>
        <Text style={styles.tileHeaderText}>Trending repository</Text>
        <View style={styles.tileHeaderRight}>
          <View style={styles.tileHeaderStarContainer}>
            <Star />
            <Text style={styles.tileHeaderStar}>Star</Text>
          </View>
          <View style={styles.tileHeaderRateContainer}>
            <Text style={styles.tileHeaderRate}>40.5K</Text>
          </View>
        </View>
      </View>
      <View style={styles.tileBody}>
        <View style={styles.tileTitle}>
          <RepoIcon />
          <Text style={styles.tileTitleText}>novak-99/ MLPP</Text>
        </View>
        <Text style={styles.tileDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s.
        </Text>
      </View>
      <View style={styles.tileSeparator} />
      <View style={styles.tileFooter}>
        <Text style={styles.tileFooterText}>Updated 12 hours ago</Text>
        <Text style={styles.tileFooterText}>C++</Text>
      </View>
    </View>
  );
};

export default RepoTile;

const styles = StyleSheet.create({
  tileContainer: {
    marginRight: 25,
    marginVertical: 10,
    backgroundColor: colorPallete.white,
    width: '100%',
    paddingHorizontal: 18,
    paddingTop: 25,
    paddingBottom: 22,
    borderRadius: 13,
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
    alignItems: 'center',
  },
  tileHeaderRight: {
    flexDirection: 'row',
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
  tileBody: {},
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
    marginTop: 17.5,
    // marginBottom: 12,
    flexDirection: 'row',
  },
  tileFooterText: {
    fontFamily: 'Silka-Regular',
    fontSize: 12,
    marginRight: 44,
  },
});