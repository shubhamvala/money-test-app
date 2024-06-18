import { omitNil } from '@utils'
import { Icon as NBIcon } from 'native-base'
import { IconProps } from './icon.props'
import { icons } from './icons'

export function Icon(props: IconProps) {
  const { name, size, height, width, ...rest } = props

  const IconSVG = name ? icons[name] : NBIcon
  const objectProps = omitNil({
    name,
    size,
    height: height || size,
    width: width || size,
    ...rest,
  })
  return <IconSVG {...objectProps} />
}
