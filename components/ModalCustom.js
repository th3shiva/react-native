import {View, Text, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const ModalCustom = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <View style={styles.container}>
      {showModal ? (
        <View style={styles.modal}>
          <View style={styles.body}>
            <Text style={{fontSize: 30}}>Hello Sandeep</Text>
            <Button onPress={() => setShowModal(false)} title="Close Box" />
          </View>
        </View>
      ) : null}
      <Button onPress={() => setShowModal(true)} on title="Open Dialog" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(50,50,50,0.5)',
    alignItems: 'center',
  },
  body: {
    backgroundColor: '#fff',
    width: 300,
    height: 300,
    justifyContent: 'flex-end',
    gap: 100, 
    alignItems: 'center',
    borderRadius: 20,
  },
});
export default ModalCustom;
