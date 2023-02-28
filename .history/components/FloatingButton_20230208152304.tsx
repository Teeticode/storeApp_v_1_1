import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import React,{useState} from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Animated ,TouchableWithoutFeedback} from 'react-native'

const deliveryadd = require('../assets/icons/deliveryadd.png')
const favoriteadd = require('../assets/icons/favouriteadd.png')
const phoneadd = require('../assets/icons/phoneadd.png')
const storeadd = require('../assets/icons/storeadd.png')
export default function FloatingButtonApp () {
    
    return (
        <View 
           style={styles.container} 
        >
            <TouchableWithoutFeedback>
            <Animated.View style={[styles.button,styles.menu]}>
               <Entypo name='location-pin' size={24} color='#F02A4B'/>
            </Animated.View>
            
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
            <Animated.View style={[styles.button,styles.menu]}>
               <AntDesign name='plus' size={24} color='#fff'/>
            </Animated.View>
            
            </TouchableWithoutFeedback>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        bottom:50,
        right:70,
        position:'absolute'
    },
    button:{
       // position:'absolute',
        width:70,
        height:50,
        borderRadius:60/2,
        alignItems:'center',
        justifyContent:'center',
        shadowRadius:10,
        shadowColor:'#f02A4B',
        shadowOpacity:0.3,
        shadowOffset: { height: 10 }
    },
    menu:{
        backgroundColor:'#036ea8'
    }
})
