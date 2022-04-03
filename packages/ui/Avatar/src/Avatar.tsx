/** @jsxImportSource @emotion/react */
import * as React from 'react'

import * as styles from './index.styles'

export const Root: React.FC = ({ children }) => (
  <div css={styles.avatar}>{children}</div>
)

export type ImageProps = { alt: string, src: string }
export const Image = (props: ImageProps) => (
  <img css={styles.image} src={props.src} alt={props.alt} />
)

export const Name: React.FC = ({ children }) => (
  <h1 css={styles.name}>{children}</h1>
)
