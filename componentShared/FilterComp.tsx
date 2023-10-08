import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import Filter from './Filter'
import { stylesGlobal } from '../assets/StyleSheet'
import TextC from './TextC'

type Props = {
  Type:'repo'|'explore'
}

function Filtercomp(props:Props): JSX.Element {
  const colorSchema=useColorScheme()
  return(
    <View>
{props.Type==='repo'&&
   <View style={styles.FilterCont}>
   <TextC size='xl' color='body' styles={styles.FilterTitle} text='Repositories'></TextC>
   <View style={styles.FilterBoxCont}>
   <Filter type='Language'/>
   <Filter type='Date'/>
   </View>
 </View>}
 
 {props.Type==='explore'&&
   <View style={styles.FilterCont}>
   <TextC size='xl' color='body' styles={styles.FilterTitle} text='Explore popular' ></TextC>
   <View style={styles.FilterBoxCont}>
   <Filter type='View'/>
   <View style={{flex:1}}/>
   </View>
 </View>
 }

    </View>
  )
}

export default Filtercomp

const styles = StyleSheet.create({
  FilterCont:{
    marginTop:32,
    flex:1,

  },
  FilterTitle:{
    marginBottom:23,
  
  },
  FilterBoxCont:{
    flexDirection:'row',
    gap:10,
    alignItems:'center',
    flex:1,
  },

})