import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function FloatingButton () {
    return (
        <View>
            <Text>FloatingButton</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    circle:{
        backgroundColor:'#f52d56',
        width:60,
        height:60,
        position:'absolute',
        bottom:40,
        right:40,
        borderRadius:50
    }
})

export default FloatingButton