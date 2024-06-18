import { IIconProps } from 'native-base'
import { IconName } from './icons'

export type IconCustomProps = {
  stroke?: string
  fill?: string
  width?: number | string
  height?: number | string
  opacity?: number
  size?: number
}

export type IconProps = IIconProps & {
  name?: IconName | string
} & IconCustomProps
