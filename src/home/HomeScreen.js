import { ScrollView, View } from "react-native"
import React from "react"
import { Text } from "react-native"
import ListProduct from "./ListProduct";


const HomeScreen = () => {
    return(
        <View>
          
            <ScrollView>
               
                <ListProduct/>
               
            </ScrollView>
                  
        </View>
    )
};
export default HomeScreen;