import React from 'react';
import { View, Text, StyleSheet, SectionList, Pressable, Platform } from 'react-native';
import State from './components/hooks/State';
import Props from './components/hooks/props';
import Inputhandeling from './components/inputhandeling';
import SimpleForm from './components/simpleForm';
import ListswithFlatlist from './components/list1';
import GridDynamic from './components/grid-dynamic';
import LoopWdFlatList from './components/LoopWdFlatList';
import Sectionlistinrn from './components/sectionlist';
import Lifecycle from './components/hooks/Lifecycle';
import Togglecomponent from './components/Togglecomponent';
import Buttons from './components/Buttons';
import RadioButton from './components/RadioButton';
import DynamicRadio from './components/dynamicRadio';
import Loader from './components/Loader';
import ModalComponent from './components/Modal';
import Pressablecomponent from './components/Pressablecomponent';
import StatusbarComponent from './components/StatusbarComponent';
import PlatformComponent from './components/PlatformComponent';
import ModalCustom from './components/ModalCustom';

const App = () => {
  return (
     <View style={styles.container}>
     {/* <View> */}
      {/* <Text style={styles.text}>Hello, Sandeep</Text> */}
      {/* <Text style={styles.text}>Like Share Subscribe</Text> */}

      {/* <State />
      <Props /> */}
      {/* <Inputhandeling /> */}
      {/* <SimpleForm /> */}
      {/* <ListswithFlatlist /> */}
      {/* <GridDynamic /> */}
      {/* <LoopWdFlatList /> */}
      {/* <Sectionlistinrn /> */}
      {/* <Lifecycle /> */}
      {/* <Togglecomponent /> */}
      {/* <Buttons /> */}
      {/* <RadioButton /> */}
      {/* <DynamicRadio /> */}
      {/* <Loader /> */}
      {/* <ModalComponent /> */}
      {/* <Pressablecomponent /> */}
      {/* <StatusbarComponent /> */}
      {/* <PlatformComponent /> */}
      <ModalCustom />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
     backgroundColor: '#f0f0f0',
  },
  // text: {
  //   fontSize: 25,
  //   fontWeight: 'bold',
  //   color: 'orange',
  // },
});

export default App;
