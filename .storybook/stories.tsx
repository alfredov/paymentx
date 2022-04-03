
import React from 'react'

import { Provider } from '../packages/ui/Provider/src'

export const StoriesEnvironment = ({ children }) => (
  <Provider>{children}</Provider>
)

export const withEnvironment = Story => (
  <StoriesEnvironment>
    <Story />
  </StoriesEnvironment>
)

export default StoriesEnvironment
