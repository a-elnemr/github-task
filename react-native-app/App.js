import { StyleSheet, Text, View } from "react-native";
import { Router, Route, Link } from "./react-router";
import { Provider } from 'react-redux';
import { store } from "./src/app/store";
import { useGetGithubByNameQuery } from "./src/services/github";
import { Provider as PaperProvider } from 'react-native-paper';


import Explore from "./src/routes/Explore";
import Repos from "./src/routes/Repos";

const App = () => {
  return (
  <Router>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/">
          <Text>Explore</Text>
        </Link>
        <Link to="/repos">
          <Text>Repos</Text>
        </Link>
      </View>

      <Route exact path="/" component={Explore} />
      <Route path="/repos" component={Repos} />
    </View>
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