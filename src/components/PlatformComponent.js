import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
const PlatformComponent=()=>{
    return(
        <View style={styles.container}>
            <Text style={Platform.OS=== 'ios' ? styles.textIos : 
            styles.textAndroid}>PlatformComponent</Text>
        </View>
    )
}
export default PlatformComponent;
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    textIos:{
        fontSize:18,
        fontWeight:'bold',
        color:'blue'
    },
    textAndroid:{
        fontSize:18,
        fontWeight:'normal',
        color:'green',
    }
})