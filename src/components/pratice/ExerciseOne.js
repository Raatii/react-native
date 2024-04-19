import React, { useState } from 'react';
import {StyleSheet, TextInput, View, Button, Text} from 'react-native';

const ExerciseOne =()=>{
    const [task, setTask] = useState('');
    const [data, setData] = useState('');
    const [arrayData, setArrayData] =useState([]);
    const addTodo=()=>{
        // setData(task)
        setData((prevData)=>prevData + '\n' + task)
        setArrayData(prevData=>[...prevData, task])
        setTask('')
    }
    return(
        <View>
            <TextInput 
            placeholder = "Enter your Task"
            onChangeText={text=>setTask(text)}
            style={styles.textInput}
            value={task}
            />
             <Button title='Add'
             onPress={addTodo}/>
            {/* <Text>{data}</Text> */}
            {/* <Text>{arrayData}</Text> */}
            {arrayData.map((data, index)=>(
            <Text key={index}>{data}</Text> 
            ))}
        </View>
    )
}
export default ExerciseOne;
const styles=StyleSheet.create({
    textInput:{
        borderColor:'gold',
        borderWidth:2,
        borderRadius:10,
        margin:20,
        marginHorizontal:10,
        paddingVertical:20,
        paddingHorizontal:20
    }
})