import { api } from '@/lib/axios'
import { Category, Product } from '@/types/type'
import { useQuery, useQueryClient } from '@tanstack/react-query'

const endPoint = '/fsw-store'

export const useCategories = () => {
  const queryClient = useQueryClient()

  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      try {
        const { data } = await api.get<Category[]>(`${endPoint}/categories`)
        return data
      } catch (error) {
        console.error(error)
        return []
      }
    },
  })

  return { categories, isLoading }
}
