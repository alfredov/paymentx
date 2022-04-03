/** @jsxImportSource @emotion/react */
import * as React from 'react'

import * as styles from './index.styles'

export const Header: React.FC = ({ children }) => (
  <header css={styles.header}>{children}</header>
)
