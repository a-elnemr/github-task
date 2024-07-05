import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ExploreScreen from '../screens/ExploreScreen';
import RepositoriesScreen from '../screens/RepositoriesScreen';
import colors from '../config/color';

const Tab = createMaterialTopTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 11, fontFamily: 'Silka'},
        tabBarItemStyle: {width: 130},
        tabBarIndicatorStyle: {
          backgroundColor: colors.cyan,
          width: '40%',
          marginLeft: '6%',
        },
        tabBarActiveTintColor: colors.purple,
        tabBarInactiveTintColor: colors.grey,
      }}>
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Repositories" component={RepositoriesScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
