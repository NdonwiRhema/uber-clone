import { Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import styles from '@/app/(auth)/sign-upStyles'

type Props = {
    label : string,
    Icons:any,
    secureTextEntry?: boolean,
    labelStyle?:{},
    placeholder:string,
    onChangeText:(value:string)=>void
    value:string
}
const InputField = ({label,Icons,labelStyle,onChangeText, placeholder,value,secureTextEntry}:Props) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios'? "padding":'height'}>
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss}>
        <View style={{width:'100%',marginHorizontal:5}}>
            <Text style={{width:'90%',marginLeft:'5%',marginBottom:12, fontSize:15,fontWeight:'600'}}>{label}</Text>
            <View style={styles.inputField}>
                {Icons && <Image source={Icons} style={{width:20,height:20}}/>}
                <TextInput
                placeholder={placeholder}
                placeholderTextColor={'#8f8c8f99'}
                secureTextEntry={secureTextEntry?true:false}
                onChangeText={(value)=>onChangeText(value)}
                  style={styles.textInput}
                />
            </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default InputField
