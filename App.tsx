/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { View, Text, Platform, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen';
import { colors } from './src/styles/styles';
import DetailScreen from './src/screens/RoomScreen/DetailScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MoreScreen from './src/screens/MoreScreen';

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const RoomStack = createNativeStackNavigator();
const MoreStack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = colors.grayColor;

// const HomeStackScreen = () => {
//   return(
//     <HomeStack.Navigator
//       initialRouteName='Home'
//     >
//       <HomeStack.Screen name='Home' component={HomeScreen}/>
//       <HomeStack.Screen name='Room' component={RoomStackScreen}/>
//     </HomeStack.Navigator>
//   )
// }

// const RoomStackScreen = () => {
//   return(
//     <RoomStack.Navigator
//       initialRouteName='Detail'
//     >
//       <RoomStack.Screen name='Detail' component={DetailScreen}/>
//     </RoomStack.Navigator>
//   )
// }

// const MoreStackScreen = () => {
//   return(
//     <MoreStack.Navigator>
//       <MoreStack.Screen name='More' component={MoreScreen}/>
//     </MoreStack.Navigator>
//   )
// }
// const BottomStack = () => {
//   return(
//     <BottomTab.Navigator
//       initialRouteName='HomeTab'
//       screenOptions={{
//         headerShown: false
//       }}
//     >
//       <BottomTab.Screen name='HomeTab' component={HomeStackScreen}/>
//       <BottomTab.Screen name='MoreTab' component={MoreStackScreen}/>
//     </BottomTab.Navigator>
//   )
// }

const BottomTabStack = () => {
  return(
    <BottomTab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderTopColor: 'grey',
          borderTopWidth: 1 
        }
      }}
    >
      <BottomTab.Screen 
        name='HomeTab' 
        component={HomeScreen} 
        options={{
          headerTitle: 'Shingayan Transient House',
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name='home' color={color} size={size}/>
          )
        }}
      />
      <BottomTab.Screen 
        name='MoreTab' 
        component={MoreScreen} 
        options={{
          headerShown: false,
          tabBarLabel: 'More',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name='menu' color={color} size={size}/>
          )
        }}  
      />
    </BottomTab.Navigator>
  )
}

const App = () => {

  return (
    <NavigationContainer
      theme={navTheme}
    >
      <Stack.Navigator>
        <Stack.Screen 
          name='Home' 
          component={BottomTabStack}
          options={{
            headerShown: false
          }}  
        />
        <Stack.Screen name='Detail' component={DetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
