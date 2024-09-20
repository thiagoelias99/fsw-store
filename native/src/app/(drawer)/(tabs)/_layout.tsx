import { Tabs } from 'expo-router'
import React from 'react'
import { View, Text as RNText } from 'react-native'
import { colors } from '@/styles/colors'
import { SettingsIcon, ShoppingBagIcon, StoreIcon } from 'lucide-react-native'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.card.DEFAULT,
          borderTopWidth: 0,
          minHeight: 74,
          borderColor: colors.card.DEFAULT,
        },
        tabBarShowLabel: false,
        tabBarItemStyle: {
          paddingBottom: 16,
          paddingTop: 16
        },
        tabBarActiveTintColor: colors.primary.DEFAULT,
        tabBarInactiveTintColor: colors.muted.foreground,
      }}
    >
      <Tabs.Screen
        name="(store)"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View className='justify-center items-center'>
              <StoreIcon color={color} size={size} />
              <RNText style={{ color: color }} className='text-sm'>Início</RNText>
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View className='justify-center items-center'>
              <ShoppingBagIcon color={color} size={size} />
              <RNText style={{ color: color }} className='text-sm'>Pedidos</RNText>
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View className='justify-center items-center'>
              <SettingsIcon color={color} size={size} />
              <RNText style={{ color: color }} className='text-sm'>Configurações</RNText>
            </View>
          )
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          href: null
        }}
      />
    </Tabs>
  )
}
