import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductCard =(props)=>{
    const {item} = props
    
return(
    <View style={styles.product}>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
        </View>
)
}
export default ProductCard;
const styles = StyleSheet.create({
    product:{
    backgroundColor:'skyblue',
    flexDirection:'row',
    justifyContent:'space-around',
    borderWidth:1,
    height:60,
    marginVertical:10,
    alignItems:'center'
        }
    })