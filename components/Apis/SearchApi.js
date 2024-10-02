import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const SearchApi = () => {
    const [data,setData]=useState([])
    const searchUser=async (text)=>{
        const url = `https://mocki.io/v1/6154fc7c-5b27-4015-931e-7026cc9ee740?q=${text}`;
        let result= await fetch(url);
        result=await result.json();
        {
            result?setData(result):null;
        }
    }
  return (
    <View style={{flex:1}}>
        <TextInput style={{borderColor:'skyblue',borderWidth:1,margin:15,fontSize:20}} placeholder='Search' onChangeText={(text)=>searchUser(text)} />
            {
                data.length?data.map((item)=><View> <Text>{item.name}</Text> </View>):null
            }
    </View>
  )
}

export default SearchApi