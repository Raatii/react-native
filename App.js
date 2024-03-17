
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'
const App = () => {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [display,setDisplay]=useState(false);

   return (
       <View>
        <Text style={{fontSize:30}}>Simple form in React native</Text>
      <TextInput 
      style= {styles.textInput}
      placeholder='Enter User Name'
      onChangeText={(text)=>setName(text)}
      value={name}
      />
       <TextInput 
      style= {styles.textInput}
      placeholder='Enter User Password'
      secureTextEntry={true}
      onChangeText={(text)=>setPassword(text)}
      value={password}
      />
       <TextInput 
      style= {styles.textInput}
      placeholder='Enter User  email'
      onChangeText={(text)=>setEmail(text)}
      value={email}
      />
      <View style= {{marginBottom: 10}}>
        <Button color={"green"} title='Print Details'
        onPress={()=>setDisplay(true)} />
        </View>
        <Button title='Clear Details' />
<View>
  {
    display ?
    <View>
      <Text style={{fontSize:15}}>User Name is :(name)</Text>
      <Text style={{fontSize:15}}>User Password is :(password)</Text>
      <Text style={{fontSize:15}}>User Email is :(email)</Text>

      </View> 
      : null
  }
</View>
       </View>
  );
};

const styles= StyleSheet.create({
  TextInput:{
    fontSize: 18,
    color: 'blue',
    borderWidth: 4,
    borderColor: 'blue',
    margin: 10
  }
})
 
 export default App;
