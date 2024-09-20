import React from 'react'
import { View, Text } from 'react-native'
import { Button } from './ui/button'
import { MenuIcon, ShoppingCartIcon } from 'lucide-react-native'
import { colors } from '@/styles/colors'

export default function RootHeader() {
  return (
    <>
      <View className='flex-row justify-between items-center px-6'>
        <Button variant='outline' size='icon'>
          <MenuIcon color={colors.foreground} />
        </Button>
        <Text className='text-foreground text-2xl'>TE's Store</Text>
        <Button variant='outline' size='icon'>
          <ShoppingCartIcon color={colors.foreground} />
        </Button>
      </View>
      <View className='w-full bg-card h-0.5 mt-6'></View>
    </>
  )
}
