import { StyleSheet, Text, View } from "react-native";
import { Router, Route, Link } from "./react-router";
import { Provider } from 'react-redux';
import { store } from "./src/app/store";
import { useGetGithubByNameQuery } from "./src/services/github";



const Home = () => {return (<Text>Home</Text>)};

const About = () => <Text>About</Text>;

const App = () => {
  const { data, error, isLoading } = useGetGithubByNameQuery()
  console.log(data, error, isLoading);

  return (
  <Router>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/">
          <Text>Home</Text>
        </Link>
        <Link to="/about">
          <Text>About</Text>
        </Link>
      </View>

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
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
      <App />
    </Provider>
  )

}





export default MainApp;