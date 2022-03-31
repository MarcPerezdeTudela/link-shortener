import React from 'react'
import Footer from '@/components/Layout/Footer/Footer'
import Header from '@/components/Layout/Header/Header'
import styles from './styles.module.scss'

interface Props {
  children?: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <header className={styles.layout}>
      <div className={styles.navbar}>
        <Header />
      </div>
      <main className={styles.main}>{children}</main>
      <Footer />
    </header>
  )
}
