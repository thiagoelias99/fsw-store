import { cn } from '@/lib/utils';
import { TouchableOpacity, Text as RNText } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority'

const textVariants = cva(
  'text-foreground',
  {
    variants: {
      variant: {
        default: 'text-base font-medium',
        header1: 'text-2xl font-bold',
        header2: 'text-xl font-bold',
        header3: 'text-lg font-bold',
        headerXl: 'text-3xl font-bold',
        headerXxl: 'text-4xl font-bold',
      },
    },
    defaultVariants: {
      variant: 'default'
    },
  }
)

interface TextProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
  VariantProps<typeof textVariants> {
}

function Text({ className, variant, children, ...props }: TextProps) {
  return (
    <RNText
      className={cn(textVariants({ variant, className }))}
      {...props}
    >{children}</RNText>
  );
}

export { Text, textVariants };