import { Text, View } from 'react-native'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronsUpDownIcon } from 'lucide-react-native'
import { colors } from '@/styles/colors'
import Divider from './ui/divider'
import OrderProductItem from './order-product-item'
import { cn, formatCurrency } from '@/lib/utils'
import { Order } from '@/types/type'
import { OrderStatusEnumMapper } from '@/lib/enums'
import dayjs from 'dayjs'

interface OrderItemProps {
  order: Order
  className?: string
}

export default function OrderItem({ order, className }: OrderItemProps) {
  const [isExpanded, setIsExpanded] = React.useState(true)

  return (
    <View className={cn('border rounded-lg border-muted p-6', className)}>
      <View className='flex-row justify-between items-center'>
        <Text className='text-muted-foreground'>Pedido: <Text className='text-xl text-foreground font-bold'>{order.id}</Text><Text className={`${isExpanded ? "hidden" : ""}`}> em {dayjs(order.date).format("DD/MM/YYYY")}</Text></Text>
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
              <Text className='text-primary text-xl font-bold'>{OrderStatusEnumMapper(order.status)}</Text>
            </View>
            <View className='justify-start items-end'>
              <Text className='text-muted-foreground'>Data</Text>
              <Text className='text-primary text-xl font-bold'>{dayjs(order.date).format("DD/MM/YYYY")}</Text>
            </View>
          </View>
          <Divider />
          <View className='gap-2'>
            {order.products.map(({product, quantity, price}) => (
              <OrderProductItem key={product.id} product={product} quantity={quantity} price={price} />
            ))}
          </View>
          <Divider />
          <View className='flex-row justify-between items-center'>
            <Text className='text-muted-foreground'>Total</Text>
            <Text className='text-foreground text-xl font-bold'>{formatCurrency(order.total)}</Text>
          </View>
        </View>
      )}
    </View>
  )
}