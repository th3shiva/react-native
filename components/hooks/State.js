import React, { useState } from 'react'
import { View,Text, Button} from 'react-native'
import Estyle from '../stateExternalcss'

const State = () => {
  const [num,setNum]=useState(1);
  const add=()=>setNum(num+1);
  const sub=()=>setNum(num-1);
  return (
    <View>
      <Text style={Estyle.textBox}>State in React-Native</Text>
      <Text style={Estyle.buttonBox}>State in React-Native external css</Text>

      <Text style={{fontSize:30, textAlign:'center'}}>{num}</Text>
      <Button title='click to increase'  onPress={add}/>
      <Button title='Click to Drecrease' onPress={sub}/>
    </View>

)
}

export default State