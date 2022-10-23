import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Logo from 'src/assets/images/logo.svg';
import Search from 'src/assets/images/search.svg';
import TabStack from './Navigation/TabStack';
import colorPallete from 'src/assets/constants/colorPallete';
const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.headerContainer}>
        <Logo />
        <Search />
      </View>
      <TabStack />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colorPallete.white,
  },
});
