import { View, Text,FlatList,TouchableOpacity,Image } from 'react-native'
import React, { useEffect,useState } from 'react'
import { ApplicationState, CategoryState } from '../redux'
import { getCategory } from '../redux/actions/categoryAction'
import { connect } from 'react-redux'
import { categoryReducer } from '../redux/reducers/categoryReducer'
const clothes = require('../assets/icons/clothes.png')
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
        renderItem={({item})=>(
          <TouchableOpacity
            style={{
              width:40,
              height:40,
              padding:5,
              margin:10
            }}
          >
            <Image style={{width:'100%', height:'100%'}} source={item?.name === 'Clothes'?clothes:''}/>
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