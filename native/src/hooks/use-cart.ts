import { api } from '@/lib/axios'
import { Cart } from '@/types/type'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import uuid from 'react-native-uuid'
import { nativeStorage } from './use-storage';

const endPoint = '/fsw-store'

export const useCart = () => {
  const [cartId, setCartId] = useState<string | null>(null)
  const queryClient = useQueryClient()

  useEffect(() => {
    getCartId()
  }, [])

  async function getCartId() {
    let cartId = await nativeStorage.get('cartId')
    if (!cartId) {
      try {
        cartId = uuid.v4() as string
        await nativeStorage.save('cartId', cartId)

      } catch (error) {
        console.error(error)
      }
    }
    setCartId(cartId)
  }

  const { data, isLoading } = useQuery({
    queryKey: ['cart'],
    enabled: cartId !== null,
    queryFn: async () => {
      try {
        const { data } = await api.get<Cart>(`${endPoint}/cart/${cartId}`)
        return data
      } catch (error) {
        console.error(error)
        throw error
      }
    },
  })

  return { data, isLoading }
}
