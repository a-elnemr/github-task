import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './android/app/src/components/Header';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './android/app/src/navigation/TabNavigator';

function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
