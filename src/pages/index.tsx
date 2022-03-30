import type { NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface StaticProps {
  locale: string
}

const Home: NextPage = () => {
  return <></>
}

export async function getStaticProps({ locale }: StaticProps) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  }
}

export default Home
