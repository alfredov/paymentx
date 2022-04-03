/** @jsxImportSource @emotion/react */
import * as React from 'react'
import { v4 } from 'uuid'
import * as PrimitiveAccordion from '@radix-ui/react-accordion'
import DownArrowIcon from './DownArrowIcon'
import styles from './index.styles'
import { Interpolation, Theme } from '@emotion/react'

type CommomProps = { css?: Interpolation<Theme> }

export type AcordionProps = PrimitiveAccordion.AccordionMultipleProps & CommomProps
export type TriggerProps = PrimitiveAccordion.AccordionTriggerProps & CommomProps
export type ContentProps = PrimitiveAccordion.AccordionContentProps & CommomProps

const RootContext = React.createContext<{ itemValues: string[] }>({ itemValues: [] })
export const Root: React.FC = ({ children }) => {
  const [itemValues, setItemValues] = React.useState<string[]>([])
  return (
    <RootContext.Provider value={{ itemValues }}>
      <PrimitiveAccordion.Root
        css={styles.root}
        type="multiple"
        onValueChange={values => setItemValues(values)}
      >
        {children}
      </PrimitiveAccordion.Root>
    </RootContext.Provider>
  )
}

const ItemContext = React.createContext({ value: '' })
export const Item: React.FC = ({ children }) => {
  const id = v4()
  return (
    <ItemContext.Provider value={{ value: id }}>
      <PrimitiveAccordion.Item value={id}>
        {children}
      </PrimitiveAccordion.Item>
    </ItemContext.Provider>
  )
}

export const Title: React.FC = ({ children }) => (
  <span>{children}</span>
)

export const PrimaryText: React.FC = ({ children }) => {
  const { value } = React.useContext(ItemContext)
  const { itemValues } = React.useContext(RootContext)
  
  return !(itemValues.includes(value) && itemValues[0] === value) ? (
    <span>{children}</span>
  ): null
}

export const SecondaryText: React.FC = ({ children }) => {
  const { value } = React.useContext(ItemContext)
  const { itemValues } = React.useContext(RootContext)
  return (itemValues.includes(value) && itemValues[0] === value) ? (
    <span>{children}</span>
  ): null
}

export const Trigger = ({ children, css, ...props }: TriggerProps) => (
  <PrimitiveAccordion.Header asChild>
    <PrimitiveAccordion.Trigger {...props} css={[styles.triger, css]}>
      <div css={styles.titleWrapper}>{children}</div>
      <DownArrowIcon />
    </PrimitiveAccordion.Trigger>
  </PrimitiveAccordion.Header>
)

export const Content = ({ children, css, ...props }: ContentProps) => (
  <PrimitiveAccordion.Content {...props} css={[styles.content, css]} >
    {children}
  </PrimitiveAccordion.Content>
)
