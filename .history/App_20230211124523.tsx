import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View,useWindowDimensions,Image } from 'react-native'
import { HomeScreen } from './screens/HomeScreen';
import { LandingScreen } from './screens/LandingScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons';
import SearchLocation from './screens/SearchLocation';
import { Provider } from 'react-redux';
import { store } from './redux';
import ProductDetail from './screens/ProductDetail';

const homepage = require('./assets/icons/homepage.png')
const cartpage = require('./assets/icons/cartpage.png')
const notificationpage = require('./assets/icons/notificationpage.png')
const userpage = require('./assets/icons/userpage.png')

const SwitchNavigator = createSwitchNavigator({
  landingStack:{
    screen:createStackNavigator({
      Landing:LandingScreen
    },{
      defaultNavigationOptions:{
        headerShown:false,
        cardStyle:{
          padding:50,
          borderRadius:14
        },
      }
    })
  },
  searchStack:{
    screen:createStackNavigator({
      Search:SearchLocation
    },{
      defaultNavigationOptions:{
        headerShown:false,
        cardStyle:{
          padding:50,
          borderRadius:14
        },
      }
    })
  },
  productDetailStack:{
    screen:createStackNavigator({
      ProductDetail:ProductDetail
    },{
      defaultNavigationOptions:{
        headerShown:false,
        cardStyle:{
          padding:50,
          borderRadius:14
        },
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
          return(
            <>
              {
                focused?(
                  <Image source={homepage} style={{marginTop:'15%',width:30,height:30,opacity:0.6}} />
                ):(
                  <Image source={homepage} style={{marginTop:'15%',width:30,height:30}} />
                )
              }
            </>
          )
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
          return (
            <>
              {
                focused?(
                  <Image source={cartpage} style={{marginTop:'15%',width:30,height:30,opacity:0.6}} />
                ):(
                  <Image source={cartpage} style={{marginTop:'15%',width:30,height:30}} />
                )
              }
            </>
          )
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
          return (
            <>
              {
                focused?(
                  <Image source={notificationpage} style={{marginTop:'15%',width:30,height:30,opacity:0.6}} />
                ):(
                  <Image source={notificationpage} style={{marginTop:'15%',width:30,height:30}} />
                )
              }
            </>
          )
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
          return (
            <>
              {
                focused?(
                  <Image source={userpage} style={{marginTop:'15%',width:30,height:30,opacity:0.6}} />
                ):(
                  <Image source={userpage} style={{marginTop:'15%',width:30,height:30}} />
                )
              }
            </>
          )
        }
      }
    }
  },{
    defaultNavigationOptions: {
      tabBarLabel:false,
      title:'',
      
    },
  })
})

const AppNavigation = createAppContainer(SwitchNavigator)
export default function App() {
  const {width,height} = useWindowDimensions()

  return (
   <Provider store={store}>
    <AppNavigation/>
   </Provider>
      
    
        
      
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
  opec:{
    opacity:0.6
  },
  fullopec:{
    opacity:1
  }
});
