import { StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React from 'react'
import { stylesGlobal } from '../../assets/StyleSheet'
import TextC from '../TextC'

type Props = {
  ReFetchData:()=>void
}
function Error(props:Props): JSX.Element{
  let colorSchema=useColorScheme()
  //Count down to 3 in 3 seconds  and then set a state when finish
   const [count, setCount] = React.useState(30);
    React.useEffect(() => {
      const timer =
        count > 0 && setInterval(() => setCount(count - 1), 1000);
        //@ts-ignore
      return () => clearInterval(timer);
    }, [count]);
 

  return(
    <View style={styles.errorCont}>
      <TextC size='lg' color='primary' styles={colorSchema==='light'?[styles.errorTitle,stylesGlobal.TextMain]:[styles.errorTitle,stylesGlobal.DarkIcons]} text='Too much requests try again later'></TextC>

      {count===0?
      <TouchableOpacity style={colorSchema==='light'?[styles.errorBtn,stylesGlobal.BackgroundColorMain]:[styles.errorBtn,stylesGlobal.DarkBackgroundColorMain]} onPress={()=>{props.ReFetchData()}}>
        <TextC  size='lg' color='body' styles={styles.errorBTnText} text='Refresh'></TextC>
       </TouchableOpacity>
       :
        <TextC  size='lg' color='body' styles={styles.errorCounter} text={"Refresh in "+count}></TextC>
       }
  
    </View>
  )
}


export default Error

const styles = StyleSheet.create({
  errorCont:{
    justifyContent:'center',
    alignItems:'center',
    paddingBottom:35,
    paddingTop:10
    

  },
 
  errorTitle:{
    fontWeight:'bold',
    textAlign:'center',
  },
  errorBtn:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    borderRadius:5,
    marginTop:10
  },
  errorBTnText:{
    fontWeight:'bold',
  },
  errorCounter:{
    fontSize:16,
    fontWeight:'bold',
    color:'black'
  }
})