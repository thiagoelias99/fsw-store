import { ArrowDownIcon } from 'lucide-react-native'
import React from 'react'
import { View } from 'react-native'
import { Text } from '@/components/ui/text';
import { colors } from '@/styles/colors';
import { ClassNameValue } from 'tailwind-merge';
import { cn } from '@/lib/utils';

interface Props {
  value: number
  className?: ClassNameValue
}

export default function DiscountBadge({ value, className }: Props) {
  return (
    <View className={cn('flex-row justify-start items-center gap-0.5 bg-primary px-2 py-0.5 rounded-full h-8', className)}>
      <ArrowDownIcon color={colors.foreground} size={16} />
      <Text>{value}%</Text>
    </View>
  )
}
