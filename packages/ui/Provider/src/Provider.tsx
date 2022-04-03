import React from 'react'
import { ThemeProvider, Global } from '@emotion/react'

import theme from './theme'
import styles from './index.styles'

const Provider: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={styles.global} />
    {children}
  </ThemeProvider>
)

export default Provider
