
import Head from 'next/head'
import { connect } from 'react-redux'

import { Header } from '@bits-x/header'
import * as Avatar from '@bits-x/avatar'
import Button from '@bits-x/button'

import styles from '../styles/Home.module.css'
import * as selectors from '../selectors'
import Orders from '../components/Orders'
import addOrderAction from '../actions/addOrder'
import removeOrderAction from '../actions/removeOrder'

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const Home = (props: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        {props.student && (
          <Avatar.Root>
            <Avatar.Image
              alt={props.student.schoolName}
              src={props.student.schoolLogo}
            />
            <Avatar.Name>{props.student.schoolName}</Avatar.Name>
          </Avatar.Root>
        )}
      </Header>
      <main className={styles.main}>
        {props.student && (
          <div className={styles.studentInfo}>
            <div className={styles.studentInfoItem}>
              <span>{props.student.firstName} {props.student.lastName}</span>
              <span>{props.student.cohort}</span>
            </div>
            <div className={styles.studentInfoItem}>
              <span>Total a Pagar</span>
              <span>$ {props.cart.total}</span>
            </div>
          </div>
        )}
        <Orders
          loading={props.loading}
          due={props.orders.due}
          paid={props.orders.paid}
          outstanding={props.orders.outstanding}
          onAdd={({ id, price, due, status }) => props.addOrder({ id, price, due, status })}
          onRemove={({ id, price, due, status }) => props.removeOrder({ id, price, due, status })}
        />
          <div className={styles.buttonWrapper}>
            <Button
              css={{ flex: 1 }}
              disabled={props.cart.total === 0}
            >
              IR A PAGAR
            </Button>
          </div>
      </main>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  student: selectors.fetchStudent(state).data,
  orders: selectors.orders(state),
  loading: selectors.fetchOrders(state).loading,
  cart: selectors.cartReducer(state)
})

const mapDispatchToProps = ({
  addOrder: addOrderAction,
  removeOrder: removeOrderAction.request
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
