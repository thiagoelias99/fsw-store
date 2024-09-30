import { useEffect, useState } from 'react'
import { nativeStorage } from './use-storage'
import { api } from '@/lib/axios'
import { Linking } from 'react-native';

export const useUser = () => {
  const [authJwt, setAuthJwt] = useState<string | null>(null)
  const storageKey = 'authJwt'
  const callbackUrl = 'myapp://auth-callback'

  useEffect(() => {
    getCartId()
  }, [])

  async function getCartId() {
    let jwt = await nativeStorage.get(storageKey)
    setAuthJwt(jwt)
  }

  const login = async ({ email }: { email: string }) => {
    try {
      const response = await api.get<{ url: string }>(`/kinde_login?provider=email&email=${email}&callbackUrl=${callbackUrl}`)

      if (response.status === 200) {
        console.log(response.data.url)
        await Linking.openURL(response.data.url);
        return response.data.url
      } else {
        throw new Error('Erro ao realizar login!')
      }
    } catch (error) {

    }
  }

  return { authJwt, login }
}