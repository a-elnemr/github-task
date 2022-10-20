import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBrowserRouter, Link, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from 'react-redux';

import { store } from "./src/app/store";
import { Provider as PaperProvider } from 'react-native-paper';

import Explore from "./src/routes/Explore";
import Repos from "./src/routes/Repos";


const Home = () => <Text>Explore</Text>;

const About = () => <Text>Repos</Text>;

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
        <View style={styles.container}>
          <View style={styles.nav}>
            <Link to="/">
              <Text>Explore</Text>
            </Link>
            <Link to="/repos">
              <Text>Repos</Text>
            </Link>
          </View>
            <Outlet />
        </View>
    </PaperProvider>
  </Provider>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainApp />,
    children: [
      {
        path: "",
        element: <Explore />,
      },
      {
        path: "repos",
        element: <Repos />,
      },
    ],
  },
]);


const App = () =>{
  return <RouterProvider router={router} />
}

export default App;
