import { View, Text,FlatList,TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { ApplicationState, ProductState, getProducts } from '../redux'
import { connect } from 'react-redux'

interface productProps{
    productsReducer:ProductState,
    getProducts:Function
}
const _Products: React.FC<productProps> = (props) =>{
    const {productsReducer, getProducts} = props
    useEffect(()=>{
        getProducts()
    },[])
  return (
    <FlatList
            vertical={true}
            data={productsReducer.availability}
            keyExtractor={(item)=> item.id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            renderItem={({item})=>(
              <View>
                <Image source={{uri:item.image}} style={{width:'100%', height:'100%'}}/>
                <Text>{item.name}</Text>
              </View>
            )}
        />
  )
}

const mapToStateObject = (state:ApplicationState)=>({
    productsReducer:state.productsReducer
})
const Products = connect(mapToStateObject, {getProducts})(_Products)
export {Products}