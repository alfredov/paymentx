
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import * as Accordion from '@bits-x/accordion'
import { Checkbox, Label } from '@bits-x/checkbox'

import { getCurrencyFormat } from '../../core-app/utils'
import { TSuccess } from '../../actions/fetchOrders'
import styles from './index.module.css'

type SingleOrder =  { id: string, price: number }

export type OrdersProps = {
  paid: TSuccess,
  due: TSuccess,
  outstanding: TSuccess,
  onAdd?: (order: SingleOrder) => void,
  onRemove?: (order: SingleOrder) => void,
}

const Orders = ({ paid, due, outstanding, onAdd, onRemove }: OrdersProps) => {
  const checkHandler = (checked: boolean, order: { id: string, price: string, interest: string | null }) => {   
    if (checked) {
      if (onAdd) {
        if (order.interest) {
          onAdd({
            id: order.id,
            price: parseFloat(order.price) + parseFloat(order.interest)
          })
        } else {
          onAdd({
            id: order.id,
            price: parseFloat(order.price)
          })
        }
      }
    } else {
      if (onRemove) {
        if (order.interest) {
          onRemove({
            id: order.id,
            price: parseFloat(order.price) + parseFloat(order.interest)
          })
        } else {
          onRemove({
            id: order.id,
            price: parseFloat(order.price)
          })
        }
      }
    }
  }
  return (
    <Accordion.Root>
      <Accordion.Item>
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
      <Accordion.Item>
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
                    Interés: $ {getCurrencyFormat(Number(order.interest), order.priceCurrency)}
                  </Label>
                )}
              </Checkbox>
            </div>
          )}
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item>
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
              <Checkbox
                disabled={order.disabled}
                defaultChecked={order.checked}
                onChange={checked => checkHandler(checked, order)}
              >
                <Label>
                  $ {getCurrencyFormat(Number(order.price), order.priceCurrency)}
                </Label>
              </Checkbox>
            </div>
          )}
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
}

export default Orders
