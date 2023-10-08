import { Image, StyleSheet, Text, TouchableOpacity, View, useColorScheme } from 'react-native'
import React from 'react'

type Props = {
  // navigation:any
}

const Header = (props: Props) => {
  const colorSchema=useColorScheme();
  
  return (
      <View style={styles.headerCont}>
        <View style={styles.logoSearchCont}>
          {colorSchema=='light'&& <Image   style={{width:150}}  resizeMode='contain'   source={require('../assets/logo.png')} />}
          {colorSchema=='dark'&& <Image   style={{width:150}}  resizeMode='contain'   source={require('../assets/logoDark.png')} />}

          {colorSchema=='light'&&<Image source={require('../assets/search.png')} />}
          {colorSchema=='dark'&&<Image source={require('../assets/searchDark.png')} />}

        </View>

  
    
      </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headerCont:{
    paddingTop:40,
    paddingHorizontal:25,
  },
  logoSearchCont:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:37,
  },
// bgLight:{
//   backgroundColor:'#fff',
// },
// bgDark:{
//   backgroundColor:'#161B21',
// }




  

})