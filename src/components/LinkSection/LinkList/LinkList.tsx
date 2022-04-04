import React, { useContext } from 'react'
import { Context, LinksContext } from '@/contexts/LinksContext'
import styles from './styles.module.scss'
import LinkCard from './LinkCard/LinkCard'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'

export default function LinkList() {
  const { linkList } = useContext(Context) as LinksContext
  const variants = {
    pre: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <AnimateSharedLayout>
      <motion.ul layout className={styles.container}>
        <AnimatePresence initial={false}>
          {linkList.map((item) => (
            <motion.li
              layout
              variants={variants}
              initial="pre"
              animate="visible"
              key={item.uuid}
              className={styles.item}
            >
              <LinkCard
                originalLink={item.originalLink}
                shortedLink={item.shortedLink}
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </AnimateSharedLayout>
  )
}
