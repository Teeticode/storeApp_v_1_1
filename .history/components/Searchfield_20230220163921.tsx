import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {BlurView} from 'expo-blur'
import { TextInput } from 'react-native-gesture-handler'
import { colors } from '../config/colors'
import { Ionicons } from '@expo/vector-icons'
interface searchProps{
    onEndEditing?:any | undefined;
    didTouch?: any | undefined;
    autoFocus?: boolean | undefined;
    onTextChange: Function;
}
const Searchfield:React.FC<searchProps> = ({onEndEditing,didTouch,autoFocus=false,onTextChange})=> {
    
  return (
    <TouchableOpacity
        style={{
            borderRadius:20,
            overflow:'hidden',
            borderColor:'lightgray',
            padding:10,
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
            <TextInput
                style={{marginLeft:5,flex:9,display:'flex',fontSize:20, height:42}}
                placeholder={'Search Foods'}
                autoFocus={autoFocus}
                onTouchStart={didTouch}
                onChangeText={(text)=>{
                    onTextChange(text)
                }}
                onEndEditing={onEndEditing}
            />    
        </View>
        
      </TouchableOpacity>
  )
}
export {Searchfield}