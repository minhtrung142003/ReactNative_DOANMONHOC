import { ScrollView, View } from "react-native"
import React from "react"
import { Text } from "react-native"
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListCategory from "./ListCategory";
import ListProduct from "./ListProduct";
import ListSlider from "./ListSlider";

const HomeScreen = () => {
    return(
        <View>
            <Header/>
            <ScrollView>
                 <ListSlider/>
                <ListProduct/>
                <ListCategory/>
                <ListProduct/>
            </ScrollView>
                  
        </View>
    )
};
export default HomeScreen;