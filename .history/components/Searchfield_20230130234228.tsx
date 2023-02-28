import { View, Text } from 'react-native'
import React from 'react'
import {BlurView} from 'expo-blur'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../config/colors'
export default function Searchfield() {
  return (
    <View
        style={{
            borderRadius:10,
            overflow:'hidden',
            borderColor:'lightgray',
            borderWidth:1.5
        }}
    >
      <BlurView intensity={40}>
        <TextInput
            style={{
                width:'100%',
                color:colors.secondary,
                fontSize:15,
                padding:5
            }}
        />
      </BlurView>
    </View>
  )
}