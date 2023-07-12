import { StyleSheet, Text, View } from 'react-native'
import React, { Children } from 'react'
import {useColorScheme} from 'react-native';
type Props = {
  text: string,
  size:'xs'|'sm'|'md'|'lg'|'xl'
  color:'primary'|'secondary'|'body'
  styles?:any
  numberOfLines?:number

  

}

const TextC = (props: Props) => {
  const colorScheme = useColorScheme();
  let fontsize=props.size==='xs'?styles.xs:props.size==='sm'?styles.sm:props.size==='md'?styles.md:props.size==='lg'?styles.lg:styles.xl
  let color=props.color==='primary'?colorScheme==='light'?styles.primaryLight:styles.primaryDark:props.color==='secondary'?colorScheme==='light'?styles.secondaryLight:styles.secondaryDark:colorScheme==='light'?styles.bodyLight:styles.bodyDark
  return (
      <Text numberOfLines={props.numberOfLines} style={props.styles?props.styles.length>1?[fontsize,color,styles.fontFam,...props.styles]:[fontsize,styles.fontFam,color,props.styles]:[fontsize,color,styles.fontFam]}>{props.text}</Text>
  )
}

export default TextC

const styles = StyleSheet.create({
fontFam:{
  fontFamily:'Silka'
},

xl:{
  fontSize:20,
},
lg:{
  fontSize:18,
},
md:{
  fontSize:14,
},
sm:{
  fontSize:12,
},
xs:{
  fontSize:10,
},
primaryLight:{
  color:"#2B1190",
},
primaryDark:{
  color:"#FFFFFF"
},
secondaryLight:{
  color:"#7B848D"
},
secondaryDark:{
  color:"#CCD4DD"
},
bodyLight:{
  color:"#000000"
},
bodyDark:{
  color:"#FFFFFF"
}


})