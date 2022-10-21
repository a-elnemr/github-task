import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from "react-native";
import { Router, Route, Link } from "./react-router";
import { Provider } from "react-redux";
import { store } from "./src/app/store";
import { Provider as PaperProvider } from "react-native-paper";

import { Button, Paragraph, Dialog, Portal } from "react-native-paper";
import Header from "./src/components/Header";

import ReposRoute from "./src/routes/ReposRoute";
import ExploreRoute from "./src/routes/ExploreRoute";

import styles from "./styles";

const App = () => {
  return (
    <Router>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Header />
          <View style={styles.nav}>
            <Link to="/">
              <Text>Explore</Text>
            </Link>
            <Link to="/repos">
              <Text>Repos</Text>
            </Link>
            <View></View>
          </View>

          <Route exact path="/" component={ExploreRoute} />
          <Route path="/repos" component={ReposRoute} />
        </ScrollView>
      </SafeAreaView>
    </Router>
  );
};

const MainApp = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  );
};

export default MainApp;
