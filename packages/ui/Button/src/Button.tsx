/** @jsxImportSource @emotion/react */
import { Interpolation, Theme } from '@emotion/react'
import { ButtonHTMLAttributes } from 'react'
import * as styles from './index.styles'

export type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'error' | 'outlined' | 'link'
  size?: 'small' | 'large'
  css?: Interpolation<Theme>
}

const Button = ({ size, variant, children, type, css, ...rest }: Props) => {
  const buttonStyles = [
    styles.button,
    variant === 'error' && styles.error,
    variant === 'outlined' && styles.outlined,
    size === 'small' && styles.small,
    variant === 'link' && styles.link,
    css,
  ]
  return (
    <button css={buttonStyles} type={type || 'button'} {...rest}>
      {children}
    </button>
  )
}

export default Button
