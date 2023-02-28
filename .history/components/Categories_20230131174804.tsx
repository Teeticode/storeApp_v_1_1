import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { ApplicationState, CategoryState } from '../redux'
import { getCategory } from '../redux/actions/categoryAction'
import { connect } from 'react-redux'
interface categoryProps{
    categoryReducer:CategoryState,
    getCategory:Function
}
const _Categories: React.FC<categoryProps> = (props)=>{
  const {categoryReducer, getCategory} = props

  useEffect(()=>{
    getCategory()
  },[categoryReducer])
  useEffect(()=>{
    if(categoryReducer){
      console.log(categoryReducer)
    }
  },[])
  return (
    <View>
      <Text>Categories</Text>
    </View>
  )
}

const mapToStateProp = (state:ApplicationState)=>({
  categoryReducer:state.categoryReducer
})

const Categories = connect(mapToStateProp, {getCategory})(_Categories)
export {Categories}