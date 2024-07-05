import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import colors from '../config/color';
import Icon from 'react-native-vector-icons/Ionicons';
import TabNavigator from '../navigation/TabNavigator';

function Header(props) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.topHeaderView}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.Image}
            source={require('../assets/pics/darklogo.png')}
          />
        </View>

        <View style={styles.iconsContainer}>
          <Icon
            name="sunny"
            size={28}
            color={colors.black}
            style={styles.sunIcon}
          />
          <Icon name="search" size={28} color={colors.black} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 90,
    paddingTop: 10,
    paddingHorizontal: 25,
    backgroundColor: colors.white,
  },
  topHeaderView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  iconsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  sunIcon: {
    marginRight: 10,
  },
});

export default Header;
