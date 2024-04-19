import {KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';

const KeyboardAvoidingComponent=()=>{
    return(
        <KeyboardAvoidingView
            behavior='height'
            >
        <View style={styles.emailContainer}>
            <TextInput style={styles.textInput}placeholder='Enter Email' />
            <TextInput style={styles.textInput}placeholder='Enter Password' />
            <TextInput style={styles.textInput}placeholder='Enter Confirm Password' />

            <TextInput style={styles.textInput}placeholder='Enter Confirm Password' />
            <TextInput style={styles.textInput}placeholder='Enter Confirm Password' />
            <TextInput style={styles.textInput}placeholder='Enter Pin Code' />
            <TextInput style={styles.textInput}placeholder='Enter Pin Code' />
            <TextInput style={styles.textInput}placeholder='Enter Pin Code' /> 
            <TextInput style={styles.textInput}placeholder='Enter Pin Code' />
        </View>
        </KeyboardAvoidingView>
    )
}
export default KeyboardAvoidingComponent;
const styles = StyleSheet.create({
    textInput:{
        borderWidth:2,
        borderColor:'gold',
        marginBottom:20,
        marginTop:20,
        paddingHorizontal:12,
        paddingVertical:5
    },
    emailContainer:{
        justifyContent:'space-around',
        padding:25
    }
})