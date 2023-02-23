import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View,useWindowDimensions } from 'react-native'
import { HomeScreen } from './screens/HomeScreen';
import { LandingScreen } from './screens/LandingScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons';
import SearchLocation from './screens/SearchLocation';

const SwitchNavigator = createSwitchNavigator({
  landingStack:{
    screen:createStackNavigator({
      Landing:LandingScreen
    },{
      defaultNavigationOptions:{
        headerShown:false,
      }
    })
  },
  
  homeStack: createBottomTabNavigator({
    
    home:{
      screen:createStackNavigator({
        HomePage: HomeScreen
      },{
        defaultNavigationOptions:{
          headerShown:false,
        }
      }),
      navigationOptions:{
        tabBarIcon:({focused, tintColor})=>{
          return <Ionicons size={18} style={{fontWeight:'900'}} name='home-outline' color={focused?'#036ea8':'black'}/>
        }
      }
    },
    Offer:{
      screen:createStackNavigator({
        HomePage: HomeScreen
      },{
        defaultNavigationOptions:{
          headerShown:false,
        }
      }),
      navigationOptions:{
        tabBarIcon:({focused, tintColor})=>{
          return <Ionicons size={18} style={{fontWeight:'900'}} name='pricetag-outline' color={focused?'#036ea8':'black'}/>
        }
      }
    },
    Cart:{
      screen:createStackNavigator({
        HomePage: HomeScreen
      },{
        defaultNavigationOptions:{
          headerShown:false,
        }
      }),
      navigationOptions:{
        tabBarIcon:({focused, tintColor})=>{
          return <Ionicons size={18} style={{fontWeight:'900'}} name='cart-outline' color={focused?'#036ea8':'black'}/>
        }
      }
    },
    Notifications:{
      screen:createStackNavigator({
        HomePage: HomeScreen
      },{
        defaultNavigationOptions:{
          headerShown:false,
        }
      }),
      navigationOptions:{
        tabBarIcon:({focused, tintColor})=>{
          return <Ionicons size={18} style={{fontWeight:'900'}} name='notifications-outline' color={focused?'#036ea8':'black'}/>
        }
      }
    } ,
    Account:{
      screen:createStackNavigator({
        HomePage: HomeScreen
      },{
        defaultNavigationOptions:{
          headerShown:false,
        }
      }),
      navigationOptions:{
        tabBarIcon:({focused, tintColor})=>{
          return <Ionicons size={18} style={{fontWeight:'900'}} name='person-outline' color={focused?'#036ea8':'black'}/>
        }
      }
    }
  },{
    defaultNavigationOptions: {
      tabBarLabel:false,
      title:''
    },
  })
})

const AppNavigation = createAppContainer(SwitchNavigator)
export default function App() {
  const {width,height} = useWindowDimensions()

  return (
   
      <AppNavigation/>
    
        
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
