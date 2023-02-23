import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View,useWindowDimensions } from 'react-native'
import { HomeScreen } from './screens/HomeScreen';
import { LandingScreen } from './screens/LandingScreen';
export default function App() {
  const {width,height} = useWindowDimensions()
  return (
    
      <View style={styles.container}>
        <LandingScreen/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  
    alignItems: 'center',
    justifyContent: 'center',
  },
});
