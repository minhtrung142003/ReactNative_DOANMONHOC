import react, { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Gicungduoc from "../components/Gicungduoc";
import { useNavigation } from "@react-navigation/native";

const ListProduct = () =>{
    const navigation = useNavigation();
    const [products, setProducts] = useState([]);

    const getApi = ()=>{
        return fetch('https://64263b7ed24d7e0de46c2046.mockapi.io/trung14/api/v1/Laptop')
        .then((response)=>response.json())
        .then((data)=>setProducts(data))
        .catch(err=>console.log(err))
    }
    useEffect(()=>{
       getApi();  
    },[]);

    return(
    <View>
            <Gicungduoc title="Sản phẩm"/>            
        <View style={styles.container}>
            <FlatList
            scrollEnabled={false}
             data={products}
             numColumns={2}
            columnWrapperStyle={styles.row}
            renderItem={({item})=>
            <View style={styles.item}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Detail',{item})}}>
                <Image source={{uri:item.avatar}} style= {{width:'100%', height:150}}/>
               
                    <View style ={styles.dess}>
                    <Text style={{color:'#fff', textAlign:'center', padding:7}}>{item.name}</Text>
                    </View>
                    </TouchableOpacity>
            </View>    
        }/>
                
        </View>
    </View>
    )
}
export default ListProduct;


const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        flexWrap:'wrap', // thuộc tính rớt xuống hàng
        justifyContent:'space-between', 
    },
    item:{
        width:'45%',
        marginBottom:10
    },
  dess:{
    backgroundColor:'black'
  },
  row:{
    flex:1,
    justifyContent:'space-between',
  },
}) 