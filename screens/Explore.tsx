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
  ActivityIndicator
} from 'react-native';
import Header from '../components/Header';
import Filter from '../componentShared/Filter';
import Card from '../components/Card';
import { useFocusEffect,useIsFocused  } from '@react-navigation/native';
import ReposInterface from '../interfaces/ReposInterface';
import { useSelector } from 'react-redux';
import Loading from '../componentShared/states/Loading';
import Error from '../componentShared/states/Error';
import Filtercomp from '../componentShared/FilterComp';
import UseLogic from '../logic/UseLogic';
import BgWrapper from '../componentShared/BgWrapper';
import { stylesGlobal } from '../assets/StyleSheet';



type Props={
}

function Explore(props:Props): JSX.Element {
  const colorSchema=useColorScheme()

 

  let {  dataValue, loading, error, isRefreshing, Refresh, handlePage,FetchData}=UseLogic({type:'explore'})


  function renderItem(props:{item:ReposInterface}): JSX.Element {
    return(
    <Card data={props.item} type='explore'></Card> 
    )
}

return(
  <View style={colorSchema==='light'?[styles.mainCont,stylesGlobal.BackgroundColor]:[[styles.mainCont,stylesGlobal.DarkBackgroundColor]]}>
      <FlatList
      data={dataValue}
      onEndReached={()=>{handlePage()}}
      onRefresh={Refresh}
      refreshing={isRefreshing}
      style={{paddingHorizontal:25}}
      initialNumToRender={5}
      ListHeaderComponent={()=><Filtercomp Type='explore'></Filtercomp>}
      keyExtractor={(item, index) => String(index)}
      renderItem={renderItem}
      ListFooterComponent={error?<Error ReFetchData={FetchData} />:loading?Loading:null}
      />
  </View>
     )
 
}

const styles = StyleSheet.create({
  mainCont:{
    height:'100%',
    flex:1,
  },
 
 
});

export default Explore;
