import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const DynamicRadio = () => {
  const skills = [
    {
      id: 1,
      name: 'Java',
    },
    {
      id: 2,
      name: 'js',
    },
    {
      id: 3,
      name: 'Node',
    },
    {
      id: 4,
      name: 'MongoDb',
    },
    {
      id:5,
      name:"c++"
    }
  ];
  const [selectedRadio, setSelectedRadio] = useState(null);
  return (
    <View style={styles.main}>
      {
      skills.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => setSelectedRadio(item.id)}>
          <View style={styles.radioWrapper}>
            <View style={styles.radio}>
              {selectedRadio == item.id ?
                <View style={styles.radiobg}></View>: null}
            </View>
            <Text style={styles.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>))
    }
    </View>
  )
};
const styles = StyleSheet.create({
  main: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    
    // flex: 1,
    // flexDirection:"column",
//    justifyContent: 'center',
    margin : "auto",
    
  },


  radioText: {
    fontSize: 20,
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radiobg:{
    backgroundColor:"black",
    height:28,
    width :28,
    borderRadius:20,
    margin:4,

  },
});
export default DynamicRadio;
