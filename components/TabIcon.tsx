import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
 type TabProps ={
       source:ImageSourcePropType,
       focused:boolean
   }
const TabIcon = ({source,focused}:TabProps) => {
  return (
    <View style={[styles.container]}>
        <View style={[styles.iconHolder,{backgroundColor:focused?Colors.blue:''}]}>
            <Image source={source} tintColor={'white'} style={{width:25,height:25}}/>
        </View>
    </View>
  )
}

export default TabIcon

const styles =StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,       
    },
    iconHolder:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:28,
        padding:8,
        position:'relative',
        bottom:12
       
    }
})