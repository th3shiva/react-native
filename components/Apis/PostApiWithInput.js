import {View, Text, StyleSheet, Button, TextInput, ScrollView} from 'react-native';
import React, {useState} from 'react';

const PostApiWithInput = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState(false);
  const [ageError, setAgeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const saveData = async () => {
    {
      !name ? setNameError(true) : setNameError(false);
    }
    {
      !age ? setAgeError(true) : setAgeError(false);
    }
    {
      !email ? setEmailError(true) : setEmailError(false);
    }
    {
      !password ? setPasswordError(true) : setPasswordError(false);
    }

    const url = 'http://10.0.2.2:3000/users';
    let result = fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({name, email, age}),
      // body:JSON.stringify({name:name,email:email,age:age}) jb key ur value samne ho dono likhne ki jrurat ni hoti
    });
    result = (await result).json();
    if (result) {
      console.log(result);
    }
  };
  return (
    <ScrollView style={{flex:1}}>
      <Text style={{fontSize: 30}}>Post Api With Input</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Enter Name"
      />
      {nameError ? <Text style={styles.errorText}>Please Enter Valid name</Text> : null}
      <TextInput
        style={styles.input}
        value={age}
        onChangeText={text => setAge(text)}
        placeholder="Enter Age"
      />
      {ageError?<Text style={styles.errorText}>Enter Valid Age</Text>:null}
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter Email"
      />
      {emailError?<Text style={styles.errorText}>Enter valid Email</Text>:null}
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Enter password"
      />
      {passwordError?<Text  style={styles.errorText}>Enter password</Text>:null}
      <Button onPress={saveData} title="Save Data" />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  input: {
    borderColor: 'skyblue',
    borderWidth: 1,
    margin: 20,
    fontSize: 20,
    marginBottom:5
  },
  errorText:{
    color:"red",
    marginLeft:20.
  }
});

export default PostApiWithInput;
