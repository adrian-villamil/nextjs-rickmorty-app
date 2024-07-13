import React from 'react'
import { buttonVariants } from './ui/button'
import Link from 'next/link'

export const PageNotFound = () => {
  return (
    <main className="flex justify-center items-center">
      <div className="max-w-sm sm:max-w-lg md:max-w-2xl">
        <h1 className="text-8xl sm:text-[10rem] md:text-[14rem] font-bold text-center">404</h1>
        <div className="space-y-2 sm:space-y-4 md:space-y-6">
          <p className="text-xl sm:text-2xl md:text-4xl font-bold text-balance text-center">
            {"Oops, the page you're looking for doesn't exist"}
          </p>
          <p className="text-sm sm:text-base text-balance text-center text-muted-foreground">
            {"It looks like you've stumbled upon a portal to another dimension. Let's get you back to the Rick and Morty home page."}
          </p>
          <div className="flex justify-center">
            <Link href={'/'} className={buttonVariants()}>Take me back home</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
