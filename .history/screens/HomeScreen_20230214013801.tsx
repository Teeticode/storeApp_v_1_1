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
import { useNavigation } from '../utils'
import moment from 'moment'
const Avatar = require('../assets/images/avatar.jpg') 
interface productProps{
  productsReducer:ProductState,
  getProducts:Function
}
interface prodmin{
  item:{},
  navigate:Function

}
const Products: React.FC<prodmin> = (props)=>{
  const [fontsLoaded] = useFonts({
    'Josephin': require('../assets/fonts/JosefinSans-Regular.ttf'),
    'Abel': require('../assets/fonts/Abel-Regular.ttf')
  });
  
  const {item} = props
  return(
    <TouchableOpacity onPress={()=>{props.navigate('LandingStack')}} style={{ width:'100%',borderRadius:10}}>
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
        <Text 
        numberOfLines={2}
        style={{
          fontFamily:'Josephin',
          fontWeight:'600',
          fontSize: 18,
          marginTop:17,
          marginBottom:18/2,
          }}>{item.name}</Text>
        <Text
          style={{
            fontFamily:'Abel',
            fontWeight:'700',
            color:'#745657',
            fontSize:16
          }}
          numberOfLines={2}
        >
          {item.category.name}
        </Text>
        <View
          style={{
            marginVertical:9,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between'
          }}
        >
          <View>
            <Text style={{fontFamily:'Josephin',fontWeight:'600',fontSize:16,color:'#036ea8'}}>${' '}{item.price}</Text>
          </View>
          <View
            style={{
              backgroundColor:'transparent',
              marginRight:5,
              padding:8
            }}
          >
            <Ionicons color='#036ea8' name='heart-outline' size={22} />
          </View>
        </View>
        {(item.countInStock > 2) ?(
        <View
          style={{
            flexDirection:'row',
            marginTop:5,
            marginBottom:4
          }}
        >
          
          <Text style={{fontSize:15,fontFamily:'Abel',fontWeight:'700', color:'#3CB043'}}> In Stock </Text>
        </View> ):(
        <View
          style={{
            flexDirection:'row',
            marginTop:5,
            marginBottom:4
          }}
        >
          
          <Text style={{fontSize:15,fontFamily:'Abel',textAlign:'center',fontWeight:'700',color:'#B90E0A'}}> Out Of Stock </Text>
        </View>)}
      </BlurView>
    </TouchableOpacity>
  )
}
const _HomeScreen: React.FC<productProps> = (props)=>{
  const [fontsLoaded] = useFonts({
    'Josephin': require('../assets/fonts/JosefinSans-Regular.ttf'),
    'Abel': require('../assets/fonts/Abel-Regular.ttf')
  });
  const {productsReducer,getProducts} = props
  const {navigate} = useNavigation()
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
          
          <HomeCategory 
                activeCat={activeCat} 
                setActivecat={setActivecat}
              />
          <View>
            <ScrollView
              style={{width:width,height:height,paddingBottom:60}}
              contentContainerStyle={{paddingBottom:400}}
            >
            <View>
            {
              (Object.entries(productsReducer).length !==0)?(
                <>
                {
            activeCat === 'Products' ? 
            (
              <Categories/>
            ):(
            <>
            </>
            )
          }
                  
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
                            
                                <Products item={item} navigate={navigate}/>
                               
                            
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
                      style={styles.containerBiz}
                  >
                    <FlatList
                      data={productsReducer.availability}
                      numColumns={1}
                      keyExtractor={(item)=> item.id}
                      showsHorizontalScrollIndicator={false}
                      showsVerticalScrollIndicator={false}
                      renderItem={({item})=>(
                        <View>
                        <ScrollView>
                          <View

                          style={styles.card}
                          >
                            <View
                              style={styles.cardInfo}
                            >
                              <Image source={{uri:item.image}} style={styles.cardImg}/>
                                <View
                                  style={styles.cardInfoText}
                                >
                                  <Text style={[{fontFamily:'Abel'},styles.cardStoreName]}>{item.name}</Text>
                                  <Text style={[styles.cardTime,{fontFamily:'Abel'}]}>{moment(item.createdAt).fromNow()}</Text>
                                </View>
                              </View>
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
    marginBottom:20,
    
  },
  containerBiz:{
    flex:1,
    alignItems:'center',
  },
  card:{
    backgroundColor:'#f8f8f8',
    width:'100%',
    marginBottom:20,
    borderRadius:10,
    padding:10
  },
  cardInfo:{
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  cardImg:{
    width:50,
    height:50,
    borderRadius:25
  },
  cardInfoText:{
    flexDirection:'column',
    justifyContent:'center',
    marginLeft:10
  },
  cardStoreName:{
    fontSize:15,
    fontWeight:'bold',
    color:'#1f1107'
  },
  cardText:{
    fontSize:15
  },
  cardTime:{
    fontSize:13,
    color:'#666',
    fontWeight:'bold'
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