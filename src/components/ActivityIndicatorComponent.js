import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';


const ActivityIndicatorComponent =()=>{
    return(
        <View>
            <ActivityIndicator size='large' color='blue'/>
            <Text>ActivityIndicatorComponent</Text>
        </View>
    )
}
export default ActivityIndicatorComponent;