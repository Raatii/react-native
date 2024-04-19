import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const ImageComponent = ()=>{
    return(
        <View style={{flex:1}}>
             <Image 
            source={require('../assets/aws.jpg')}
            resizeMode='contain'
            style={{width:300, }}
            /> 
             <Image
                source={{uri:'https://res.cloudinary.com/djxhf8jwg/image/uplaod/v1705810351/image-5_ohwt21.webp'}}
                style={{width:500, height:500}}
            /> 
        </View>
    )
}

export default ImageComponent;
const styles = StyleSheet.create({

})
