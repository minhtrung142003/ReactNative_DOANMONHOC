import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../home/HomeScreen';
const Stack = createStackNavigator();
export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home2' component={HomeScreen} options={{headerShown:false}} />
    </Stack.Navigator>
    
  )
}
