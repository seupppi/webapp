/* eslint-disable @next/next/no-img-element */

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Iconoir, ProfileCircle, ArrowRight } from 'iconoir-react'

import { LangSwitch } from '@/components/buttons/LangSwitcher'

import { Button } from "@/components/ui/button"



import { getI18n, getScopedI18n } from '@/locales/server'

export default async function HowItWorks() {
  const t = await getI18n()
  const scopedT = await getScopedI18n('header.navbar')

  return (
    <>
      <div className="Hero container bg-center bg-no-repeat w-screen flex flex-col items-center justify-center mt-10 py-8 z-0  pt-5  bg-primary" id='advantages'  >
        <div className="max-w-[1256px] h-[915px] flex-col justify-center items-center gap-[50px] inline-flex mt-10 ">
          <div className="flex-col justify-center items-center gap-2.5 flex">
            <p className="text-slate-600 text-xl font-medium font-generalsans ">Vantagens</p>
            <h2 className="w-[809px] h-28 text-center text-black text-6xl font-semibold font-['General Sans'] leading-[64px]">Com a nossa plataforma você tem</h2>
          </div>
          <div className="flex-col justify-center items-center gap-8 flex">
            <div className="w-[928px] rounded-[20px] justify-center items-center gap-8 inline-flex">
              <div className="grow shrink basis-0 h-[282px] bg-background-secondary rounded-[30px] flex-col justify-center items-center gap-4 inline-flex">
                <div className="p-5 bg-blue-700 rounded-[999px] justify-center items-center gap-2.5 inline-flex">
                  <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M23 21V46H28.4V37.5312H33.7563L38.0667 46H44L38.958 36.309C40.0197 35.6675 40.9337 34.7876 41.7 33.6694C42.5667 32.3821 43 30.8238 43 28.9946C43 27.1879 42.5778 25.6974 41.7333 24.523C40.9111 23.3261 39.9111 22.4453 38.7333 21.8808C37.5556 21.2936 36.4667 21 35.4667 21H23ZM28.4 33.4661H33.4C34.1333 33.4661 34.9222 33.0935 35.7667 32.3482C36.6333 31.603 37.0667 30.4851 37.0667 28.9946C37.0667 27.4589 36.6333 26.4201 35.7667 25.878C34.9222 25.336 34.1778 25.065 33.5333 25.065H28.4V33.4661Z" fill="white" />
                    <circle cx="33" cy="33" r="30.5" stroke="white" stroke-width="5" />
                  </svg>

                </div>
                <h3 className="max-w-[220px] text-center text-white font-medium font-generalsasns leading-normal text-xl">Análise e Registro de Marcas</h3>
              </div>
              <div className="grow shrink basis-0 h-[282px] bg-background-secondary rounded-[30px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="p-5 bg-blue-700 rounded-[999px] justify-center items-center gap-2.5 inline-flex">

                  <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M50.3637 23.2706C50.3637 32.8156 42.6371 40.5412 33.1209 40.5412C23.6048 40.5412 15.8782 32.8156 15.8782 23.2706C15.8782 13.7255 23.6048 6 33.1209 6C42.6371 6 50.3637 13.7255 50.3637 23.2706ZM34.2837 46.5126C33.8985 46.5316 33.5108 46.5412 33.1209 46.5412C32.6523 46.5412 32.1869 46.5273 31.7252 46.4999L30.6572 48.0269L20.9354 61.9277L18.0874 66L16.502 61.2875L13.7097 52.9882L4.96519 53.1997L0 53.3199L2.848 49.2477L12.5698 35.3468L12.9383 34.82C10.9912 31.4167 9.87817 27.4738 9.87817 23.2706C9.87817 10.4186 20.2843 0 33.1209 0C45.9576 0 56.3637 10.4186 56.3637 23.2706C56.3637 27.5519 55.2089 31.5633 53.1941 35.0093L53.4302 35.3468L63.152 49.2477L66 53.3199L61.0348 53.1997L52.2903 52.9882L49.498 61.2875L47.9126 66L45.0646 61.9277L35.3428 48.0269L34.2837 46.5126ZM48.0233 41.1293L46.2951 42.9776C45.9156 43.3835 45.4558 43.7058 44.9451 43.924L39.1009 46.4211L46.65 57.2153L48.5015 51.7121C49.0609 50.0495 50.6366 48.9448 52.3884 48.9872L58.1868 49.1275L50.7279 38.4624C49.9003 39.423 48.9956 40.3152 48.0233 41.1293ZM15.3623 38.3333L19.7049 42.9776C20.0844 43.3835 20.5442 43.7058 21.0549 43.924L26.8991 46.4211L19.35 57.2153L17.4985 51.7121C16.9391 50.0495 15.3634 48.9448 13.6116 48.9872L7.81319 49.1275L15.3623 38.3333Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M40.0247 19.2048L41.1224 21.8554L43.5 22.46L43.4999 24.4371L41.1139 25.058L40.0159 27.7094L41.5 29.46L39.5 31.46C39.5 31.46 38.1969 30.2913 37.7551 29.9755L35.1045 31.0731L34.5 33.46H32.5L31.897 31.0723L29.2912 30.0003L27.5 31.46L25.5 29.46L27.0157 27.7597L25.9011 25.1155L23.5 24.46V22.46L25.8725 21.9063L26.9534 19.2488L25.5 17.46L27.5 15.46L29.2044 16.9759L31.8491 15.8611L32.481 13.46H34.4353L35.0578 15.8297L37.7647 16.9429L39.5 15.46L41.5 17.46L40.0247 19.2048ZM33.5 28.46C36.2614 28.46 38.5 26.2214 38.5 23.46C38.5 20.6985 36.2614 18.46 33.5 18.46C30.7386 18.46 28.5 20.6985 28.5 23.46C28.5 26.2214 30.7386 28.46 33.5 28.46Z" fill="white" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                </div>
                <h3 className="max-w-[220px] text-center text-white font-medium font-generalsasns leading-normal text-xl">Registro de Patentes</h3>
              </div>
              <div className="grow shrink basis-0 h-[282px] bg-background-secondary rounded-[30px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="p-5 bg-blue-700 rounded-[999px] justify-center items-center gap-2.5 inline-flex">
                  <svg width="66" height="67" viewBox="0 0 66 67" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6592 59.7334H22.1204V43.8833H3.98828V41.3448H22.1204H24.6592V43.8833V59.7334ZM62.0115 41.3448V43.8833H43.8776V59.7334H41.3392V43.8833V41.3448H43.8776H62.0115ZM41.3392 7.00003H43.8776V22.8499H62.0115V25.3883H43.8776H41.3392V22.8499V7.00003ZM22.1204 7.00003H24.6592V25.3883H3.98828V22.8499H22.1204V7.00003Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.3065 33.3662C19.8155 52.8252 64.3248 55.1425 66 36.9927C57.9353 56.939 29.8045 43.1943 20.3065 33.3662ZM45.6933 33.367C46.1844 13.9081 1.67502 11.5909 0 29.7406C8.06468 9.79412 36.1955 23.5391 45.6933 33.367Z" fill="white" />
                    <circle cx="33.0092" cy="33.3497" r="4.63288" fill="white" />
                  </svg>

                </div>
                <h3 className="max-w-[220px] text-center text-white font-medium font-generalsasns leading-normal text-xl">Compliance para Anvisa</h3>
              </div>
            </div>
            <div className="max-w-[1257px] justify-center items-center gap-8 inline-flex">
              <div className="w-72 h-[282px] bg-background-secondary rounded-[30px] flex-col justify-center items-center gap-1 inline-flex">
                <div className="p-5 bg-blue-700 rounded-[999px] justify-center items-center gap-2.5 inline-flex">
                  <div className="w-[66px] h-[66px] relative">

                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 39C26.799 39 31.5 34.299 31.5 28.5C31.5 22.701 26.799 18 21 18C15.201 18 10.5 22.701 10.5 28.5C10.5 34.299 15.201 39 21 39Z" fill="white" />
                      <path d="M21 42.4985C12.3055 42.5082 5.25968 49.554 5.25 58.2485C5.25 59.215 6.03348 59.9985 6.99997 59.9985H34.9999C35.9664 59.9985 36.7499 59.215 36.7499 58.2485C36.7403 49.554 29.6945 42.5081 21 42.4985Z" fill="white" />
                      <path d="M47 45C51.1421 45 54.5 41.6421 54.5 37.5C54.5 33.3579 51.1421 30 47 30C42.8579 30 39.5 33.3579 39.5 37.5C39.5 41.6421 42.8579 45 47 45Z" fill="white" />
                      <path d="M47 47.499C40.7896 47.5059 35.7569 52.5387 35.75 58.749C35.75 59.4394 36.3096 59.999 37 59.999H57C57.6903 59.999 58.2499 59.4394 58.2499 58.749C58.2431 52.5387 53.2104 47.5059 47 47.499Z" fill="white" />
                      <path d="M40.3333 12H40.3425M44 12H44.0092M47.6667 12H47.6758M52.25 12C52.25 16.4183 48.5563 20 44 20C42.589 20 41.2607 19.6565 40.0993 19.0511L35 21.8184L37.0287 16.28C36.2189 15.0423 35.75 13.5743 35.75 12C35.75 7.58172 39.4437 4 44 4C48.5563 4 52.25 7.58172 52.25 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>



                  </div>
                </div>
                <h3 className="max-w-[220px] text-center text-white font-medium font-generalsasns leading-normal text-xl">Consultoria para Startups</h3>
              </div>
              <div className="w-72 h-[282px] bg-background-secondary rounded-[30px] flex-col justify-center items-center gap-1 inline-flex">
                <div className="p-5 bg-blue-700 rounded-[999px] justify-center items-center gap-2.5 inline-flex">
                  <div className="w-[66px] h-[66px] relative">

                    <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M65.5073 30.7477C63.0928 25.4677 53.6245 8.25 32.9995 8.25C12.3745 8.25 2.90627 25.4677 0.491774 30.7477C0.167654 31.4553 -0.00012207 32.2245 -0.00012207 33.0028C-0.00012207 33.781 0.167654 34.5502 0.491774 35.2577C2.90627 40.5322 12.3745 57.75 32.9995 57.75C53.6245 57.75 63.0928 40.5323 65.5073 35.2523C65.8307 34.5455 65.9982 33.7773 65.9982 33C65.9982 32.2227 65.8307 31.4545 65.5073 30.7477ZM32.9995 52.25C15.6553 52.25 7.56202 37.4935 5.49952 33.0302C7.56202 28.5065 15.6553 13.75 32.9995 13.75C50.3025 13.75 58.3985 28.4433 60.4995 33C58.3985 37.5567 50.3025 52.25 32.9995 52.25Z" fill="white" />
                      <circle cx="32.5" cy="32.5" r="11" stroke="white" stroke-width="3" />
                      <path d="M33 10V2" stroke="white" stroke-width="3" stroke-linecap="round" />
                      <path d="M23.6569 10.6569L18 5" stroke="white" stroke-width="3" stroke-linecap="round" />
                      <path d="M42.9999 10.6569L48.6567 5" stroke="white" stroke-width="3" stroke-linecap="round" />
                      <path d="M33 54.6567V62.6567" stroke="white" stroke-width="3" stroke-linecap="round" />
                      <path d="M23.6569 53.9999L18 59.6567" stroke="white" stroke-width="3" stroke-linecap="round" />
                      <path d="M42.9999 53.9999L48.6567 59.6567" stroke="white" stroke-width="3" stroke-linecap="round" />
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M29 28V37H31.0571V33.9512H33.0976L34.7397 37H37L35.0792 33.5112C35.4837 33.2803 35.8319 32.9635 36.1238 32.561C36.454 32.0976 36.619 31.5366 36.619 30.878C36.619 30.2276 36.4582 29.6911 36.1365 29.2683C35.8233 28.8374 35.4423 28.5203 34.9936 28.3171C34.545 28.1057 34.1302 28 33.7492 28H29ZM31.0571 32.4878H32.9619C33.2413 32.4878 33.5418 32.3537 33.8635 32.0854C34.1937 31.8171 34.3587 31.4146 34.3587 30.878C34.3587 30.3252 34.1937 29.9512 33.8635 29.7561C33.5418 29.561 33.2582 29.4634 33.0127 29.4634H31.0571V32.4878Z" fill="white" />
                    </svg>

                  </div>
                </div>
                <h3 className="max-w-[220px] text-center text-white font-medium font-generalsasns leading-normal text-xl">Monitoramento de Marcas</h3>
              </div>
            </div>
          </div>
          <Button className="p-5 font-bold text-md py-6 gap-x-2 uppercase bg-secondary text-white hover:bg-blue-800" > <h3> {t('home.main.hero.button')} </h3>  <ArrowRight />
          </Button>
        </div>

      </div>
    </>
  )
}
