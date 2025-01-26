import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'

type Props ={
    onPress : ()=>void,
    title:string,
    bgVariant:string,
    textVariant:string,
    IconRight?:React.ReactNode,
    IconLeft?:React.ReactNode,
   
}
const CustomButton = ({onPress,title,bgVariant,textVariant,IconLeft,IconRight}:Props) => {
  return (
    <TouchableOpacity style={[styles.container,{
      backgroundColor:bgVariant==='primary'?'rgb(2, 232, 240)':'',
      borderColor:bgVariant==='primary'?'rgb(2, 232, 240)':''
      }]} onPress={()=>onPress()}>
       <View>{
            IconLeft && IconLeft
        }
        </View> 
        <View>
             <Text style={styles.text}>{title}</Text>
        </View>
        <View>
             {
              IconRight && IconRight
            }
        </View>
     
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        width:'90%',
        marginLeft:'5%',
        height:40,
        padding:5,        
        borderWidth:1,
        borderRadius:24,
        marginTop:'2%',
        marginBottom:'2%',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',    
    },
    text:{
        textAlign:'center',
        fontWeight:'600'
    }
})