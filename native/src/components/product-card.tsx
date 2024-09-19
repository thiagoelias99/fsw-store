import { Pressable, Image, View } from 'react-native';
import { Text } from './ui/text';
import { ArrowDownIcon, StarIcon } from 'lucide-react-native';
import { colors } from '@/styles/colors';

export default function ProductCard() {
  return (
    <Pressable className='w-[156px] shadow'>
      <View className='relative w-full h-[170px] bg-card rounded-2xl justify-center items-center'>
        <View className='absolute top-4 left-4 flex-row justify-start items-center gap-0.5 bg-primary px-2 py-0.5 rounded-full'>
          <ArrowDownIcon color={colors.foreground} size={16} />
          <Text>55%</Text>
        </View>
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
      <View className='w-full flex-row justify-start gap-0.5'>
        <StarIcon color={colors.primary.DEFAULT} size={16} fill={colors.primary.DEFAULT} />
        <StarIcon color={colors.primary.DEFAULT} size={16} fill={colors.primary.DEFAULT} />
        <StarIcon color={colors.primary.DEFAULT} size={16} fill={colors.primary.DEFAULT} />
        <StarIcon color={colors.primary.DEFAULT} size={16} fill={colors.primary.DEFAULT} />
        <StarIcon color={colors.primary.DEFAULT} size={16} />
      </View>
    </Pressable>
  )
}
