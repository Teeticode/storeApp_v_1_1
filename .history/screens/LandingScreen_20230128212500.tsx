import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  
} from 'react-native'
import { colors } from '../config/colors'


export const LandingScreen = ()=>{
  return(
  
      <View style={styles.body}>
        <Image source={require('../assets/images/homeicon.png')}/>
      </View>
     
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',

    },
    navigation:{
        
        backgroundColor:'red'
    },
    body:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black',
        alignSelf:'center',
        color:'white',
        marginVertical:'50%'
        
    },
    footer:{
    }
})