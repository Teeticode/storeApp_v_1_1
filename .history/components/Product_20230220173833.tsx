import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface IProps {}

/**
* @author
* @function @Product
**/


export const Product :FC<IProps> = (props) => { 

const { container } = styles
 return(
  <View style={container}>
    <Text>Product</Text>
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