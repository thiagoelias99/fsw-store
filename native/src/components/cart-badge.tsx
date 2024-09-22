import { cn } from '@/lib/utils'
import { Text, View } from 'react-native'

interface CartBadgeProps {
  value?: number
  className?: string
}

export default function CartBadge({value, className}: CartBadgeProps) {
  if (!value) return null

  return (
    <View className={cn('bg-primary rounded-full size-5 justify-center items-center', className)}>
      <Text className='text-primary-foreground text-sm'>{value}</Text>
    </View>
  )
}