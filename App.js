
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './src/stacks/TabNavigator';
import Detail from './src/components/Detail';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home1' component={TabNavigator}></Stack.Screen>      
        <Stack.Screen name='Detail' component={Detail}></Stack.Screen>      
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
