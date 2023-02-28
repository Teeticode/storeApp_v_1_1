import React,{useState,useReducer, useEffect} from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native'
import { colors } from '../config/colors'
import * as Location from 'expo-location'
import { useNavigation } from '../utils'

export const LandingScreen = ()=>{
    const {navigate} = useNavigation()
    const [errorMsg, setErrorMsg]= useState('')
    const [loc, setLocation]= useState()
    const [displayAdress, setDisplayAdress] = useState('Waiting for Current Location')
    
    
    useEffect(()=>{
        const getPermissions = async()=>{
            let {status} = await Location.requestForegroundPermissionsAsync()
            if(status !== 'granted'){
                alert('Please grant Location permissions')
                return;
            }
            let currentLocation = await Location.getCurrentPositionAsync({});
            if(currentLocation){
                setLocation('Found it')
            }
            console.log(currentLocation)
        }
        getPermissions()
        
    },[])
    return(
    <View style={styles.container}>
        
        <View style={styles.body}>
            <Image source={require('../assets/images/homeicon.png')} style={styles.deliveryIcon}/>
            <View style={styles.addressContainer}>
                <Text 
                    style={{
                        color:'#000000',
                        fontWeight:'900',
                        fontSize:16,
                        marginTop:10
                    }}
                    >
                    Save your location to start</Text>
            </View>
            <Text style={styles.addressText}>{loc}</Text>
        </View>
    </View>
        
        
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
    
    navigation:{
        
        backgroundColor:'red'
    },
    body:{
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
        color:'white',
        marginVertical:'50%'
        
    },addressText:{
        fontSize:13,
        fontWeight:'900',
        color:'#4F4F4F'
    },
    addressContainer:{
        borderBottomColor:'lightgray',
        borderBottomWidth:0.5,
        padding:5,
        marginBottom:10,
        alignItems:'center'
    },
    deliveryIcon:{
        width:120,
        height:120
    },
    footer:{
    }
})