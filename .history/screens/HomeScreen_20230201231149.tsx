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
  FlatList
} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'
import { BlurView } from 'expo-blur'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../config/colors'
import HomeCategory from '../components/HomeCategory'
import Searchfield from '../components/Searchfield'
import { Categories } from '../components'
import { ApplicationState, ProductState, getProducts } from '../redux'
import { connect } from 'react-redux'
const Avatar = require('../assets/images/avatar.jpg') 
interface productProps{
  productsReducer:ProductState,
  getProducts:Function
}
interface prodmin{
  item:{}
}
const Products: React.FC<prodmin> = (props)=>{
  const {item} = props
  return(
    <View style={{margin:8}}>
      <TouchableOpacity style={{height:150}}>
      <Image source={{uri:item.image}} style={{width:'100%', height:'100%'}}/>
      </TouchableOpacity>
      <Text>{item.name}</Text>
    </View>
  )
}
const _HomeScreen: React.FC<productProps> = (props)=>{
  const {productsReducer,getProducts} = props
  const {width,height} = Dimensions.get('window')
  const [products,setProds] = useState(productsReducer.availability)
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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View 
          style={{
            padding:5,
            flexDirection:'row',
            justifyContent:'space-between',

          }}
        >
          <View>
            <TouchableOpacity style={{
            borderRadius:10,
            overflow:'hidden',
            width:40,
            height:40,
            margin:5,
            backgroundColor:'#F5FEFD'
          }}>
            <BlurView
              style={{
                height:'100%',
                justifyContent:'center',
                alignItems:'center',
                padding:5/2
                
              }}
              intensity={30}
            >
              <Ionicons name='open-outline' style={{fontWeight:'bold'}} size={20} color={colors.secondary}/>
            </BlurView>
          </TouchableOpacity>
          </View>
          
          <View
            style={{
              width:45,
              height:45,
              overflow:'hidden',
              borderRadius:10
            }}
          >
            <BlurView
              style={{
                height:'100%',
                padding:5/2
              }}
              
            >
              <Image 
                source={Avatar} 
                style={{ 
                  width:'100%', 
                  height:'100%',
                  borderRadius:10
                }}
              />
            </BlurView>
          </View>
        </View>
        <View>
          <HomeCategory/>
          <Categories/>
          <View
            style={{
              width:'100%',
              flexDirection:'row',
              flexWrap:'wrap',
              justifyContent:'space-between'
            }}
          >
            <FlatList
              data={productsReducer.availability}
              numColumns={2}
              keyExtractor={(item)=> item.id}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              renderItem={({item})=>(
                <ScrollView>
                  <View
                    style={{
                      height:150,
                      width:width/2-20,
                      margin:14
                    }}
                  >
                    <Products item={item}/>
                  </View> 
                </ScrollView>
                
              )}
            />
          </View>
          
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1
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