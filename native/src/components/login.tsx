import { View, Image } from 'react-native'
import { Text } from '@/components/ui/text'

import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import { Input } from '@/components/ui/input'
import { FormErrorMessage } from '@/components/ui/form-error-message'
import { Button } from '@/components/ui/button'
import SocialButton from '@/components/ui/social-button'
import { useUser } from '@/hooks/use-user'

const formSchema = z.object({
  email: z.string().email({ message: 'Email inválido' }),
})


export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
  const { login } = useUser()


  async function onSubmit(values: z.infer<typeof formSchema>) {
    // await login(values)
    console.log(values)
  }

  return (
    <View className='bg-background w-full h-full p-8'>
      <View className='bg-card p-4 rounded-lg gap-4'>
        <Text variant="header1">Entre para continuar</Text>
        <Controller
          control={form.control}
          render={({ field }) => (
            <View className='w-full'>
              <Input
                placeholder='Email'
                keyboardType='email-address'
                onChangeText={field.onChange}
                onSubmitEditing={form.handleSubmit(onSubmit)}
                returnKeyType='send'
                {...field}
              />
              <FormErrorMessage form={form} field={field} />
            </View>

          )}
          name="email"
        />
        <Button onPress={form.handleSubmit(onSubmit)}>
          <Text>Entrar</Text>
        </Button>

        <Text className='w-full text-center'>-- OU --</Text>
        <SocialButton
          providerName="Google"
          providerLogo={require('@/assets/logos/logo-google-480.png')}
        />
        <SocialButton
          providerName="Github"
          providerLogo={require('@/assets/logos/logo-github-240.png')}
        />
      </View>
      <View className='flex-row justify-center items-center gap-2 mt-4'>
        <Text>Login gerenciado por</Text>
        <Image
          source={require('@/assets/logos/logo-kinde.jpeg')}
          resizeMode='contain'
          style={{ height: 24, width: 48 }}
        />
      </View>
    </View>
  )
}
