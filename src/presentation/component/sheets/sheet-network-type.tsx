import { ESheetTypes, Text } from '@components'
import { useThemedColor } from '@hooks'
import { INetworkType, arrayDummyNetworkType } from '@utils'
import { Box, HStack, Pressable, VStack } from 'native-base'
import React, { useCallback, useState } from 'react'
import { FlatList } from 'react-native'
import ActionSheet, { SheetProps } from 'react-native-actions-sheet'

export const SheetNetworkType = (
  props: SheetProps<ESheetTypes.networkType>,
) => {
  const {
    backgroundBaseStr,
    backgroundNeutral,
    accentPrimary,
    grayWhite,
    textPrimary,
    textTertiary,
    green,
    divider,
  } = useThemedColor()

  const [selectedType, setSelectedType] = useState<INetworkType>()

  const onPressItem = useCallback((item: INetworkType) => {
    setSelectedType(item)
  }, [])

  const renderItem = useCallback(
    ({ item }: { item: INetworkType }) => {
      return (
        <Pressable mt={'4'} onPress={() => onPressItem(item)}>
          <HStack
            p={'3'}
            bg={backgroundNeutral}
            borderRadius={'lg'}
            borderColor={selectedType === item ? accentPrimary : 'transparent'}
            borderWidth={'2'}
            alignItems={'center'}>
            <Text
              text={item.type === 'Standard' ? '⏱️' : '⚡️'}
              fontFamily={'body'}
              fontSize={'3xl'}
              fontWeight={'medium'}
              color={textPrimary}
            />
            <VStack flex={1} mx={'2'}>
              <Text
                text={item.type}
                fontFamily={'body'}
                fontSize={'sm'}
                fontWeight={'medium'}
                color={textPrimary}
              />
              <Text
                text={item.time}
                fontFamily={'body'}
                fontSize={'xs'}
                fontWeight={'normal'}
                color={green}
              />
            </VStack>
            <Text
              text={item.price}
              fontFamily={'body'}
              fontSize={'xs'}
              fontWeight={'medium'}
              color={textPrimary}>
              <Text
                text={item.secondPrice}
                fontWeight={'normal'}
                color={textTertiary}
              />
            </Text>
          </HStack>
        </Pressable>
      )
    },
    [onPressItem, selectedType],
  )

  const keyExtractor = useCallback((item: INetworkType) => {
    return item.id.toString()
  }, [])

  return (
    <ActionSheet
      id={props.sheetId}
      containerStyle={{
        backgroundColor: backgroundBaseStr,
      }}>
      <Box pt={'3'} pb={'6'} px={'4'}>
        <Box alignItems={'center'}>
          <Box w={'12.5'} h={'1.5'} bg={divider} borderRadius={'full'} />
        </Box>
        <Text
          mt={'4'}
          text={'Network fee'}
          fontFamily={'heading'}
          fontSize={'lg'}
          fontWeight={'semibold'}
          color={grayWhite}
        />
        <FlatList
          style={{ flexGrow: 0 }}
          data={arrayDummyNetworkType}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </Box>
    </ActionSheet>
  )
}
