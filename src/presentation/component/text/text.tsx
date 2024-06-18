import { ITextProps, Text as NBText } from 'native-base'
import { memo } from 'react'

export type TextProps = ITextProps & {
  text?: string | number
  component?: any
  variant?: any
  textAllCaps?: boolean
}
export const Text: React.FC<TextProps> = memo(
  ({ text, children, component, textAllCaps, ...props }: TextProps) => {
    const content = text
    const contentMain =
      typeof content === 'string' && textAllCaps
        ? content.toUpperCase()
        : content

    const Component = component || NBText
    return (
      <Component {...props}>
        {contentMain}
        {!!children && children}
      </Component>
    )
  },
)
