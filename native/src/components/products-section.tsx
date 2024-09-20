import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from '@/components/ui/text';
import ProductCard from '@/components/product-card';
import { ClassNameValue } from 'tailwind-merge';
import { cn } from '@/lib/utils';

interface Props {
  title: string
  className?: ClassNameValue
}

export default function ProductsSection({ title, className }: Props) {
  return (
    <View className={cn('w-full gap-2', className)}>
      <Text variant='header1' className='uppercase px-6'>{title}</Text>
      <FlatList
        data={[1, 2, 3, 4]}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
        renderItem={() => <ProductCard />}
        horizontal
      >
      </FlatList>
    </View>
  )
}
