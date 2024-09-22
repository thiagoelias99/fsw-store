import { Text, View, Image, ImageSourcePropType } from 'react-native'
import { colors } from '@/styles/colors'
import { cn, formatCurrency } from '@/lib/utils'
import { Product } from '@/types/type'

interface OrderProductItemProps {
  product: Product
  quantity: number
  price: number
  className?: string
}

export default function OrderProductItem({ product, quantity, price, className }: OrderProductItemProps) {
  return (
    <View className={cn('flex-row gap-4', className)}>
      <Image
        source={product.images[0] as ImageSourcePropType}
        style={{
          width: 80,
          height: 80,
          backgroundColor: colors.card.DEFAULT,
          borderRadius: 8,
        }}
        resizeMode='contain'
      />
      <View className='justify-between'>
        <Text className='text-base text-foreground'>{product.title}</Text>
        <Text className='text-xl text-foreground font-bold'>{formatCurrency(price)}</Text>
        <Text className='text-muted-foreground'>Qnt: <Text className='text-foreground text-lg'>{quantity}</Text></Text>
      </View>
    </View>
  )
}