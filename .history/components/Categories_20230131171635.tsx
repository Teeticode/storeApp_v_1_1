import { View, Text } from 'react-native'
import React from 'react'
import { categoryReducer } from '../redux/reducers/categoryReducer'
import { CategoryState } from '../redux'
import { getCategory } from '../redux/actions/categoryAction'
interface categoryProps={
    categoryReducer:CategoryState,
    getCategory:Function
}
const Categories: React.FC<categoryProps> = (props)=>{
  return (
    <View>
      <Text>Categories</Text>
    </View>
  )
}

export {Categories}