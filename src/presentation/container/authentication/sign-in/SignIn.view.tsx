import React, { useCallback } from 'react'

import {
  ButtonSolid,
  Header,
  Icon,
  InputConvertor,
  Screen,
  Text,
} from '@components'
import { useThemedColor } from '@hooks'
import { Box, Divider, HStack, Pressable } from 'native-base'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useSignIn } from './SignIn.hooks'
import { SignInProps } from './types'

const _SignIn: React.FC<SignInProps> = () => {
  const { onPressInfo, onPressChangeNetwork } = useSignIn()
  const {
    accentPrimary10,
    accentSecondary50,
    grayWhite,
    textSecondary,
    textTertiary,
    textDisable,
    divider,
  } = useThemedColor()

  const renderTitle = useCallback(() => {
    return (
      <HStack flex={1} alignItems={'center'} justifyContent={'center'}>
        <Text
          text={'Send DAU'}
          fontFamily={'heading'}
          fontSize={'xl'}
          fontWeight={'semibold'}
          color={grayWhite}
          textAlign={'center'}
          numberOfLines={1}
          ellipsizeMode={'tail'}
        />
        <Box ml={'2'}>
          <Icon name={'dau'} size={24} />
        </Box>
      </HStack>
    )
  }, [grayWhite])

  return (
    <Screen>
      <Header renderTitle={renderTitle} />
      <KeyboardAwareScrollView>
        <Box mt={'6'} px={'4'}>
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <Text
              text={'You are sending'}
              fontFamily={'body'}
              fontSize={'sm'}
              fontWeight={'medium'}
              color={textDisable}
            />
            <Text
              text={'Balance: 7 DAU'}
              fontFamily={'body'}
              fontSize={'xs'}
              fontWeight={'normal'}
              color={textDisable}
            />
          </HStack>
          <InputConvertor
            containerProps={{
              mt: '2',
            }}
            defaultValue={'5'}
            isSender
            balanceDau={7}
          />
          <Text
            mt={'6'}
            text={'Recipient Receives'}
            fontFamily={'body'}
            fontSize={'sm'}
            fontWeight={'medium'}
            color={textDisable}
          />
          <InputConvertor
            containerProps={{
              mt: '2',
            }}
            defaultValue={'12300'}
          />
        </Box>
        <Divider mt={'11'} bg={divider} orientation={'horizontal'} />
        <Box px={'4'} my={'3'}>
          <HStack alignItems={'center'} justifyContent={'space-between'}>
            <HStack alignItems={'center'}>
              <Text
                text={'Network fees'}
                fontFamily={'body'}
                fontSize={'xs'}
                fontWeight={'medium'}
                color={textTertiary}
              />
              <Pressable ml={'1'} onPress={onPressInfo}>
                <Icon name={'info'} size={14} />
              </Pressable>
            </HStack>
            <Pressable onPress={onPressChangeNetwork}>
              <HStack
                px={'2'}
                py={'1'}
                bg={accentPrimary10}
                borderColor={accentSecondary50}
                borderWidth={'1'}
                borderRadius={'sm'}
                alignItems={'center'}>
                <Text
                  text={'⏱️'}
                  fontFamily={'body'}
                  fontSize={'xs'}
                  fontWeight={'normal'}
                  color={textTertiary}
                />
                <Text
                  ml={'1'}
                  text={'Standard'}
                  fontFamily={'body'}
                  fontSize={'xs'}
                  fontWeight={'normal'}
                  color={textTertiary}
                />
                <Box size={'1'} borderRadius={'xs'} bg={textDisable} mx={'1'} />
                <Text
                  text={'0.0037 ETH '}
                  fontFamily={'body'}
                  fontSize={'xs'}
                  fontWeight={'medium'}
                  color={textSecondary}>
                  <Text
                    text={'(3.76 USD)'}
                    fontWeight={'normal'}
                    color={textTertiary}
                  />
                </Text>
                <Box ml={'1'}>
                  <Icon name={'down'} />
                </Box>
              </HStack>
            </Pressable>
          </HStack>
          <HStack
            mt={'3'}
            alignItems={'center'}
            justifyContent={'space-between'}>
            <Text
              text={'Transfer fees'}
              fontFamily={'body'}
              fontSize={'xs'}
              fontWeight={'medium'}
              color={textTertiary}
            />
            <Text
              text={'0.005 DAU '}
              fontFamily={'body'}
              fontSize={'xs'}
              fontWeight={'medium'}
              color={textSecondary}>
              <Text
                text={'(6,300 USD)'}
                fontWeight={'normal'}
                color={textTertiary}
              />
            </Text>
          </HStack>
          <ButtonSolid mt={'6'} label={'Next'} />
        </Box>
      </KeyboardAwareScrollView>
    </Screen>
  )
}

export const SignIn = React.memo(_SignIn)
