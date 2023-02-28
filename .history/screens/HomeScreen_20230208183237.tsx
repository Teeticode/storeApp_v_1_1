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
import FloatingButtonApp from '../components/FloatingButton'
import {useFonts} from 'expo-font'
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
    <SafeAreaView style={styles.container}>
      <View style={{width:width,height:height}}>
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
          <HomeCategory activeCat={activeCat} setActivecat={setActivecat}/>
          <View>
            <ScrollView
              style={{width:width,height:height,paddingBottom:60}}
              contentContainerStyle={{paddingBottom:400}}
            >
            <View>
            {
              (Object.entries(productsReducer).length !==0)?(
                <>
                  <Categories/>
                  {
                    activeCat==='Products'?(
                      <View
                    style={{
                      width:'100%',
                      height:'100%',
                      flexDirection:'row',
                      flexWrap:'wrap',
                      justifyContent:'space-between',
                      marginBottom:40
                    }}
                  >
                    
                    <FlatList
                      data={productsReducer.availability}
                      style={{
                        marginBottom:5
                      }}
                      numColumns={2}
                      ListFooterComponentStyle={{marginBottom:'10%'}}
                      keyExtractor={(item)=> item.id}
                      showsHorizontalScrollIndicator={false}
                      showsVerticalScrollIndicator={false}
                      renderItem={({item})=>(
                        <View 
                        
                          style={{
                            height:'100%',
                          }}
                        >
                        <ScrollView
                           
                        >
                          <View
                            style={{
                              height:'100%',
                              width:width/2-20,
                              margin:10
                            }}
                          >
                            <Products item={item}/>
                          </View> 
                        </ScrollView>
                        </View>
                      )}
                    />
                    
                    
                  </View>
                    ):(
                      <></>
                    )
                  }
                  {
                    activeCat === 'Business'?(
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
                        <View>
                        <ScrollView>
                          <View
                            style={{
                              height:150,
                              width:width/2-20,
                              margin:6
                            }}
                          >
                            <Text>{item.name}</Text>
                          </View> 
                        </ScrollView>
                        </View>
                        
                      )}
                    />
                  </View>
                    ):(
                      <></>
                    )
                  }
            
                </>
              ):(
                <View>
                  <ActivityIndicator color='#036ea8' size={15}/>
                </View>
              )
            }
            </View>
            </ScrollView>  
          </View>

          
        </View>
        
      </View>
      <FloatingButtonApp/>
    </SafeAreaView>
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