import { StyleSheet, Text, View } from 'react-native'
 import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import AccountStack from './AccountStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Cart from '../components/Cart';

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
    const optionScreen = ({route}) => ({
        tabBarIcon:({focused, color, size}) =>{
            let iconName;
            if(route.name === 'Home'){
                iconName = focused
                ?'home'
                :'home-outline';
            } else if (route.name === 'Cart'){
                iconName = focused ? 'cart' : 'cart-outline';
            }else if (route.name === 'Account'){
                iconName = focused ? 'person-circle' : 'person-circle-outline';}
            return <Ionicons name={iconName} size={size} color={color}/>
        },
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'black',
        headerShown:false,
        tabBarStyle:{backgroundColor:'orange'},
    })
    return (
       <Tab.Navigator screenOptions={optionScreen}>
        <Tab.Screen name='Home' component={HomeStack}/>
        <Tab.Screen name='Cart' component={Cart}/>
        <Tab.Screen name='Account' component={AccountStack}/>
       </Tab.Navigator>
    )
    } 
 const styles = StyleSheet.create({})