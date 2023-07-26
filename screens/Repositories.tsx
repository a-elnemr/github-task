/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  ActivityIndicator,
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
} from 'react-native';
import Header from '../components/Header';
import Filter from '../componentShared/Filter';
import Card from '../components/Card';
import {useFocusEffect} from '@react-navigation/native';
import ReposInterface from '../interfaces/ReposInterface';
import {useSelector} from 'react-redux';
import Loading from '../componentShared/states/Loading';
import Error from '../componentShared/states/Error';
import Empty from '../componentShared/states/Empty';
import Filtercomp from '../componentShared/FilterComp';
import UseLogic from '../logic/UseLogic';
import {stylesGlobal} from '../assets/StyleSheet';

type Props = {};

function Repositories(props: Props): JSX.Element {
  const colorSchema = useColorScheme();

  let {
    dataValue,
    loading,
    error,
    isRefreshing,
    Refresh,
    handlePage,
    FetchData,
    EndReached,
    setEndReached,
  } = UseLogic({type: 'repo'});

  function renderItem(props: {item: ReposInterface}): JSX.Element {
    return <Card data={props.item} type="repo"></Card>;
  }

  return (
    <View
      style={
        colorSchema === 'light'
          ? [styles.mainCont, stylesGlobal.BackgroundColor]
          : [[styles.mainCont, stylesGlobal.DarkBackgroundColor]]
      }>
      <FlatList
        data={dataValue}
        onEndReached={() => {
          if (EndReached) return;
          setEndReached(true);
          handlePage();
        }}
        onMomentumScrollBegin={() => {
          setEndReached(false);
        }}
        ListEmptyComponent={loading || error ? null : Empty}
        onRefresh={Refresh}
        initialNumToRender={10}
        onEndReachedThreshold={0.5}
        refreshing={isRefreshing}
        style={{paddingHorizontal: 25}}
        ListHeaderComponent={() => <Filtercomp Type="repo"></Filtercomp>}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderItem}
        ListFooterComponent={
          error ? <Error ReFetchData={FetchData} /> : loading ? Loading : null
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  mainCont: {
    height: '100%',
    flex: 1,
  },
});

export default Repositories;
