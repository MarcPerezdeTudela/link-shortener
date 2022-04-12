import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { CgMenu } from 'react-icons/cg'

import styles from './styles.module.scss'
import Logo from '@/assets/logo.svg'
import MobileMenu from './MobileMenu/MobileMenu'
import useOnClickOutside from '@/hooks/useOnClickOutside'
import Navbar from './Navbar/Navbar'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const modalRef = useRef(null)
  useOnClickOutside(modalRef, () => setIsMenuOpen(false))

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image layout="fill" objectFit="cover" alt={'logo'} src={Logo} />
      </div>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={styles.menuIcon}
        ref={modalRef}
      >
        <CgMenu />
        <MobileMenu isOpen={isMenuOpen} />
      </div>
    </div>
  )
}
