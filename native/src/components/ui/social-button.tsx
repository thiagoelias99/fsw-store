import { Button } from '@/components/ui/button'
import { ClassNameValue } from 'tailwind-merge'
import { cn } from '@/lib/utils'
import { Image, ImageSourcePropType } from "react-native"
import { Text } from './text'

interface SocialButtonProps {
  providerName: string
  providerLogo?: ImageSourcePropType | undefined
  onPress?: () => void
  className?: ClassNameValue
}

export default function SocialButton({ providerName, providerLogo, onPress, className }: SocialButtonProps) {
  return (
    <Button
      variant="secondary"
      onPress={onPress}
      className={cn('w-full space-x-4', className)}
    >
      {providerLogo && (
        <Image
          source={providerLogo}
          resizeMode='contain'
          style={{ width: 24, height: 24 }}
        />
      )}
      <Text>Entrar com {providerName}</Text>
    </Button>
  )
}