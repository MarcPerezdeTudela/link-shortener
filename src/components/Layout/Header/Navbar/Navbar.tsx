import { useTranslation } from 'next-i18next'
import React from 'react'
import styles from './styles.module.scss'

export default function Navbar() {
  const { t } = useTranslation('navbar')
  return (
    <nav className={styles.container}>
      <div className={styles.leftLinks}>
        <a className={styles.link} href="#">
          {t('features')}
        </a>
        <a className={styles.link} href="#">
          {t('pricing')}
        </a>
        <a className={styles.link} href="#">
          {t('resources')}
        </a>
      </div>
      <div className={styles.rightLinks}>
        <a className={styles.link} href="#">
          {t('login')}
        </a>
        <a className={styles.signUp} href="#">
          {t('signUp')}
        </a>
      </div>
    </nav>
  )
}
