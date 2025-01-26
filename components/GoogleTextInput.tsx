import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GoogleInputProps } from '@/types/type'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import { icons } from '@/constants'

const googlePlacesApiKey = process.env.EXPO_PUBLIC_GOOGLE_API_KEY 
const GoogleTextInput = ({icon,initialLocation,containerStyle,handlePress}:GoogleInputProps) => {
  return (
    <View style={[styles.container,containerStyle]}>
      <GooglePlacesAutocomplete 
        fetchDetails={true}
        placeholder='Where do you want to go ?'
        debounce={200}
        styles={{
          textInputContainer:{
            paddingHorizontal:8,
            borderRadius:20,
            justifyContent:'space-evenly',
            alignItems:'center'
          },
          textInput:{
            backgroundColor: 'white',
            fontSize:15,
            width:'100%',
            height:40
          },
          listView:{
            backgroundColor:'white',
            width:'100%',
            shadowColor:'#d4d4d4',
          }
        }}
        onPress={(data,details)=>handlePress({latitude:details?.geometry.location.lat!,longitude:details?.geometry.location.lng!,address:data.description})}
        query={{key:googlePlacesApiKey,language:'en'}}
        renderLeftButton={()=>(<View style={{}}><Image source={icon?icon:icons.search} style={{width:18,height:18}}/></View>)}
      />
    </View>
  )
}

export default GoogleTextInput

const styles = StyleSheet.create({
   container:{
        elevation:7,
        borderRadius:7,
        height:40,
        marginHorizontal:'2%',
        marginVertical:'2%'
    }
})