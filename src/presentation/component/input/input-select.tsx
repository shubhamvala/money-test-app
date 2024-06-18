import { IDropdownItem, Icon, Text } from '@components'
import { useThemedColor } from '@hooks'
import { get } from 'lodash'
import { Box, HStack, IBoxProps, Image } from 'native-base'
import { FC, memo, useCallback, useEffect, useRef, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'

type InputSelectProps = {
  data: IDropdownItem[]
  selectedValue?: IDropdownItem
  labelField?: string
  valueField?: string
  searchField?: string
  iconField?: string
  imageField?: string
  onChangeDropdownItem?: (item: IDropdownItem) => void
  editable?: boolean
  hasError?: boolean
  hasSearch?: boolean
  errorText?: string
  placeholderText?: string
  containerProps?: IBoxProps
  dropDownPosition?: 'top' | 'bottom' | 'auto'
}

export const InputSelect: FC<InputSelectProps> = memo(
  ({
    data,
    selectedValue,
    labelField = 'label',
    valueField = 'value',
    searchField = labelField,
    iconField = 'icon',
    imageField = 'image',
    onChangeDropdownItem,
    editable,
    hasSearch = false,
    containerProps,
    dropDownPosition = 'auto',
  }: InputSelectProps) => {
    const {
      primary,
      backgroundOther90,
      backgroundOther90Str,
      textTertiary,
      textTertiaryStr,
      divider50,
      divider50Str,
    } = useThemedColor()

    const [currentValue, setCurrentValue] = useState<IDropdownItem | undefined>(
      selectedValue,
    )
    const dropdownRef = useRef<any>()

    useEffect(() => {
      setCurrentValue(selectedValue)
    }, [selectedValue])

    const onChange = useCallback(
      (item: IDropdownItem) => {
        onChangeDropdownItem?.(item)
        setCurrentValue(item)
      },
      [onChangeDropdownItem],
    )

    const renderItem = useCallback(
      (item: IDropdownItem) => {
        return (
          <HStack
            my={'0.5'}
            py={'1.5'}
            borderRadius={'lg'}
            alignItems={'center'}>
            {!!item.icon && <Icon name={get(item, iconField)} size={24} />}
            {!!item.image && (
              <Image
                source={item.image}
                size={'6'}
                alt={`${get(item, imageField)}`}
              />
            )}
            <Text
              text={get(item, labelField)}
              ml={item.icon || item.image ? '2' : '0'}
              fontFamily={'body'}
              fontSize={'xs'}
              fontWeight={'semibold'}
              color={textTertiary}
            />
          </HStack>
        )
      },
      [labelField, iconField, imageField, primary, textTertiary],
    )

    return (
      <Box
        px={'1.5'}
        borderColor={divider50}
        bg={backgroundOther90}
        borderRadius={'lg'}
        borderWidth={'1'}
        {...containerProps}>
        <Dropdown
          ref={dropdownRef}
          data={data}
          maxHeight={250}
          disable={editable === false}
          labelField={labelField}
          valueField={valueField}
          onChange={onChange}
          activeColor={'transparent'}
          value={currentValue}
          placeholder={''}
          search={hasSearch}
          searchField={searchField}
          selectedTextStyle={[styles.selectedText, { color: textTertiaryStr }]}
          containerStyle={[
            styles.container,
            {
              backgroundColor: backgroundOther90Str,
              borderColor: divider50Str,
            },
          ]}
          renderItem={(item: IDropdownItem) => renderItem(item)}
          inverted={false}
          dropdownPosition={dropDownPosition}
          renderRightIcon={() => (
            <Box mx={'1'}>
              <Icon name={'down'} size={12} />
            </Box>
          )}
        />
      </Box>
    )
  },
)

const styles = StyleSheet.create({
  selectedText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
  },
  container: {
    width: 84,
    borderWidth: 1,
    borderRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
})
