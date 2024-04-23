

import Image from 'next/image'

import { Header } from '@/components/header/Header'
import  HowItWorks  from '@/components/SLP/HowItWorks'
import  Hero  from '@/components/SLP/Home'

import { getI18n, getScopedI18n } from '@/locales/server'



export async function generateMetadata() {
  const t = await getI18n()
  const scopedT = await getScopedI18n('metadata')

  return {
    title: t('metadata.title'),
    description: t('metadata.description'),
    icons: {
      icon: '/favicon.ico',
    }
  };
}

export default async function Home() {
  const t = await getI18n()
  const scopedT = await getScopedI18n('home')

  return (
    <>
      <Header />

      <main className="flex bg-background-secondary flex-col items-center justify-between font-generalsans">
        
        <Hero />
        <HowItWorks />

      </main >

    </>
  )
}
