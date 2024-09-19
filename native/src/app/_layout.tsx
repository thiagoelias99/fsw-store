import "@/styles/global.css";
import { Slot } from 'expo-router';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaView>
      <View className='bg-background h-screen'>
        <Slot />
      </View>
    </SafeAreaView>
  )
}