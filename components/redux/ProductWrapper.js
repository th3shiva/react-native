// import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native'
// import React from 'react'
// import Product from './Product'
// import Header from './Header'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import { NavigationContainer } from '@react-navigation/native'

// const Stack=createNativeStackNavigator();
// const ProductWrapper = () => {


//   return (
//     <NavigationContainer>
//         <Stack.Navigator>
//             <Stack.Screen name='Home' component={ProductWrapper} />
//         </Stack.Navigator>

//     </NavigationContainer>
//   )
// }


// export default ProductWrapper

import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native'
import React from 'react'
import Product from './Product'
import Header from './Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const stack=createNativeStackNavigator();
const ProductWrapper = ({navigation}) => {

    const products=[
        {
            name:"samsung mobile",
            color:"white",
            price:30000,
            image:"https://cdn.icon-icons.com/icons2/2499/PNG/512/jpg_filetype_icon_150417.png"
        },
        {
            name:"Aple mobile",
            color:"Black",
            price:130000,
            image:"https://cdn.icon-icons.com/icons2/2499/PNG/512/jpg_filetype_icon_150417.png"
        },
        {
            name:"Nokia mobile",
            color:"green",
            price:2000,
            image:"https://cdn.icon-icons.com/icons2/2499/PNG/512/jpg_filetype_icon_150417.png"
        },
    
    ]
  return (
    <ScrollView style={styles.container}>
        <Button title='Go to User LIst' onPress={()=>navigation.navigate("User")} />
        <Header />
         <ScrollView>
         {
            products.map((item)=>
               <Product  item={item}/>
            )
        }
         </ScrollView>
    </ScrollView>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1
    }
})

export default ProductWrapper
