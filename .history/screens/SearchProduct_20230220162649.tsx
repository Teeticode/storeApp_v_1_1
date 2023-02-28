import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface searchProdProps {

}

/**
* @author
* @function @SearchProduct
**/


export const SearchProduct :FC<searchProdProps> = (props) => { 

const { container } = styles
 return(
  <View style={container}>
    <Text>SearchProduct</Text>
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