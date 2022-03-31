import React from 'react'
import Image from 'next/image'
import { CgMenu } from 'react-icons/cg'

import styles from './styles.module.scss'
import Logo from '@/assets/logo.svg'

export default function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image layout="fill" objectFit="contain" alt={'logo'} src={Logo} />
      </div>
      <div className={styles.menuIcon}>
        <CgMenu />
      </div>
    </div>
  )
}
