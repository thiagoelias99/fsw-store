import { View } from 'react-native'
import React from 'react'
import { ClassNameValue } from 'tailwind-merge'
import { cn } from '@/lib/utils'

export default function Divider({ className }: { className?: ClassNameValue }) {
  return (
    <View className={cn('h-0.5 w-full bg-muted rounded-full', className)}>
    </View>
  )
}