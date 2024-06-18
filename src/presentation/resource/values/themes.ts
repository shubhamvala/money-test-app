import { extendTheme } from 'native-base'
import { colors } from './colors'
import { dimensions } from './dimensions'
import { fontConfiguration } from './fontConfiguration'
import { config } from './themeConfig'

export const customTheme = extendTheme({
  colors: colors,
  config: config,
  fontConfig: fontConfiguration.fontConfig,
  fonts: fontConfiguration.fonts,
  fontSizes: dimensions.fontSizes,
  space: dimensions.spacing,
  sizes: dimensions.sizes,
  radii: dimensions.radii,
  borderWidths: dimensions.borderWidths,
})

export type CustomThemeType = typeof customTheme

declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}
