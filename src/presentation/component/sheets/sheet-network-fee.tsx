import { ButtonSolid, ESheetTypes, Icon, Text } from '@components'
import { useThemedColor } from '@hooks'
import { Box, Pressable } from 'native-base'
import React from 'react'
import ActionSheet, {
  SheetManager,
  SheetProps,
} from 'react-native-actions-sheet'

export const SheetNetworkFee = (props: SheetProps<ESheetTypes.networkFee>) => {
  const { backgroundBaseStr, divider, grayWhite, textPrimary, textTertiary } =
    useThemedColor()

  return (
    <ActionSheet
      closable={false}
      closeOnPressBack={false}
      closeOnTouchBackdrop={false}
      containerStyle={{
        backgroundColor: backgroundBaseStr,
      }}
      id={props.sheetId}>
      <Box pt={'3'} pb={'3'} px={'4'}>
        <Box alignItems={'center'}>
          <Box w={'12.5'} h={'1.5'} bg={divider} borderRadius={'full'} />
          <Box mt={'9'}>
            <Icon name={'dau'} size={48} />
            <Box position={'absolute'} bottom={0} right={0}>
              <Icon name={'eth'} />
            </Box>
          </Box>
          <Pressable
            position={'absolute'}
            right={0}
            mr={'2'}
            mt={'3'}
            onPress={() => {
              SheetManager.hide(props.sheetId)
            }}>
            <Icon name={'close'} size={24} fill={'gray'} />
          </Pressable>
        </Box>
        <Box alignItems={'center'} mt={'4'}>
          <Text
            text={'What is network fee?'}
            fontSize={'lg'}
            fontFamily={'body'}
            fontWeight={'semibold'}
            color={grayWhite}
            textAlign={'center'}
          />
          <Text
            mt={'4'}
            mx={'4'}
            text={
              'This is the estimated fee paid to miners who process your transaction over blockchain.'
            }
            fontSize={'sm'}
            fontFamily={'body'}
            fontWeight={'normal'}
            color={textTertiary}
            textAlign={'center'}
          />
          <Text
            mt={'4'}
            mx={'4'}
            text={
              'This fee would vary depending on transaction complexity and network traffic.'
            }
            fontSize={'sm'}
            fontFamily={'body'}
            fontWeight={'normal'}
            color={textTertiary}
            textAlign={'center'}
          />
        </Box>
        <ButtonSolid
          mt={'10'}
          label={'Got It'}
          onPress={() => {
            SheetManager.hide(props.sheetId)
          }}
        />
        <Text
          mt={'6'}
          mx={'4'}
          text={'Fee settings'}
          fontSize={'sm'}
          fontFamily={'body'}
          fontWeight={'normal'}
          color={textPrimary}
          textAlign={'center'}
          underline
        />
      </Box>
    </ActionSheet>
  )
}
