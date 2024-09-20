import { View } from 'react-native';
import { Text } from '@/components/ui/text'
import Rating from '@/components/ui/rating'
import { ClassNameValue } from 'tailwind-merge';
import { cn } from '@/lib/utils';
import DiscountBadge from './ui/discount-badge';

interface Props {
  className?: ClassNameValue
}

export default function ProductDetailsDescription({ className }: Props) {
  return (
    <View className={cn("gap-2", className)}>
      <Text variant='header1'>Logitech MX Master 3s</Text>
      <Text className='text-primary'>Disponível em estoque </Text>
      <Rating />
      <View className='flex-row justify-start items-center gap-2 mt-6'>
        <Text variant='headerXxl'>R$ 399,99</Text>
        <DiscountBadge value={20} />
      </View>
      <Text className='text-muted-foreground line-through font-medium'>De: R$ 499,99</Text>
      <Text variant='header2' className='mt-6'>Descrição</Text>
      <Text className='text-muted-foreground'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
    </View>
  )
}
