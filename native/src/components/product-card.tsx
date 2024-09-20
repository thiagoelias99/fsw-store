import { Pressable, Image, View } from 'react-native';
import { Text } from './ui/text';
import { ArrowDownIcon, StarIcon } from 'lucide-react-native';
import { colors } from '@/styles/colors';
import { Redirect, router, useLocalSearchParams } from "expo-router"
import Rating from './ui/rating';
import DiscountBadge from './ui/discount-badge';

export default function ProductCard() {
  const id = "dasda-asdads-asdasdas-asdasdas"

  return (
    <Pressable
      className='w-[156px] shadow'
      onPress={() => router.push(`/products/${id}`)}
    >
      <View className='relative w-full h-[170px] bg-card rounded-2xl justify-center items-center'>
        <DiscountBadge value={65} className="absolute top-4 left-4" />
        <Image
          source={require('@/assets/images/mouse.png')}
          className='size-24 translate-y-4'
          resizeMode='cover'
        />
      </View>
      <Text className='text-sm font-medium'>G Pro X Superlight</Text>
      <View className='flex-row justify-start items-baseline gap-1 py-0.5'>
        <Text className='text-lg font-bold'>$149.99</Text>
        <Text className='text-sm text-muted-foreground line-through'>$99.99</Text>
      </View>
      <Rating />
    </Pressable>
  )
}
