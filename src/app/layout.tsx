import React from 'react'
import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({ subsets: ['latin'], weight: ['400','700']})

export const metadata: Metadata = {
  title: 'Marcus Feitosa',
  description: 'Seja bem vindo ao meu portifólio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-[url('../assets/Prancheta.png')]`}>
        {children}
        <ToastContainer />
      </body> 
    </html>
  )
}
