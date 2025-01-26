import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { router } from 'expo-router'
import Swiper from 'react-native-swiper'
import { onboarding,} from '@/constants'
import CustomButton from '@/components/CustomButton'

const Onboarding = () => {
const swiperRef = useRef <Swiper>(null)
const [activeIndex,setActiveIndex] = useState(0)
const isLastSlide  = activeIndex === onboarding.length - 1?true :false

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=>{router.replace('/(auth)/sign-up')}}>
        <Text style={{color:'black', fontWeight:'600',textAlign:'right'}}>Skip</Text>
      </TouchableOpacity>
      <Swiper
        style={{ height:Dimensions.get('screen').height*0.7 }}
           ref={swiperRef}
           dot={<View style={{backgroundColor:'#e2e8f0',width:80,marginHorizontal:10,height:5}}><Text></Text></View>}
           dotStyle={{}}
           activeDot={<View style={{backgroundColor:'#02e8f0',width:80,marginHorizontal:10,height:5}}><Text></Text></View>}
           activeDotStyle={{}}
           loop={false}
           onIndexChanged={(index)=>setActiveIndex(index)}
        >
            {onboarding.map((onboard,index)=>(
                    <View key={index} >
                        <Image source={onboard.image} resizeMode='contain' style={{ width:'100%',height:'80%'}}/>
                        <Text style={{justifyContent:'center',alignItems:'center',textAlign:"center",fontWeight:'700'}}>{onboard.title}</Text>
                        <Text style={{justifyContent:'center',alignItems:'center',textAlign:"center",fontWeight:'400'}}>{onboard.description}</Text>
                    </View>
             ))}
                    
      </Swiper>
      <View style={{marginVertical:30}}>
          <CustomButton
        bgVariant='#333' onPress={()=>{
        isLastSlide? router.replace('/(auth)/sign-up') : swiperRef.current?.scrollBy(1,true)
      }} textVariant='' title={isLastSlide?'Get Started': 'Next'} />
      
      </View>
    
      <StatusBar style='dark'/>
    </SafeAreaView>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    container:{
        flex:1,
        //  
        backgroundColor:"#fff"
    },
    button:{
        width:'90%',
        padding:5,
        marginLeft:'5%',
        height:Dimensions.get('screen').height*0.04,
        marginBottom:'1%'
    }
})