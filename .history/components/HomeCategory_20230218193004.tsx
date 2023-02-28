import { 
    View, 
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import React,{useState} from 'react'
import { ApplicationState, ProductState,getProducts } from '../redux'
import { connect } from 'react-redux'
interface categoryProps{
    activeCat:String,
    productsReducer:ProductState,
    getProducts:Function,
    setActivecat:Function
}

const _HomeCategory:React.FC<categoryProps> =(props) =>{
    const {getProducts, productsReducer} = props
    const {activeCat, setActivecat} = props
    
  return (
    <View
        style={{
            alignItems:'center',
            margin:15
        }}
    >   
        <View
            style={{
                flexDirection:'row',
            }}
        >
            <TouchableOpacity
                style={{
                    margin:2,
                    backgroundColor:activeCat === 'Products' ? '#036ea8' : 'white' ,
                    padding:8,
                    borderRadius:10
                }}
                onPress={
                    ()=>{
                        getProducts()
                        setActivecat('Products')
                    }
                }
            >
                <Text style={{color:activeCat === 'Products' ? 'white' : 'black',fontSize:12, fontWeight:'900'}}>Products</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    margin:2,
                    backgroundColor:activeCat === 'Business' ? '#036ea8' : 'white',
                    padding:8,
                    borderRadius:10
                }}
                onPress={
                    ()=>{
                        getProducts()
                        setActivecat('Products')
                    }
                }
            >
                <Text style={{color:activeCat === 'Business' ? 'white' : 'black',fontSize:12, fontWeight:'900'}}>Stores</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

const mapToStateObject = (state:ApplicationState)=>({
    productsReducer:state.productsReducer
})
  
const HomeCategory = connect(mapToStateObject, {getProducts})(_HomeCategory)
export {HomeCategory}

