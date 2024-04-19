import {View, Text, Button} from 'react-native';
import React, { useState } from 'react';
const counter =()=>{
    const [counter, setCounter] = useState(0);
    const incrementValue=()=>{
        setCounter(counter + 1)
    }
    const decrementValue=()=>{
        if(counter <= 0)return
        setCounter (counter - 1)
    }
    return(
        <View>
            <Text>{counter}</Text>
            <View style={{flexDirection:'row'}}>
            <Button title='increment'
            onPress={incrementValue}
            />
            <Button title='decrement'
            onPress={decrementValue}
            />
        </View>
        </View>
    )
}
export default counter;
 