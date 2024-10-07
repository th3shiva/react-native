import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { getUserList } from './action'
import { useDispatch, useSelector } from 'react-redux'

const UserList = () => {
    const dispatch=useDispatch();
    const userList=useSelector((state)=>state.reducer)
    useEffect(()=>{
        dispatch(getUserList())
    },[])
    console.warn("in component",userList)
  return (
    <View style={styles.container}>
    {
     userList.length? 
        userList.map((item, index) => (
            <Text style={{fontSize:18}}>{item.firstName}</Text> 
        )) 
    :  <Text>No users found</Text> 
    }
</View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
});


export default UserList 