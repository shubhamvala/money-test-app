import { IDropdownItem } from '@components'
import { INetworkType } from './dummy-type'

export const arrayDummyDropDown: IDropdownItem[] = [
  {
    value: 'dau',
    label: 'DAU',
    icon: 'dau',
  },
  {
    value: 'usd',
    label: 'USD',
    icon: 'us',
  },
]

export const arrayDummyNetworkType: INetworkType[] = [
  {
    id: 1,
    type: 'Standard',
    time: '~30 Seconds',
    price: '0.0037 ETH ',
    secondPrice: '(3.76 USD)',
  },
  {
    id: 2,
    type: 'Fast',
    time: '~10 Seconds',
    price: '0.0076 ETH ',
    secondPrice: '(10.30 USD)',
  },
]
