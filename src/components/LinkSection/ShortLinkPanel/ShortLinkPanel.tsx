import React, { FormEvent, ChangeEvent, useState, useContext } from 'react'
import styles from './styles.module.scss'
import { Context, LinksContext } from '@/contexts/LinksContext'
import { useTranslation } from 'next-i18next'

export default function ShortLinkPanel() {
  const [textValue, setTextValue] = useState('')
  const { addLink } = useContext(Context) as LinksContext
  const { t } = useTranslation('common')
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    await fetch(`https://api.shrtco.de/v2/shorten?url=${textValue}`)
      .then((response) => response.json())
      .then((data) => {
        const originalLink = data.result.original_link
        const shortLink = `http://${data.result.short_link}`
        addLink(originalLink, shortLink)
      })
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        onInput={handleInput}
        className={styles.input}
        placeholder="Shorten a link here..."
        type="text"
      />
      <button type="submit" className={styles.button}>
        {t('shortenIt')}
      </button>
    </form>
  )
}
