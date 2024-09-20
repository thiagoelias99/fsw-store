import React from 'react'
import { View, Image, FlatList } from 'react-native'
import ProductDetailsImagesItem from './product-details-images-item'

interface Props {
  images: { id: string, src: any }[]
  selectedImageId: string
  setSelectedImageId: (id: string) => void
}

export default function ProductDetailsImages({ images, selectedImageId, setSelectedImageId }: Props) {
  return (
    <View>
      <View className='w-full min-h-[380px] bg-card justify-center items-center'>
        <Image
          source={images.find((image) => image.id === selectedImageId)?.src}
          resizeMode='contain'
          className='w-full max-w-[270px]'
        />
      </View>

      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 16, paddingTop: 28 }}
        renderItem={(item) => (
          <ProductDetailsImagesItem
            id={item.item.id}
            src={item.item.src}
            active={selectedImageId === item.item.id}
            onPress={() => setSelectedImageId(item.item.id)}
          />
        )}
        horizontal
      >
      </FlatList>
    </View>

  )
}
