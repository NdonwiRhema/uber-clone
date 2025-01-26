import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import styles from '@/app/(auth)/sign-upStyles'
import CustomButton from './CustomButton'
import { icons } from '@/constants'

const OAuth = () => {
    const handleGoogleSignIn = async()=>{}
  return (
    <View style={styles.oAuthContainer}>
     <View style={styles.orSection}>
            <View style={styles.borderLine}></View>
            <View style={styles.OrText}>
                <Text style={{color:Colors.darkGrey}}>Or</Text>
            </View>
            <View style= {styles.borderLine}></View>
     </View>
     <CustomButton
       textVariant=''
       title='Log In with Google'
       bgVariant=''
       onPress={()=>console.log("object")}
       IconLeft={<Image source={icons.google} resizeMode='contain'style={{width:15,height:18}}/>} />
    </View>
  )
}

export default OAuth
 