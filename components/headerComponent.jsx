import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome6';

import ToggleThemeButton from './toggleThemeButton';
import {useTheme} from '../theme/themeContext';

const HeaderComponent = () => {
  const {theme} = useTheme();
  return (
    <View style={[styles.container, {backgroundColor: theme.background2}]}>
      <View style={styles.headerContainer}>
        <View style={{flexDirection: 'row', marginLeft: 16}}>
          <View style={{marginTop: '2%'}}>
            <MaterialCommunityIcons
              name="leaf"
              size={40}
              color={'#00fa9a'}></MaterialCommunityIcons>
          </View>

          <Text style={[styles.headerTxt, {color: theme.textColor}]}>
            milango
          </Text>
          <ToggleThemeButton></ToggleThemeButton>
          <View style={{marginTop: '2%'}}>
            <EvilIcons name="search" size={38} color={theme.text}></EvilIcons>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    justifyContent: 'center',
    height: 60,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerTxt: {
    fontSize: 40,
    flex: 1,
    color: '#00008b',
  },
});

export default React.memo(HeaderComponent);
