import { Ionicons } from '@expo/vector-icons'
import React,{useState} from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Animated } from 'react-native'

const deliveryadd = require('../assets/icons/deliveryadd.png')
const favoriteadd = require('../assets/icons/favouriteadd.png')
const phoneadd = require('../assets/icons/phoneadd.png')
const storeadd = require('../assets/icons/storeadd.png')
export default function FloatingButtonApp () {
    const [icon_1] = useState(new Animated.Value(40))
    const [icon_2] = useState(new Animated.Value(40))
    const [icon_3] = useState(new Animated.Value(40))

    const [pop,setPop] = useState(false)
    const popIn = ()=>{
        setPop(true)
        Animated.timing(icon_1, {
            toValue: 130,
            duration:500,
            useNativeDriver:false
        }).start()
    }
    return (
        <View 
            style={{
                marginBottom:40
            }}
        >
            <Animated.View style={[styles.circle, {bottom:icon_1}]}>
                <TouchableOpacity>
                    <Ionicons  style={{alignSelf:'center',marginTop:9,marginRight:2,marginLeft:2}} name='location-outline' size={26} color='white'/>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.circle, {}]}>
                <TouchableOpacity>
                    <Ionicons  style={{alignSelf:'center',marginTop:9,marginRight:2,marginLeft:2}} name='power-outline' size={26} color='white'/>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.circle, {}]}>
                <TouchableOpacity>
                    <Ionicons  style={{alignSelf:'center',marginTop:9,marginRight:2,marginLeft:2}} name='heart-circle-outline' size={26} color='white'/>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.circle, {}]}>
                <TouchableOpacity>
                    <Ionicons  style={{alignSelf:'center',marginTop:9,marginRight:2,marginLeft:2}} name='cart-outline' size={26} color='white'/>
                </TouchableOpacity>
            </Animated.View>
            <TouchableOpacity
                style={styles.circle}
                onPress={()=>{
                    (pop===false) ? popIn() ? null
                }}
            >
                <Ionicons style={{alignSelf:'center',marginTop:5,marginLeft:2}} name='add-outline' size={36} color='white'/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    circle:{
        backgroundColor:'#036ea8',
        width:50,
        height:50,
        position:'absolute',
        bottom:80,
        right:20,
        borderRadius:50,
        alignItems:'center'
    }
})
