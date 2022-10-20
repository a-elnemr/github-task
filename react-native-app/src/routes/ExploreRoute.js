import React from "react";
import { Text, View } from "react-native";
import { useGetGithubByNameQuery } from "../services/github";
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import ExploreList from "../components/ExploreList";

import repos from "../components/repos_example";




/*
const ExploreRouteTest = () =>{
    console.log(repos);
    const toRender = <ExploreList repos={repos}/>;
    return toRender;

}
*/



const ExploreRoute = () => {
    
    const [visible, setVisible] = React.useState(false);

    const showDialog = () => setVisible(true);
  
    const hideDialog = () => setVisible(false);
    const sP = {sort:"stars"};
    
    const myURL = new URL("https://api.github.com/search/repositories");

    const u = new URLSearchParams(sP);
    console.log(u.toString())
    for(const s in sP){
        myURL.searchParams.set(s, sP[s])
    }

    //console.log(myURL);

    
    const { data, error, isLoading } = useGetGithubByNameQuery()
    console.log(data, error, isLoading);





    const toRender = error ? (
            <Text>Oh no, there was an error</Text>
        ) : isLoading ? (
            <Text>Loading...</Text>
        ) : data ? (
            <ExploreList repos={data.items}/>
        ) : null;

    return(
    <View>
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
        {toRender}
    </View>
    )
    ;
};

export default ExploreRoute;