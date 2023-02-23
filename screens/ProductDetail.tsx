import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface ProdDetailProps {

}

/**
* @author
* @function @SearchProduct
**/


const ProductDetail: React.FC<ProdDetailProps> = (props) => { 

const { container } = styles
 return(
  <View style={container}>
    <Text>ProductDetail</Text>
  </View>
  )
}


const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
 }
})

export {ProductDetail}