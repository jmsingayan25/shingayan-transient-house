/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { View, Text, Platform } from 'react-native'
import React, { useEffect } from 'react'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from 'react-native-splash-screen';
import HomeScreen from './src/screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from './src/styles/styles';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const navTheme = DefaultTheme;
navTheme.colors.background = colors.grayColor;

const App = () => {

  useEffect(() => {

    if(Platform.OS === "android"){
      SplashScreen.hide();
    }
  },[]);

  return (
    <NavigationContainer
      theme={navTheme}
    >
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Home' component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
