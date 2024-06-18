import * as React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import { SignIn } from '@containers'
import { AuthenticationStoryboardParamList } from '@storyboards'

const Stack = createStackNavigator<AuthenticationStoryboardParamList>()

export const AuthenticationNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={'SignUp'}>
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  )
}
