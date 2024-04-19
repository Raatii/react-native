import {Text, View} from 'react-native';
import React from 'react';

const ScrollviewList=()=>{
    const productsData= [
        {id:1, name:'product1', price:'2000'},
        {id:2, name:'product2', price:'3000'},
        {id:3, name:'product3', price:'4000'},
        {id:4, name:'product4', price:'5000'},
        {id:5, name:'product5', price:'6000'},
        {id:6, name:'product6', price:'7000'},
        {id:7, name:'product7', price:'8000'},
        {id:8, name:'product8', price:'9000'},
        {id:9, name:'product9', price:'1000'},
        {id:10, name:'product10', price:'32000'},
    ]
    return(
        <View style={{flex:1}}>
            <Text>ScrollviewList</Text>
            {productsData.map((product)=>(
                <View style={{borderWidth:1}}>
                    <Text>{product.name}</Text>
                </View>
                
            ))}

        </View>
    )
}
export default ScrollviewList;