import { Image, View, Text } from 'react-native'
import React from 'react'
import { colors } from '@/styles/colors'
import { Button } from './ui/button'
import { ChevronLeftIcon, ChevronRightIcon, Trash2Icon } from 'lucide-react-native'
import { OrderProduct as OrderProductType } from '@/types/type'
import { ClassNameValue } from 'tailwind-merge'
import { cn, formatCurrency } from '@/lib/utils'
import { useCart } from '@/hooks/use-cart'

interface OrderProductProps {
  cartProduct: OrderProductType
  className?: ClassNameValue
}

export default function CartProduct({ cartProduct, className }: OrderProductProps) {
  const { removeProduct } = useCart()

  return (
    <View className={cn('w-full flex-row justify-between items-center', className)}>
      <View className='flex-row gap-4'>
        <Image
          source={{ uri: cartProduct.product.images[0].url }}
          style={{
            width: 80,
            height: 80,
            backgroundColor: colors.card.DEFAULT,
            borderRadius: 8,
          }}
          resizeMode='contain'
        />
        <View>
          <Text className='text-base text-foreground'>{cartProduct.product.title}</Text>
          <View className='flex-row justify-start items-baseline gap-2'>
            <Text className='text-xl text-foreground font-bold'>{formatCurrency(cartProduct.product.sellPrice * cartProduct.quantity)}</Text>
            {cartProduct.product.discount > 0 && (
              <Text className='text-sm text-muted-foreground line-through'>{formatCurrency(cartProduct.product.originalPrice * cartProduct.quantity)}</Text>
            )}
          </View>
          <View className="flex-row justify-start items-center">
            <Button variant="outline" size="icon">
              <ChevronLeftIcon color={colors.foreground} />
            </Button>
            <Text className='px-4 text-foreground text-lg'>{cartProduct.quantity}</Text>
            <Button variant="outline" size="icon">
              <ChevronRightIcon color={colors.foreground} />
            </Button>
          </View>
        </View>
      </View>

      <Button variant="destructive" size="icon" onPress={() => removeProduct(cartProduct.product.id)}>
        <Trash2Icon color={colors.destructive.foreground} size={24} />
      </Button>
    </View>
  )
}