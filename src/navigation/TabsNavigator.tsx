import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { useTheme } from '../hooks/useTheme';
import ExploreScreen from '../screens/ExploreScreen';
import RepositoriesScreen from '../screens/RepositoriesScreen';

const TabsNavigator = () => {
  const Tab = createMaterialTopTabNavigator();
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: 'Silka Bold',
          fontSize: 16,
        },
        tabBarItemStyle: {
          width: 130,
        },
        tabBarIndicatorStyle: {
          width: 110,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 10,
          backgroundColor: colors.secondary,
        },
        tabBarActiveTintColor: colors.navigationTabsTextColor,
        tabBarInactiveTintColor: colors.grayTextColors,
        tabBarStyle: {
          backgroundColor: colors.headerBackgroundColor,
        },
      }}
    >
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Repositories" component={RepositoriesScreen} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
