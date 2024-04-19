import React, { useEffect, useState } from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'

const AsyncStorageComponent = ()=>{
    const [data, setData] =useState('');
    const user = {
        name:'Rahul',
        age:25,
        city:'Delhi'
    }
    useEffect(()=>{
        const setData = async()=>{
          await  AsyncStorage.setItem('name', 'Rahul');
          await AsyncStorage.setItem('user', JSON.stringify(user))
        }
        setData();
    },[])
    useEffect(()=>{
        const getData = async()=>{
            const name = await AsyncStorage.getItem('name')
            console.log('name' +name)
            const user = await AsyncStorage.getItem('user');
            console.log('user'+user)
            const parseData = JSON.parse(user)
            setData(parseData)
        }
       getData()
    },[])
    const removeItem = async()=>{ 
        await AsyncStorage.removeItem('name')
       const name =  await AsyncStorage.getItem('name')
       console.log('name 32' +name)
       const user =  await AsyncStorage.getItem('user')
       console.log('user 34' +user)
    }
    const clearStorage =async ()=>{
        await AsyncStorage.clear();
       const name =  await AsyncStorage.getItem('name')
       console.log('name 40' +name)
       const user =  await AsyncStorage.getItem('user')
       console.log('user 42' +user)
    }
return(
    <View>
        <Text style={{fontSize:18, fontWeight:'bold'}}>AsyncStorageComponent</Text>
        <Text>{data.name}</Text>
        <Text>{data.age}</Text>
        <Text>{data.city}</Text>
        <Button title='remove Item'
        onPress={removeItem}/>
        <Button title='clear storage'
        onPress={clearStorage}/>
    </View>
)
}
export default AsyncStorageComponent;