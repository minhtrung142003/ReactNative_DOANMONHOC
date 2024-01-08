import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { CartIcon } from '../cartfolder/CartIcon';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <View style={styles.headerContainer}>
        <View style={styles.inputContainer}>
          <FontAwesome name="search" size={24} color="#969696" />
          <Text style={styles.inputText}> Bạn tìm gì hôm nay?</Text>
        </View>
        <View style={styles.cartContainer}>
        <CartIcon navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingTop: 40,
    paddingBottom: 5,
    backgroundColor: '#1e88e5',
  },
  inputContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    marginLeft: 10,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderRadius: 2,
    paddingVertical: 5,
    marginBottom: 4,
  },
  cartContainer: {
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputText: {
    color: '#969696',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '500',
  },
});
