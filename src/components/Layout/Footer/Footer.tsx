import Image from 'next/image'
import React from 'react'
import { useTranslation } from 'next-i18next'

import styles from './styles.module.scss'
import Logo from '@/assets/logo-footer.svg'
import FacebookIcon from '@/assets/icon-facebook.svg'
import TwitterIcon from '@/assets/icon-twitter.svg'
import PinterestIcon from '@/assets/icon-pinterest.svg'
import InstagramIcon from '@/assets/icon-instagram.svg'
import Link from 'next/link'

export default function Footer() {
  const { t } = useTranslation('footer')

  return (
    <footer className={styles.container}>
      <div className={styles.logo}>
        <Image layout="fill" objectFit="contain" alt="logo" src={Logo} />
      </div>

      <div className={styles.linkList}>
        <div className={styles.linkSection}>
          <p className={styles.linkTitle}>{t('features')}</p>
          <Link href={'/'}>
            <a className={styles.link}>{t('linkShortening')}</a>
          </Link>
          <Link href={'/'}>
            <a className={styles.link}>{t('brandedLinks')}</a>
          </Link>
          <Link href={'/'}>
            <a className={styles.link}>{t('analytics')}</a>
          </Link>
        </div>

        <div className={styles.linkSection}>
          <p className={styles.linkTitle}>{t('resources')}</p>
          <Link href={'/'}>
            <a className={styles.link}>{t('blog')}</a>
          </Link>
          <Link href={'/'}>
            <a className={styles.link}>{t('developers')}</a>
          </Link>
          <Link href={'/'}>
            <a className={styles.link}>{t('support')}</a>
          </Link>
        </div>

        <div className={styles.linkSection}>
          <p className={styles.linkTitle}>{t('company')}</p>
          <Link href={'/'}>
            <a className={styles.link}>{t('about')}</a>
          </Link>
          <Link href={'/'}>
            <a className={styles.link}>{t('ourTeam')}</a>
          </Link>
          <Link href={'/'}>
            <a className={styles.link}>{t('careers')}</a>
          </Link>
          <Link href={'/'}>
            <a className={styles.link}>{t('careers')}</a>
          </Link>
        </div>
      </div>

      <div className={styles.socialMediaContainer}>
        <div className={styles.socialMediaIcon}>
          <Image
            layout="fill"
            objectFit="contain"
            src={FacebookIcon}
            alt="facebook"
          />
        </div>
        <div className={styles.socialMediaIcon}>
          <Image
            layout="fill"
            objectFit="contain"
            src={TwitterIcon}
            alt="twitter"
          />
        </div>
        <div className={styles.socialMediaIcon}>
          <Image
            layout="fill"
            objectFit="contain"
            src={PinterestIcon}
            alt="pinterest"
          />
        </div>
        <div className={styles.socialMediaIcon}>
          <Image
            layout="fill"
            objectFit="contain"
            src={InstagramIcon}
            alt="instagram"
          />
        </div>
      </div>
    </footer>
  )
}
