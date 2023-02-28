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


export const HomeScreen = ()=>{
  return(
    <View>
      <Text>Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1
    
    backgroundColor:'#000000'
  },
  navigation:{
    flex:2,
    backgroundColor:'red'
  },
  body:{
    flex:9,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black'
  }
})