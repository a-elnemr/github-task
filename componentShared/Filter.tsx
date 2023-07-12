import { Button, FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import LangFilter from './LangFilter';
import DateFilter from './DateFilter';
import ViewFilter from './ViewFilter';
import { useSelector } from 'react-redux';
import { stylesGlobal } from '../assets/StyleSheet';
import TextC from './TextC';


type Props = {
  type:'Language'|'Date'|'View'
}



const Filter = (props: Props) => {
  let ViewfilterLabel=useSelector((state:any)=>state.filters.viewFilterLabel)
  let LangfilterLabel=useSelector((state:any)=>state.filters.LanguageFilterLabel)
  let DatafilterLabel=useSelector((state:any)=>state.filters.DateFilterLabel) 
  const colorSchema=useColorScheme();

  const [Visible, setVisible] = useState(false)
  // https://api.github.com/languages
  return (
    <View  style={{flex:1,flexDirection:'row'}} >
    <TouchableOpacity onPress={()=>setVisible(true)} style={colorSchema==='light'?[styles.FilterCont,stylesGlobal.whites]:[styles.FilterCont,stylesGlobal.Darkwhites]}>
    {props.type=='View'&&
    <View style={{flexDirection:'row',gap:10}}>
      <TextC size='md' color='secondary' numberOfLines={1}  text={"View : "}></TextC>
      <TextC size='md' color='body' numberOfLines={1}  text={ViewfilterLabel}></TextC>

    </View>
}

      {props.type=="Language"&&
      <View >
        {LangfilterLabel=='All'&&
        <View style={{flexDirection:'row',gap:10}}>
          <TextC size='md' color='secondary' numberOfLines={1} text={"Language :"}></TextC>
          <TextC size='md' color='body' numberOfLines={1} text={LangfilterLabel}></TextC>

          </View>}
        {LangfilterLabel!=='All'&&<TextC size='md' color='body' numberOfLines={1} text={LangfilterLabel}></TextC>}

      
      </View>
        }
      {props.type=="Date"&&
      <View style={{flexDirection:'row',gap:10}}>
        <TextC size='md' color='secondary' numberOfLines={1} text={"Date : "} ></TextC>
        <TextC size='md' color='body' numberOfLines={1} text={DatafilterLabel} ></TextC>

      </View>}
      {colorSchema==='light'?<Image   source={require('../assets/arrowL.png')} />: <Image   source={require('../assets/arrowD.png')} />}
    </TouchableOpacity>
      {props.type==='Language'&&<LangFilter Visible={Visible} setVisible={setVisible}/>}
      {props.type==='Date'&&<DateFilter Visible={Visible} setVisible={setVisible}/>}
      {props.type==='View'&&<ViewFilter Visible={Visible} setVisible={setVisible}/>}
    </View>
  )
}

export default Filter

const styles = StyleSheet.create({

  FilterCont:{
    flexDirection:'row',
    alignItems:'center',
    gap:18,
    flex:1,
    marginBottom:15,
    borderRadius:10,
    paddingVertical:11,
    paddingHorizontal:15,
    justifyContent:'space-between',

  },
 
  FilterTitle:{
    // fontSize:14,
    // color:'black',
    // flex:1,
  },
  MainCont:{
    backgroundColor:'white',
    height:500,
    borderRadius:13,
    paddingVertical:19,
},
  ModalCont:{
    backgroundColor:'white',
    paddingHorizontal:21,

  },
  ModalHeader:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:20,

  },
  ModalTitle:{
    fontSize:24,
    color:'black',
  },
SearchBarCont:{
  position:'relative',


},

  SearchBar:{
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:10,
    paddingRight:50,
    paddingLeft:20,
    borderWidth:1,
    borderColor:'#CCD4DD',
    fontSize:16,
    color:'black',
  

  
  },

  SearchIcon:{
    right:14,
    top:18,
    position:'absolute',
    
  }
  
})