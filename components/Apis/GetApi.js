import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';

const GetApi = () => {
  const [data, setData] = useState([]);
  const getApiData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <ScrollView style={{flex:1}}>
      <Text style={{fontSize: 30}}>List with api call</Text>
      {data.length?
      data.map((item) => 
        <View> 
            <Text style={{fontSize:20}}>Id:{item.id}</Text>
            <Text style={{fontSize:20}}>Title: {item.title}</Text>

        </View>
      ) :null
      }
    </ScrollView>
  );
};

export default GetApi;
