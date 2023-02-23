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
import { BlurView } from 'expo-blur'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../config/colors'

export const HomeScreen = ()=>{
  return(
    <SafeAreaView >
      <ScrollView>
        <View 
          style={{
            padding:15
          }}
        >
          <View>
            <BlurView>
              <Ionicons name='grid-outline' size={20} color={colors.secondary}/>
            </BlurView>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
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