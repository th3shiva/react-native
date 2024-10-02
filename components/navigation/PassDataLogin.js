import { useState } from "react";
import { TextInput,Button,View, Text} from "react-native";

export const Login=(props)=>{
    const [name,setName]= useState("");
    const age=27;
    return(
        <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:30}}>
                Login Screen
            </Text>
            <TextInput style={{fontSize:20,borderColor:"#000",borderWidth:2}} onChangeText={(text)=>setName(text)} placeholder="Enter Name" />
            <Button onPress={() => {console.log("pressed");props.navigation.navigate("Home",{name,age})}} title='Go to Home' />
            </View>
    )
}