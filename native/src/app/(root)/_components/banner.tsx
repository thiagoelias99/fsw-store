import React from 'react'
import { View, Image } from 'react-native'
import PagerView from 'react-native-pager-view'

export default function HomeScreenBanner() {
  return (
    <View className='w-full h-[150px] px-5 rounded-2xl'>
      <PagerView style={{ flex: 1, gap: 16 }} initialPage={0}>
        <View key="1">
          <Image
            source={require('@/assets/images/banner-home-1.png')}
            className='w-full h-full rounded-2xl'
            resizeMode='cover'
          />
        </View>
        <View key="2">
          <Image
            source={require('@/assets/images/banner-home-2.png')}
            className='w-full h-full rounded-2xl'
            resizeMode='cover'
          />
        </View>
        <View key="3">
          <Image
            source={require('@/assets/images/banner-home-3.png')}
            className='w-full h-full rounded-2xl'
            resizeMode='cover'
          />
        </View>
      </PagerView>
    </View>
  )
}
