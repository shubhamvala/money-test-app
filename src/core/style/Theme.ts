import { ColorScheme } from './ColorScheme'
import { TextTheme } from './TextTheme'

export enum ThemeConfig {
  Dark,
  Light,
  System,
}

export interface Theme {
  textTheme?: TextTheme
  colorScheme: ColorScheme
}
