import { Button, FlatList, Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
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

const LangFilter = (props: Props) => {
  let LangfilterLabel=useSelector((state:any)=>state.filters.LanguageFilterLabel)
  let dispatch=useDispatch();
  let colorSchema=useColorScheme();
  const [text, setText] = useState('');
let LangsData=["All","C++", "javascript","typescript","ruby","unkown languages", "java","python","openCL", "php","C++", "javascript","typescript","ruby","unkown languages", "java","python","openCL", "php"  ]
const [listofProgrammingLang, setlistofProgrammingLang] = useState(LangsData)

useEffect(()=>{
  //Filter the list of programming languages according to the text input 
    let newList=LangsData.filter((item:string)=>item.toLowerCase().includes(text.toLowerCase()))
    setlistofProgrammingLang(newList)
  
},[text])

  function setLang(item:string){
    if(item=="All"){
      dispatch(filterSlice.actions.setLanguageFilter({label:"All",value:""}))
    }else{
      if(item=="Unkown languages"){
        dispatch(filterSlice.actions.setLanguageFilter({label:'Unkown languages',value:null}))
      }
      else{
        dispatch(filterSlice.actions.setLanguageFilter({label:item,value:item}))
      }
    }

  }

  let renderItem=(props2:{item:string})=>{
    return(
      <TouchableOpacity onPress={()=>{setLang(props2.item);props.setVisible(false)}}>
        {LangfilterLabel===props2.item&& <TextC size='lg' color='primary' styles={colorSchema==='light'?[styles.ListItem,styles.ListItemActive,stylesGlobal.lg,stylesGlobal.TextMain]:[styles.ListItem,styles.ListItemActive,stylesGlobal.lg,stylesGlobal.DarkIcons]} text={props2.item}  ></TextC>}
        {LangfilterLabel!==props2.item&& <TextC size='lg' color='body' styles={styles.ListItem}  text={props2.item} ></TextC>}

      </TouchableOpacity>
    )
  }
  return (
    <Modal isVisible={props.Visible} >
    <View style={colorSchema==='light'?[styles.MainCont,stylesGlobal.whites]:[styles.MainCont,stylesGlobal.Darkwhites]}>
    <View  style={styles.ModalCont}>
      <ModalHeader type='Language' setVisible={props.setVisible}/>
      <View style={styles.SearchBarCont} >
      <TextInput
      style={colorSchema==='light'?[styles.SearchBar,stylesGlobal.lg,stylesGlobal.TextBody]:[styles.SearchBar,stylesGlobal.lg,stylesGlobal.DarkTextBody]} 
      onChangeText={setText}
      value={text}
      placeholderTextColor={colorSchema==='light'?'#AEB7C2':'#6E767D'}
      placeholder="Filter Languages"
      keyboardType='default' />      
      <Image style={styles.SearchIcon} source={require('../assets/searchF.png')} />
    </View>
  
    <View>
      
    </View>
  
    </View>

    <KeyboardAvoidingView  behavior="height" keyboardVerticalOffset={100} >
  <FlatList
    data={listofProgrammingLang}
    keyExtractor={(item,index) => index.toString() }
     style={{height:400}}
    renderItem={renderItem}
    removeClippedSubviews={false}
/>
    </KeyboardAvoidingView>

    </View>
  
  </Modal>
  
  )
}

export default LangFilter

const styles = StyleSheet.create({

  MainCont:{
    borderRadius:13,
    paddingVertical:19,

  
},
  ModalCont:{
    paddingHorizontal:21,

  },

SearchBarCont:{
  position:'relative',
},

  SearchBar:{
    borderRadius:10,
    padding:10,
    marginBottom:15,
    paddingRight:50,
    paddingLeft:20,
    borderWidth:1,
    borderColor:'#CCD4DD',
  
  },

  SearchIcon:{
    right:14,
    top:18,
    position:'absolute',
    
  },
   ListCont:{
    flexDirection:'row',
},
   ListItem:{
   paddingBottom:10,
   paddingLeft:36,
   paddingTop:15,
   borderBottomWidth:1,
   borderBottomColor:'#CCD4DD',
},
ListItemActive:{
  fontWeight:'bold',
}

  
  
})