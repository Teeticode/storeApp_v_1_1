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
import { Categories,HomeCategory, Products, SearchField } from '../components'
import { ApplicationState, ProductState, getProducts } from '../redux'
import { connect } from 'react-redux'
import FloatingButtonApp from '../components/FloatingButton'
import {useFonts} from 'expo-font'
import { useNavigation } from '../utils'
import moment from 'moment'
import { act } from 'react-test-renderer'
<<<<<<< HEAD
import { RefreshControl } from 'react-native-gesture-handler'
=======
>>>>>>> 0812b6a551f835b31c3c75c9176ca92dc09e8c5e
const Avatar = require('../assets/images/avatar.jpg') 
interface productProps{
  productsReducer:ProductState,
  getProducts:Function
}


const _HomeScreen: React.FC<productProps> = (props)=>{
  const [fontsLoaded] = useFonts({
    'Josephin': require('../assets/fonts/JosefinSans-Regular.ttf'),
    'Abel': require('../assets/fonts/Abel-Regular.ttf')
  });
  const {productsReducer,getProducts} = props
  const {navigate} = useNavigation()
  const {width,height} = Dimensions.get('window')
<<<<<<< HEAD
  const [prodCat, setProdCat] = useState(productsReducer?.availability)
  const [products,setProds] = useState(productsReducer.availability)
  const [err, setErr] = useState('')
  const [refreshing, setRefreshing] = useState(false)
  const [arr,setArr] = useState([])
  const [active, setActive] = useState('all')
    const [activeCat,setActivecat] = useState('Products')
  
  const getData = ()=>{
    getProducts()
    if(productsReducer.availability){
      setProds(productsReducer.availability)
      setProdCat(productsReducer.availability)
      setRefreshing(false)
    }
   
  }
  const getActiveCat =()=>{
    
      prodCat.filter((prodfil)=>{
        if(prodfil.category.name === active){
          setProds([prodfil])
        }else if(active === 'all'){
          setProds(productsReducer.availability)
        }
      })
    
  }
  
  useEffect(()=>{
    getData()
    if(!products){
      getProducts()
    }
  },[])
  
  const onRefresh = ()=>{
    setRefreshing(true)
    
    setProds([]);
    getData()
    
  }
=======
  const [prodCat, setProdCat] = useState(productsReducer.availability)
  const [products,setProds] = useState(productsReducer.availability)
  const [err, setErr] = useState('')
  const [arr,setArr] = useState([])
  const [active, setActive] = useState('all')
    const [activeCat,setActivecat] = useState('Products')
  useEffect(()=>{
    getProducts()
    if(productsReducer){
      setProds(productsReducer?.availability)
      setProdCat(productsReducer?.availability)
      console.log(products)
    }
  },[])
  useEffect(()=>{
    getProducts()
    if(productsReducer.availability.length > 1){
      prodCat?.filter(prod=>{
        if(active === prod?.category?.name){
          setProds([prod])
        }else if (active === 'all'){
          setProds(productsReducer?.availability)
        }
      })
    }else{
      setProds(productsReducer?.availability)
    }
      
    
    
    
    
    
  },[active])
>>>>>>> 0812b6a551f835b31c3c75c9176ca92dc09e8c5e
  
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
              <SearchField
                onTextChange={()=>{
                  
                }}
                didTouch={()=>{
                  navigate('SearchProdPage')
                }}
                activeCat={activeCat}
              />
            {
              (productsReducer.availability.length >= 1)?(
                <>
                {
                  activeCat === 'Products' ? 
                  (
<<<<<<< HEAD
                    <Categories active={active} setActive={setActive} getActiveCat={getActiveCat}/>
=======
                    <Categories active={active} setActive={setActive}/>
>>>>>>> 0812b6a551f835b31c3c75c9176ca92dc09e8c5e
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
<<<<<<< HEAD
                    {refreshing?(<ActivityIndicator size={20} color='#036ea8'/>):null}
=======
                    
>>>>>>> 0812b6a551f835b31c3c75c9176ca92dc09e8c5e
                    <FlatList
                      data={products}
                      style={{
                        marginBottom:5
                      }}
                      numColumns={2}
                      ListFooterComponentStyle={{marginBottom:'10%'}}
                      keyExtractor={(item)=> item.id}
<<<<<<< HEAD
                      refreshControl={
                        <RefreshControl
                          refreshing={refreshing}
                          onRefresh={onRefresh}
                        />
                      }
=======
>>>>>>> 0812b6a551f835b31c3c75c9176ca92dc09e8c5e
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
                            
                                
                                      <Products item={item} />
                                   
                             
                            
                                
                               
                            
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
                      renderItem={({item,index})=>(
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
                              <Text style={[styles.cardText,{fontFamily:'Josephin'}]}>{item.description}</Text>
                              {index === 0?
                              (
                                <Image style={styles.cardFeature} source={{uri:item.image}}/>
                              ):(
                                <></>
                              )}
                              <View
                                style={styles.cardInteractionWrapper}
                              >
                                <TouchableOpacity
                                  style={styles.cardInteraction}
                                >
                                  <Ionicons name='flash-outline' size={25}/>
                                  <Text style={[{fontFamily:'Abel'},styles.cardInteractionText]}>Follow</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                  style={styles.cardInteraction}
                                >
                                  <Ionicons name='md-chatbubble-outline' size={25}/>
                                  <Text style={[{fontFamily:'Abel'},styles.cardInteractionText]}>Comment</Text>
                                </TouchableOpacity>
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
                <View
                  style={{
                    alignItems:'center',
                    marginTop:60
                  }}
                >
                  <ActivityIndicator color='#036ea8' size={50}/>
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
    justifyContent:'flex-start',
    padding:10
  },
  cardImg:{
    width:50,
    height:50,
    borderRadius:25
  },
  cardInfoText:{
    flexDirection:'column',
    justifyContent:'center',
    marginLeft:10,
    
  },
  cardStoreName:{
    fontSize:15,
    fontWeight:'bold',
    color:'#1f1107'
  },
  cardText:{
    fontSize:15,
    paddingLeft:15,
    paddingRight:15
  },
  cardFeature:{
    width:'100%',
    height:200,
    marginTop:15,
    borderRadius:10
  },
  cardTime:{
    fontSize:13,
    color:'#666',
    fontWeight:'bold'
  },
  cardInteractionWrapper:{
    flexDirection:'row',
    justifyContent:'space-around',
    padding:15
  },
  cardInteraction:{
    flexDirection:'row',
    justifyContent:'center',
    borderRadius:5,
    padding:5
  },
  cardInteractionText:{
    fontSize:12,
    fontWeight:'bold',
    color:'#333',
    marginTop:5,
    marginLeft:5
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