import { colors } from '@/styles/colors';
import "@/styles/global.css";
import { Slot } from 'expo-router';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <View className='bg-background w-full h-full pt-6'>
      <StatusBar
        barStyle='light-content'
        backgroundColor={colors.background}
        translucent
      />
      <SafeAreaView style={{ flex: 1 }}>
        <Slot />
      </SafeAreaView>
    </View>
  )
}