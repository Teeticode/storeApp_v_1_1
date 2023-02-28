import React from 'react'
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


export const LandingScreen = ()=>{
  return(
  <View style={styles.container}>
    
    <View style={styles.body}>
        <Image source={require('../assets/images/homeicon.png')} style={styles.deliveryIcon}/>
        <View style={styles.addressContainer}>
            <Text 
                style={{
                    color:'white',
                    fontWeight:'900',
                    fontSize:18,
                    marginTop:10
                }}
                >
                Save your location to start</Text>
        </View>
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
        
    },
    addressContainer:{
        borderBottomColor:'red',
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