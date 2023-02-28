import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'

function FloatingButton () {
    return (
        <View style={{
            flex:1
        }}>
            <TouchableOpacity
                style={styles.circle}
                onPress={()=>{
                    //
                }}
            >

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
        bottom:40,
        right:40,
        borderRadius:50
    }
})

export default FloatingButton