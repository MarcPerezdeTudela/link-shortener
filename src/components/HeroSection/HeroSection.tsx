import Image from 'next/image'
import React from 'react'

import styles from './styles.module.scss'
import WorkingImage from '@/assets/illustration-working.svg'
import { useTranslation } from 'next-i18next'
import GetStartedButton from '../GetStartedButton/GetStartedButton'

export default function HeroSection() {
  const { t } = useTranslation('common')

  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <Image
          src={WorkingImage}
          alt="working image"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.body}>
        <h1 className={styles.title}>{t('heroTitle')}</h1>
        <p className={styles.text}>{t('heroText')}</p>
        <div className={styles.button}>
          <GetStartedButton />
        </div>
      </div>
    </section>
  )
}
