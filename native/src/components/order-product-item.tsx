import { Text, View, Image } from 'react-native'
import { colors } from '@/styles/colors'

export default function OrderProductItem() {
  return (
    <View className='flex-row gap-4'>
      <Image
        source={require('@/assets/images/mouse.png')}
        style={{
          width: 80,
          height: 80,
          backgroundColor: colors.card.DEFAULT,
          borderRadius: 8,
        }}
        resizeMode='contain'
      />
      <View className='justify-between'>
        <Text className='text-base text-foreground'>Logitech MX Master 3s</Text>
        <Text className='text-xl text-foreground font-bold'>R$ 699,00</Text>
        <Text className='text-muted-foreground'>Qnt: <Text className='text-foreground text-lg'>1</Text></Text>
      </View>
    </View>
  )
}