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
    activeCat?:any 
}
const SearchField: React.FC<searchProps> = ({onEndEditing,didTouch,autoFocus=false,onTextChange, activeCat})=> {
    
  return (
    <View
        style={{
            borderRadius:20,
            overflow:'hidden',
            borderColor:'lightgray',
            padding:5,
            borderWidth:1.5,
            alignItems:'center',
            alignSelf:'center',
            width:'85%',
            marginTop:10,
            flexDirection:'row',
            justifyContent:'space-between',
            
        }}
    >
            <TextInput
                style={{marginLeft:5,flex:9,display:'flex',fontSize:14, height:42}}
                placeholder={activeCat==='Products'? 'Search Products' : 'Search Stores'}
                autoFocus={autoFocus}
                onTouchStart={didTouch}
                onChangeText={(text)=>{
                    onTextChange(text)
                }}
                onEndEditing={onEndEditing}
            /> 
        
      </View>
  )
}
export {SearchField}