import React from 'react';
import { StyleSheet, View, Image, ScrollView, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const data = [
  { id: '1', image: require('../assets/slider_2.jpg') },
  { id: '2', image: require('../assets/slider_1.webp') },
  { id: '3', image: require('../assets/slider3.png') },
];

export default function ListSlider() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((item) => (
        <View key={item.id} style={styles.slide}>
          <Image source={item.image} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  slide: {
    width: width,
    height: 200, // Điều chỉnh chiều cao của slider theo ý muốn của bạn
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
