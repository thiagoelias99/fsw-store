import ProductCard from '@/components/product-card'
import { useLocalSearchParams } from 'expo-router'
import { ScrollView, View } from 'react-native'
import { Text } from '@/components/ui/text'

export default function CategoryView() {
  const { slug } = useLocalSearchParams()

  return (
    <View className='w-full h-full'>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 36, width: "100%" }}>
        <View className='w-full gap-6 p-6 mb-8'>
          <Text variant="header1" className="uppercase">{slug}</Text>
          <View className='w-full flex-row gap-6 flex-wrap justify-center items-center'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}