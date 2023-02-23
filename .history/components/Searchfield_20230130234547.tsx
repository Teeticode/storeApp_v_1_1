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
            padding:5,
            borderBottomWidth:1.5,
            alignItems:'center',
            alignSelf:'center',
            width:'90%'
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
            placeholder='Search Anything in Store Yako'
            placeholderTextColor='black'
        />
      </BlurView>
    </View>
  )
}