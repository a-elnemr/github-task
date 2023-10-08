import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}


function Loading(): JSX.Element {
  return(
    <View style={styles.loadingCont}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  )
}

export default Loading

const styles = StyleSheet.create({
  loadingCont:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:25

  },
})