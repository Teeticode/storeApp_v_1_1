import React from 'react'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  
} from 'react-native'


function Home() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{padding:8}}
        >
          <View>
            <Text>Home</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home