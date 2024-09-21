import { Text, View } from 'react-native'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronsUpDownIcon } from 'lucide-react-native'
import { colors } from '@/styles/colors'
import Divider from './ui/divider'
import OrderProductItem from './order-product-item'

export default function OrderItem() {
  const [isExpanded, setIsExpanded] = React.useState(true)

  return (
    <View className='border rounded-lg border-muted p-6'>
      <View className='flex-row justify-between items-center'>
        <Text className='text-muted-foreground'>Pedido: <Text className='text-xl text-foreground font-bold'>123456</Text><Text className={`${isExpanded ? "hidden" : ""}`}> em 21/09/2024</Text></Text>
        <Button
          variant="ghost"
          size="icon"
          onPress={() => setIsExpanded((current) => !current)}
        ><ChevronsUpDownIcon color={colors.primary.DEFAULT} /></Button>
      </View>

      {isExpanded && (
        <View className='mt-4 gap-4'>
          <View className='flex-row justify-between items-start'>
            <View className='justify-start items-start'>
              <Text className='text-muted-foreground'>Status</Text>
              <Text className='text-primary text-xl font-bold'>Pago</Text>
            </View>
            <View className='justify-start items-end'>
              <Text className='text-muted-foreground'>Data</Text>
              <Text className='text-primary text-xl font-bold'>21/09/2024</Text>
            </View>
          </View>
          <Divider />
          <View className='gap-2'>
            <OrderProductItem />
            <OrderProductItem />
            <OrderProductItem />
          </View>
          <Divider />
          <View className='flex-row justify-between items-center'>
            <Text className='text-muted-foreground'>Total</Text>
            <Text className='text-foreground text-xl font-bold'>R$ 2.097,00</Text>
          </View>
        </View>
      )}
    </View>
  )
}