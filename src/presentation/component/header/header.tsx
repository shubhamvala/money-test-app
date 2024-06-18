import { Icon, Text } from '@components'
import { useThemedColor } from '@hooks'
import { useNavigation } from '@react-navigation/native'
import { Box, HStack, IBoxProps, ITextProps, Pressable } from 'native-base'
import { FC, memo, useCallback } from 'react'

export type HeaderProps = IBoxProps & {
  title?: string
  titleProps?: ITextProps
  renderTitle?: () => React.JSX.Element
}
export const Header: FC<HeaderProps> = memo(
  ({ title, titleProps, renderTitle, ...props }: HeaderProps) => {
    const { grayWhite } = useThemedColor()
    const navigation = useNavigation()

    const onPressLeft = useCallback(() => {
      navigation.goBack()
    }, [navigation])

    return (
      <HStack h={'16'} alignItems={'center'} px={'2'} {...props}>
        <Pressable
          size={'12'}
          alignItems={'center'}
          justifyContent={'center'}
          onPress={onPressLeft}>
          <Icon name={'back'} size={16} />
        </Pressable>
        {renderTitle ? (
          renderTitle()
        ) : (
          <Text
            flex={1}
            text={title}
            fontFamily={'heading'}
            fontSize={'2xl'}
            fontWeight={'semibold'}
            color={grayWhite}
            textAlign={'center'}
            numberOfLines={1}
            ellipsizeMode={'tail'}
            {...titleProps}
          />
        )}
        <Box size={'12'} alignItems={'center'} justifyContent={'center'}></Box>
      </HStack>
    )
  },
)
