import React, { useEffect, useState } from 'react'
import { Button, Text, View } from 'react-native'
const Lifecycle = () => {
    const [counter,setCounter]=useState(0);
    const [data,setData]=useState(100);

        // runs every time when any thing render/rerender
    useEffect(()=>{
        console.log("component mount")
    })

    //only run when data change
    useEffect(()=>{
        console.log(counter,"component update when data change")
    },[data])

    //only runs on the first render
    useEffect(()=>{
        console.log("only runs on the first render")
    },[])
    return (
    <View>
        <Text style={{fontSize:20, marginTop:10}}> UseEffect for Component Mount {counter}</Text>
        <Text style={{fontSize:20, paddingTop:10}}> UseEffect for ComponentDidMount {data}</Text>
        <Button onPress={()=>setCounter(counter+1)} title='Update Counter' />
        <Button onPress={()=>setData(data+1)} color={"red"} title='Update Data'/>
        <User info={{data,counter}} />
    </View>
  )
}
const User=(props)=>{
    console.log(props)
    useEffect(()=>{
  console.log('runs when the  props data is updated')
    },[props.info.data])
    return(
        <View>

            <Text style={{fontSize:40, color:'orange'}}>User Component</Text>
            <Text style={{fontSize:30, color:'orange'}}>Data count is {props.info.data}</Text>
            <Text style={{fontSize:30, color:'orange'}}>Counter count is {props.info.counter}</Text>
        </View>
    )
}

export default Lifecycle