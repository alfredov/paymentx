
import Head from 'next/head'
import { connect } from 'react-redux'

import { Header } from '@bits-x/header'
import * as Avatar from '@bits-x/avatar'

import styles from '../styles/Home.module.css'
import * as selectors from '../selectors'
import Orders from '../components/Orders'

type Props = ReturnType<typeof mapStateToProps>

const Home = (props: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
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
              <span>$ ---</span>
            </div>
          </div>
        )}
        <Orders
          due={props.orders.due}
          paid={props.orders.paid}
          outstanding={props.orders.outstanding}
          onAdd={(order) => console.log('onAdd', order)}
          onRemove={(order) => console.log('onRemove', order)}
        />
      </main>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  student: selectors.fetchStudent(state).data,
  orders: selectors.orders(state)
})

export default connect(mapStateToProps)(Home)
