import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Fontisto';
import CheckBox from "@react-native-community/checkbox";
import { Alert, StatusBar, StyleSheet } from "react-native";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import axios from 'axios';
const Register = ({navigation})=> {
    const handleBack = () => {
        navigation.goBack();
    };
    const [ischeck, setIsCheck] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkEmail, setCheckEmail] = useState(true);
    const [errorPassword, setErrorPassword] = useState('');
    const onSubmit = () =>{
        let formData = {
            email:email,
            password: password,
           
        }

        axios.post('https://64263b7ed24d7e0de46c2046.mockapi.io/trung14/api/v1/trung', formData)
        .then((response)=> {
            if(response.data){
                Alert.alert(`ok nha ${response.data.email} Đăng nhập thôi`);
                navigation.navigate('Login')
            }
        })
        .catch((err)=>console.log(err))
    }
    return (
        <SafeAreaView style={styles.container}>
            
            <StatusBar backgroundColor={'#ffffff'} barStyle="dark-content"></StatusBar>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View style = {styles.title}>
                <Text style ={{fontWeight:'bold', fontSize: 30, color:'black'}}>Đăng ký</Text>

                <Text>By signing in you are agreeing</Text> 
                <View style={{flexDirection:'row'}}>
                    <Text>our </Text><TouchableOpacity onPress={()=>Alert.alert('Chào mừng bạn đến app của Trung')}>
                        <Text style={{color:'#1bcdff'}}> Term and privacy policy</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.form}>
                <View style ={styles.group}>
                    <Icon name ="email" style={styles.icon}/>
                    <TextInput placeholder="Email aAddress" style={styles.ip} onChangeText={(value)=>setEmail(value)}></TextInput>
                    <Text style ={{color:'red'}}>{!checkEmail?'sai định dạng email':''}</Text>
                </View>
                <View style ={styles.group}>
                    <Icon name ="locked" style={styles.icon}/>
                    <TextInput placeholder="Nhập mật khẩu" style={styles.ip} secureTextEntry={true} onChangeText={(value)=>setPassword(value)}></TextInput>
                    <Text style ={{color:'red'}}>{errorPassword}</Text>
                </View> 
              
               
                <TouchableOpacity style={styles.btn} onPress={()=> onSubmit()}>
                    <Text style={{color:'#ffffff', fontWeight:'bold'}}>Đăng ký</Text>
                </TouchableOpacity>
            </View>
           
        </SafeAreaView>
    )
}
export default Register;
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    title:{
        marginTop:30,
        alignItems:'center'
    },
    form:{
        marginTop:30,
        paddingHorizontal:30
    },
    group:{
        marginTop:15
    },
    ip:{
        borderBottomWidth:1,
        backgroundColor:'#fff',
        borderColor:'gray',
        paddingLeft: 35
    },
    icon:{
        fontSize:25,
        position:'absolute',    
        zIndex:1000
    },
    group1:{
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    btn:{
        marginTop:20,
        backgroundColor:'#1bcdff',
        paddingVertical:15,
        alignItems:'center',
        borderRadius:10
    }
})