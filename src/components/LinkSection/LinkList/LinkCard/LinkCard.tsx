import { useTranslation } from 'next-i18next'
import React from 'react'
import useCopy from 'use-copy'
import styles from './styles.module.scss'

interface Props {
  originalLink: string
  shortedLink: string
}
export default function LinkCard({ originalLink, shortedLink }: Props) {
  const { t } = useTranslation()
  const [copied, copy, setCopied] = useCopy(shortedLink)
  const handleClick = () => {
    copy()
    setTimeout(() => {
      setCopied(false)
    }, 3000)
  }

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
        className={`${styles.button} ${copied ? styles.copied : ''}`}
        onClick={handleClick}
      >
        {copied ? t('copied') : t('copy')}
      </button>
    </div>
  )
}
