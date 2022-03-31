import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './styles.module.scss'

interface Props {
  children?: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <div className={styles.navbar}>
        <Header />
      </div>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}
