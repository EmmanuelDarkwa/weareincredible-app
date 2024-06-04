import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
import { useOAuth } from '@clerk/clerk-expo';


WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <Image source={require('./../../assets/images/inc.jpg')}
      className="w-full h-[400px] object-cover"
      />
      <View className='p-14 mt-[-20px] bg-red-600 rounded-t-3xl shadow-md'>
        <Text className='text-[35px] font-bold text-slate'>We Are Incredible</Text>
        <Text className='text-[20px] text-white mt-6'>EMBRACE THE CHALLENGE.</Text>
        <Text className='text-[20px] text-white mt-2'>ACHIEVE GREATNESS.</Text>
        <Text className='text-white mt-2'>Your fitness journey begins with a single step</Text>
        <TouchableOpacity onPress={onPress} className='p-3 bg-black rounded-full mt-20'>
          <Text className='text-white text-center text-[18px]'>Let's get Incredible</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}