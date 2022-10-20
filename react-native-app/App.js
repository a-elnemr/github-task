import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Router, Route, Link } from "./react-router";
import { Provider } from 'react-redux';
import { store } from "./src/app/store";
import { Provider as PaperProvider } from 'react-native-paper';


import ReposRoute from "./src/routes/ReposRoute";
import ExploreRoute from "./src/routes/ExploreRoute";

const App = () => {
  return (
  <Router>
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.nav}>
          <Link to="/">
            <Text>Explore</Text>
          </Link>
          <Link to="/repos">
            <Text>Repos</Text>
          </Link>
        </View>

        <Route exact path="/" component={ExploreRoute} />
        <Route path="/repos" component={ReposRoute} />
      </ScrollView>
    </SafeAreaView>
  </Router>
)};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});




const MainApp = () =>{
  return (
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  )

}



export default MainApp;