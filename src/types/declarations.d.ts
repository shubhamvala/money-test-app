import { CustomThemeType } from '@resources'
import { compose } from 'redux'

// import { RootParamList as RootStackParamList } from '@navigation/params'
declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
  // namespace ReactNavigation {
  //   interface RootParamList extends RootStackParamList {}
  // }
  declare module 'native-base' {
    interface ICustomTheme extends CustomThemeType {}
  }
}

declare interface PromiseConstructor {
  allSettled(
    promises: Array<Promise<any>>,
  ): Promise<
    Array<{ status: 'fulfilled' | 'rejected'; value?: any; reason?: any }>
  >
}
