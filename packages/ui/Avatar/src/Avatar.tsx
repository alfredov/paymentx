/** @jsxImportSource @emotion/react */
import * as React from 'react'
import * as AvatarNative from '@radix-ui/react-avatar';

import * as styles from './index.styles'

export const Root: React.FC = ({ children }) => (
  <div css={styles.avatar}>{children}</div>
)

export type ImageProps = { alt: string, src: string }

export const Image = (props: ImageProps) => (
  <AvatarNative.Root>
    <AvatarNative.Image css={styles.image} src={props.src} alt={props.alt} />
    <AvatarNative.Fallback delayMs={600}>🌎</AvatarNative.Fallback>
  </AvatarNative.Root>
)

export const Name: React.FC = ({ children }) => (
  <h1 css={styles.name}>{children}</h1>
)
