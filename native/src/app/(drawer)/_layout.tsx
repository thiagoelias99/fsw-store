import DrawerContent from '@/components/drawer-content';
import { colors } from '@/styles/colors';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '75%',
          backgroundColor: colors.background,
        }
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name='(tabs)'
        options={{ title: 'Loja' }}
      />
    </Drawer>
  )
}