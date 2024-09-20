import { Text, View } from 'react-native'
import React from 'react'
import { ClassNameValue } from 'tailwind-merge'
import { cn } from '@/lib/utils'

interface CartResumeProps {
  label: string
  value: string
  className?: ClassNameValue
  textClassName?: ClassNameValue
}

export default function CartResume({className, textClassName, label, value} : CartResumeProps) {
  return (
    <View className={cn('w-full px-4 flex-row justify-between items-center', className)}>
      <Text className={cn('text-foreground', textClassName)}>{label}</Text>
      <Text className={cn('text-foreground', textClassName)}>{value}</Text>
    </View>
  )
}