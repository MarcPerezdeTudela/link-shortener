import HeroSection from '@/components/HeroSection/HeroSection'
import Layout from '@/components/Layout/Layout'
import LinkSection from '@/components/LinkSection/LinkSection'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import styles from '@/styles/pageStyles/index.module.scss'
import BoostLinksSection from '@/components/BoostLinksSection/BoostLinksSection'
import StatisticsSection from '@/components/StatisticsSection/StatisticsSection'
interface StaticProps {
  locale: string
}

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.heroSection}>
        <HeroSection />
      </div>
      <LinkSection />
      <StatisticsSection />
      <BoostLinksSection />
    </Layout>
  )
}

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
    },
  }
}

export default Home
