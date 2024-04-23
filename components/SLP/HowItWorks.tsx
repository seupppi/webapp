/* eslint-disable @next/next/no-img-element */

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Iconoir, ProfileCircle } from 'iconoir-react'

import { LangSwitch } from '@/components/buttons/LangSwitcher'

import { Button } from "@/components/ui/button"



import { getI18n, getScopedI18n } from '@/locales/server'

export default async function HowItWorks() {
  const t = await getI18n()
  const scopedT = await getScopedI18n('header.navbar')

  return (
    <>
      <div className="Hero container bg-center bg-no-repeat w-screen flex flex-col items-center justify-center mt-10 py-8 z-0  pt-2  bg-primary" id='advantages'  >
        <div className="w-[1256px] h-[915px] flex-col justify-center items-center gap-[49px] inline-flex">
          <div className="bg-white flex-col justify-center items-center gap-2.5 flex">
            <div className="text-gray-700 text-2xl font-medium font-['General Sans']">Vantagens</div>
            <div className="w-[809px] h-28 text-center text-black text-[64px] font-semibold font-['General Sans'] leading-[64px]">Com a nossa plataforma você tem</div>
          </div>
          <div className="flex-col justify-center items-center gap-8 flex">
            <div className="w-[928px] rounded-[20px] justify-center items-center gap-8 inline-flex">
              <div className="grow shrink basis-0 h-[282px] bg-blue-900 rounded-[30px] flex-col justify-center items-center gap-4 inline-flex">
                <div className="p-5 bg-blue-700 rounded-[999px] justify-center items-center gap-2.5 inline-flex">
                  <div className="w-[66px] h-[66px] relative">
                    <div className="w-[66px] h-[66px] left-0 top-0 absolute rounded-full border-4 border-white" />
                  </div>
                </div>
                <div className="w-[242px] text-center text-white text-2xl font-bold font-['Inter'] leading-normal">Análise e Registro de Marcas</div>
              </div>
              <div className="grow shrink basis-0 h-[282px] bg-blue-900 rounded-[30px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="p-5 bg-blue-700 rounded-[999px] justify-center items-center gap-2.5 inline-flex">
                  <img className="w-[66px] h-[66px]" src="https://via.placeholder.com/66x66" />
                  <div className="w-6 h-6 relative" />
                </div>
                <div className="w-[223px] text-center text-white text-2xl font-bold font-['Inter'] leading-normal">Registro de Patentes</div>
              </div>
              <div className="grow shrink basis-0 h-[282px] bg-blue-900 rounded-[30px] flex-col justify-center items-center gap-2.5 inline-flex">
                <div className="p-5 bg-blue-700 rounded-[999px] justify-center items-center gap-2.5 inline-flex">
                  <img className="w-[66px] h-[66px]" src="https://via.placeholder.com/66x66" />
                </div>
                <div className="w-[214px] text-center text-white text-2xl font-bold font-['Inter'] leading-normal">Compliance para Anvisa</div>
              </div>
            </div>
            <div className="w-[1257px] justify-center items-center gap-8 inline-flex">
              <div className="w-72 h-[282px] bg-blue-900 rounded-[30px] flex-col justify-center items-center gap-1 inline-flex">
                <div className="p-5 bg-blue-700 rounded-[999px] justify-center items-center gap-2.5 inline-flex">
                  <div className="w-[66px] h-[66px] relative flex-col justify-start items-start inline-flex">
                    <div className="w-[22px] h-6 relative" />
                    <div className="w-9 h-9 px-[4.50px] justify-center items-center inline-flex">
                      <div className="w-[27px] h-9 relative">
                      </div>
                    </div>
                    <div className="w-6 h-6 relative" />
                    <div className="w-[26px] h-[26px] px-[3.25px] justify-center items-center inline-flex">
                      <div className="w-[19.50px] h-[26px] relative">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[223px] text-center text-white text-2xl font-bold font-['Inter'] leading-normal">Consultoria para Startups</div>
              </div>
              <div className="w-72 h-[282px] bg-blue-900 rounded-[30px] flex-col justify-center items-center gap-1 inline-flex">
                <div className="p-5 bg-blue-700 rounded-[999px] justify-center items-center gap-2.5 inline-flex">
                  <div className="w-[66px] h-[66px] relative">
                    <div className="w-[25px] h-[25px] left-[20px] top-[20px] absolute rounded-full border-2 border-white" />
                    <div className="w-[30.66px] left-[18px] top-[2px] absolute">
                    </div>
                    <div className="w-[30.66px] left-[18px] top-[62.66px] absolute">
                    </div>
                  </div>
                </div>
                <div className="w-[209px] text-center text-white text-2xl font-bold font-['Inter'] leading-normal">Monitoramento de Marcas</div>
              </div>
            </div>
          </div>
          <div className="px-16 py-5 bg-blue-700 rounded-[999px] justify-center items-center gap-1 inline-flex">
            <div className="text-white text-xl font-semibold font-['General Sans'] uppercase">Começar agora</div>
            <div className="w-6 h-6 relative" />
          </div>
        </div>

       </div>
    </>
  )
}
