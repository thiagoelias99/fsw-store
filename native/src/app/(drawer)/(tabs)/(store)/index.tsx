import React from 'react'
import { ScrollView, View } from 'react-native'

import ProductsSection from '@/components/products-section';
import { colors } from '@/styles/colors';
import HomeScreenBanner from '@/components/banner';
import { useProducts } from '@/hooks/use-products';

const Home = () => {
  const { products, isLoadingProducts } = useProducts()

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.background }}
      showsVerticalScrollIndicator={false}
    >
      <View className='h-full justify-start items-start py-7 gap-7'>
        <HomeScreenBanner />
        <ProductsSection
          title='Ofertas'
          products={products}
          isLoading={isLoadingProducts}
        />
        <HomeScreenBanner />
        <ProductsSection
          title='Mouses'
          products={products?.filter(product => product.category.toLowerCase() === "mouses")}
          isLoading={isLoadingProducts}
        />
        <HomeScreenBanner />
        <ProductsSection
          title='Teclados'
          products={products?.filter(product => product.category.toLowerCase() === "teclados")}
          isLoading={isLoadingProducts}
        />
      </View>
    </ScrollView>
  )
}

export default Home