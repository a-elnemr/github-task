import React, {useState} from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import store from './src/redux/store';
//import Header from './android/app/src/components/Header';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import {Provider} from 'react-redux';
import Header from './src/components/Header';
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
