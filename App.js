import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Explore from './src/screens/Explore';
import Repositories from './src/screens/Repositories';
import HeaderComp from './src/components/Header';
import {Provider} from 'react-redux';
import {store} from './src/features/store';

const Tab = createMaterialTopTabNavigator();

const App = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: 15}}>
      <HeaderComp />
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Explore" component={Explore} />
          <Tab.Screen name="Repositories" component={Repositories} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
