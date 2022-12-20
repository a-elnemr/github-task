import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { Explore, Home, Repositories } from "./src/screens"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HomeHeader } from "./src/components/home/home-header.component";
import { QueryClient, QueryClientProvider } from 'react-query';
const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

function ExploreStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Explore} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
function ReposStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Repos" component={Repositories} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const queryClient = new QueryClient();
export const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <HomeHeader />
        <Tab.Navigator
          screenOptions={{
            tabBarIndicatorStyle: { width: 110, backgroundColor: '#69d7b7', marginLeft: 20 },
            tabBarLabelStyle: { fontSize: 14, fontFamily: 'SilkaBold', color: '#5c499e' },
            tabBarItemStyle: { width: 140, },
            tabBarStyle: { backgroundColor: '#fff', paddingTop: 20, elevation: 20, shadowColor: '#d5d8dc' },
          }}

        >
          <Tab.Screen name="Explore" component={ExploreStackScreen} />
          <Tab.Screen name="Repositories" component={ReposStackScreen} />
        </Tab.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  )
}
