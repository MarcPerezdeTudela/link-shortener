import React, { useContext } from 'react'
import { Context, LinksContext } from '@/contexts/LinksContext'
import styles from './styles.module.scss'
import LinkCard from './LinkCard/LinkCard'

export default function LinkList() {
  const { linkList } = useContext(Context) as LinksContext
  return (
    <ul className={styles.container}>
      {linkList.map((item) => (
        <li key={item.uuid} className={styles.item}>
          <LinkCard
            originalLink={item.originalLink}
            shortedLink={item.shortedLink}
          />
        </li>
      ))}
    </ul>
  )
}
