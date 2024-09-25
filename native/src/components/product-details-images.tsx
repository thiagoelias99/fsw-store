import React from 'react'
import { View, Image, FlatList, ImageSourcePropType } from 'react-native'
import ProductDetailsImagesItem from './product-details-images-item'
import { ProductImage } from '@/types/type'

interface Props {
  images: ProductImage[]
}

export default function ProductDetailsImages({ images }: Props) {
  const [selectedImage, setSelectedImage] = React.useState(images[0])

  return (
    <View>
      <View className='w-full min-h-[380px] bg-card justify-center items-center'>
        <Image
          source={{ uri: selectedImage?.url }}
          alt={selectedImage?.alt}
          resizeMode='contain'
          className='size-72'
        />
      </View>

      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 16, paddingTop: 28 }}
        renderItem={(item) => (
          <ProductDetailsImagesItem
            src={{ uri: item.item.url }}
            active={selectedImage.id === item.item.id}
            onPress={() => setSelectedImage(item.item)}
          />
        )}
        horizontal
      >
      </FlatList>
    </View>
  )
}
