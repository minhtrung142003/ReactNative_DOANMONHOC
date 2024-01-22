import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
import React, { useState } from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Fontisto';

const Login = ({ navigation }) => {
    const handleBack = () => {
        navigation.goBack();
    };

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isEmailValid = (email) => {
        // Sử dụng biểu thức chính quy để kiểm tra định dạng email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = () => {
        ('Email:', email);
        ('Password:', password);

        // Kiểm tra điều kiện nhập liệu
        if (!email || !password) {
            Alert.alert('Lỗi', 'Vui lòng nhập đầy đủ email và mật khẩu.');
            return;
        }

        // Kiểm tra định dạng email
        if (!isEmailValid(email)) {
            Alert.alert('Sai tài khoản hoặc mật khẩu');
            return;
        }

        const formData = {
            email: email,
            password: password,
        };

        axios.post('https://64263b7ed24d7e0de46c2046.mockapi.io/trung14/api/v1/trung/', formData)
        .then((response) => {
            console.log('Đăng nhập thành công:', response.data);
            navigation.navigate('Home1');
        })
        .catch((error) => {
            console.error('Đăng nhập thất bại:', error);

            if (error.response) {
                console.log('Mã lỗi:', error.response.status);
            }

            Alert.alert('Đăng nhập thất bại', 'Vui lòng kiểm tra lại thông tin đăng nhập.');
        });
    };

    const handleNavigateToRegister = () => {
        navigation.navigate('Register');
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.title}>
                <Text style={styles.titleText}>Đăng nhập</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.inputGroup}>
                    <Icon name="email" style={styles.icon} />
                    <TextInput
                        placeholder="Email Address"
                        style={styles.input}
                        onChangeText={(value) => setEmail(value)}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Icon name="locked" style={styles.icon} />
                    <TextInput
                        placeholder="Nhập mật khẩu"
                        style={styles.input}
                        secureTextEntry={true}
                        onChangeText={(value) => setPassword(value)}
                    />
                </View>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleNavigateToRegister}>
                    <Text style={styles.registerLink}>Chưa có tài khoản? Đăng ký ngay</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    title: {
        marginTop: 30,
        alignItems: 'center',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 30,
        color: 'black',
    },
    form: {
        marginTop: 30,
    },
    inputGroup: {
        marginTop: 15,
    },
    input: {
        borderBottomWidth: 1,
        backgroundColor: '#fff',
        borderColor: 'gray',
        paddingLeft: 35,
    },
    icon: {
        fontSize: 25,
        position: 'absolute',
        zIndex: 1000,
    },
    loginButton: {
        marginTop: 20,
        backgroundColor: '#1bcdff',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    registerLink: {
        color: '#1bcdff',
        marginTop: 10,
        marginLeft: 60,
    },
});

export default Login;
