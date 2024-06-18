export enum EInputState {
  active,
  inactive,
}

export interface IDropdownItem {
  label: string
  value: string
  icon?: string
  image?: { uri: string }
  [key: string]: any
}

export enum ESheetTypes {
  networkFee = 'sheet-network-fee',
  networkType = 'sheet-network-type',
}
