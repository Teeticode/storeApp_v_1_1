import { View, Text,FlatList } from 'react-native'
import React from 'react'
import { ApplicationState, ProductState, getProducts } from '../redux'
import { connect } from 'react-redux'

interface productProps{
    productsReducer:ProductState,
    getProducts:Function
}
const _Products: React.FC<productProps> = (props) {
    const {productsReducer, getProducts} = props
  return (
    <FlatList
            vertical={true}
            data={productsReducer.availability}
            keyExtractor={(item)=> item.id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>(
              <TouchableOpacity>
                
              </TouchableOpacity>
            )}
        />
  )
}

const mapToStateObject = (state:ApplicationState)=>{
    productsReducer:state.productsReducer
}
const Products = connect(mapToStateObject, {getProducts})(_Products)
export {Products}