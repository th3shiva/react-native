import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'

const Togglecomponent = () => {
    const [show,setShow]=useState(false)
  return (
    <View>
        <Text style={{fontSize:30}}>Show Hide Component</Text>
        <Button onPress={()=>setShow(!show)} title='Toggle Component' />    
            {
                show==true ? <User /> : null
            }
     
   </View>
  )
}
const User = () => {
    let timer=setInterval(()=>{
        console.log("timer called")
    },200)
    useEffect(()=>{
        // return()=>{console.log("useEffect called on unmount")}
        return()=>{clearInterval(timer)}
    })
    return (
      <View>
          <Text style={{fontSize:30, color:"green"}}>This is User Component</Text>        
     </View>
    )
  }
export default Togglecomponent