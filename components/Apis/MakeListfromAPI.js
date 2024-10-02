import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert,
  Modal,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const MakeListfromAPI = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(undefined);
  const getApiData = async () => {
    const url = 'https://mocki.io/v1/6154fc7c-5b27-4015-931e-7026cc9ee740';
    let result = await fetch(url);
    result = await result.json();
    //console.log(result)
    // {
    //     result&&result.users?setData(result.users):null
    // }
    if (result && result.users) {
      setData(result.users);
      //console.log(result.users);

      const ages = result.users.map(user => user.age);
      // console.log(ages);
    }
    {
      result.users.map(user => {
        //    console.log(user.name);
      });
    }
  };
  const deleteUser = async id => {
    const url = 'https://mocki.io/v1/6154fc7c-5b27-4015-931e-7026cc9ee740';
    //const url="http://10.0.2.2:3000/users"
    console.log(`${url}/${id}`);
    let result = await fetch(`${url}/${id}`, {
      method: 'DELETE',
    });
    result = await result.json();
    result ? console.log('deleted') : null;
    getApiData();
  };
  useEffect(() => {
    getApiData();
  }, []);

  const updateUser = (data) => {
    // setShowModal(true);
    // setSelectedUser(data);
    console.log(name,age,email);
  };
  return (
    <View style={styles.container}>
      {/* <Text style={{fontSize:30}}>Make List from API</Text> */}
      <View style={styles.dataWrapper}>
        <View style={{flex: 1}}>
          <Text style={{color: '#fff', fontStyle: 'italic'}}>Name</Text>
        </View>
        <View style={{flex: 2}}>
          <Text>Age</Text>
        </View>

        <View style={{flex: 1}}>
          <Text>Operations</Text>
        </View>
      </View>
      {data.length
        ? data.map(item => (
            <View key={item.id} style={styles.dataWrapper}>
              <View style={{flex: 1}}>
                <Text>{item.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{item.age}</Text>
              </View>

              <View style={{flex: 1}}>
                <Button
                  onPress={() => {
                    deleteUser(item.id);
                    Alert.alert('deleted successfully');
                  }}
                  title="Delete"
                />
              </View>
              <View style={{flex: 1}}>
                {/* <Button title="Update"  onPress={() => Alert.alert("Update feature not implemented yet")}  /> */}
                <Button title="Update" onPress={() => updateUser(item)} />
              </View>
            </View>
          ))
        : null}

      <Modal visible={showModal} transparent={true}>
        <UserModal setShowModal={setShowModal} selectedUser={selectedUser} />
      </Modal>
    </View>
  );
};
const UserModal = props => {
  console.log(props.selectedUser);
  const [name, setName] = useState(undefined);
  const [age, setAge] = useState(undefined);
  const [email, setEmail] = useState(undefined);

  useState(() => {
    if (props.selectedUser) {
      setName(props.selectedUser.name);
      setAge(props.selectedUser.age.toString());
      setEmail(props.selectedUser.email);
    }
  }, [props.selectedUser]);
  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          onChange={text => setName(text)}
          value={name}
        />
        <TextInput
          style={styles.input}
          onChange={text => {
            setAge(text);
          }}
          placeholder="Enter Age"
          value={age}
        />
        <TextInput
          style={styles.input}
          onChange={text => setEmail(text)}
          placeholder="Enter Email"
          value={email}
        />

        <View style={{marginBottom: 15}}>
          <Button onPress={updateUser} title="update" />
        </View>
        <Button title="close" onPress={() => props.setShowModal(false)} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataWrapper: {
    //flex:1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'orange',
    margin: 5,
    padding: 7,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop:-300
    marginBottom: 300,
  },
  modalView: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    elevation: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'skyblue',
    width: 300,
    marginBottom: 15,
    fontSize: 20,
  },
});
export default MakeListfromAPI;
