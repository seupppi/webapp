'use client'
import * as React from "react"
import Link from "next/link"
import Image from "next/image"


export default function Logomark() {
  return (
    <>
      <Link href="/">
        <div className="sm:flex flex-shrink-0 flex items-center">
          <Image
            className="h-12 w-auto pr-2"
            src="/images/icon.webp"
            alt="PPPI logomark"
            width={160}
            height={160}
          />
          <abbr title="Programa de Proteção à Propriedade Intelectual" className="sm:flex font-black text-3xl font-goldplay hidden no-underline ">PPPI</abbr>
        </div>
      </Link>
    </>
  )
}