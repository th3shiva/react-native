import { View, Text, Modal, Button, StyleSheet } from 'react-native'
import React,{useState} from 'react'

const ModalComponent = () => {
  
  const [ShowModal,setShowModal]=useState(false);
  return (
    <View style={styles.main}>
        <Modal transparent={true} visible={ShowModal} animationType="slide">
        <View style={styles.CenteredView}>
              <View style={styles.ModalView}>
                <Text style={styles.ModalText}>Hello Sandeep Sharma</Text>
                <Button onPress={()=>setShowModal(false)} title="Close Modal" /> 
            </View>
        </View>
        </Modal>
        <View style={styles.ButtonView}>
            {/* <Button onPress={()=>console.log(""); setShowModal(true)} title='Open Modal'></Button> */}
            <Button onPress={() => { console.log("Button pressed!"); setShowModal(true); }} title="Open Modal" />
    
        </View>
    </View>
  )
}
const styles=StyleSheet.create({
    main:{
         flex:1,
    },
    ButtonView:{
        flex:1,
        justifyContent:"flex-end"
    },
    CenteredView:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    ModalView:{
      backgroundColor:"white",
      padding:30,
      borderRadius:20,
      shadowColor:"black",
      elevation:5
    },
    ModalText:{
      fontSize:30,
      paddingBottom:20
    }

})
export default ModalComponent
