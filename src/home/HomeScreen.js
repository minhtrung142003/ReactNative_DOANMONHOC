import { ScrollView, View } from "react-native"
import React from "react"
import { Text } from "react-native"
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListCategory from "./ListCategory";
import ListProduct from "./ListProduct";

const HomeScreen = () => {
    return(
        <View>
            <Header/>
            <ScrollView>
                <ListCategory/>
                <ListProduct/>
            </ScrollView>
           
            <Footer/>
        </View>
    )
};
export default HomeScreen;