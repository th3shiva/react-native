import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';

const SearchApi = () => {
  const [data, setData] = useState([]);
  const searchUser = async (text) => {
    const url = `https://dummyjson.com/users/search?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    if (result && result.users) {
      setData(result.users);
    } else {
      console.log('No users found');
      setData([]); // Clear the data if no users found
    }
    console.log(data.password);
  };
  return (
    <View style={{flex: 1}}>
      <TextInput
        style={{
          borderColor: 'skyblue',
          borderWidth: 1,
          margin: 15,
          fontSize: 20,
        }}
        placeholder="Search"
        onChangeText={text => searchUser(text)}
      />
      {data.length
        ? data.map((item) =>
            <View key={item.id} style={{padding:10,flexDirection:'row',justifyContent:"space-between"}}>
              <Text style={{fontSize:20}}>{item.id}</Text>
              <Text style={{fontSize:20}}>{item.username}</Text>
              <Text style={{fontSize:20}}>{item.password}</Text>
            </View>
          )
        : null}
    </View>
  );
};

export default SearchApi;
