import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {BlurView} from 'expo-blur'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../config/colors'
import { Ionicons } from '@expo/vector-icons'
export default function Searchfield() {
  return (
    <TouchableOpacity
        style={{
            borderRadius:16,
            overflow:'hidden',
            borderColor:'lightgray',
            padding:8,
            borderWidth:1.5,
            alignItems:'center',
            alignSelf:'center',
            width:'70%',
            marginTop:10,
            flexDirection:'row',
            justifyContent:'space-between',
            
        }}
    >
        <View>
            <Text style={{fontWeight:'600'}}><Ionicons style={{fontWeight:'900'}} name='search-outline' size={20} color='black'/></Text>
        </View>
        <View>
            <Text style={{fontWeight:'600'}}>search</Text>
        </View>
      </TouchableOpacity>
  )
}