import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from '../assets/images/logo.svg';
const HomeScreen = () => {
  return (
    <View
      style={{
        // flex: 1,
        // height: 300,
        // backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{color: 'white'}}>HomeScreen</Text>
      <Logo width={200} height={200} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
