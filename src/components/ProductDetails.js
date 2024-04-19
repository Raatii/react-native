import React from 'react';
import {Text, View, Image} from 'react-native';
const ProductDetails =(props)=>{
    const {route} = props
    const {id, title, image} = route.params
    return(
        <View>
            {/* <Text>{route.params.id}</Text>
            <Text>{route.params.title}</Text> */}
            <Image 
            source = {{uri: image}}
            style={{width:100, height:100}}
            />
            <Text>{id}</Text>
            <Text>{title}</Text>
        </View>
    )
}
 export default ProductDetails;
