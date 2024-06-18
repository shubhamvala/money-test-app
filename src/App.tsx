import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { Provider } from 'react-redux'

import { registerSheets } from '@components'
import {
  AppDependencies,
  container,
  registerDependencies,
  registerFlyValue,
} from '@di'
import { RootNavigator, colorModeManager, customTheme } from '@presentation'
import { StoreContainer } from '@shared-state'
import { SheetProvider } from 'react-native-actions-sheet'

registerDependencies()
registerFlyValue()
registerSheets()

const App = () => {
  return (
    <NativeBaseProvider theme={customTheme} colorModeManager={colorModeManager}>
      <Provider
        store={
          container.resolve<StoreContainer>(AppDependencies.StoreContainer)
            .store
        }>
        <SheetProvider>
          <RootNavigator />
        </SheetProvider>
      </Provider>
    </NativeBaseProvider>
  )
}

export default App
