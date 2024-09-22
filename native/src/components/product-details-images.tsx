import React from 'react'
import { View, Image, FlatList, ImageSourcePropType } from 'react-native'
import ProductDetailsImagesItem from './product-details-images-item'

interface Props {
  images: ImageSourcePropType[]
}

export default function ProductDetailsImages({ images }: Props) {
  const [selectedImage, setSelectedImage] = React.useState(images[0])

  return (
    <View>
      <View className='w-full min-h-[380px] bg-card justify-center items-center'>
        <Image
          source={selectedImage}
          resizeMode='contain'
          className='w-full max-w-[270px]'
        />
      </View>

      <FlatList
        data={images}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 16, paddingTop: 28 }}
        renderItem={(item) => (
          <ProductDetailsImagesItem
            src={item.item}
            active={selectedImage === item.item}
            onPress={() => setSelectedImage(item.item)}
          />
        )}
        horizontal
      >
      </FlatList>
    </View>
  )
}
