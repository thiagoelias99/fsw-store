import React from 'react'
import { View, Text } from 'react-native'
import { Button } from './ui/button'
import { MenuIcon, ShoppingCartIcon } from 'lucide-react-native'
import { colors } from '@/styles/colors'
import { useNavigation, router } from "expo-router"
import { DrawerActions } from '@react-navigation/native'
import CartBadge from './cart-badge'
import { useCart } from '@/hooks/use-cart'

export default function RootHeader() {
  const navigation = useNavigation()
  const { data } = useCart()

  const toggleDrawer = () => navigation.dispatch(DrawerActions.toggleDrawer())

  return (
    <>
      <View className='w-full flex-row justify-between items-center px-6'>
        <Button
          variant='outline'
          size='icon'
          onPress={toggleDrawer}
        >
          <MenuIcon color={colors.foreground} />
        </Button>
        <Text className='text-foreground text-2xl'>TE's Store</Text>
        <Button
          variant='outline'
          size='icon'
          onPress={() => router.navigate("/cart")}
          className='relative'
        >
          <ShoppingCartIcon color={colors.foreground} />
          <CartBadge
            value={data?.products.length || 0}
            className='absolute translate-x-5 translate-y-4'
          />
        </Button>
      </View>
      <View className='w-full bg-card h-0.5 mt-6'></View>
    </>
  )
}
