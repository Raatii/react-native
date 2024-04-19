import React from 'react';
import {Text, View, Button} from 'react-native';
const Home = (props)=>{
    const {navigation} = props
    const users = {
        id:1,
        name:'Rati'
    }
    return(
        <View>
        <Text>Home</Text>
        <Button title='Products' onPress={()=>navigation.navigate('Products', {users})}/>
        </View>
    )
 }
 export default Home;