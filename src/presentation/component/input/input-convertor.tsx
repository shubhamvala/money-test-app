import { EInputState, InputSelect } from '@components'
import { useThemedColor } from '@hooks'
import { arrayDummyDropDown } from '@utils'
import BigNumber from 'bignumber.js'
import {
  HStack,
  IBoxProps,
  IPressableProps,
  Pressable,
  VStack,
} from 'native-base'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'
import { Text } from '../text'

const CONVERT_VALUE = 2474.8

export type InputConvertorProps = TextInputProps & {
  onChangeText?: (value: string) => void
  isSender?: boolean
  balanceDau?: number
  innerContainerProps?: IBoxProps
  containerProps?: IPressableProps
}
export const InputConvertor: FC<InputConvertorProps> = ({
  onChangeText,
  isSender = false,
  balanceDau = 0,
  innerContainerProps,
  containerProps,
  ...props
}: InputConvertorProps) => {
  const { value, editable, onBlur, onFocus, ...restOfProps } = props
  const {
    backgroundNeutral,
    accentPrimary,
    accentSecondary,
    accentSecondary10,
    accentSecondary50,
    divider,
    grayWhiteStr,
    textDisable,
  } = useThemedColor()

  const [isFocused, setIsFocused] = useState<boolean>(false)
  const [currentState, setCurrentState] = useState<EInputState>(
    EInputState.inactive,
  )
  const [currentValue, setCurrentValue] = useState<string | undefined>(value)
  const [usdValue, setUsdValue] = useState<string>('0')
  const inputRef = useRef<TextInput>(null)

  useEffect(() => {
    if (value) {
      setCurrentValue(value)
      const x = new BigNumber(value)
      setUsdValue(`${x.times(CONVERT_VALUE)}`)
    }
  }, [value])

  useEffect(() => {
    if (isFocused) {
      setCurrentState(EInputState.active)
    } else {
      setCurrentState(EInputState.inactive)
    }
  }, [isFocused])

  const _onChangeText = useCallback(
    (val: any) => {
      if (isSender) {
        if (val >= balanceDau) {
          const newValue = balanceDau
          setCurrentValue(`${newValue}`)
          onChangeText?.(`${newValue}`)
          const x = new BigNumber(newValue)
          setUsdValue(`${x.times(CONVERT_VALUE)}`)
        } else {
          setCurrentValue(val)
          onChangeText?.(val)
          const x = new BigNumber(val)
          setUsdValue(`${x.times(CONVERT_VALUE)}`)
        }
      } else {
        setCurrentValue(val)
        onChangeText?.(val)
        const x = new BigNumber(val)
        setUsdValue(`${x.dividedBy(CONVERT_VALUE)}`)
      }
    },
    [onChangeText, isSender, balanceDau],
  )

  const onPressMax = useCallback(() => {
    _onChangeText(`${balanceDau}`)
  }, [_onChangeText, balanceDau])

  let boxOtherProps: IBoxProps = { borderColor: divider }
  switch (currentState) {
    case EInputState.active:
      boxOtherProps = {
        borderWidth: '2',
        borderColor: accentPrimary,
      }
      break
    default:
      boxOtherProps = {
        borderWidth: '1',
        borderColor: divider,
      }
      break
  }

  return (
    <Pressable
      {...containerProps}
      disabled={editable === false}
      onPress={() => {
        inputRef.current?.focus()
      }}>
      <HStack
        p={'4'}
        bg={backgroundNeutral}
        borderColor={accentPrimary}
        borderWidth={'2'}
        borderRadius={'xl'}
        alignItems={'center'}
        {...innerContainerProps}
        {...boxOtherProps}>
        <VStack flex={1}>
          <TextInput
            ref={inputRef}
            style={[
              styles.input,
              {
                color: grayWhiteStr,
              },
            ]}
            {...restOfProps}
            editable={editable}
            focusable={editable}
            readOnly={editable === false}
            value={currentValue}
            onBlur={event => {
              setIsFocused(false)
              onBlur?.(event)
            }}
            onFocus={event => {
              setIsFocused(true)
              onFocus?.(event)
            }}
            placeholder={''}
            inputMode={'numeric'}
            onChangeText={_onChangeText}
          />
          <Text
            mt={'2'}
            text={isSender ? `${usdValue} USD` : `${usdValue} DAU`}
            fontFamily={'body'}
            fontSize={'xs'}
            fontWeight={'normal'}
            color={textDisable}
          />
        </VStack>
        {isSender && (Number(currentValue) || 0) < balanceDau && (
          <Pressable
            ml={'3'}
            px={'1'}
            py={'0.5'}
            bg={accentSecondary10}
            borderWidth={'0.5'}
            borderColor={accentSecondary50}
            borderRadius={'sm'}
            onPress={onPressMax}>
            <Text
              text={'Max'}
              fontFamily={'body'}
              fontSize={'xs'}
              fontWeight={'semibold'}
              color={accentSecondary}
            />
          </Pressable>
        )}
        <InputSelect
          containerProps={{
            w: '16',
            ml: '2',
          }}
          data={arrayDummyDropDown}
          selectedValue={arrayDummyDropDown[isSender ? 0 : 1]}
        />
      </HStack>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 0,
    fontFamily: 'Inter-SemiBold',
    fontWeight: '600',
    fontSize: 24,
  },
})
