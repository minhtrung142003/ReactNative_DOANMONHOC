import react, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, TextInput } from "react-native";
import Gicungduoc from "../components/Gicungduoc";
import { useNavigation } from "@react-navigation/native";


const ListProduct = () => {
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const getApi = () => {
      return fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data) => setProducts(data))
        .catch(err => console.log(err))
    }
  
    useEffect(() => {
      getApi();
    }, []);
  
    const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
    return (
      <View>
        <ScrollView>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search products..."
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
          />
        </View>
        <Gicungduoc title="Sản phẩm" />
        <View style={styles.container}>
          <FlatList
            scrollEnabled={false}
            data={filteredProducts}
            numColumns={2}
            columnWrapperStyle={styles.row}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <TouchableOpacity onPress={() => { navigation.navigate('Detail', { item }) }}>
                  <Image source={{ uri: item.image }} style={{ width: '100%', height: 150 }} />
                  <View style={styles.dess}>
                    <Text style={styles.name}>{item.title}</Text>
                    <Text style={styles.price}>Price: ${item.price}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        </ScrollView>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    item: {
      width: '45%',
      marginBottom: 10,
    },
    dess: {
      padding: 7,
    },
    name: {
      color: 'black', // Màu cho tên
      textAlign: 'center',
      fontWeight: 'bold', // Đặt đậm cho tên
      fontSize: 14, // Kích thước cho tên
    },
    price: {
      color: 'black', // Màu cho giá
      textAlign: 'center',
      fontSize: 12, // Kích thước cho giá
    },
    row: {
      flex: 1,
      justifyContent: 'space-between',
    },
  });
  
  export default ListProduct;
  