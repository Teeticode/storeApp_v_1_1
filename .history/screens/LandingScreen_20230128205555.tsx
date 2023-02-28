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
        flex:1
    },
    navigation:{
        flex:2,
        backgroundColor:'red'
    },
    body:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'black'
    },
    footer:{
        flex:1
    }
})