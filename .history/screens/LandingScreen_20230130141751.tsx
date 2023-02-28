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

export const LandingScreen = ()=>{
    const [errorMsg, setErrorMsg]= useState('')
    const [address, setAdress]= useState<Location.Accuracy>()
    const [displayAdress, setDisplayAdress] = useState('Waiting for Current Location')
    useEffect(()=>{
      (async ()=>{
        let {status} = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted'){
            setErrorMsg('Permission to access Location is on Granted')
        }
        let location: any = await Location.getCurrentPositionAsync({})
        const {coords} = location
        if(coords){
            const {latitude,longitude} = coords;
            let addressResponse: any = await Location.reverseGeocodeAsync({latitude,longitude})
            for(let item of addressResponse){
                setAdress(item)
                let currentAddress = `${item.name}, ${item.street}, ${item.postalCode}, ${item.country}`
                setDisplayAdress(currentAddress)
                return;
            }
        }else{
            //notify use something went wrong
        }
    })  
    },[])
    return(
    <View style={styles.container}>
        
        <View style={styles.body}>
            <Image source={require('../assets/images/homeicon.png')} style={styles.deliveryIcon}/>
            <View style={styles.addressContainer}>
                <Text 
                    style={{
                        color:'white',
                        fontWeight:'900',
                        fontSize:16,
                        marginTop:10
                    }}
                    >
                    Save your location to start</Text>
            </View>
            <Text style={styles.addressText}>{displayAdress}</Text>
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