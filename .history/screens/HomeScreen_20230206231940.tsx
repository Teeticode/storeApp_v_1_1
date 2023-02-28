import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  VirtualizedList,
  ActivityIndicator
} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { BlurView } from 'expo-blur'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../config/colors'
import Searchfield from '../components/Searchfield'
import { Categories,HomeCategory } from '../components'
import { ApplicationState, ProductState, getProducts } from '../redux'
import { connect } from 'react-redux'
import {useFonts} from 'expo-font'
import FloatingButton from '../components/FloatingButton'
const Avatar = require('../assets/images/avatar.jpg') 
interface productProps{
  productsReducer:ProductState,
  getProducts:Function
}
interface prodmin{
  item:{}
}
const Products: React.FC<prodmin> = (props)=>{
  const [fontsLoaded] = useFonts({
    'Josephin': require('../assets/fonts/JosefinSans-Regular.ttf'),
  });
  const {item} = props
  return(
    <View style={{ width:'100%',borderRadius:10}}>
      <BlurView
        intensity={90}
        tint='light'
        style={{
          padding:6,
          borderRadius:15
        }}
      >
        <TouchableOpacity style={{height:120,width:'100%'}}>
          <Image source={{uri:item.image}} style={{width:'100%',borderRadius:15, height:'100%'}}/>
          <View
            style={{
              position:'absolute',
              right:0,
              borderBottomStartRadius:20,
              borderTopEndRadius:18,
              overflow:'hidden'
            }}
          >
            <BlurView
              style={{
                flexDirection:'row',
                padding:5
              }}
              tint='dark'
            >
              <Ionicons
                name='star'
                color={colors.primary}
                size={13}
              />
              <Text style={{marginLeft:4,fontWeight:'600',color:colors.bg,fontSize:12}}>4.5</Text>
            </BlurView>
          </View>
           {
            (item.isDiscount === true)?(
              <View
            style={{
              position:'absolute',
              left:-10,
              top:-10,
              borderBottomStartRadius:15,
              borderBottomEndRadius:15,
              backgroundColor:'#00A86B',
              borderTopStartRadius:15,
              borderTopEndRadius:15,
              overflow:'hidden'
            }}
          >
            <BlurView
              style={{
                flexDirection:'row',
                padding:5
              }}
            >
            
              <Text style={{marginLeft:4,fontWeight:'900',color:'white',fontSize:12}}>-50%</Text>
            </BlurView>
          </View>
            ):(
              <></>
            )
           }
        </TouchableOpacity>
        <Text style={{fontFamily:'Josephin',fontWeight:'700'}}>{item.name}</Text>
        
        {(item.countInStock > 2) ?(
        <View
          style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            marginTop:5,
            marginBottom:4
          }}
        >
          <Ionicons  name='information-circle-outline' size={20} color='#3CB043'/>
          <Text style={{fontFamily:'Josephin',fontWeight:'700', color:'#3CB043'}}> In Stock </Text>
        </View> ):(
        <View
          style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
            marginTop:5,
            marginBottom:4
          }}
        >
          <Ionicons name='information-circle-outline' size={20} color='#B90E0A'/>
          <Text style={{textAlign:'center',fontFamily:'Josephin',fontWeight:'700', color:'#B90E0A'}}> Out Of Stock </Text>
        </View>)}
      </BlurView>
    </View>
  )
}
const _HomeScreen: React.FC<productProps> = (props)=>{
  const [fontsLoaded] = useFonts({
    'Josephin': require('../assets/fonts/JosefinSans-Regular.ttf'),
  });
  const {productsReducer,getProducts} = props
  const {width,height} = Dimensions.get('window')
  const [products,setProds] = useState(productsReducer.availability)
  
    const [activeCat,setActivecat] = useState('Products')
  useEffect(()=>{
    if(productsReducer){
      setProds(productsReducer.availability)
      console.log(products)
    }
  },[])

  useEffect(()=>{
    getProducts()
    
  },[])
  
  return(
    <>
    
    <FloatingButton/>
    </>
    
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    marginBottom:20
  },
  navigation:{
    flex:2,
    backgroundColor:'red'
  },
  body:{
    flex:9,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black'
  }
})

const mapToStateObject = (state:ApplicationState)=>({
  productsReducer:state.productsReducer
})

const HomeScreen = connect(mapToStateObject, {getProducts})(_HomeScreen)
export {HomeScreen}