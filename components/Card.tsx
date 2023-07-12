import { Image, StyleSheet, Text, View,TouchableOpacity,Linking, useColorScheme } from 'react-native'
import React from 'react'
import ReposInterface from '../interfaces/ReposInterface'
import { stylesGlobal } from '../assets/StyleSheet'
import TextC from '../componentShared/TextC'

type Props = {
  type:"explore"|"repo"
  data:ReposInterface
}

const Card = (props: Props) => {
  let colorSchema=useColorScheme();

function FooterExp(): JSX.Element {
  return(
    <View style={styles.cardFooterCont}>
    <TextC size='sm' color='body' text='Updated 12 hours ago' ></TextC>
    <TextC size='sm' color='body' text={props.data.language??" "}></TextC>
    </View>

  )
}

function FooterRepo(): JSX.Element {
  return(
    <View style={styles.cardFooterCont}>
    <TextC size='sm' color='body'  text={props.data.language??" "}></TextC>
    <View style={styles.cardTextIcon}>
    <Image source={require('../assets/star.png')} />
  <TextC size='sm' color='body'  text={props.data.stargazers_count+""??" "}></TextC>
    </View>

    <View style={styles.cardTextIcon}>
  <Image source={require('../assets/fork.png')} />
  <TextC size='sm' color='body' text={props.data.forks+""??" "}></TextC>
    </View>

  </View>

  )
}

function CardHeader(): JSX.Element {
  return(
    <View style={styles.cardHeader}>
    <TextC size='md' color='secondary' text='Trending repositry' ></TextC>

    <View style={styles.cardHeaderDataCont}>
      <View style={styles.cardTextIcon}>
    <Image source={require('../assets/star.png')} />
    <TextC size='sm' color='body' text='Star'></TextC>
      </View>
    <View style={colorSchema==='light'?[styles.amountCont,stylesGlobal.BackgroundColorMain]:[styles.amountCont,stylesGlobal.DarkBackgroundColorMain]}>
      <TextC size='sm' color='primary' text={props.data.stargazers_count?props.data.stargazers_count>1000?props.data.stargazers_count/1000+"k":props.data.stargazers_count+" ":" "}></TextC>
    </View>
    </View>
    </View>
  )
}


  return (
    <View  style={colorSchema==='light'?[styles.mainCont,stylesGlobal.whites]:[styles.mainCont,stylesGlobal.Darkwhites]}>
      
      {props.type==="explore"&&<CardHeader/>}
      <TouchableOpacity onPress={() => Linking.openURL(props.data.html_url??"")}>

      <View style={styles.cardTitleCont}>
      <Image source={require('../assets/repo.png')} />
      <TextC size='lg' color='primary' numberOfLines={2} styles={styles.cardTitle} text={props.data.full_name??" "}></TextC>
      </View>
      </TouchableOpacity>

      <TextC size='sm' color='body' numberOfLines={2} styles={styles.cardDesc} text={props.data.description??" "}></TextC>
        {props.type==="explore"&&<FooterExp/>}
        {props.type==="repo"&&<FooterRepo/>}
      


    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  mainCont:{
    paddingHorizontal:18,
    paddingVertical:20,
    borderRadius:13,
    marginBottom:20,
    flex:1,
  },
  cardHeader:{ 
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:24,
  },

  cardHeaderDataCont:{
    flexDirection:'row',
    alignItems:'center',
    gap:15,
  },
  cardTextIcon:{
  flexDirection:'row',
  alignItems:'center',
  gap:4.
  },
  cardTitleCont:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:18,
    gap:13,
    flex:1,
  },
  cardTitle:{
    width:'80%',
  
  },
  cardDesc:{
    borderBottomWidth:1,
    borderBottomColor:'#CCD4DD',
    paddingBottom:30,
  },
  cardFooterCont:{
    flexDirection:'row',
    marginTop:18,
    gap:44,

  },
  amountCont:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    paddingHorizontal:8,
    paddingVertical:4,
    borderRadius:5,

  },




})