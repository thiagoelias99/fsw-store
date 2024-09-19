import { cn } from '@/lib/utils';
import { TouchableOpacity, View } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority'
import { Loader2Icon } from 'lucide-react-native';

const buttonVariants = cva(
  'items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof TouchableOpacity>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
}

function Button({ className, variant, size, asChild = false, isLoading, disabled, children, ...props }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} disabled={isLoading || disabled}>
      <View
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        <View
          className='flex justify-center items-center gap-2'
        >
          {children}
          {isLoading && <Loader2Icon className='animate-spin' />}
        </View>
      </View>
    </TouchableOpacity>
  );
}

export { Button, buttonVariants };