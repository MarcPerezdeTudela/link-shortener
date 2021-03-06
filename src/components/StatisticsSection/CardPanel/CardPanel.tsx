import React from 'react'
import styles from './styles.module.scss'
import CardItem from './CardItem/CardItem'
import brandImage from '@/assets/icon-brand-recognition.svg'
import detailedImage from '@/assets/icon-detailed-records.svg'
import fullyCustomizableImage from '@/assets/icon-fully-customizable.svg'
import { useTranslation } from 'next-i18next'

export default function CardPanel() {
  const { t } = useTranslation('common')

  return (
    <div className={styles.container}>
      <div className={styles.brandRecognition}>
        <CardItem
          title={t('brandRecognitionTitle')}
          text={t('brandRecognitionText')}
          cardImage={brandImage}
        />
      </div>
      <div className={styles.separator} />
      <div className={styles.detailedRecords}>
        <CardItem
          title={t('detailedRecordsTitle')}
          text={t('detailedRecordsText')}
          cardImage={detailedImage}
        />
      </div>
      <div className={styles.separator} />
      <div className={styles.fullyCustomizable}>
        <CardItem
          title={t('fullyCustomizableTitle')}
          text={t('fullyCustomizableText')}
          cardImage={fullyCustomizableImage}
        />
      </div>
    </div>
  )
}
