import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type GicungduocProps = {
    title: String;
}
const Gicungduoc = ({title}:GicungduocProps)=>{

  return (
    <View style={{flexDirection:'row', justifyContent:'space-between', paddingVertical:15}}>
     <View>
         <Text style={{color:'red', fontWeight:"bold"}}>{title}</Text>
     </View>
     <View>
         <Text style={{color:'black', }}>Xem thêm</Text>
     </View>
    </View>
  )
}
export default Gicungduoc;