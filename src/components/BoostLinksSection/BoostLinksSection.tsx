import React from 'react'
import styles from './styles.module.scss'
import GetStartedButton from '../GetStartedButton/GetStartedButton'

export default function BoostLinksSection() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Boost your links today</h2>
      <GetStartedButton />
    </div>
  )
}
