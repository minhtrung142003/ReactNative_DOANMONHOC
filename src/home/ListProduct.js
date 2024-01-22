import React, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Gicungduoc from "../components/Gicungduoc";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import ListSlider from "./ListSlider";
import ListCategory from "./ListCategory";

const ListProduct = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://64263b7ed24d7e0de46c2046.mockapi.io/trung14/api/v1/Laptop');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <View>
      <Header setSearchTerm={setSearchTerm} />
      <ListSlider/>
     
      <ListCategory/>
      <Gicungduoc title="Sản phẩm" />
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}></Text>
        </View>
      ) : (
        <View style={styles.container}>
          <FlatList
            scrollEnabled={false}
            data={filteredProducts}
            numColumns={2}
            columnWrapperStyle={styles.row}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <TouchableOpacity onPress={() => { navigation.navigate('Detail', { item }) }}>
                <Image source={{ uri: item.image }} style={styles.itemImage} />

                  <View style={styles.dess}>
                    <Text style={styles.name}>{item.title}</Text>
                    <Text style={styles.price}>Giá: {item.price}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

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
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  price: {
    color: 'red',
    textAlign: 'center',
    fontSize: 12,
  },
  row: {
    flex: 1,
    justifyContent: 'space-between',
  },
  errorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  itemImage: {
    width: '100%',
    height: 150,
  },
});

export default ListProduct;
