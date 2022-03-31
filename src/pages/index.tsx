import Layout from '@/components/Layout/Layout'
import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface StaticProps {
  locale: string
}

const Home: NextPage = () => {
  return (
    <Layout>
      <h1>Home</h1>
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
