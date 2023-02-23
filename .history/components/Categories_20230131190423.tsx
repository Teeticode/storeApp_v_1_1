import { View, Text,FlatList,TouchableOpacity } from 'react-native'
import React, { useEffect,useState } from 'react'
import { ApplicationState, CategoryState } from '../redux'
import { getCategory } from '../redux/actions/categoryAction'
import { connect } from 'react-redux'
import { categoryReducer } from '../redux/reducers/categoryReducer'
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
          <TouchableOpacity>
            <Text>{item.name}</Text>
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