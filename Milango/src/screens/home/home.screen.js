import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import { HomeHoc } from "../../hoc";

export const Home = () => {
  return <>
    <StatusBar backgroundColor='#fff' barStyle='dark-content' />
    <SafeAreaView>
      <HomeHoc />
    </SafeAreaView>
  </>
};


