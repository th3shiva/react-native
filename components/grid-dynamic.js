import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const GridDynamic = () => {
    const Users=[{
        id:1,
        name:"Sandeep"
    },
    {
        id:2,
        name:"Tony"
    },
    {
        id:3,
        name:"Shiva"
    },
    {
        id:4,
        name:"Arjun"
    },
    {
        id:1,
        name:"Sandeep"
    },
    {
        id:2,
        name:"Tony"
    },
    {
        id:3,
        name:"Shiva"
    },
    {
        id:4,
        name:"Arjun"
    },
    {
        id:1,
        name:"Sandeep"
    },
    {
        id:2,
        name:"Tony"
    },
    {
        id:3,
        name:"Shiva"
    },
    {
        id:4,
        name:"Arjun"
    },
    {
        id:2,
        name:"Tony"
    },
    {
        id:3,
        name:"Shiva"
    },
    {
        id:4,
        name:"Arjun"
    },
    {
        id:1,
        name:"Sandeep"
    },
    {
        id:2,
        name:"Tony"
    },
    {
        id:3,
        name:"Shiva"
    },
    {
        id:4,
        name:"Arjun"
    },
    {
        id:1,
        name:"Sandeep"
    },
    {
        id:2,
        name:"Tony"
    },
    {
        id:3,
        name:"Shiva"
    },
    {
        id:4,
        name:"Arjun"
    }

]
  return (
    <View>
        <Text style={{fontSize:30}}>Grid with Dynamic Data</Text>
        {/* <ScrollView style={{marginBottom:20}}>
            {
                Users.map((item)=><Text style={styles.item}>{item.name}</Text>)
            }
        </ScrollView> */}
<ScrollView>
<View style={{marginBottom:160,flex:1, flexDirection:"row" ,flexWrap:"wrap"}}>
    {
        Users.map((item)=><Text style={styles.item}>{item.name}</Text>)
    }
    </View>
    </ScrollView>
    </View>
  )
}
const styles=StyleSheet.create({
    item:{
        fontSize:25,
        backgroundColor:"red",
        color:"white",
        margin:5,
        padding:5,
        width:120,
        height:120,
        textAlign:"center",
        textAlignVertical:"center"
    }
})

export default GridDynamic