import { useLocalSearchParams } from 'expo-router'
import { ScrollView, View } from 'react-native'
import { useState } from 'react'
import ProductDetailsImages from '@/components/product-details-images'
import ProductDetailsDescription from '@/components/product-details-description'
import { Button } from '@/components/ui/button'
import { Text } from '@/components/ui/text'
import ProductsSection from '@/components/products-section'

export default function Product() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const [selectedImageId, setSelectedImageId] = useState("1")

  const images = [
    { id: "1", src: require('@/assets/images/details/image1.png') },
    { id: "2", src: require('@/assets/images/details/image2.png') },
    { id: "3", src: require('@/assets/images/details/image3.png') },
    { id: "4", src: require('@/assets/images/details/image4.png') },
  ]

  return (
    <View className='mb-8'>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 36 }}>
        <View className='gap-6'>
          <ProductDetailsImages
            images={images}
            selectedImageId={selectedImageId}
            setSelectedImageId={setSelectedImageId}
          />
          <ProductDetailsDescription className="px-4" />
          <ProductsSection title='Mais de Mouses' />
        </View>
      </ScrollView>
      <Button className="mx-4 absolute top-2 right-0 left-0">
        <Text>Adicionar ao carrinho</Text>
      </Button>
    </View>
  )
}