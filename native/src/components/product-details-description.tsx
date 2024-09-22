import { View } from 'react-native';
import { Text } from '@/components/ui/text'
import Rating from '@/components/ui/rating'
import { ClassNameValue } from 'tailwind-merge';
import { calculateDiscountedPrice, cn, formatCurrency } from '@/lib/utils';
import DiscountBadge from './ui/discount-badge';
import { Product } from '@/types/type';

interface Props {
  product: Product
  className?: ClassNameValue
}

export default function ProductDetailsDescription({ product, className }: Props) {
  return (
    <View className={cn("gap-2", className)}>
      <Text variant='header1' className='capitalize'>{product.title}</Text>
      <Text className='text-primary'>Disponível em estoque </Text>
      <Rating />
      <View className='flex-row justify-start items-center gap-2 mt-6'>
        <Text variant='headerXxl'>{formatCurrency(product.sellPrice)}</Text>
        <DiscountBadge value={product.discount} />
      </View>
      {product.discount > 0 && (
        <Text className='text-muted-foreground line-through font-medium'>{`De: ${formatCurrency(product.originalPrice)}`}</Text>
      )}
      <Text variant='header2' className='mt-6'>Descrição</Text>
      <Text className='text-muted-foreground'>{product.description}</Text>
    </View>
  )
}
