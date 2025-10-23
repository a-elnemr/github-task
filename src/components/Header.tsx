import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon,
} from 'react-native-heroicons/outline';
import { useDispatch } from 'react-redux';
import { toggleColorScheme } from '../store/actions/themeActions';
import { useTheme } from '../hooks/useTheme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SELECTED_THEME_KEY } from '../config/constants';

const Header = () => {
  const dispatch = useDispatch();
  const { colorScheme, colors } = useTheme();

  const toggleTheme = async () => {
    const newTheme = colorScheme === 'light' ? 'dark' : 'light';
    await AsyncStorage.setItem(SELECTED_THEME_KEY, newTheme);
    dispatch(toggleColorScheme());
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.headerBackgroundColor },
      ]}
    >
      <Image
        source={
          colorScheme === 'light'
            ? require('../../assets/images/logoLight.png')
            : require('../../assets/images/logoDark.png')
        }
        style={styles.logo}
        resizeMode="contain"
      />
      <View style={styles.rightContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.iconButton}
          onPress={toggleTheme}
        >
          {colorScheme === 'light' ? (
            <SunIcon size={24} color={colors.textColorMain} />
          ) : (
            <MoonIcon size={24} color={colors.textColorMain} />
          )}
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={styles.iconButton}>
          <MagnifyingGlassIcon size={24} color={colors.textColorMain} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 40,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  iconButton: {
    padding: 8,
    borderRadius: 8,
  },
});

export default Header;
