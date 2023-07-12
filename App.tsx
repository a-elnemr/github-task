/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  useWindowDimensions ,
  Animated
} from 'react-native';
import Header from './components/Header';
import Filter from './componentShared/Filter';
import { store } from  './store/index'
import Explore from './screens/Explore';
import Repositories from './screens/Repositories';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import TextC from './componentShared/TextC';
import BgWrapper from './componentShared/BgWrapper';
import { stylesGlobal } from './assets/StyleSheet';



const Tab = createMaterialTopTabNavigator();

function App(): JSX.Element {
  const colorScheme = useColorScheme();



  const layout = useWindowDimensions();


  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'Explore', title: 'Explore' },
    { key: 'Repositories', title: 'Repositories' },
  ]);
  function MyTabBar({ state, descriptors, navigation, position }:any) {
    return (
      <View style={colorScheme==='light'?stylesGlobal.whites:stylesGlobal.Darkwhites}>
      <Header></Header>
      <View style={styles.tabsCont}>
        {state.routes.map((route:any, index:any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            // const event = navigation.emit({
            //   type: 'tabPress',
            //   target: route.key,
            //   canPreventDefault: true,
            // });

            if (!isFocused ) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };
  

          return (
         
              <TouchableOpacity   key={index} onPress={onPress}>
                {isFocused&& <TextC  size='md' color='primary' text={route.name}   styles={[styles.tabClicked,styles.tab]}/>}
                {!isFocused&& <TextC  size='md' color='secondary' text={route.name}   styles={[styles.tab]}/>}

              </TouchableOpacity>
           
          );
        })}
      </View>
      </View>

    );
  }
return(
  <Provider store={store}>
    <NavigationContainer> 
    <Tab.Navigator   tabBar={props => <MyTabBar {...props} />}>
    <Tab.Screen name="Explore" component={Explore} />
    <Tab.Screen name="Repositories" component={Repositories} />
  </Tab.Navigator>
    </NavigationContainer>
    </Provider>

)
 
}

const styles = StyleSheet.create({
  mainCont:{
    height:'100%'
  },
  FilterCont:{
    marginTop:32,
  },
  FilterTitle:{
    fontSize:20,
    marginBottom:23,
    color:'black'
  
  },
  tabsCont:{
    flexDirection:'row',
     gap:53 ,
     paddingHorizontal:25,

  },

tab:{
   paddingBottom:16,
   paddingHorizontal:10,
},
tabClicked:{
  borderBottomWidth:2,
  borderBottomColor:'#68DDBA',

}
 
});

export default App;
