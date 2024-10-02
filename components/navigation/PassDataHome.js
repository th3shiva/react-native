import {View,Text,Button} from "react-native";
export const Home=(props)=>{
    console.log(props.route.params)
    const {name,age}=props.route.params;
    return(
        <View style={{flex:1,justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:30}}>
                Home Screen
            </Text>
            <Text style={{fontSize:30}}>Name:{props.route.params.name}</Text>

            <Text style={{fontSize:30}}>Name:{name}</Text>
            <Text style={{fontSize:30}}>Age:{age}</Text>
            <Button onPress={()=>props.navigation.navigate("Login")} title="Go to Login Screen"/>
        </View>
    )
}
