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
                    padding:8,
                    borderRadius:10
                }}
            >
                <Text style={{color:'white',fontSize:12, fontWeight:'900'}}>Products</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    margin:2,
                    backgroundColor:'white',
                    padding:8,
                    borderRadius:10
                }}
            >
                <Text style={{color:'black',fontSize:12, fontWeight:'900'}}>Business</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}