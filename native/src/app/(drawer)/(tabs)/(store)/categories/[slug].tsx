import ProductCard from '@/components/product-card'
import { useLocalSearchParams } from 'expo-router'
import { ScrollView, View } from 'react-native'
import { Text } from '@/components/ui/text'
import { mocks } from '@/lib/mocks'
import { useProducts } from '@/hooks/use-products'

export default function CategoryView() {
  const { slug } = useLocalSearchParams()
  const { products } = useProducts()
  const categoryProducts = products?.filter(product => product.category.toLowerCase() === slug)

  return (
    <View className='w-full h-full'>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 36, width: "100%" }}>
        <View className='w-full gap-6 p-6 mb-8'>
          <Text variant="header1" className="uppercase">{slug}</Text>
          <View className='w-full flex-row gap-6 flex-wrap justify-center items-center'>
            {categoryProducts?.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
            {categoryProducts?.length === 0 && (
              <Text className='text-center'>Nenhum produto cadastrado para esta categoria</Text>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}