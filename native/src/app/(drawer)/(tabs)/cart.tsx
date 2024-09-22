import { ScrollView, View } from 'react-native'
import React from 'react'
import { Text } from '@/components/ui/text'
import Divider from '@/components/ui/divider'
import CartResume from '@/components/cart-resume'
import { Button } from '@/components/ui/button'
import { mocks } from '@/lib/mocks'
import { formatCurrency } from '@/lib/utils'
import OrderProduct from '@/components/cart-item'

export default function Cart() {
  const {orders} = mocks

  const order = orders[0]

  return (
    <View className='bg-background w-full h-full p-6'>
      <ScrollView style={{ flex: 1 }}>
        <Text variant="header1">Carrinho</Text>

        <View className='w-full justify-start items-start gap-4 mt-6'>
          {order.products.map((orderProduct) => (
            <OrderProduct key={orderProduct.product.id} orderProduct={orderProduct} />
          ))}
        </View>

        <View className='w-full gap-2 mt-6'>
          <Divider />
          <CartResume label="Subtotal" value={formatCurrency(order.subTotal)} />
          <Divider />
          <CartResume label="Entrega" value="Grátis" />
          <Divider />
          <CartResume label="Descontos" value={formatCurrency(order.discount)} />
          <Divider />
          <CartResume label="Total" value={formatCurrency(order.total)} textClassName="text-xl font-bold" />
        </View>
      </ScrollView>
      <Button className='w-full'>
        <Text className='uppercase font-bold'>Finalizar compra</Text>
      </Button>
    </View>
  )
}