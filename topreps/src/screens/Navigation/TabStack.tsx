import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ExploreScreen from 'src/screens/ExploreScreen';
import RepositoriesScreen from 'src/screens/RepositoriesScreen';
import colorPallete from 'src/assets/constants/colorPallete';

const Tab = createMaterialTopTabNavigator();
const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          borderColor: colorPallete.primary,
          borderBottomWidth: 2,
        },
        tabBarItemStyle: {
          width: 115,
        },
        tabBarActiveTintColor: colorPallete.secondary,
        tabBarLabelStyle: {
          fontFamily: 'Silka',
          fontSize: 14,
          fontWeight: '500',
        },
      }}>
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Repository" component={RepositoriesScreen} />
    </Tab.Navigator>
  );
};

export default TabStack;
