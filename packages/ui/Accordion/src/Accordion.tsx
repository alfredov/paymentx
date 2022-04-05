/** @jsxImportSource @emotion/react */
import * as React from 'react'
import * as PrimitiveAccordion from '@radix-ui/react-accordion'
import DownArrowIcon from './DownArrowIcon'
import styles from './index.styles'
import { Interpolation, Theme } from '@emotion/react'

type CommomProps = { css?: Interpolation<Theme> }

export type AcordionProps = PrimitiveAccordion.AccordionMultipleProps & CommomProps
export type TriggerProps = PrimitiveAccordion.AccordionTriggerProps & CommomProps
export type ContentProps = PrimitiveAccordion.AccordionContentProps & CommomProps

const RootContext = React.createContext<{ items: string[] }>({ items: [] })

export const Root: React.FC = ({ children }) => {
  const [items, setItems] = React.useState<string[]>([])
  return (
    <RootContext.Provider value={{ items }}>
      <PrimitiveAccordion.Root
        css={styles.root}
        type="multiple"
        onValueChange={values => setItems(values)}
      >
        {children}
      </PrimitiveAccordion.Root>
    </RootContext.Provider>
  )
}

const ItemContext = React.createContext({ value: '' })
export type ItemProps = { value: string }
export const Item: React.FC<ItemProps> = ({ children, value }) => {
  return (
    <ItemContext.Provider value={{ value }}>
      <PrimitiveAccordion.Item value={value} css={styles.item}>
        {children}
      </PrimitiveAccordion.Item>
    </ItemContext.Provider>
  )
}

export const Title: React.FC = ({ children }) => (
  <span css={styles.title}>{children}</span>
)

export const PrimaryText: React.FC = ({ children }) => {
  const { value } = React.useContext(ItemContext)
  const { items } = React.useContext(RootContext)
  
  return !(items.includes(value)) ? (
    <span css={styles.primaryText}>{children}</span>
  ): null
}

export const SecondaryText: React.FC = ({ children }) => {
  const { value } = React.useContext(ItemContext)
  const { items } = React.useContext(RootContext)
  return items.includes(value) ? (
    <span css={styles.primaryText}>{children}</span>
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
  <PrimitiveAccordion.Content {...props} css={[styles.content, css]}>
    {children}
  </PrimitiveAccordion.Content>
)
