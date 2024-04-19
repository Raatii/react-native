import { useState } from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";
const TextInputComponent =()=>{
    const [data, setData]=useState('');
    const [value, setValue]=useState('');
    const [info, setInfo] = useState('');
    const [sim, setSim] = useState('');
    const displayValue =()=>{
        setData(value)
    }
    const displayInfo =()=>{
        setSim(info)
    }
    return(
        <View>
            <TextInput
                placeholder= "Enter Your Name"
                multiline
                numberOfLines={5}
                style={styles.textInput}
                textAlignVertical="top"
                onChangeText={text=>setInfo(text)}
               />
            <Text>{sim}</Text>
            <Button title='display Info'
            onPress={displayInfo}/>

            <TextInput 
            placeholder = "Enter Value"
            style={styles.textInput}
            onChangeText={text=>setValue(text)}
            />
            <Text>{data}</Text>
            <Button title='display Value'
            onPress={displayValue}/>
        </View>
    )
}
export default TextInputComponent;
const styles = StyleSheet.create({
    textInput : {
        borderWidth: 2,
        borderColor: 'green',
        marginHorizontal: 10,
        paddingHorizontal:20,
        paddingVertical: 20,
        marginVertical:20
    }
})