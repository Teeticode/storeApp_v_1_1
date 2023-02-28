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
            toValue: 160,
            duration:500,
            useNativeDriver:false
        }).start()
        Animated.timing(icon_2, {
            toValue: 110,
            duration:500,
            useNativeDriver:false
        }).start()
        Animated.timing(icon_3, {
            toValue: 90,
            duration:500,
            useNativeDriver:false
        }).start()
       
    }
    const popOut = ()=>{
        setPop(false)
        Animated.timing(icon_1,{
            toValue:40,
            duration:500,
            useNativeDriver:false
        }).start()

        Animated.timing(icon_2,{
            toValue:40,
            duration:500,
            useNativeDriver:false
        }).start()
        Animated.timing(icon_3,{
            toValue:40,
            duration:500,
            useNativeDriver:false
        }).start()
        
    }
    return (
        <View 
           style={styles.container} 
        >
            <Animated.View>
                <TouchableOpacity>
                    <Ionicons  style={{alignSelf:'center',marginTop:9,marginRight:2,marginLeft:2}} name='location-outline' size={26} color='white'/>
                </TouchableOpacity>
            </Animated.View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        
    }
})
