import React from 'react'
import { FlatList, View } from 'react-native'
import { Text } from '@/components/ui/text';
import ProductCard from '@/components/product-card';

export default function ProductsSection() {
  return (
    <>
      <Text variant='header1' className='uppercase px-6'>Ofertas</Text>
      <FlatList
        data={[1, 2, 3, 4]}
        keyExtractor={(item) => item.toString()}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 16 }}
        renderItem={() => <ProductCard />}
        horizontal
      >
      </FlatList>
    </>
  )
}
