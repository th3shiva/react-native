import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const Pressablecomponent = () => {
  return (
    <View style={styles.main}>
      <Pressable
        onPress={() => console.log('normal Press')}
        onLongPress={() => console.log('long press')}
        onPressIn={() => console.log('press in')}
        onPressOut={() => console.log('on press out')}>
        
        <Text style={styles.pressablebtn}>Pressable</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
  },
  pressablebtn: {
    backgroundColor: 'red',
    padding: 20,
    margin: 20,
    textAlign: 'center',
    color: '#fff',
    fontSize: 19,   
    borderRadius: 20,
  },
});

export default Pressablecomponent;
