import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'

import { AuthenticationStoryboardParamList } from '@storyboards'

export type SignInNavigationProps = StackNavigationProp<
  AuthenticationStoryboardParamList,
  'SignIn'
>

export type SignInRouteProp = RouteProp<
  AuthenticationStoryboardParamList,
  'SignIn'
>

export type SignInProps = {
  navigation: SignInNavigationProps
  route: SignInRouteProp
}

export type SignInReduxSelectionState = {
  isAuthenticating: boolean
}

export type SingInState = {
  isAuthenticating: boolean
  signIn: () => void
}
