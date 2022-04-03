/** @jsxImportSource @emotion/react */

import * as React from 'react'
import * as BaseCheckbox from '@radix-ui/react-checkbox'
import { Interpolation, Theme } from '@emotion/react'

import CheckIcon from './CheckIcon'

import * as styles from './index.styles'

export type Props = {
  defaultChecked?: boolean,
  name?: string,
  required?: boolean,
  disabled?: boolean,
  children?: React.ReactNode,
  onChange?: (checked: boolean) => void,
}

export type LabelProps = { children: React.ReactNode, disabled?: boolean, css?: Interpolation<Theme> }
export const Label = ({ children, disabled, css }: LabelProps) => {
  const { id } = React.useContext(CheckboxContext)
  return (
    <label
      htmlFor={id}
      css={disabled ? [styles.label, styles.labelDisabled, css] : [styles.label, css]}
    >
      {children}
    </label>
  )
}

const CheckboxContext = React.createContext({ id: '' })

export const Checkbox: React.FC<Props> = ({
  name,
  children,
  onChange,
  defaultChecked = false,
  disabled = false,
  required = false,
}) => {
  const id = '_' + Math.random().toString(36).substr(2, 9)
  return (
    <CheckboxContext.Provider value={{ id }}>
      <div css={styles.wrapper}>
        <div css={styles.labelWrapper}>
          {children}
        </div>
        <BaseCheckbox.Root
          id={id}
          css={styles.checkbox}
          name={name}
          required={required}
          disabled={disabled}
          onCheckedChange={onChange}
          defaultChecked={defaultChecked}
        >
          <BaseCheckbox.Indicator>
            <CheckIcon />
          </BaseCheckbox.Indicator>
        </BaseCheckbox.Root>
      </div>
    </CheckboxContext.Provider>
  )
}

