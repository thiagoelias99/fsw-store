import { Pressable, Image, View, ImageSourcePropType } from 'react-native';
import { Text } from './ui/text';
import { router } from "expo-router"
import Rating from './ui/rating';
import DiscountBadge from './ui/discount-badge';
import { Product } from '@/types/type';
import { calculateDiscountedPrice, formatCurrency } from '@/lib/utils';

interface ProductCardProps {
  product: Product,
  className?: string
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Pressable
      className='w-[156px] shadow'
      onPress={() => router.push(`/products/${product.id}`)}
    >
      <View className='relative w-full h-[170px] bg-card rounded-2xl justify-center items-center'>
        <DiscountBadge value={product.discount} className="absolute top-4 left-4" />
        <Image
          source={product.images[0] as ImageSourcePropType}
          className='size-24 translate-y-4'
          resizeMode='cover'
        />
      </View>
      <Text className='text-sm font-medium'>{product.title}</Text>
      <View className='flex-row justify-start items-baseline gap-1 py-0.5'>
        <Text className='text-lg font-bold'>{formatCurrency(product.sellPrice)}</Text>
        {product.discount > 0 && (
          <Text className='text-sm text-muted-foreground line-through'>{formatCurrency(product.originalPrice)}</Text>
        )}
      </View>
      <Rating />
    </Pressable>
  )
}
