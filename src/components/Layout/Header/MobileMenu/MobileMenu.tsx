import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import React from 'react'
import styles from './styles.module.scss'

interface Props {
  isOpen: boolean
}
export default function MobileMenu({ isOpen }: Props) {
  const { t } = useTranslation('navbar')
  const variants = {
    open: { display: 'block', opacity: 1, y: 0 },
    closed: { opacity: 0, y: '-20px', transitionEnd: { display: 'none' } },
  }

  return (
    <motion.nav
      animate={isOpen ? 'open' : 'closed'}
      initial="closed"
      variants={variants}
      className={styles.container}
    >
      <ul className={styles.itemList}>
        <li>
          <a className={styles.item} href="#">
            {t('features')}
          </a>
        </li>
        <li>
          <a className={styles.item} href="#">
            {t('pricing')}
          </a>
        </li>
        <li>
          <a className={styles.item} href="#">
            {t('resources')}
          </a>
        </li>
        <li>
          <div className={styles.separator} />
        </li>
        <li>
          <a className={styles.item} href="#">
            {t('login')}
          </a>
        </li>
        <li>
          <a className={`${styles.item} ${styles.signUp}`} href="#">
            {t('signUp')}
          </a>
        </li>
      </ul>
    </motion.nav>
  )
}
