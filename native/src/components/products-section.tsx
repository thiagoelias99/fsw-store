import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from '@/components/ui/text';
import ProductCard from '@/components/product-card';
import { ClassNameValue } from 'tailwind-merge';
import { cn } from '@/lib/utils';
import { Product } from '@/types/type';

interface Props {
  title: string
  products: Product[]
  className?: ClassNameValue
}

export default function ProductsSection({ title, products, className }: Props) {
  return (
    <View className={cn('w-full gap-2', className)}>
      <Text variant='header1' className='uppercase px-6'>{title}</Text>
      <FlatList
        data={products}
        keyExtractor={(product) => product.id}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
        renderItem={(product) => <ProductCard product={product.item} />}
        horizontal
      >
      </FlatList>
    </View>
  )
}
