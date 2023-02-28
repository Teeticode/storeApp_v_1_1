import React, { FC } from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import { BlurView } from 'expo-blur'
import { useFonts } from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { colors } from '../config/colors'
import { useNavigation } from '../utils'
interface prodmin{
    item:{}
  
  }
/**
* @author
* @function @Product
**/


const Product: React.FC<prodmin> = (props)=>{
    const {navigate} = useNavigation()
    const [fontsLoaded] = useFonts({
      'Josephin': require('../assets/fonts/JosefinSans-Regular.ttf'),
      'Abel': require('../assets/fonts/Abel-Regular.ttf')
    });
    
    const {item} = props
    return(
      <TouchableOpacity onPress={()=>{navigate('Product')}} style={{ width:'100%',borderRadius:10}}>
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


const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
 }
})

export {Product}