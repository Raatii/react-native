import {Text, View, TextInput, Button, Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const ButtonComponent=()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Button</Text>

            <Button title='press here'
            onPress={()=>console.warn('pressed')}/>

            <Pressable style={styles.button}
            onPress = {()=>console.warn('pressable pressed')}
            onLongPress={()=>console.warn('long pressed')}
            onPressOut={()=>console.warn('pressable pressed out')}
            >
            <Text>Pressable Button</Text>
            </Pressable>

            <TouchableOpacity 
            activeOpacity={0.8}
            style={styles.button}>
            <Text>Touchable Button</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ButtonComponent;
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:20
    },
    text:{
        fontSize:18,
        marginVertical:10
    },
    button:{
        backgroundColor:'skyblue',
        marginVertical:10,
        height:40,
        justifyContent:'space-around',
        alignItems:'center'
    },
    
})