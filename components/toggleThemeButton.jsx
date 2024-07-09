import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useTheme} from '../theme/themeContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ToggleThemeButton = () => {
  const {isDarkTheme, toggleTheme, theme} = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={[styles.button, {marginTop: '2%'}]}>
      <MaterialCommunityIcons
        name={isDarkTheme ? 'white-balance-sunny' : 'moon-waning-crescent'}
        size={30}
        color={theme.icon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    marginLeft: 10,
    marginRight: 5,

    borderRadius: 100,
  },
});

export default ToggleThemeButton;
