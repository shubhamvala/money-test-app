/**
 * @format
 */

import React from 'react'
import 'react-native'
import App from '../src/App'

// Note: import explicitly to use the types shipped with jest.
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  renderer.create(<App />)
})
