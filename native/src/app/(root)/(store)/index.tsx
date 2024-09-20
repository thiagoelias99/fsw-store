import React from 'react'
import { ScrollView, View } from 'react-native'

import ProductsSection from '@/components/products-section';
import { colors } from '@/styles/colors';
import HomeScreenBanner from '@/components/banner';

const Home = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, backgroundColor: colors.background }}
      showsVerticalScrollIndicator={false}
    >
      <View className='h-full justify-start items-start py-7 gap-7'>
        <HomeScreenBanner />
        <ProductsSection title='Ofertas' />
        <HomeScreenBanner />
        <ProductsSection title='Mouses' />
        <HomeScreenBanner />
        <ProductsSection title='Teclados' />
      </View>
    </ScrollView>
  )
}

export default Home