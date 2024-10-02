import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import React, { useRef } from 'react'

const Ref = () => {
    const input=useRef();
    const updateInput=()=>{
        console.log("function called")
        input.current.focus();
        input.current.setNativeProps({
            fontSize:30,
            color:'red'
        })
    }
  return (
    <View style={styles.container}>
        <TextInput ref={input} style={styles.input} placeholder='Enter Name' />
        <TextInput style={styles.input} placeholder='Enter password' />
        <Button onPress={updateInput} title='Update input' />
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16
    },
    input:{
        borderColor:"red",
        borderWidth:1,
        margin:10,
        fontSize:20,
        padding:10
    }
})

export default Ref