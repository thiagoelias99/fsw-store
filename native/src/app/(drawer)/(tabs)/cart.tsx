import { ActivityIndicator, ScrollView, View } from 'react-native'
import React from 'react'
import { Text } from '@/components/ui/text'
import Divider from '@/components/ui/divider'
import CartResume from '@/components/cart-resume'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/utils'
import OrderProduct from '@/components/cart-item'
import { useCart } from '@/hooks/use-cart'

export default function Cart() {
  const { data: cart, isLoading } = useCart()

  return (
    <View className='bg-background w-full h-full p-6'>
      {isLoading ? (
        <ActivityIndicator
          size={42}
          className='flex-1 justify-center items-center bg-zinc-950 text-lime-300'
        />
      ) : (
        <>
          <ScrollView style={{ flex: 1 }}>
            <Text variant="header1">Carrinho</Text>

            <View className='w-full justify-start items-start gap-4 mt-6'>
              {cart?.products.map((cartProduct) => (
                <OrderProduct key={cartProduct.product.id} orderProduct={{ ...cartProduct, price: cartProduct.product.sellPrice }} />
              ))}
            </View>

            <View className='w-full gap-2 mt-6'>
              <Divider />
              <CartResume label="Subtotal" value={formatCurrency(cart?.subTotal)} />
              <Divider />
              <CartResume label="Entrega" value="Grátis" />
              <Divider />
              <CartResume label="Descontos" value={formatCurrency(cart?.discount)} />
              <Divider />
              <CartResume label="Total" value={formatCurrency(cart?.total)} textClassName="text-xl font-bold" />
            </View>
            <View className='w-full h-16'></View>
          </ScrollView>
          <Button className='w-full'>
            <Text className='uppercase font-bold'>Finalizar compra</Text>
          </Button>
        </>
      )
      }
    </View >
  )
}