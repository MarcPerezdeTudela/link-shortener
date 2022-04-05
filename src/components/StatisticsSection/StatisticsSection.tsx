import { useTranslation } from 'next-i18next'
import React from 'react'
import CardPanel from './CardPanel/CardPanel'
import styles from './styles.module.scss'

export default function StatisticsSection() {
  const { t } = useTranslation('common')

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t('statisticsTitle')}</h2>
      <p className={styles.text}>{t('statisticsText')}</p>
      <div className={styles.cardPanel}>
        <CardPanel />
      </div>
    </div>
  )
}
