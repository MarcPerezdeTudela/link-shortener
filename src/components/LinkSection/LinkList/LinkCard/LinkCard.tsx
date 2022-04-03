import { useTranslation } from 'next-i18next'
import React from 'react'
import styles from './styles.module.scss'

interface Props {
  originalLink: string
  shortedLink: string
}
export default function LinkCard({ originalLink, shortedLink }: Props) {
  const { t } = useTranslation()

  return (
    <div className={styles.container}>
      <a
        href={originalLink}
        target="_blank"
        rel="noreferrer"
        className={styles.originalLink}
      >
        {originalLink}
      </a>
      <a
        href={shortedLink}
        target="_blank"
        rel="noreferrer"
        className={styles.shortedLink}
      >
        {shortedLink}
      </a>
      <button
        className={styles.button}
        onClick={() => navigator.clipboard.writeText(shortedLink)}
      >
        {t('copy')}
      </button>
    </div>
  )
}
