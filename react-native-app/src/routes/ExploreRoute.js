import React from "react";
import { Text, View } from "react-native";
import { useGetGithubByNameQuery } from "../services/github";
import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';
import ExploreList from "../components/ExploreList";

import repos from "../components/repos_example";


import { List, Divider } from 'react-native-paper';




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

    const [limit, setLimit] = React.useState(10);
    


    
    const { data, error, isFetching } = useGetGithubByNameQuery({per_page:limit});
    console.log(data, error, isFetching);



    const toRender = error ? (
            <Text>Oh no, there was an error</Text>
        ) : isFetching ? (
            <Text>Loading...</Text>
        ) : data ? (
            <ExploreList repos={data.items}/>
        ) : null;

    return(
    <View>
<View>
        <Button onPress={showDialog}>View Top: {limit}</Button>
        
        
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            
        <List.Item
                title="10"
                description="Display top 10 repositories"
                onPress={()=>{setLimit(10); hideDialog();}}
        />
        <Divider />
        <List.Item
                title="50"
                description="Display top 50 repositories"
                onPress={()=>{setLimit(50); hideDialog();}}
        />
        <Divider />

        <List.Item
                title="100"
                description="Display top 100 repositories"
                onPress={()=>{setLimit(100); hideDialog();}}
        />



          </Dialog>
        </Portal>
</View>
        {toRender}
    </View>
    )
    ;
};

export default ExploreRoute;