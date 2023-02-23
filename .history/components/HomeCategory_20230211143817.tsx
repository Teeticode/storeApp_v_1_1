import { 
    View, 
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import React,{useState} from 'react'
interface categoryProps{
    activeCat:String,
    setActivecat:Function
}
export const HomeCategory:React.FC<categoryProps> =(props) =>{

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
                onPress={()=>{setActivecat('Products')}}
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
                onPress={()=>{setActivecat('Business')}}
            >
                <Text style={{color:activeCat === 'Business' ? 'white' : 'black',fontSize:12, fontWeight:'900'}}>Stores</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}