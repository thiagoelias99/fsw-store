import { ScrollView, View } from 'react-native'
import React from 'react'
import { Text } from '@/components/ui/text'
import OrderItem from '@/components/order-item'

export default function Categories() {
  return (
    <View className='w-full h-full bg-background'>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 36, width: "100%" }}>
        <View className='w-full gap-6 p-6 mb-8'>
          <Text variant="header1">Meus Pedidos</Text>
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </View>
      </ScrollView>
    </View>
  )
}