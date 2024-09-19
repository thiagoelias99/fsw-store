import { Slot } from 'expo-router'
import React from 'react'
import { StatusBar, View } from 'react-native'
import RootHeader from '@/components/root-header'
import { colors } from '@/styles/colors'

export default function Layout() {
  return (
    <View className='bg-background pt-6 h-full'>
      <StatusBar
        barStyle='light-content'
        backgroundColor={colors.background}
        translucent
      />
      <RootHeader />
      <Slot />
    </View>
  )
}
