import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import TabsNavigator from './src/navigation/TabsNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/components/Header';
import { Provider, useDispatch } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import store from './src/store/store';
import { useTheme } from './src/hooks/useTheme';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SELECTED_THEME_KEY } from './src/config/constants';
import { setColorScheme } from './src/store/actions/themeActions';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 3,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppContent />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </QueryClientProvider>
  );
}

function AppContent() {
  const { colors, isDark } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTheme = async () => {
      const theme = await AsyncStorage.getItem(SELECTED_THEME_KEY);
      if (theme) {
        dispatch(setColorScheme(theme === 'light' ? 'light' : 'dark'));
      }
    };
    fetchTheme();
  }, [dispatch]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: colors.headerBackgroundColor },
      ]}
    >
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={colors.headerBackgroundColor}
      />
      <Header />
      <TabsNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
