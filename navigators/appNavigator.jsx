import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ExploreScreen from '../screens/exploreScreen';
import RepositoriesScreen from '../screens/repositoriesScreen';
import NoResultsComponent from '../components/noResultsComponents';
import {useTheme} from '../theme/themeContext';
import ListDropDown from '../components/list';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TabNavigator = () => {
  const {theme} = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.textColor,
        tabBarInactiveTintColor: theme.text3,
        tabBarIndicatorStyle: {
          backgroundColor: '#00fa9a',
        },
        tabBarStyle: {backgroundColor: theme.background2, elevation: 0},
        tabBarItemStyle: {width: 150},
        tabBarScrollEnabled: true,
        tabBarContentContainerStyle: {justifyContent: 'center'},
      }}>
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Repositories" component={RepositoriesScreen} />
    </Tab.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="NoResults" component={NoResultsComponent} />
        <Stack.Screen name="Repositories" component={RepositoriesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
