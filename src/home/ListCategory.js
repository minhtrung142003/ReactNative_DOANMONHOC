import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Gicungduoc from '../components/Gicungduoc';
import { ScrollView } from 'react-native';

export default function ListCategory() {
  return (
    <View>
      <Gicungduoc title="Danh mục" />
      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.item}>
            <Image source={require('../assets/item_image_1.png')} style={styles.image}></Image>
          </View>
          <View style={styles.item}>
            <Image source={require('../assets/item_image_2.png')} style={styles.image}></Image>
          </View>
          <View style={styles.item}>
            <Image source={require('../assets/item_image_3.png')} style={styles.image}></Image>
          </View>
          <View style={styles.item}>
            <Image source={require('../assets/item_image_4.png')} style={styles.image}></Image>
          </View>
          <View style={styles.item}>
            <Image source={require('../assets/item_image_4.png')} style={styles.image}></Image>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  item: {
    width: 80, // Đặt một chiều rộng cố định cho mỗi item
    overflow: 'hidden',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 10, // Đặt khoảng trắng giữa các item
    
  },
  image: {
    width: '80%',
    height: 70,
  
  },
});
