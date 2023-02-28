import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'

export default function FloatingButtonApp () {
    return (
        <View 
            style={{
                marginBottom:40
            }}
        >
            <TouchableOpacity
                style={styles.circle}
                onPress={()=>{
                    //
                }}
            >
                <Ionicons style={{alignSelf:'center'}} name='add-outline' size={80} color='white'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    circle:{
        backgroundColor:'#f52d56',
        width:60,
        height:60,
        position:'absolute',
        bottom:80,
        right:20,
        borderRadius:50,
        alignItems:'center'
    }
})
