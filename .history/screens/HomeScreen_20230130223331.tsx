import React from 'react'
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  
} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { BlurView } from 'expo-blur'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../config/colors'

export const HomeScreen = ()=>{
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View 
          style={{
            padding:15
          }}
        >
          <View>
            <BlurView
              style={{
                width:30,
                height:30,
                justifyContent:'center',
                alignItems:'center'
              }}
            >
              <Ionicons name='grid-outline' style={{fontWeight:'bold'}} size={20} color={colors.secondary}/>
            </BlurView>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
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
    flex:9,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black'
  }
})