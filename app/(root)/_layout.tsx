import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const Layout = () => {
  return (
   <Stack screenOptions={{headerShown:false,headerTransparent:true,statusBarHidden:false}}>
     <Stack.Screen name='(tabs)'/>
   </Stack>
  )
}

export default Layout
const styles = StyleSheet.create({})