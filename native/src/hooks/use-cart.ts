import { api } from '@/lib/axios'
import { Cart } from '@/types/type'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
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

  // Get cart
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

  // Add product
  const { mutateAsync: addProduct, isPending: isAddingProduct } = useMutation({
    mutationKey: ['addProduct'],
    mutationFn: async (productId: string) => {
      try {
        const cart = await api.post<Cart>(`${endPoint}/cart/${cartId}/add-product/${productId}`)
        await queryClient.setQueryData(['cart'], cart.data)
      } catch (error) {
        console.error(error)
        throw error
      }
    },
  })

  // Remove product
  const { mutateAsync: removeProduct, isPending: isRemovingProduct } = useMutation({
    mutationKey: ['removeProduct'],
    mutationFn: async (productId: string) => {
      try {
        const cart = await api.patch<Cart>(`${endPoint}/cart/${cartId}/remove-product/${productId}`)
        await queryClient.setQueryData(['cart'], cart.data)
      } catch (error) {
        console.error(error)
        throw error
      }
    },
  })

  return { data, isLoading, addProduct, isAddingProduct, removeProduct, isRemovingProduct }
}
