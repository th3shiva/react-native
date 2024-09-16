import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import State from './components/State';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, SyncElevate</Text>
      <Text style={styles.text}>Like Share Subscribe</Text>

      <State />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'orange',
  },
});

export default App;
