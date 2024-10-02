import {View, Text, Button} from 'react-native';
import React from 'react';

const StaticPostApi = () => {
  const saveApiData = async () => {
    console.log('working');
    const data = {
      name: 'sandeep shama',
      age: 26,
      email: 'sandeep@sandeep.com',
    };
    const url = 'http://localhost:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    result = await result.json();
  };
  return (
    <View>
      <Text>Static Post Api</Text>
      <Button title="save data" onPress={saveApiData} />
    </View>
  );
};
export default StaticPostApi;