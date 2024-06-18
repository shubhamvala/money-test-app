import { useThemedColor } from '@hooks'
import { metrics } from '@utils'
import { Box, IBoxProps, KeyboardAvoidingView } from 'native-base'
import { memo } from 'react'
import { StatusBar } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SystemNavigationBar from 'react-native-system-navigation-bar'

export type ScreenProps = IBoxProps & {
  avoidView?: boolean
  avoidScrollView?: boolean
}

export const Screen: React.FC<ScreenProps> = memo(
  ({
    avoidView = false,
    avoidScrollView = false,
    children,
    ...props
  }: ScreenProps) => {
    const { backgroundBase, backgroundBaseStr } = useThemedColor()
    SystemNavigationBar.setNavigationColor(backgroundBaseStr, 'light')
    return (
      <Box flex={1} safeAreaY background={backgroundBase} {...props}>
        <StatusBar
          backgroundColor={backgroundBaseStr}
          barStyle={'light-content'}
        />
        {avoidScrollView ? (
          <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            {!!children && children}
          </KeyboardAwareScrollView>
        ) : (
          <>{!!children && children}</>
        )}
        {avoidView && (
          <KeyboardAvoidingView
            behavior={metrics.platform === 'ios' ? 'padding' : undefined}
          />
        )}
      </Box>
    )
  },
)
