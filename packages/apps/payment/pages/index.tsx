import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Checkbox, Label } from '@bits-x/checkbox'
import * as Acordion from '@bits-x/accordion'
import { Header } from '@bits-x/header'
import * as Avatar from '@bits-x/avatar'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header>
        <Avatar.Root>
          <Avatar.Image alt="school" src="http://ec2-3-239-221-74.compute-1.amazonaws.com:8000/media/school_logos/download.png" />
          <Avatar.Name>x School</Avatar.Name>
        </Avatar.Root>
      </Header>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Checkbox id="input-title">
          <Label>Check this</Label>
        </Checkbox>
        <Acordion.Root>
          <Acordion.Item>
            <Acordion.Trigger>
              <Acordion.Title>Nombre de categoría</Acordion.Title>
              <Acordion.PrimaryText>title</Acordion.PrimaryText>
              <Acordion.SecondaryText>Content title1</Acordion.SecondaryText>
            </Acordion.Trigger>
            <Acordion.Content>
              Contenido
            </Acordion.Content>
          </Acordion.Item>
          <Acordion.Item>
            <Acordion.Trigger>
              <Acordion.Title>Subrama de materia</Acordion.Title>
              <Acordion.PrimaryText>Dar click aqui</Acordion.PrimaryText>
            </Acordion.Trigger>
            <Acordion.Content>
              Contenido 🙏
            </Acordion.Content>
          </Acordion.Item>
        </Acordion.Root>
        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
