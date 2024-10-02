import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const AsyncStoragee = () => {

    const setData=async()=>{
        await AsyncStorage.setItem("user","Sandeep Sharma")
    }
    const getData=async()=>{
        const name=await AsyncStorage.getItem("user");
        console.warn(name);
    }
    const removeData=async()=>{
        await AsyncStorage.removeItem("user")
    }
  return (
    <View style={{flex:1,alignItems:"center", gap:10, marginTop:100}}>
      <Text style={{fontSize:30}}>Async Storage</Text>
      <Button onPress={setData} title='Set DATA'/>
      <Button onPress={getData} title='Get DATA' />
      <Button onPress={removeData} title='REmove DATA' />
    </View>
  )
}

export default AsyncStoragee