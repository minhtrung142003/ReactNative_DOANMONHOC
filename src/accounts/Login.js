import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Vui lòng nhập Email và mật khẩu');
      return;
    }

    try {
      const response = await fetch('https://64263b7ed24d7e0de46c2046.mockapi.io/trung14/api/v1/trung', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Đăng nhập thành công. Token:');
        navigation.navigate('Home1');
      } else {
        console.log('Đăng nhập thất bại');
        Alert.alert('Đăng nhập thất bại', 'Vui lòng kiểm tra lại thông tin đăng nhập.');
      }
    } catch (error) {
      console.error('Lỗi khi đăng nhập:', error);
      Alert.alert('Đăng nhập thất bại', 'Có lỗi xảy ra. Vui lòng thử lại sau.');
    }
  };

  const handleRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Đăng nhập</Text>
      <View style={styles.form}>
        <View style={styles.group}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Nhập địa chỉ email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
          />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Mật khẩu</Text>
          <TextInput
            placeholder="Nhập mật khẩu"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
        </View>
      </View>
      <Button title="Đăng nhập" onPress={handleLogin} />

      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.registerLink}>Chưa có tài khoản? Đăng ký ngay</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '80%',
  },
  group: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    padding: 8,
  },
  registerLink: {
    color: '#1bcdff',
    marginTop: 10,
  },
});

export default Login;
