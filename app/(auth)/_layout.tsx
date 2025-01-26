import { useAuth } from "@clerk/clerk-expo";
import { Redirect, Stack } from "expo-router";

 const Layout = () =>{
    const {isSignedIn }= useAuth()
    if(isSignedIn){
        return <Redirect href={'/(root)/(tabs)/home'}/>
    }
        return(
            <Stack screenOptions={{headerShown:false,headerTransparent:true,statusBarHidden:false}}>
                <Stack.Screen name="welcome"/>
                <Stack.Screen name="sign-up"/>
                <Stack.Screen name="sign-in"/>
            </Stack>
        )
}

export default Layout