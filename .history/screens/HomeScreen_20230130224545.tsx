import React from 'react'
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
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
          <TouchableOpacity style={{
            borderRadius:10,
            overflow:'hidden',
            width:40,
            height:40,
            backgroundColor:'lightgray',
            padding:2
          }}>
            <View
              style={{
                height:'100%',
                justifyContent:'center',
                alignItems:'center',
                
              }}
              
            >
              <Ionicons name='grid-outline' style={{fontWeight:'bold'}} size={14} color={colors.secondary}/>
            </View>
          </TouchableOpacity>

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