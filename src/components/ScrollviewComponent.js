import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ScrollViewComponent=()=>{
    return(
        <ScrollView
        showsVerticalScrollIndicator={false}
        // horizontal={true}
        // showsHorizontalScrollIndicator={false}
        >
        <View style={{flexDirection:'column', flex:1}}>
            <View style={styles.card}>
                <Text style={{fontSize:18}}>phone</Text>
            </View>
            <View style={styles.card}>
                <Text style={{fontSize:18}}>phone</Text>
            </View>
            <View style={styles.card}>
                <Text style={{fontSize:18}}>phone</Text>
            </View>
            <View style={styles.card}>
                <Text style={{fontSize:18}}>phone</Text>
            </View>
            <View style={styles.card}>
                <Text style={{fontSize:18}}>phone</Text>
            </View>
            <View style={styles.card}>
                <Text style={{fontSize:18}}>phone</Text>
            </View>
            <View style={styles.card}>
                <Text style={{fontSize:18}}>phone</Text>
            </View>
            <View style={styles.card}>
                <Text style={{fontSize:18}}>phone</Text>
            </View>
            <View style={styles.card}>
                <Text style={{fontSize:18}}>phone</Text>
            </View>
            <View style={styles.card}>
                <Text style={{fontSize:18}}>phone</Text>
            </View>
        </View>
        </ScrollView>
    )
}
export default ScrollViewComponent;
const styles= StyleSheet.create({
    card:{
       height:70,
       width:70,
       borderRadius:10,
       borderColor:'gold',
       justifyContent:'space-around',
       borderWidth:2,
       padding:6,
       marginVertical:5,
       marginTop:10,
       marginBottom:10
       
    }
})