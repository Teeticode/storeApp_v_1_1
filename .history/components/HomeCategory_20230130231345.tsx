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
            <TouchableOpacity>
                <Text>Business</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Business</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}