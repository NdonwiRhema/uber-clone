import {Alert, Button, Dimensions, Image, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import styles from './sign-upStyles'
import { icons, images } from '@/constants'
import { StatusBar } from 'expo-status-bar'
import InputField from '@/components/InputField'
import CustomButton from '@/components/CustomButton'
import { Link, router } from 'expo-router'
import { Colors } from '@/constants/Colors'
import OAuth from '@/components/OAuth'
import { useSignUp } from '@clerk/clerk-expo'
import { TextInput } from 'react-native'
import { fetchAPI } from '@/lib/fetch'

const signUp = () => {
  const { isLoaded, signUp, setActive } = useSignUp()
  const[form,setForm] = useState({
    name:'',
    email:'',
    password:""
  });
  const [verification,setVerification] = useState({
    state:'default',
    error:'',
    code:''
  })
  const [pendingVerification, setPendingVerification] = React.useState(false)
  const [code, setCode] = React.useState('')

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    
    if (!isLoaded) return

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress:form.email,
        password:form.password,
      })

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })
    
      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setPendingVerification(true)
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      setVerification({...verification,state:'pending',error:err.errors[0].longMessage})
      Alert.alert('Error',err.errors[0].longMessage)
    }
  }

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code:verification.code
      })

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === 'complete') {
        console.log(signUpAttempt.createdUserId,form.email,form.name)
        // creating a Database user
        await fetchAPI('/(api)/users',{
          method:'POST',
          body:JSON.stringify({
            name:form.name,
            email:form.email,
            clerkId: signUpAttempt.createdUserId,
          }),
        })

        await setActive({ session: signUpAttempt.createdSessionId })
        setVerification({...verification,state:'success'})
        router.replace('/(root)/(tabs)/home')
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        setVerification({...verification,state:'failed',error:'Verification failed .'})
        console.error(JSON.stringify(signUpAttempt, null, 2))
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      setVerification({...verification,error:'Verification Failed.',state:'failed'})
      console.error(JSON.stringify(err, null, 2))
      //Todo : Proper error handling use an Alert
    }
  }

  if (pendingVerification) {
    return (
      <>
      
        <Text>Verify your email</Text>
        <TextInput
          value={verification.code}
          placeholder="Enter your verification code"
          onChangeText={(code)=> setVerification({...verification,code:code})}
          keyboardType='numeric'
        />
        <Button title="Verify" onPress={()=>onVerifyPress()} />
      </>
    )
  }

  return (
    <View>
      <ScrollView style={styles.scrollContainer}>
        <View>
          <View style={styles.scrollHeader}>
             <Image source={images.signUpCar} style={{ width:'100%',height:'80%'}}/>
             <Text style={styles.headingText}>Create Your Account</Text>
         
          </View>
          <View style={{padding:5,height:Dimensions.get('screen').height*0.6, position:'relative',bottom:30}}>
              <InputField
               label='Name'
                placeholder='Enter your name'
                Icons ={icons.person}
                value={form.name}
                onChangeText ={(value:string)=>setForm({...form,name:value})} 
               />
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
                onPress={()=>onSignUpPress()}
                title='Sign Up'
                bgVariant='primary'
                textVariant=''/>

                {/* OAuth */}
              <OAuth/>

                <Link style={styles.oAuth} href={'/(auth)/sign-in'}>
                  <Text style={{
                    textAlign:'center',
                    color:'rgba(155, 153, 155, 0.9)',
                    fontSize:13,
                    fontWeight:'400'

                    }}>Already have an Account ? <Text style={{color:Colors.blue}}>Log In</Text></Text>
                </Link>

          </View>
        </View>
      </ScrollView>
      <StatusBar style='auto'/>
    </View>
  )
}

export default signUp