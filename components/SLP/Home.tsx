import { getI18n, getScopedI18n } from '@/locales/server'

import Image from 'next/image'
import { ArrowRight } from 'iconoir-react';

import { Button } from "@/components/ui/button"


export default async function Hero() {
  const t = await getI18n()
  const scopedT = await getScopedI18n('header.navbar')

  return (
    <>
      <div className="Hero container bg-center bg-no-repeat w-screen flex flex-col items-center justify-center mt-10 py-8 z-0  pt-2 md:max-w-6xl" id='home'  >
        <div className='flex flex-col-reverse justify-center md:flex-row  h-full w-[20rem] sm:w-[24rem] md:w-full md:justify-between md:py-[3rem] py-1 mt-4'>

          <div className='HeroSection flex flex-col  text-center md:justify-left md:text-left place-content-center'>
            <h1 className='font-generalsans font-semibold text-7xl max-lg:text-6xl lg:w-[32rem] pt-6 md:pt-0'>{t('home.main.hero.title')}</h1>
            <p className="self-stretch text-white text-opacity-60 text-xl font-medium font-generalsans leading-8 lg:w-[28rem] mt-4">{t('home.main.hero.description')}</p>


            <div className="flex w-full max-w-sm items-center space-x-2 pt-10">

              <Button className="p-5 font-bold text-md py-6 gap-x-2 uppercase" >{t('home.main.hero.button')}  <ArrowRight />
              </Button>
            </div>
          </div>

          <Image
            className="w-[auto] sm:w-[20rem] lg:w-[28rem] h-auto px-2"
            src="/images/hero.webp"
            alt="PPPI logomark"
            width={1830}
            height={2228}
          />
        </div>
      </div>
    </>
  )
}
