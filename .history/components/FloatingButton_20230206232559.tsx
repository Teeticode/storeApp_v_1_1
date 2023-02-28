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
                <Ionicons name='add-outline' size={20} color='white'/>
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
        bottom:60,
        right:40,
        borderRadius:50
    }
})
