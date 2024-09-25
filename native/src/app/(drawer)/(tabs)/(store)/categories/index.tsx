import { Image, ImageSourcePropType, Pressable, ScrollView, View } from 'react-native'
import React from 'react'
import { Text } from '@/components/ui/text'
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '@/styles/colors';
import { router } from "expo-router"
import { Category } from '@/types/type';
import { ClassNameValue } from 'tailwind-merge';
import { cn } from '@/lib/utils';
import { mocks } from '@/lib/mocks';
import { useCategories } from '@/hooks/use-categories';

export default function Categories() {
  const { categories } = useCategories()

  return (
    <View className='w-full h-full'>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 36, width: "100%" }}>
        <View className='w-full gap-6 p-6 mb-8'>
          <Text variant="header1">Catálogo</Text>
          <View className='w-full flex-row gap-6 flex-wrap justify-center items-center'>
            {categories?.map((category, index) => (
              <CategoryItem key={index} category={category} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

interface CategoryItemProps {
  category: Category
  className?: ClassNameValue
}

const CategoryItem = ({ category, className }: CategoryItemProps) => {
  return (
    <Pressable
      className={cn('w-[160px] rounded-t-lg', className)}
      onPress={() => router.navigate({
        pathname: "/categories/[slug]",
        params: { slug: category.slug }
      })}
    >
      <LinearGradient
        colors={[colors.primary.DEFAULT, colors.secondary.DEFAULT]}
        start={[0, 1]}
        end={[1, 0]}
        className='w-full h-[150px] justify-center items-center rounded-lg'
      >
        <Image
          source={{ uri: category.image }}
          resizeMode='contain'
          className='size-28'
          
        />
      </LinearGradient>
      <View className='bg-card h-11 rounded-b-lg justify-center items-center'>
        <Text variant="header2">{category.name}</Text>
      </View>
    </Pressable>
  )
}