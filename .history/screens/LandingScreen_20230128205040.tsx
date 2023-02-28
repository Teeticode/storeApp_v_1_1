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
      <View style={styles.navigation}>
        <Text>Navigation</Text>
      </View>
      <View style={styles.body}>
        <Text>Landing Screen</Text>
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    //flex:1,
    backgroundColor:'green'

  },
  navigation:{
    //flex:2,
    backgroundColor:'red'
  },
  body:{
    //flex:9,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:colors.bg
  },
  footer:{
    //flex:1,
    backgroundColor:'cyan'
  }
})