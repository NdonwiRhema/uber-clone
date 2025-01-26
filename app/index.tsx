import {StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {StatusBar} from 'expo-status-bar'
import { Redirect } from 'expo-router'

const Home = () => {
  return <Redirect href={'/(auth)/welcome'}/>
}

export default Home