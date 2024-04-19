import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios'
const FetchData=()=>{
    const [data, setData] = useState([]);
//     const fetchData = async ()=>{
//     const response = await  fetch(`https://fakestoreapi.com/products`)
//     console.log(response)
//     const jsonData = response.json();
//     console.log(jsonData)
// }
const fetchData = async ()=>{
    const response = await axios.get(`https://fakestoreapi.com/products`)
    // console.log(response.data)
    // const datas = response.data
    setData(response.data);
}
fetchData();
return(
    <View>
        <Text>FetchData</Text>
        {data.map((product)=>(
            <Text>{product.title.substring(0,10)}</Text>
        ))}
    </View>
)
}
export default FetchData;
const styles = StyleSheet.create({

})