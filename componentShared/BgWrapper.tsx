import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'

type Props = {
  children:React.ReactNode,
  type:'bg'|'white'|'icon',
  styles?:any,

}

const BgWrapper = (props: Props) => {
  let colorSchema=useColorScheme();
  let colorStyle=props.type==='bg'?colorSchema==='dark'?styles.bgD:styles.bgL:props.type==='white'?colorSchema==='dark'?styles.dark:styles.white:props.type==='icon'?colorSchema==='dark'?styles.iconD:styles.iconL:null
  
  return (
    <View style={props.styles?props.styles.length>1?[colorStyle,...props.styles]:[colorStyle,props.styles]:[colorStyle]}>
      {props.children}
    </View>
  )
}

export default BgWrapper

const styles = StyleSheet.create({
  bgL:{
    backgroundColor:'#FAFCFE',
  },
  bgD:{
    backgroundColor:'#0D1116',
  },
  white:{
    backgroundColor:'#FFFFFF',
  },
  dark:{
    backgroundColor:'#161B21',
  },
  iconL:{
    backgroundColor:'#2B1190',
  },
  iconD:{
    backgroundColor:'#68DDBA',
  }
})