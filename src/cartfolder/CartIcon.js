import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CartContext } from "./CartContext";
import Icon from 'react-native-vector-icons/Ionicons';

export function CartIcon({ navigation }) {
  const { getItemsCount } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Icon
        name="cart-outline"
        size={20}
        color="white"
        onPress={() => { navigation.navigate('Cart') }}
      />
      {getItemsCount() > 0 && (
        <View style={styles.badge}>
          <Text style={styles.text}>{getItemsCount()}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    backgroundColor: 'black',
    height: 39,
    padding: 12,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 6,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
