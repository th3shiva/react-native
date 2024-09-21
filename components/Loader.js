import React, { useState } from 'react'
import { StyleSheet, View, ActivityIndicator, Button } from 'react-native'

const Loader = () => {
  const [show,setShow]=useState(false);
  const displayLoader=()=>{
    setShow(true);
    
    setTimeout(()=>{
      setShow(false)
    },5000)
  }
  const displayL=()=>{
    alert("Log Message Button Pressed");

    console.log("chlra hu")
  }
  return (
    <View style={styles.main}>
        {/* <ActivityIndicator size={100} color="red" /> */}
        <ActivityIndicator size={100} color="red" animating={show} />
        {
          show?<ActivityIndicator size="large" color='blue' />:null
        }
        <Button title='show Loader' onPress={displayLoader}  />
        <Button title='show Loader' onPress={displayL}  />

    </View>
  )
}

const styles=StyleSheet.create({
  main:{
    alignItems:"center",
    justifyContent:"center"
  }
})
export default Loader