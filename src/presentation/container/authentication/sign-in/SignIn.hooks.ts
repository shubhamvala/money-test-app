import { ESheetTypes } from '@components'
import { useCallback } from 'react'
import { SheetManager } from 'react-native-actions-sheet'

export function useSignIn() {
  const onPressInfo = useCallback(() => {
    SheetManager.show(ESheetTypes.networkFee)
  }, [])

  const onPressChangeNetwork = useCallback(() => {
    SheetManager.show(ESheetTypes.networkType)
  }, [])

  return { onPressInfo, onPressChangeNetwork }
}
