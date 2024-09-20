import { cn } from '@/lib/utils';
import { Image, Text, Pressable } from 'react-native';

interface ImageSliderItemProps {
  id: string
  src: any
  active?: boolean
  onPress?: () => void
}

export default function ProductDetailsImagesItem({ id, src, active, onPress }: ImageSliderItemProps) {
  return (
    <Pressable
      onPress={onPress}
      className={cn('size-28 bg-card rounded-lg border shadow-lg', active ? "border-primary" : "")}
    >
      <Image
        source={src}
        resizeMode='contain'
        className='w-full h-full'
      />
      <Text>{src}</Text>
    </Pressable>
  )
}
