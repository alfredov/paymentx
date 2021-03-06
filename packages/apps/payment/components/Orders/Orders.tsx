
import * as React from 'react'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import * as Accordion from '@bits-x/accordion'
import { Checkbox, Label } from '@bits-x/checkbox'

import { getCurrencyFormat } from '../../core-app/utils'
import { TSuccess } from '../../actions/fetchOrders'
import styles from './index.module.css'
import { TOrder } from '../../schemas'

export type OrdersProps = {
  paid: TSuccess,
  due: TSuccess,
  outstanding: TSuccess,
  onAdd?: (order: TOrder) => void,
  onRemove?: (order: TOrder) => void,
  loading: boolean,
}

const Orders = ({ paid, due, outstanding, onAdd, onRemove, loading }: OrdersProps) => {

  const checkHandler = (
    checked: boolean,
    order: Omit<TOrder, 'price'> & { price: string, interest: string | null }
  ) => {   
    if (checked) {
      if (onAdd) {
        if (order.interest) {
          onAdd({
            id: order.id,
            due: order.due,
            price: parseFloat(order.price) + parseFloat(order.interest),
            status: order.status
          })
        } else {
          onAdd({
            id: order.id,
            due: order.due,
            price: parseFloat(order.price),
            status: order.status
          })
        }
      }
    } else {
      if (onRemove) {
        if (order.interest) {
          onRemove({
            id: order.id,
            due: order.due,
            price: parseFloat(order.price) + parseFloat(order.interest),
            status: order.status,
          })
        } else {
          onRemove({
            id: order.id,
            due: order.due,
            price: parseFloat(order.price),
            status: order.status,
          })
        }
      }
    }
  }
  return (
    <Accordion.Root>
      <Accordion.Item value="1">
        <Accordion.Trigger>
          <Accordion.Title>Cuotas pagadas</Accordion.Title>
          <Accordion.PrimaryText>Dale click para expandir</Accordion.PrimaryText>
          <Accordion.SecondaryText>Dale click para expandir</Accordion.SecondaryText>
        </Accordion.Trigger>
        <Accordion.Content>
          {paid.map(order =>
            <div key={order.id} className={styles.order}>
              <span className={styles.orderItem}>{order.name}</span>
              <span className={styles.orderItem}>Pagado el {format(new Date(order.due), 'dd MMM', { locale: es })}</span>
            </div>
          )}
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="2">
        <Accordion.Trigger>
          <Accordion.Title>Cuotas pendientes</Accordion.Title>
          <Accordion.PrimaryText>Dale click para expandir</Accordion.PrimaryText>
          <Accordion.SecondaryText>Puedes seleccionar mas de uno</Accordion.SecondaryText>
        </Accordion.Trigger>
        <Accordion.Content>
          {due.map(order =>
            <div key={order.id} className={styles.orderWrapper}>
              <div className={styles.order}>
                <span className={styles.orderItem}>{order.name}</span>
                <span className={styles.orderItem}>Vencido el {format(new Date(order.due), 'dd MMMM', { locale: es })}</span>
              </div>
              {!loading && (
                <Checkbox
                  disabled={order.disabled}
                  defaultChecked={order.checked}
                  onChange={checked => checkHandler(checked, order)}
                >
                  <Label>
                    $ {getCurrencyFormat(Number(order.price), order.priceCurrency)}
                  </Label>
                  {order.interest && (
                    <Label>
                      Inter??s: $ {getCurrencyFormat(Number(order.interest), order.priceCurrency)}
                    </Label>
                  )}
                </Checkbox>
              )}
            </div>
          )}
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="3">
        <Accordion.Trigger>
          <Accordion.Title>Cuotas futuras</Accordion.Title>
          <Accordion.PrimaryText>Dale click para expandir</Accordion.PrimaryText>
          <Accordion.SecondaryText>Puedes seleccionar mas de uno</Accordion.SecondaryText>
        </Accordion.Trigger>
        <Accordion.Content>
          {outstanding.map(order =>
            <div key={order.id} className={styles.orderWrapper}>
              <div className={styles.order}>
                <span className={styles.orderItem}>{order.name}</span>
                <span className={styles.orderItem}>Vence el {format(new Date(order.due), 'dd MMMM', { locale: es })}</span>
              </div>
              {!loading && (
                <Checkbox
                  disabled={order.disabled}
                  defaultChecked={order.checked}
                  onChange={checked => checkHandler(checked, order)}
                >
                  <Label>
                    $ {getCurrencyFormat(Number(order.price), order.priceCurrency)}
                  </Label>
                </Checkbox>
              )}
            </div>
          )}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

export default Orders
