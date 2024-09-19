import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'

const RadioButton = () => {
  return (
   <View>
    <TouchableHighlight>
        <View>
            <View style={styles.radio}>
                <Text style={styles.radioText}>Radio 1</Text>
            </View>
        </View>
    </TouchableHighlight>

   </View>
  )
}
const styles=StyleSheet.create({
    main:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    radioText:{
        fontSize:30
    },
    radio:{
        height:40,
        width:40,
        borderBlockColor:"black"
    }
})
export default RadioButton