import { 
    View, 
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import React from 'react'

export default function HomeCategory() {
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
                    backgroundColor:'black',
                    padding:5,
                    borderRadius:10
                }}
            >
                <Text style={{color:'white'}}>Products</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    margin:2,
                    backgroundColor:'white',
                    padding:5,
                    borderRadius:10
                }}
            >
                <Text style={{color:'black',fontSize:14, fontWeight:'900'}}>Business</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}