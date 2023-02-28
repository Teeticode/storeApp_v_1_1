import { Ionicons } from '@expo/vector-icons'
import React,{useState} from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Animated, Image } from 'react-native'

const deliveryadd = require('../assets/icons/deliveryadd.png')
const favoriteadd = require('../assets/icons/favouriteadd.png')
const phoneadd = require('../assets/icons/phoneadd.png')
const storeadd = require('../assets/icons/storeadd.png')
export default function FloatingButtonApp () {
    const [icon_1] = useState(new Animated.Value(40))
    return (
        <View 
            style={{
                marginBottom:40
            }}
        >
            <Animated.View>
                <TouchableOpacity>
                    <Image source={storeadd} style={{width:30,height:30}}/>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View>
                <TouchableOpacity>
                    <Ionicons  style={{alignSelf:'center',marginTop:5,marginLeft:2}} name='bag-outline' size={36} color='white'/>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View>
                <TouchableOpacity>
                    <Ionicons  style={{alignSelf:'center',marginTop:5,marginLeft:2}} name='location-outline' size={36} color='white'/>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View>
                <TouchableOpacity>
                    <Ionicons  style={{alignSelf:'center',marginTop:5,marginLeft:2}} name='location-outline' size={36} color='white'/>
                </TouchableOpacity>
            </Animated.View>
            {/*<TouchableOpacity
                style={styles.circle}
                onPress={()=>{
                    //
                }}
            >
                <Ionicons style={{alignSelf:'center',marginTop:5,marginLeft:2}} name='add-outline' size={36} color='white'/>
            </TouchableOpacity>*/}
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
