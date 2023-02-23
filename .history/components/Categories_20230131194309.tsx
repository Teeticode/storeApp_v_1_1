import { View, Text,FlatList,TouchableOpacity,Image } from 'react-native'
import React, { useEffect,useState } from 'react'
import { ApplicationState, CategoryState } from '../redux'
import { getCategory } from '../redux/actions/categoryAction'
import { connect } from 'react-redux'
import { categoryReducer } from '../redux/reducers/categoryReducer'
import { Ionicons } from '@expo/vector-icons'
const all = require('../assets/icons/all.png')
const clothes = require('../assets/icons/clothes.png')

const bakery = require('../assets/icons/bakery.png')
const beautyShop = require('../assets/icons/beautyShop.png')
const cars = require('../assets/icons/cars.png')
const delivery = require('../assets/icons/delivery.png')
const food = require('../assets/icons/food.png')
const laundry = require('../assets/icons/laundry.png')
const shop = require('../assets/icons/shop.png')
const supermarket = require('../assets/icons/supermarket.png')
interface categoryProps{
    categoryReducer:CategoryState,
    getCategory:Function
}

const _Categories: React.FC<categoryProps> = (props)=>{
  const {categoryReducer, getCategory} = props
  const [categories, setCat] = useState({})

  useEffect(()=>{
    getCategory()
  },[])
  useEffect(()=>{
    if(categoryReducer){
      console.log(categoryReducer.availability)
      
    }
  },[])
  return (
    <View>
      <FlatList
        horizontal={true}
        data={categoryReducer.availability}
        keyExtractor={(item)=> item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>(
          <TouchableOpacity
            style={{
              width:50,
              height:50,
              padding:5,
              margin:15
            }}
          >
            <Image style={{width:'100%', height:'100%'}} source={
              item?.name === 'all'?all:'' ||
              item?.name === 'clothes'?clothes:'' ||
              item?.name === 'bakery'?bakery:'' ||
              item?.name === 'beautyShop'?beautyShop:'' ||
              item?.name === 'cars'?cars:'' ||
              item?.name === 'delivery'?delivery:'' ||
              item?.name === 'food'?food:'' ||
              item?.name === 'laundry'?laundry:'' ||
              item?.name === 'shop'?shop:'' 
            }
              
            />
            <Ionicons name='caret-down-circle-outline' size={20} color='#036ea8'/>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const mapToStateProp = (state:ApplicationState)=>({
  categoryReducer:state.categoryReducer
})

const Categories = connect(mapToStateProp, {getCategory})(_Categories)
export {Categories}