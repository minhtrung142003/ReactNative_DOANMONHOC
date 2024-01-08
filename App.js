import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { CartProvider } from './src/cartfolder/CartContext';
import { CartIcon } from './src/cartfolder/CartIcon';
import { Cart } from './src/components/Cart';
import Detail from './src/components/Detail';
import TabNavigator from './src/stacks/TabNavigator';
import Login from './src/accounts/Login';
import Register from './src/accounts/Register';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <CartProvider>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
          <Stack.Screen name='Register' component={Register} options={{headerShown:false}}/>

          <Stack.Screen
            name='Home1'
            component={TabNavigator}
            options={{ headerShown: false }}
          ></Stack.Screen>
          <Stack.Screen
            name='Detail'
            component={Detail}
            options={({ navigation }) => ({
              title: 'Product Detail',
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          ></Stack.Screen>
          <Stack.Screen
            name='Cart'
            component={Cart}
            options={({ navigation }) => ({
              title: 'Products',
              headerRight: () => <CartIcon navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </CartProvider>
    </NavigationContainer>
  );
};

export default App;
