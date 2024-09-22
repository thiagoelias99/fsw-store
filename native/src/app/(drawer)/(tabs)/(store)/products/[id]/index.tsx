import { useLocalSearchParams } from 'expo-router'
import { ImageSourcePropType, ScrollView, View } from 'react-native'
import { useState } from 'react'
import ProductDetailsImages from '@/components/product-details-images'
import ProductDetailsDescription from '@/components/product-details-description'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import ProductsSection from '@/components/products-section'
import { mocks } from '@/lib/mocks'

export default function Product() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const [selectedImageId, setSelectedImageId] = useState("1")
  const {products} = mocks
  const product = products.find((product) => product.id === id)

  if (!product) return <Text>Produto não encontrado</Text>

  return (
    <View className='mb-8'>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 36 }}>
        <View className='gap-6'>
          <ProductDetailsImages
            images={product.images as ImageSourcePropType[]}
          />
          <ProductDetailsDescription className="px-4" product={product} />
          <ProductsSection title={`Mais de ${product.category}`} products={products.filter(item => item.category === product.category)} />
        </View>
      </ScrollView>
      <Button className="mx-4 absolute top-2 right-0 left-0">
        <Text>Adicionar ao carrinho</Text>
      </Button>
    </View>
  )
}