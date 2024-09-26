import { Image, View, Text } from 'react-native'
import React from 'react'
import { colors } from '@/styles/colors'
import { Button } from './ui/button'
import { ChevronLeftIcon, ChevronRightIcon, Trash2Icon } from 'lucide-react-native'
import { OrderProduct as OrderProductType } from '@/types/type'
import { ClassNameValue } from 'tailwind-merge'
import { cn, formatCurrency } from '@/lib/utils'

interface OrderProductProps {
  orderProduct: OrderProductType
  className?: ClassNameValue
}

export default function OrderProduct({orderProduct, className} : OrderProductProps) {
  return (
    <View className={cn('w-full flex-row justify-between items-center', className)}>
      <View className='flex-row gap-4'>
        <Image
          source={{ uri: orderProduct.product.images[0].url }}		
          style={{
            width: 80,
            height: 80,
            backgroundColor: colors.card.DEFAULT,
            borderRadius: 8,
          }}
          resizeMode='contain'
        />
        <View>
          <Text className='text-base text-foreground'>{orderProduct.product.title}</Text>
          <View className='flex-row justify-start items-baseline gap-2'>
            <Text className='text-xl text-foreground font-bold'>{formatCurrency(orderProduct.product.sellPrice * orderProduct.quantity)}</Text>
            {orderProduct.product.discount > 0 && (
              <Text className='text-sm text-muted-foreground line-through'>{formatCurrency(orderProduct.product.originalPrice * orderProduct.quantity)}</Text>
            )}
          </View>
          <View className="flex-row justify-start items-center">
            <Button variant="outline" size="icon">
              <ChevronLeftIcon color={colors.foreground} />
            </Button>
            <Text className='px-4 text-foreground text-lg'>{orderProduct.quantity}</Text>
            <Button variant="outline" size="icon">
              <ChevronRightIcon color={colors.foreground} />
            </Button>
          </View>
        </View>
      </View>

      <Button variant="destructive" size="icon">
        <Trash2Icon color={colors.destructive.foreground} size={24} />
      </Button>
    </View>
  )
}