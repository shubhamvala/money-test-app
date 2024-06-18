import { SystemColorMode } from '@core'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ColorMode, StorageManager } from 'native-base'
import { Appearance } from 'react-native'

export const colorModeManager: StorageManager = {
  get: async () => {
    try {
      const val = await AsyncStorage.getItem('@color-mode')
      if (val === SystemColorMode.system.toString()) {
        const colorScheme = Appearance.getColorScheme()
        return colorScheme === 'dark' ? 'dark' : 'light'
      }
      return val === 'dark' ? 'dark' : 'light'
    } catch (e) {
      return 'light'
    }
  },
  set: async (value: ColorMode | SystemColorMode) => {
    try {
      await AsyncStorage.setItem('@color-mode', value?.toString() || '')
    } catch (e) {
      console.log('e', e)
    }
  },
}
