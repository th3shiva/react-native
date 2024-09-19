import React from 'react'
import { StyleSheet, TouchableHighlight, View,Text } from 'react-native'

const Buttons = () => {
  return (
    <View style={styles.main}>
        <TouchableHighlight>
            <Text style={[styles.button,styles.success]}>Success</Text>
        </TouchableHighlight>
        <TouchableHighlight>
            <Text style={[styles.button,styles.primary]}>Primary</Text>
        </TouchableHighlight>
        <TouchableHighlight>
            <Text style={[styles.button,styles.warning]}>Warning</Text>
        </TouchableHighlight>
        <TouchableHighlight>
            <Text style={[styles.button,styles.error]}>Error</Text>
        </TouchableHighlight>
    </View>
  )
}

const styles=StyleSheet.create({
    main:{
    },
    button:{
        backgroundColor:"#bbb",
        color:"white",
        fontSize:24,
        textAlign:'center',
        padding:10,
        margin:10,
        borderRadius:10,
        shadowColor:"black",
        elevation:10,
        shadowOpacity:1
    },
    success:{backgroundColor:"green"},
    primary:{backgroundColor:"blue"},
    warning:{backgroundColor:"yellow"},
    error:{backgroundColor:"red"},
})

export default Buttons