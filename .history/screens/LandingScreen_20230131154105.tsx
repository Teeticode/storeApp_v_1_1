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
  Button
} from 'react-native'
import { colors } from '../config/colors'
import * as Location from 'expo-location'
import { useNavigation } from '../utils'
import {connect} from 'react-redux'
import { onUpdateLocation, UserState, ApplicationState } from '../redux'
import AsyncStorage from '@react-native-async-storage/async-storage/lib/typescript/AsyncStorage'

interface LandingProps{
    userReducer:UserState,
    onUpdateLocation: Function
}

const _LandingScreen: React.FC<LandingProps> = (props)=>{
    const {userReducer, onUpdateLocation} = props
    const {navigate} = useNavigation()
    const [errorMsg, setErrorMsg]= useState('')
    const [address, setAdress]= useState<Location.LocationGeocodedAddress>()
    const [displayAdress, setDisplayAdress] = useState('Waiting for Current Location')
    useEffect(()=>{
        if(userReducer){
            console.log(userReducer)
        }
    },[])
    const getPermissions = async ()=>{
        let {status} = await Location.requestForegroundPermissionsAsync()
        if(status !== 'granted'){
            alert('Please Grant Location Permission')
            setErrorMsg('Something went wrong')
            return;
        }else{
            setErrorMsg('wuee')
            let location = await Location.getCurrentPositionAsync({})
            setErrorMsg('wuee2')
            setErrorMsg('apo ndipo njee')
            const {coords} = location
            if(coords){
                setErrorMsg('apo ndipo coords')
                const {latitude,longitude} = coords
                let addressResponse: any = await Location.reverseGeocodeAsync({latitude,longitude})
                for(let item of addressResponse){
                    
                    let currentAddress = `${item?.name}, ${item?.street}, ${item?.postalCode}, ${item?.country}`
                    setDisplayAdress(currentAddress)
                    setAdress(item)
                    onUpdateLocation(address)
                    setErrorMsg('apo ndipo')
                }
            }
        }

        
    }
    useEffect(()=>{
        getPermissions();
        onUpdateLocation(address)
        
        
            
        
       
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
            <Text style={styles.addressText}>{errorMsg}</Text>
            <Button title='Get Location' onPress={()=>{navigate('homeStack')}}/>
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
        color:'#4F4F4F',
        marginBottom:20
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

const mapToStateProp = (state: ApplicationState) =>({
    userReducer: state.userReducer,
})
const LandingScreen = connect(mapToStateProp, {onUpdateLocation})(_LandingScreen)

export {LandingScreen}