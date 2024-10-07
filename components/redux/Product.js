import {View, Text, StyleSheet, Image, Button, ScrollView} from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addtocart } from './action';

const Product = (props) => {
  //const item = {...props};
   const {item}=props;
   const dispatch=useDispatch();

   const handleAddToCart=(item)=>{
    console.warn("add to cart",item)
    dispatch(addtocart(item))
   }
  return (
      <View style={{alignItems:'center', borderBottomColor:"red",borderBottomWidth:2,padding:10,marginBottom:50}}>
        <Text style={{fontSize: 24}}>{item.name}</Text>
        <Text style={{fontSize: 24}}>{item.price}</Text>
        <Text style={{fontSize: 24}}>{item.color}</Text>
        <Image style={{width: 200, height: 200}} source={{uri: item.image}} />
        <Button title="Add to Cart" onPress={()=>handleAddToCart(item)} />
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Product;
