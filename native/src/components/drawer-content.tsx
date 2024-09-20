import { View, ScrollView, Pressable, Text } from 'react-native'
import React from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { cn } from '@/lib/utils'
import { router, usePathname } from "expo-router"


export default function DrawerContent(props: DrawerContentComponentProps) {
  const pathname = usePathname();

  const customRoutes = [
    { label: 'Loja', href: '/' },
    { label: 'Categorias', href: '/categories' },
    { label: 'Pedidos', href: '/orders' },
    { label: 'Configurações', href: '/settings' },
  ]
  return (
    <View className='flex-1 overflow-hidden'>

      {/* Header */}
      <View>
        <Text className='text-foreground'>Header</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 36 }}
      >

        <View className='mt-2'>
          {/* Custom options */}
          {customRoutes.map((route, index) => {
            const isFocused = pathname === route.href
            const onPress = () => {
              router.push(route.href)
            }
            return (
              <Pressable
                key={index}
                onPress={onPress}
                className='py-2'>
                <Text
                  className={cn("text-muted-foreground text-lg px-4 py-2",
                    {
                      "text-primary-foreground bg-primary rounded-r-lg": isFocused
                    }
                  )}>{route.label}</Text>
              </Pressable>
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}
