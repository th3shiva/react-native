import { View, Text, StatusBar, Button, StyleSheet } from 'react-native'
import React, { useState } from 'react'

const StatusbarComponent = () => {
    const [hide,setHide]=useState(false);
    const [barStylee,setBarStylee]=useState("default")
  return (
    <View style={styles.main}>
        <StatusBar 
        barStyle={barStylee}
        backgroundColor={"red"}
        hidden={hide}
        /> 
        <Button styles={styles.btn} onPress={()=>setHide(!hide)} title='Toogle Status Bar'/>
        <Button styles={styles.btn} onPress={()=>setBarStylee("dark-content")} title='Update style'/>   
    </View>
  )
}

// const styles=StyleSheet.create({
//     main:{
//         flex:1,
//         justifyContent:"center"
//     } 
// })
const styles = StyleSheet.create({
  main: {
      flex: 1,
      justifyContent: "center",
  },
  btn: {
      margin: 10, // Optional: add some spacing
  }
});

export default StatusbarComponent