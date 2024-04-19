import React, { useState } from 'react';
import {View, Text, StyleSheet, Button, Modal} from 'react-native';
const ModalComponent =()=>{
    const [modalVisible, setModalVisible] = useState(false)
    return(
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Text>Home Screen</Text>
            <Button title='Open Modal' onPress={()=>setModalVisible(true)}/>
             <Modal
             visible={modalVisible}
             transparent={false}
             animationType='slide'
             >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={{marginVertical:10}}>This is a Modal</Text>
                        <Button title='Close' onPress={()=>setModalVisible(false)}/>
                    </View>
                </View>
            </Modal> 
        </View>
    )
}
export default ModalComponent;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modalContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.5)',
    },
    modalContent:{
        backgroundColor:'#fff',
        paddingVertical:30,
        paddingHorizontal:60,
        borderRadius:10,
        alignItems:'center'
    }
})