import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'

interface Props {
  title: string
  text: string
  cardImage: string
}
export default function CardItem({ cardImage, title, text }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.cardImage}>
        <Image height={38} width={38} alt="Card image" src={cardImage} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
