import React from 'react'
import { SectionList, Text, View } from 'react-native'

const Sectionlistinrn = () => {
    const users=[{
        id:1,
        name:"sandeep",
        data:["js","react native"]
    },
    {
        id:2,
        name:"shiva",
        data:['hacking',"cyber security"]
    },
    {
        id:3,
        name:"Tony",
        data:["gym","fitness"]
    }

]
  return (
    <View>
        
        <Text style={{fontSize:31}}>Section List</Text>
    <SectionList 
        sections={users}
        renderItem={({item})=><Text style={{fontSize:20, marginLeft:20}}>{item}</Text> }
        renderSectionHeader={({section:{name}})=>(
            <Text style={{fontSize:25,color:"red"}}>{name}</Text>
        )}
 
    />

    </View>
  )
}

export default Sectionlistinrn