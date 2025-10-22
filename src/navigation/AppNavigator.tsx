import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';
import { useSelector, useDispatch } from 'react-redux';

import { Repos } from '../screens';
import { toggleTheme } from '../redux/actions/action';
import { RootState } from '../redux/reducers';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  const dispatch = useDispatch();
  const themeMode = useSelector((state: RootState) => state.theme.theme);
  const isLight = themeMode === 'light';

  return (
    <NavigationContainer theme={isLight ? DefaultTheme : DarkTheme}>
      <Stack.Navigator
        initialRouteName="Repos"
        screenOptions={{
          headerStyle: { backgroundColor: isLight ? '#fff' : '#000' },
          headerTintColor: isLight ? '#000' : '#fff',
        }}
      >
        <Stack.Screen
          name="Repos"
          component={Repos}
          options={{
            title: 'GitHub Top Repos',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => dispatch(toggleTheme())}
                style={{ paddingRight: 10 }}
              >
                <Icon
                  name={isLight ? 'moon' : 'sun'}
                  type="feather"
                  color={isLight ? '#000' : '#ffffff'}
                  size={20}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
