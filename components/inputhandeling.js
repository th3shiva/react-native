import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const Inputhandeling = () => {
    const [name,setName]=useState("");
  return (
    <View>
        <Text style={Estyle.textBox}>Handle Text Input</Text>
        <Text style={{fontSize:20,}}>Your name is: {name}</Text>
        <TextInput style={styles.TextInput} placeholder='Enter your name'
            value={name}
            onChangeText={(text)=>setName(text)}
        />
        <Button title='Clear input value' onPress={()=>setName("")}/>
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

export default Inputhandeling