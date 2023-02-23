import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { HomeScreen } from './screens/Home';
import { LandingScreen } from './screens/LandingScreen';
export default function App() {
  return (
    
      <View >
        <LandingScreen/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
