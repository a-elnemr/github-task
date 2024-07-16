import React, {useState} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import Header from './src/components/Header';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <Header />
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
