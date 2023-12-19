import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const Cart = () => {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://64263b7ed24d7e0de46c2046.mockapi.io/trung14/api/v1/Laptop')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, []);

    const addToCart = (item) => {
        const newItem = {
            name: item.title,
            url: item.avatar,
            price: item.price,
            quantity: 1,
        };
        // Modify this part to handle adding items to the global cart state
        global.mycart.push(newItem);
    };

    const renderItem = ({ item }) => (
        <View style={{ flex: 1, margin: 8 }}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('productDetail', {
                        name: item.title,
                        url: item.avatar,
                        price: item.price,
                    });
                }}
                style={{
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    padding: 10,
                }}
            >
                <Image
                    source={{ uri: item.avatar }}
                    style={{ height: 100, width: '100%', borderRadius: 10, marginBottom: 10 }}
                />
                <Text style={{ fontSize: 16, color: '#333', marginBottom: 5 }}>{item.title}</Text>
                <Text style={{ color: 'red', marginBottom: 5 }}>${item.price}</Text>
                <TouchableOpacity
                    onPress={() => addToCart(item)}
                    style={{
                        backgroundColor: '#1e88e5',
                        borderRadius: 5,
                        padding: 8,
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: '#fff' }}>Add to cart</Text>
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );

    return (
        
        <View style={{ flex: 1, backgroundColor: '#fff', padding: 10 }}>
<View style={styles.headerContainer}>
                <Text style={styles.headerText}>Giỏ hàng</Text>
                <TouchableOpacity style={styles.cartIconContainer}>
                    <FontAwesome name='shopping-cart' size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            <FlatList
                keyExtractor={item => item.name}
                numColumns={2}
                data={products}
                renderItem={renderItem}
            />
        </View>
    );
};

export default Cart;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        flexDirection: 'row',
        paddingTop: 30,
        paddingBottom: 15,
        backgroundColor: '#1e88e5',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    headerText: {
        fontWeight: '500',
        color: 'white',
        fontSize: 20,
    },
  })