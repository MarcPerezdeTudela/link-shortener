import React, {
  FormEvent,
  ChangeEvent,
  useState,
  useContext,
  useRef,
} from 'react'
import styles from './styles.module.scss'
import { Context, LinksContext } from '@/contexts/LinksContext'
import { useTranslation } from 'next-i18next'

import { getShortenedLink } from 'src/utils/linkAPI'
import { validateURL } from 'src/utils/validateURL'

export default function ShortLinkPanel() {
  const [textValue, setTextValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const errorMesageRef = useRef<HTMLParagraphElement>(null)
  const { addLink } = useContext(Context) as LinksContext
  const { t } = useTranslation('common')

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setTextValue(event.target.value)
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (validateURL(textValue)) {
      inputRef.current?.scrollIntoView({ behavior: 'smooth' })
      const { originalLink, shortLink } = await getShortenedLink(textValue)
      errorMesageRef.current?.classList.remove(styles.show)
      inputRef.current?.classList.remove(styles.errorInput)
      addLink(originalLink, shortLink)
    } else {
      errorMesageRef.current?.classList.add(styles.show)
      inputRef.current?.classList.add(styles.errorInput)
      console.log('Invalid URL')
    }
    setTextValue('')
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        ref={inputRef}
        autoCapitalize="off"
        onInput={handleInput}
        value={textValue}
        className={styles.input}
        placeholder={t('shortenLinkPlaceholder')}
        type="text"
      />
      <div ref={errorMesageRef} className={styles.errorMessage}>
        {t('invalidURL')}
      </div>
      <button type="submit" className={styles.button}>
        {t('shortenIt')}
      </button>
    </form>
  )
}
