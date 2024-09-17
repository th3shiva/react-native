import React, { useState } from 'react'
import { View,Text, TextInput, TextInputBase, Button, StyleSheet } from 'react-native'

const SimpleForm = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [display,setDisplay]=useState(false);

    const clearDetails = () => {
        setName('');
        setEmail('');
        setPassword('');
        setDisplay(false);
      };
  return (
    <View>
        <Text style={{fontSize:30}}>Simple Form in React Native</Text>
        <TextInput style={styles.TextInput} placeholder='Enter Username' value={name} onChangeText={(text)=>setName(text)}/>
        <TextInput style={styles.TextInput} placeholder='Enter Email' value={email} onChangeText={(text)=>setEmail(text)}/>
        <TextInput style={styles.TextInput} placeholder='Enter Password' secureTextEntry={true} value={password} onChangeText={(text)=>setPassword(text)}/>

        <Button color='green' onPress={()=>setDisplay(true)} title='Print Details'/>
        <Button color='red' onPress={clearDetails} title='Clear Details'/>

        <View>
            {
                display?<View>
                        <Text style={{fontSize:15}}>Username is {name}</Text>
                        <Text style={{fontSize:15}}>Email is {email}</Text>
                        <Text style={{fontSize:15}}>Password is {password}</Text>
                     </View>:null            
            }
        </View>

    </View>
  )
}
const styles=StyleSheet.create({
    TextInput:{
        fontSize:20,
        color:'blue',
        borderWidth:2,

    }
})

export default SimpleForm