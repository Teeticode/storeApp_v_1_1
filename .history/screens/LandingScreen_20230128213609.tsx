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
  <View style={styles.container}>
    <View style={styles.body}>
        <Image source={require('../assets/images/homeicon.png')} style={styles.deliveryIcon}/>
        <Text style={{color:'white'}}>Save your location to start</Text>
    </View>
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
        alignSelf:'center',
        color:'white',
        marginVertical:'50%'
        
    },
    deliveryIcon:{
        width:120,
        height:120
    },
    footer:{
    }
})