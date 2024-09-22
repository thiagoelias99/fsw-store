import { ScrollView, View } from 'react-native'
import React from 'react'
import { Text } from '@/components/ui/text'
import OrderItem from '@/components/order-item'
import { mocks } from '@/lib/mocks'

export default function Categories() {
  const { orders } = mocks

  return (
    <View className='w-full h-full bg-background'>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 36, width: "100%" }}>
        <View className='w-full gap-6 p-6 mb-8'>
          <Text variant="header1">Meus Pedidos</Text>
          {orders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}