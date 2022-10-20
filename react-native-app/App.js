import React from "react";
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar } from "react-native";
import { Router, Route, Link } from "./react-router";
import { Provider } from 'react-redux';
import { store } from "./src/app/store";
import { Provider as PaperProvider } from 'react-native-paper';


import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';



import ReposRoute from "./src/routes/ReposRoute";
import ExploreRoute from "./src/routes/ExploreRoute";

const App = () => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  
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
          <View>
        <Button onPress={showDialog}>Show Dialog</Button>
        
        
        
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Alert</Dialog.Title>
            <Dialog.Content>
              <Paragraph>This is simple dialog</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Done</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>



      </View>
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