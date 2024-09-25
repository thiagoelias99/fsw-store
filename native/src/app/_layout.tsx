import { colors } from '@/styles/colors';
import "@/styles/global.css";
import { Slot } from 'expo-router';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import RootHeader from '@/components/root-header';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/query-client';

export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <View className='bg-background w-full h-full pt-6'>
          <StatusBar
            barStyle='light-content'
            backgroundColor={colors.background}
            translucent
          />
          <SafeAreaView style={{ flex: 1 }}>
            <RootHeader />
            <Slot />
          </SafeAreaView>
        </View>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}