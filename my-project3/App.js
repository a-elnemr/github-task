import { StyleSheet, Text, View } from "react-native";

import { Provider } from 'react-redux';
import { store } from "./src/app/store";
import { Provider as PaperProvider } from 'react-native-paper';


const Home = () => <Text>Home</Text>;

const About = () => <Text>About</Text>;
/*
const App = () => (
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
);
*/
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







import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import { Outlet } from "react-router-dom";
import Explore from "./src/routes/Explore";









const MainApp = () =>{
  return (
    <View style={styles.container}>
        Hi
        <Outlet />
    </View>
  )
}











const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
  },
]);


/*

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children: [
      {
        path: "about",
        element: Home,
      },
      {
        path: "repos",
        element: About,
      },
    ],
  },
]);


*/





const App = () =>{
  return <RouterProvider router={router} />
}








export default App;





