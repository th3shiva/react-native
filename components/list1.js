import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'

const ListswithFlatlist = () => {
    const Users=[{
        id:1,
        name:"Sandeep"
    },
    {
        id:2,
        name:"Tony"
    },
    {
        id:3,
        name:"Shiva"
    },
    {
        id:4,
        name:"Arjun"
    },
    {
        id:1,
        name:"Sandeep"
    },
    {
        id:2,
        name:"Tony"
    },
    {
        id:3,
        name:"Shiva"
    },
    {
        id:4,
        name:"Arjun"
    },
    {
        id:1,
        name:"Sandeep"
    },
    {
        id:2,
        name:"Tony"
    },
    {
        id:3,
        name:"Shiva"
    },
    {
        id:4,
        name:"Arjun"
    }



]
  return (
    <View>
        <Text style={{fontSize:30}}>List with Flat List Component</Text>
        {/* <FlatList data={Users} renderItem={({item})=><Text>{item.name}</Text>} /> */}

    {/* OR */}
    <ScrollView style={{marginBottom:60}}>
    {
        Users.map((item)=><Text style={style.item}>{item.name}</Text>)
    }
    </ScrollView>
    </View>
  )
}
const style=StyleSheet.create({
    item:{
        fontSize:30,
        padding:10,
        borderWidth:1,
        margin:10,
        color:"red"  
    }

})

export default ListswithFlatlist