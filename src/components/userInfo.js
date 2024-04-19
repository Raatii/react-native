import React from 'react';
import {Text, View} from 'react-native';
const UserInfo = (props)=>{
    return(
        <View>
            <Text>Name: {props.name}</Text>
            <Text>City: {props.city}</Text>
            <Text>Age: {props.age}</Text>
            <Text>Number: {props.number}</Text>
        </View>
    )
}
export default UserInfo;