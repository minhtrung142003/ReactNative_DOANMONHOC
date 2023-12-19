import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Account = ({ navigation }) => {
    const handleBack = () => {
        navigation.goBack();
    };

    return(
        <SafeAreaView>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.contentContainer}>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Register')}>
                    <Text style={styles.buttonText}>Đăng ký</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionButtonText}>Lịch sử mua hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionButtonText}>Chờ thanh toán</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionButtonText}>Chờ vận chuyển</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionButtonText}>Đơn hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton}>
                    <Text style={styles.optionButtonText}>Đã giao</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};
export default Account;

const styles = {
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    contentContainer: {
        marginTop: 50,
        paddingHorizontal: 20,
    },
    button: {
        padding: 15,
        backgroundColor: '#27B7C0',
        borderRadius: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
    optionButton: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    optionButtonText: {
        fontSize: 16,
    },
};