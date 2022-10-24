import {StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from 'src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <SafeAreaView style={styles.screenContainer}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default MainStack;
const styles = StyleSheet.create({
  screenContainer: {flex: 1},
});
