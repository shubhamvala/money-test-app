import { SheetDefinition, registerSheet } from 'react-native-actions-sheet'
import { ESheetTypes } from '../types'
import { SheetNetworkFee } from './sheet-network-fee'
import { SheetNetworkType } from './sheet-network-type'

export const registerSheets = () => {
  registerSheet(ESheetTypes.networkFee, SheetNetworkFee)
  registerSheet(ESheetTypes.networkType, SheetNetworkType)
}

declare module 'react-native-actions-sheet' {
  interface Sheets {
    [ESheetTypes.networkFee]: SheetDefinition<{
      payload: undefined
      returnValue: undefined
    }>
    [ESheetTypes.networkType]: SheetDefinition<{
      payload: undefined
      returnValue: undefined
    }>
  }
}
