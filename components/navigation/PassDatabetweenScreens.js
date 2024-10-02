import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Login } from './PassDataLogin';
import { Home } from './PassDataHome';

const Stack=createNativeStackNavigator();
const PassDatabwScreens = () => {
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



export default PassDatabwScreens;