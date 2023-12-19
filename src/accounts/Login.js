import axios from "axios";
import React, { useState } from "react";
import { Alert, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Fontisto';
import { Ionicons } from '@expo/vector-icons';
const Login = ({navigation})=> {
    const handleBack = () => {
        navigation.goBack();
    };
    const [ischeck, setIsCheck] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkEmail, setCheckEmail] = useState(true);
    const [errorPassword, setErrorPassword] = useState('');

    const loginUrl = 'https://64263b7ed24d7e0de46c2046.mockapi.io/trung14/api/v1/trung/login';
    const onSubmit = () =>{
        let formData = {
            email:email,
            password: password,            
        }
        // axios.post(loginUrl, formData)
        // .then((response)=>{
        //     if(response.data && response.data.token){
        //         Alert.alert(` Đăng nhập thôi`);
        //         navigation.navigate('home')

        //     }else{
        //         console.log('Đăng nhập không thành công!');
        //     }
        // }
        // )
        // .catch((err)=>console.log('lỗi đăng nhập',err))
 
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={'#ffffff'} barStyle="dark-content"></StatusBar>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View style = {styles.title}>
                <Text style ={{fontWeight:'bold', fontSize: 30, color:'black'}}>Đăng nhập</Text>

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

                <View style={styles.group1}>
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        {/* <CheckBox
                            disabled={false}
                            value={ischeck}
                            onValueChange={()=> setIsCheck(!ischeck)}
                            tintColor={{true:'#1bcdff'}}
                        /> */}
                        <Text>Ghi nhớ mật khẩu</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>Alert.alert('Quên thì tự tạo nick mới đi')}>
                        <Text style={{color:'#1bcdff'}}>Quên mật khẩu</Text>
                        </TouchableOpacity>
                    </View>                  
                </View>
                <TouchableOpacity style={styles.btn} onPress={()=> onSubmit()}>
                    <Text style={{color:'#ffffff', fontWeight:'bold', fontSize:20}}>Đăng nhập</Text>
                </TouchableOpacity>
            </View>
            {/* <View>
                <Image source={require('../assets/item_image_1.png')} style={{width:'100%'}}/>
            </View> */}
        </SafeAreaView>
    )
}
export default Login;
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
        marginTop:30,
        backgroundColor:'#1bcdff',
        paddingVertical:15,
        alignItems:'center',
        borderRadius:10
    }
})