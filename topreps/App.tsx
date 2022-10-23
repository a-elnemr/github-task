import {View, Text} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import Logo from './src/assets/images/logo.svg';
import {SvgUri} from 'react-native-svg';
const App = () => {
  return (
    <View
      style={{
        marginTop: 20,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
      }}>
      <HomeScreen />
    </View>
  );
};

export default App;
