import React from 'react';
import {View, Text, StyleSheet, Button, ScrollViewComponent, StatusBar} from 'react-native';
 import UserInfo from './src/components/UserInfo';
import ClassComponents from './src/components/ClassComponent';
 import TextInputComponent from './src/components/TextInputComponent';
 import ScrollviewComponent from './src/components/ScrollviewComponent';
import 'react-native-gesture-handler';
import Counter from './src/components/counter' 
import KeyboardAvoidingComponent from './src/components/KeyboardAvoidingViewComponent';
import ImageComponent from './src/components/imageComponent'
import ExerciseOne from './src/components/pratice/ExerciseOne'    
import ButtonComponent from './src/components/ButtonComponent'
import FlatlistComponent from './src/components/list/FlatlistComponent'
import SectionListComponent from './src/components/list/SectionListComponent'
import ScrollviewList from './src/components/list/ScrollviewList'
import FetchData from'./src/components/FetchData'
import UseEffectComponent from './src/components/UseEffectComponent'
import ModalComponent from './src/components/ModalComponent'
import StatusBarComponent from './src/components/StatusBarComponent'
import PlatformComponent from './src/components/PlatformComponent'
import ActivityIndicatorComponent from './src/components/ActivityIndicatorComponent'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home';
import ProductListing from './src/components/ProductListing';
// import AsyncStorageComponent from './src/components/AsyncStorageComponent'
import ProductDetails from './src/components/ProductDetails'
const App =()=>{
    const Stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <Stack.Navigator
            initialRouteName='Home'
            // screenOptions={{
            //     title:'Products',
            //     headerStyle:{
            //         backgroundColor:'#008080'
            //     },
            //     headerTintColor:'#fff',
            //     headerTitle:{
            //         fontWeight:'bold'
            //     }
            // }}
            >
             <Stack.Screen name='Products' component={ProductListing}
            options={{
                title:'Products Listing',
                headerStyle:{
                    backgroundColor:'#008080'
                },
                headerTintColor:'#fff',
                headerTitle:{
                    fontWeight:'bold'
                }
            }}
            />
             <Stack.Screen name='Home' component={Home}
            options={{
                title:'Home Screen',
                headerStyle:{
                    backgroundColor:'#008080'
                },
                headerTintColor:'#fff',
                headerTitle:{
                    fontWeight:'bold'
                }
            }}
            />
            <Stack.Screen name='Product Details' component={ProductDetails} />
            <Stack.Screen name='Storage' component={AsyncStorageComponent} />
            </Stack.Navigator>
        </NavigationContainer>
        // <View>
            /* <AsyncStorageComponent /> */
            // </View>
     )
 }
//  const Home = (props)=>{
//     const {navigation} = props
//     return(
//         <View>
//         <Text>Home</Text>
//         <Button title='Products' onPress={()=>navigation.navigate('Products')}/>
//         </View>
//     )
//  }
export default App;
const styles = StyleSheet.create({
    text:{
        fontSize:20,
        fontWeight:'bold',
        color:'black',
        marginVertical: 15
    }
})