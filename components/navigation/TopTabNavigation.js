import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

//const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {

  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen  name="Home" component={Home} />
            <Tab.Screen name='Settings' component={Settings} />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default TopTabNavigation


const Home=(props)=>{
    return(
        <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:40}}>This is home</Text>
            <Button title='Go to settings' onPress={()=>props.navigation.navigate("Settings")}/>
        </View>
    )
}

const Settings=(props)=>{
    return(
        <View style={{flex:1, justifyContent:"center",alignItems:"center"}}>
            <Text style={{fontSize:40}}>This is setting component</Text>
            <Button title='Go to Home' onPress={()=>props.navigation.navigate("Home")}/>

        </View>
    )
}