import { Text, TextProps } from '@components'
import { useThemedColor } from '@hooks'
import { Box, IButtonProps, Button as NBButton } from 'native-base'
import { FC, memo } from 'react'

type IButtonSolidProps = IButtonProps & {
  label?: string
  labelTxOptions?: Record<string, string | number>
  textAllCaps?: boolean
  _text?: TextProps
}
export const ButtonSolid: FC<IButtonSolidProps> = memo(
  ({
    label,
    labelTxOptions,
    _text,
    children,
    disabled,
    textAllCaps,
    isLoading,
    ...props
  }: IButtonSolidProps) => {
    const { primary, textPrimary } = useThemedColor()
    return (
      <NBButton
        h={'12.5'}
        bg={primary}
        alignItems={'center'}
        justifyContent={'center'}
        borderRadius={'xl'}
        disabled={disabled}
        shadow={'2'}
        _pressed={{
          bg: primary,
          style: {
            transform: [{ scale: 0.96 }],
          },
        }}
        isDisabled={isLoading}
        _disabled={{
          opacity: 0.8,
        }}
        {...props}>
        <Box>
          <>
            {!!label && (
              <Text
                fontFamily={'body'}
                fontSize={'md'}
                fontWeight={'semibold'}
                color={textPrimary}
                text={label}
                textAllCaps={textAllCaps}
                {..._text}
              />
            )}
            {children}
          </>
        </Box>
      </NBButton>
    )
  },
)
