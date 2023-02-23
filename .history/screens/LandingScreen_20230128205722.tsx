import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  
} from 'react-native'
import { colors } from '../config/colors'


export const LandingScreen = ()=>{
  return(
    <View style={styles.container}>
      <View style={styles.navigation}/>
      <View style={styles.body}>
        <Text>Landing Screen</Text>
      </View>
      <View style={styles.footer}/>
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
        alignSelf:'center'
    },
    footer:{
    }
})