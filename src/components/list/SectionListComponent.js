import {Text, View, SectionList} from 'react-native';
import React from 'react';

const SectionListComponent =()=>{
    const productsData= [
        {id:1, name:'product1', price:'2000', data:['sumit','Rahul']},
        {id:2, name:'product2', price:'3000', data:['sumit','Rahul']},
        {id:3, name:'product3', price:'3000', data:['sumit','Rahul']},
    ]
    return(
        <View style={{flex:1, marginTop:20}}>
            {/* <Text>SectionList</Text> */}

            <SectionList 
            sections={productsData}
            renderItem={({item})=>
                <Text>{item}</Text>
            }
            keyExtractor={item=>item.id}
            renderSectionHeader={({section})=>(
                <Text>{section.name}</Text>
            )}
            />
            </View>
    )
}
export default SectionListComponent;
