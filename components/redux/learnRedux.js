// import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native'
// import React from 'react'
// import Product from './Product'
// import Header from './Header'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

// const stack=createNativeStackNavigator();
// const LearnRedux = () => {

//     const products=[
//         {
//             name:"samsung mobile",
//             color:"white",
//             price:30000,
//             image:"https://cdn.icon-icons.com/icons2/2499/PNG/512/jpg_filetype_icon_150417.png"
//         },
//         {
//             name:"Aple mobile",
//             color:"Black",
//             price:130000,
//             image:"https://cdn.icon-icons.com/icons2/2499/PNG/512/jpg_filetype_icon_150417.png"
//         },
//         {
//             name:"Nokia mobile",
//             color:"green",
//             price:2000,
//             image:"https://cdn.icon-icons.com/icons2/2499/PNG/512/jpg_filetype_icon_150417.png"
//         },
    
//     ]
//   return (
//     <ScrollView style={styles.container}>
//         <Header />
//          <ScrollView>
//          {
//             products.map((item)=>
//                <Product  item={item}/>
//             )
//         }
//          </ScrollView>
//     </ScrollView>
//   )
// }
// const styles=StyleSheet.create({
//     container:{
//         flex:1
//     }
// })

// export default LearnRedux

import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ProductWrapper from './ProductWrapper';
import UserList from './UserList';

const Stack=createNativeStackNavigator();
const LearnRedux = () => {


  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={ProductWrapper} />
            <Stack.Screen name="User" component={UserList} />
        </Stack.Navigator>

    </NavigationContainer>
  )
}


export default LearnRedux
