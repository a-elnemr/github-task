import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import colors from '../config/color';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {toggleDarkMode} from '../redux/actions/Actions';

function Header({}) {
  const darkMode = useSelector(state => state.theme.darkMode);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <View
      style={[
        styles.defaultHeaderContainer,
        {backgroundColor: darkMode ? colors.dark : colors.white},
      ]}>
      <View style={styles.topHeaderView}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.Image}
            source={
              darkMode
                ? require('../assets/pics/lightlogo.png')
                : require('../assets/pics/darklogo.png')
            }
          />
        </View>

        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={handleToggle}>
            <Icon
              name={darkMode ? 'moon' : 'sunny'}
              size={24}
              color={darkMode ? 'white' : 'black'}
              style={styles.sunIcon}
            />
          </TouchableOpacity>
          <Icon name="search" size={28} color={darkMode ? 'white' : 'black'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  defaultHeaderContainer: {
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
