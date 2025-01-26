import { Alert, Dimensions, Image, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import InputField from '@/components/InputField'
import { StatusBar } from 'expo-status-bar'
import { Link, router } from 'expo-router'
import OAuth from '@/components/OAuth'
import CustomButton from '@/components/CustomButton'
import { icons, images } from '@/constants'
import { Colors } from '@/constants/Colors'
import styles from './sign-upStyles'
import { useSignIn } from '@clerk/clerk-expo'

const SignIn = () => {
  const { signIn, setActive, isLoaded } = useSignIn()
   const[form,setForm] = useState({
      email:'',
      password:'',
    })
    // Handle the submission of the sign-in form
  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) return

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,password:form.password
      })

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/(root)/(tabs)/home')
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      Alert.alert('Error',err.errors[0].longMessage)
    }
  }, [isLoaded, form.email, form.password])
  
  return (
    <View>
    <ScrollView style={styles.scrollContainer}>
      <View>
        <View style={styles.scrollHeader}>
           <Image source={images.signUpCar} style={{ width:'100%',height:'80%'}}/>
           <Text style={styles.headingText}>Welcome </Text>
        </View>
        <View style={{padding:5,height:Dimensions.get('screen').height*0.6, position:'relative',bottom:30}}>
         
            <InputField
             label='Email'
              placeholder='Enter your email'
              Icons ={icons.email}
              value={form.email}
              onChangeText ={(value:string)=>setForm({...form,email:value})} 
             />
            <InputField
             label='Password'
              placeholder='Enter a password'
              Icons ={icons.lock}
              value={form.password}
              secureTextEntry={true}
              onChangeText ={(value:string)=>setForm({...form,password:value})} 
             />

             <CustomButton
              onPress={()=>onSignInPress()}
              title='Sign In'
              bgVariant='primary'
              textVariant=''/>

              {/* OAuth */}
            <OAuth/>

              <Link style={styles.oAuth} href={'/(auth)/sign-up'}>
                <Text
                 style={{
                  textAlign:'center',
                  color:'rgba(155, 153, 155, 0.9)',
                  fontSize:13,
                  fontWeight:'400'
                  }}>Don't have an Account ? <Text style={{color:Colors.blue}}>Sign Up</Text></Text>
              </Link>

        </View>
      </View>
    </ScrollView>               
    <StatusBar style='auto'/>
  </View>
  )
}

export default SignIn