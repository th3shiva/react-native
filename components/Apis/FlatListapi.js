import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'

const FlatListapi = () => {
    const [data,setData]=useState([]);
    const getApiData=async()=>{
        const url="https://jsonplaceholder.typicode.com/posts";
        let result =await fetch(url);
        result=await result.json();
        setData(result)
    }
    useEffect(()=>{
        
        getApiData();
        console.log("api called")
    },[])
  return (
    <View style={{flex:1}}>
      <Text style={{fontSize:30}}>Flat List api</Text>
      {
        data.length?      <FlatList
       // keyExtractor={(item) => item.id}
        data={data}
        renderItem={({ item }) => (
          <View style={{borderBottomColor:"orange",borderBottomWidth:1,padding:10 }}>
            <Text style={{backgroundColor:'skyblue'}}>{item.id}</Text>
            <Text>{item.title}</Text>
          </View>
        )}
      /> : null
      }

    </View>
    
  )
}

export default FlatListapi