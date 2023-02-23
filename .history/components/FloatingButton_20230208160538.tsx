import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons'
import React,{useState} from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Animated ,TouchableWithoutFeedback} from 'react-native'

const deliveryadd = require('../assets/icons/deliveryadd.png')
const favoriteadd = require('../assets/icons/favouriteadd.png')
const phoneadd = require('../assets/icons/phoneadd.png')
const storeadd = require('../assets/icons/storeadd.png')
export default function FloatingButtonApp () {
    const [icons_1] = useState(new Animated.Value(0))
    const [icons_2] = useState(new Animated.Value(0))
    const [icon_3] = useState(new Animated.Value(0))
    const [open,SetOpen]= useState()

    
    return (
        <View 
           style={styles.container} 
        >
            <TouchableWithoutFeedback>
            <Animated.View style={[styles.button,styles.secondary]}>
               <Ionicons name='cart-outline' size={24} color='#036ea8'/>
            </Animated.View>
            
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
            <Animated.View style={[styles.button,styles.secondary]}>
               <Ionicons name='heart-outline' size={24} color='#036ea8'/>
            </Animated.View>
            
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback>
            <Animated.View style={[styles.button,styles.secondary]}>
               <Entypo name='location-pin' size={24} color='#036ea8'/>
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
        position:'absolute',
        alignItems:'center',
        bottom:20,
        right:20
    },
    button:{
        backgroundColor:'#036ea8',
        width:50,
        height:50,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center'

    },
    
    secondary:{
        width:48,
        height:48,
        borderRadius: 48/2,
        backgroundColor:'#fff',
        marginLeft:5,
        marginBottom:8
    }
})
