import React from 'react'
import styles from './styles.module.scss'
import { useTranslation } from 'next-i18next'

export default function GetStartedButton() {
  const { t } = useTranslation('common')
  return <button className={styles.button}>{t('getStarted')}</button>
}
