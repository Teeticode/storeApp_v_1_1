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
  Button,
  PermissionsAndroid
} from 'react-native'
import { colors } from '../config/colors'
import * as Location from 'expo-location'
import { useNavigation } from '../utils'
import {connect} from 'react-redux'
import { onUpdateLocation, UserState, ApplicationState } from '../redux'
import AsyncStorage from '@react-native-async-storage/async-storage/lib/typescript/AsyncStorage'
import { userReducer } from '../redux/reducers/userReducer'
import GeoLocation from 'react-native-geolocation-service'
interface LandingProps{
    userReducer:UserState,
    onUpdateLocation: Function
}

const _LandingScreen: React.FC<LandingProps> = (props)=>{
    const {userReducer, onUpdateLocation} = props
    const {navigate} = useNavigation()
    const [err, setErr] = useState(null)
    const [location, setLocation] = useState(null)
    const [ready, setReady] = useState(false)
    const [address, setAddress] = useState<Location.LocationGeocodedAddress>()
    const geoOptions = {
        enableHighAccuracy:true,
        timeOut:20000,
        maximumAge:60 * 60 * 24
    }
    
    const [errorMsg, setErrorMsg]= useState('')
    const [displayAdress, setDisplayAdress] = useState('Waiting for Current Location')
    useEffect(()=>{
        if(userReducer){
            console.log(userReducer)
        }
    },[])
    const geoSuccess = ()=>{

    }
    const geoFailure=()=>{

    }
    const getPermissions = async ()=>{
        try{
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
                    title: 'Geolocation Permision',
                    message: 'Can We Access Your Location?',
                    buttonNeutral:'Ask Me Later',
                    buttonNegative:'Cancel',
                    buttonPositive:'OK'
                },
            );
            console.log('granted', granted);
            if(granted === 'granted'){
                console.log('You can use Geolocation');
                setReady(true)
                return true;
            }else{
                console.log('You cannot use Geolocation');
                setReady(false)
                return false;
            }
        }catch(err){
            setReady(false)
            return false;
        }   
    }
    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            getPermissions()
            return;
          }
          console.log('location');
          let currentLocation = await Location.getCurrentPositionAsync({});
          
           console.log('location');
        })();
      }, []);
    
      let text = 'Waiting..';
      if (errorMsg) {
        text = errorMsg;
      } else if (location) {
        text = JSON.stringify(location);
      }
    
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
            <Button title='Get Location' onPress={()=>navigate('homeStack')}/>
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