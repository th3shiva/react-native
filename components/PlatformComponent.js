import { View, Text,Platform, StyleSheet } from 'react-native'
import React from 'react'

const PlatformComponent = () => {
  return (
    <View>
      <Text style={{fontSize:20}}> Platform:{Platform.OS} </Text>
      {
         Platform.OS=="android"?
         <View style={{backgroundColor:"red",height:100,width:100}}></View>
         :
         <View style={{backgroundColor:"green",height: 100,width:100}}></View>       
      }
    <Text style={styles.text}>Hello</Text>
    <Text style={{fontSize:20}}>{JSON.stringify(Platform)}</Text>

    
    <Text style={{fontSize:20}}>{JSON.stringify(Platform.__constants.reactNativeVersion.minor)}</Text>
    </View>
  )
}
const styles=StyleSheet.create({
    text:{
        color:Platform.OS=="android"?"orange":"blue",
        fontSize:20,
    }
})

export default PlatformComponent