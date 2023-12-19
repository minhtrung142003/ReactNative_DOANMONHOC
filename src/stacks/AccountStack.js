import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../accounts/Login';
import Register from '../accounts/Register';
import Account from '../accounts/Account';

const Stack = createStackNavigator();

export default function AccountStack() {
  return (
   <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='Acc' component={Account}></Stack.Screen>
    <Stack.Screen name='Login' component={Login}></Stack.Screen>
    <Stack.Screen name='Register' component={Register}></Stack.Screen>
   </Stack.Navigator>
  )
}