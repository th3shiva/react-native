import React from 'react'
import { View,Text } from 'react-native'
const Props = () => {
    const name="Sandeep Sharma";
  return (
    <View>
        <Text style={{fontSize:20, paddingTop:40}}>Props in React Native</Text>
        <Text style={{paddingLeft:40}}>This is parent component</Text>
        <Details name={name}/>
    </View>
  )
}

const Details=(props)=>{
    return(
        <View style={{backgroundColor:"red", padding:5}}>
            <Text style={{fontSize:30}}>My name is {props.name}</Text>
        </View>
    )
}

export default Props