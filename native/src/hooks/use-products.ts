import { api } from '@/lib/axios'
import { Product } from '@/types/type'
import { useQuery, useQueryClient } from '@tanstack/react-query'

interface Props {
  filter?: string
}

const endPoint = '/fsw-store'

export const useProducts = (props?: Props) => {
  const queryClient = useQueryClient()

  const { data: products, isLoading: isLoadingProducts } = useQuery({
    queryKey: ['products', props?.filter],
    queryFn: async () => {
      try {
        const { data } = await api.get<Product[]>(`${endPoint}/products`)
        return data
      } catch (error) {
        console.error(error)
        return []
      }
    },
  })

  return { products, isLoadingProducts }
}
