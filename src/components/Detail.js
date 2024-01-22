import React, { useContext, useState } from 'react';
import { View, Text, StatusBar, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';
import { Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CartContext } from '../cartfolder/CartContext';
import { useNavigation } from '@react-navigation/native';

const Detail = ({ route }) => {
  const { addItemToCart } = useContext(CartContext);
  const { item } = route.params;
  const [qty, setQty] = useState('1');
  const [isModal, setIsModal] = useState(false);
  const navigation = useNavigation();

  const updateQty = (qty) => {
    let quantity = parseInt(qty) + 1;
    setQty(quantity.toString());
  };

  const onAddToCart = () => {
    addItemToCart(item.id);
    setIsModal(false);
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar translucent={true} backgroundColor='transparent' />
      <Image source={{ uri: item.image }} style={styles.productImage} />

      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.title}</Text>
        <Text style={styles.productPrice}>Giá: {item.price}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => setIsModal(true)}>
          <Text style={styles.buttonText}>Mua ngay</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onAddToCart}>
          <Text style={styles.buttonText}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>

      {isModal ? (
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Chọn số lượng</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.quantityButton} onPress={() => { /* giảm số lượng */ }}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <TextInput style={styles.quantityInput} keyboardType='numeric' value={qty} onChangeText={(value) => setQty(value)} />
            <TouchableOpacity style={styles.quantityButton} onPress={() => updateQty(qty)}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.addToCartButton} onPress={onAddToCart}>
            <Text style={styles.addToCartButtonText}>Thêm vào giỏ hàng</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productImage: {
    width: '100%',
    height: 300,
  },
  productInfo: {
    padding: 20,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    color: 'green',
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    width: '45%',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
  },
  modal: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: '#e21f6d',
    padding: 10,
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  quantityInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: '30%',
    textAlign: 'center',
  },
  addToCartButton: {
    backgroundColor: '#e21f6d',
    padding: 15,
    borderRadius: 10,
  },
  addToCartButtonText: {
    textAlign: 'center',
    color: '#fff',
  },
});

export default Detail;
