import { colors } from '@/styles/colors';
import { StarIcon } from 'lucide-react-native';
import { View } from 'react-native';

export default function Rating() {
  return (
    <View className='w-full flex-row justify-start gap-0.5'>
      <StarIcon color={colors.primary.DEFAULT} size={16} fill={colors.primary.DEFAULT} />
      <StarIcon color={colors.primary.DEFAULT} size={16} fill={colors.primary.DEFAULT} />
      <StarIcon color={colors.primary.DEFAULT} size={16} fill={colors.primary.DEFAULT} />
      <StarIcon color={colors.primary.DEFAULT} size={16} fill={colors.primary.DEFAULT} />
      <StarIcon color={colors.primary.DEFAULT} size={16} />
    </View>
  )
}
