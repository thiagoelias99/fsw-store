import "@/styles/global.css";
import { Slot } from 'expo-router';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle='light-content'
        backgroundColor='hsl(20 14.3% 4.1%)'
        translucent
      />
      <View className='pt-2 bg-background'>
        <Slot />
      </View>
    </SafeAreaView>
  )
}