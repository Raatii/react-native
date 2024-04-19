import React from 'react';
import {View, Text} from 'react-native'
class ClassComponents extends React.Component {
render(){
    return(
        <View>
            <Text>Hello from {this.props.name} in ClassComponent</Text>
        </View>
         )
    }
}
export default ClassComponents;