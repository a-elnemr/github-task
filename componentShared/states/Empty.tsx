import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextC from '../TextC'

type Props = {}

function Empty(){
   
  return(
    <View style={styles.emptyCont}>
      <TextC size='lg' color='primary' styles={styles.emptyTitle} text='No Repositories Found'></TextC>
    </View>
  )
}

export default Empty

const styles = StyleSheet.create({
  emptyCont:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:25

  },
  emptyTitle:{
    fontWeight:'bold',
    textAlign:'center',
    paddingVertical:25

  }
})