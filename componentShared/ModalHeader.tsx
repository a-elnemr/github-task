import { Image, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React from 'react'
import { stylesGlobal } from '../assets/StyleSheet'
import TextC from './TextC'

type Props = {
  setVisible:React.Dispatch<React.SetStateAction<boolean>>
  type:"View"|'Language'|'Date'
}

const ModalHeader = (props: Props) => {
  let colorSchema=useColorScheme();
  return (
    <View>
 <View style={styles.ModalHeader}>
      <TextC size='md' color='body' text={'Select '+ props.type}></TextC>
      <TouchableOpacity onPress={()=>props.setVisible(false)}>
    <Image source={require('../assets/cancel.png')} />
      </TouchableOpacity>
      </View>    
      </View>
  )
}

export default ModalHeader

const styles = StyleSheet.create({
  ModalHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:20,

  },

})