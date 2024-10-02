import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack=createNativeStackNavigator();
const StackNavigationtwo = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
            headerStyle:{
                backgroundColor:"orange"
            },
            headerTintColor:"white",
            headerTitleStyle:{
                fontSize:25
            }
        }}>
            <Stack.Screen name='Login' component={Login} 
            //special isi screen k liye
            options={{
                headerTitle:()=><Button title='left side button'/>,
                headerRight:()=><Button title='right'/>,
                // headerTitle:"User Login",
                headerStyle:{
                    backgroundColor:"red"
                },
                headerTintColor:"white",
                headerTitleStyle:{
                    fontSize:40
                }
            }}
            />
            <Stack.Screen name='Home' component={Home} />

        </Stack.Navigator>

    </NavigationContainer>
  )
}
const Home=(props)=>{
    return(
        <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:30}}>
                Home Screen
            </Text>
            <Button onPress={()=>props.navigation.navigate("Login")} title="Go to Login Screen"/>
        </View>
    )
}

const Login=(props)=>{
    return(
        <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:30}}>
                Login Screen
            </Text>
            <Button onPress={() => {console.log("pressed");props.navigation.navigate("Home")}} title='Go to Home' />
            </View>
    )
}

export default StackNavigationtwo