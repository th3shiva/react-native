import React, { useState } from 'react'
import { View,Text, Button } from 'react-native'

const State = () => {
  const [num,setNum]=useState(1);
  const add=()=>setNum(num+1);
  return (
    <View>
      <Text>State in React-Native</Text>
      <Text>{num}</Text>
      <Button title='click to update'  onPress={add}/>
    </View>

)
}

export default State