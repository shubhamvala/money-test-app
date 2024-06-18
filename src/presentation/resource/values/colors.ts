import { Leaves } from 'native-base/lib/typescript/theme/base/types'

export const colors = {
  light: {
    primary: '#F10025',
    backgroundBase: '#1E1E1E',
    backgroundNeutral: '#262B30',
    backgroundOther90: 'rgba(46, 46, 46, 0.9)',
    accentPrimary: '#1357EF',
    accentPrimary10: 'rgba(19, 87, 239, 0.1)',
    accentSecondary: '#769EF6',
    accentSecondary10: 'rgba(118, 158, 246, 0.1)',
    accentSecondary50: 'rgba(118, 158, 246, 0.5)',
    textPrimary: '#F5F5F6',
    textSecondary: '#CECFD2',
    textTertiary: '#94969C',
    textDisable: '#85888E',
    divider: '#313A47',
    divider50: 'rgba(49, 58, 71, 0.5)',
    grayWhite: '#FFFFFF',
    grayG300: '#1E1E1E',
    grayG200: '#444444',
    green: '#1CDB82',
  },
}

export type IColors = Leaves<typeof colors>
