import { ScrollView, View } from 'react-native'
import React from 'react'
import { Text } from '@/components/ui/text'
import CartItem from '@/components/cart-item'
import Divider from '@/components/ui/divider'
import CartResume from '@/components/cart-resume'
import { Button } from '@/components/ui/button'

export default function Cart() {
  return (
    <View className='bg-background w-full h-full p-6'>
      <ScrollView style={{ flex: 1 }}>
        <Text variant="header1">Carrinho</Text>

        <View className='w-full justify-start items-start gap-4 mt-6'>
          <CartItem />
          <CartItem />
          <CartItem />
        </View>

        <View className='w-full gap-2 mt-6'>
          <Divider />
          <CartResume label="Subtotal" value="R$ 2.097,00" />
          <Divider />
          <CartResume label="Entrega" value="Grátis" />
          <Divider />
          <CartResume label="Descontos" value="-R$ 2.097,00" />
          <Divider />
          <CartResume label="Total" value="R$ 2.097,00" textClassName="text-xl font-bold" />
        </View>
      </ScrollView>
      <Button className='w-full'>
        <Text className='uppercase font-bold'>Finalizar compra</Text>
      </Button>
    </View>
  )
}