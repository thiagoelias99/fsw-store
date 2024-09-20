import { StyleSheet, Image, View, Text } from 'react-native'
import React from 'react'
import { colors } from '@/styles/colors'
import { Button } from './ui/button'
import { ChevronLeftIcon, ChevronRightIcon, Trash2Icon } from 'lucide-react-native'

export default function CartItem() {
  return (
    <View className='w-full flex-row justify-between items-center'>
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
        <View>
          <Text className='text-base text-foreground'>Logitech MX Master 3s</Text>
          <View className='flex-row justify-start items-baseline gap-2'>
            <Text className='text-xl text-foreground font-bold'>R$ 699,00</Text>
            <Text className='text-sm text-muted-foreground line-through'>R$ 799,99</Text>
          </View>
          <View className="flex-row justify-start items-center">
            <Button variant="outline" size="icon">
              <ChevronLeftIcon color={colors.foreground} />
            </Button>
            <Text className='px-4 text-foreground text-lg'>1</Text>
            <Button variant="outline" size="icon">
              <ChevronRightIcon color={colors.foreground} />
            </Button>
          </View>
        </View>
      </View>

      <Button variant="destructive" size="icon">
        <Trash2Icon color={colors.destructive.foreground} size={24} />
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({})