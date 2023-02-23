import { 
    View, 
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import React,{useState} from 'react'

export default function HomeCategory() {
    const [activeCat,setActivecat] = useState('Products')
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
                    backgroundColor:activeCat === 'Products' ? 'black' : 'white' ,
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
                    backgroundColor:activeCat === 'Business' ? 'black' : 'white',
                    padding:8,
                    borderRadius:10
                }}
                onPress={()=>{setActivecat('Business')}}
            >
                <Text style={{color:activeCat === 'Business' ? 'white' : 'black',fontSize:12, fontWeight:'900'}}>Business</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}