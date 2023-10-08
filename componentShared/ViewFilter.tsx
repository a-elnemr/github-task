import { ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import ModalHeader from './ModalHeader';
import { filterSlice } from '../store/filterSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { stylesGlobal } from '../assets/StyleSheet';
import TextC from './TextC';

type Props = {
  Visible:boolean
  setVisible:React.Dispatch<React.SetStateAction<boolean>>
}
const ViewFilter = (props: Props) => {
  let colorSchema=useColorScheme();
  let dispatch=useDispatch();
  let ViewFilterLabel=useSelector((state:any)=>state.filters.viewFilterLabel)

  let Data=["All","Top 10 ","Top 50 ","Top 100 "]

function setView(item:string){
  if(item=="All"){
    dispatch(filterSlice.actions.setViewFilter({label:item,value:-1}))
  }
  else if(item=="Top 10 "){
    dispatch(filterSlice.actions.setViewFilter({label:item,value:10}))
  }
  else if(item=="Top 50 "){
    dispatch(filterSlice.actions.setViewFilter({label:item,value:50}))
  }
  else if(item=="Top 100 "){
    dispatch(filterSlice.actions.setViewFilter({label:item,value:100}))
  }
}
  
  return (
    <Modal isVisible={props.Visible}>
    <View style={colorSchema==='light'? [styles.MainCont,stylesGlobal.whites]:[styles.MainCont,stylesGlobal.Darkwhites]}>
    <ModalHeader type='View' setVisible={props.setVisible}></ModalHeader>   
    {Data.map((item,index)=>{
      return(
        <TouchableOpacity   onPress={()=>{setView(item);props.setVisible(false)}}  key={index}>
          {ViewFilterLabel===item&& <TextC size='md'  color='primary' styles={colorSchema==='light'?[styles.optionStyle,styles.ListItemActive,stylesGlobal.TextMain,stylesGlobal.md]:[styles.optionStyle,styles.ListItemActive,stylesGlobal.DarkIcons,stylesGlobal.md]} text={item} ></TextC>}
          {ViewFilterLabel!==item&& <TextC size='md'color='body' styles={styles.optionStyle} text={item}></TextC>}


        </TouchableOpacity>
      )
    })}
  
  
    </View>
  </Modal> 
  )
}

export default ViewFilter

const styles = StyleSheet.create({
  MainCont:{
    borderRadius:13,
    paddingVertical:21,
    paddingHorizontal:21,
  },

  optionStyle:{
    paddingVertical:10,
    borderBottomWidth:1,
    borderBottomColor:'#E5E5E5',
    fontSize:16,
    

  },
  ListItemActive:{
    fontWeight:'bold',
  }
  
})