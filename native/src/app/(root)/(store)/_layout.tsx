import RootHeader from '@/components/root-header';
import "@/styles/global.css";
import { Slot } from 'expo-router';
import { View } from 'react-native';

export default function Layout() {
  return (
    <View className='bg-background pb-20'>
        <RootHeader />
        <Slot />
    </View>
  )
}