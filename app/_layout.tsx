import 'react-native-get-random-values'
import { Stack } from 'expo-router';
import { useEffect } from 'react';

import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'
import { tokenCache } from '@/lib/auth';

export default function RootLayout() {

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}

  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <ClerkLoaded>
      <Stack>    
        <Stack.Screen name="index"  options={{headerShown:false}}/>
        <Stack.Screen name="(auth)"  options={{headerShown:false}}/>
        <Stack.Screen name="(root)"  options={{headerShown:false}}/>
        <Stack.Screen name="+not-found" />
      </Stack>
      </ClerkLoaded>
  </ClerkProvider>
   
  );
}
