import React from "react";
import { FlatList, StyleSheet, Text,View } from "react-native";

const LoopWdFlatList=()=>{
    const users=[
        {
            id:1,
            name:"sandeep",
            email:"sandeep@gmail.com"
        },
        {
            id:2,
            name:"sharma",
            email:"sharma@gmail.com"
        },
        {
            id:3,
            name:"Tony",
            email:"th3sandeep@gmail.com"
        },
        {
            id:4,
            name:"shiva",
            email:"th3shiva1@gmail.com"
        }
    ]
    return(
        <View>
            <Text> Component in Loop with Flat List</Text>
            <FlatList data={users}
            renderItem={({item})=> <UserData item={item}/>
            } />
        </View>

    )
}
const UserData=(props)=>{
    const item=props.item;
    return(
        <View style={styles.box}>
        <Text style={[styles.item, {flexGrow: 0.7, backgroundColor: "pink"}]}>{item.name}</Text>
        <Text style={[styles.item, {flexGrow: 1.1}]}>{item.email}</Text>
            </View>
    ) 
}
const styles= StyleSheet.create({
    item:{
        fontSize:24,
        color:"orange",
        flex:1,
        margin:2,
        textAlign:"center",
    },
    box:{
        flexDirection:'row',
        borderWidth:2,
        borderColor:'red',
        marginBottom:10,

    }
})

export default LoopWdFlatList
