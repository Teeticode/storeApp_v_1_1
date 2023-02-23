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
                <Ionicons style={{alignSelf:'center',padding:2}} name='add-outline' size={50} color='white'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    circle:{
        backgroundColor:'#024fq5',
        width:50,
        height:50,
        position:'absolute',
        bottom:80,
        right:20,
        borderRadius:50,
        alignItems:'center'
    }
})
