import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import AppNavigator from './navigators/appNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import HeaderComponent from './components/headerComponent';
import {ThemeProvider} from './theme/themeContext';
import {Provider} from 'react-redux';
import store from './redux/store';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...', 'Some other warning']);
LogBox.ignoreAllLogs(true);

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <ThemeProvider>
          <HeaderComponent></HeaderComponent>
          <AppNavigator></AppNavigator>
        </ThemeProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  headerContainer: {backgroundColor: 'white', justifyContent: 'space-around'},
});

export default App;
