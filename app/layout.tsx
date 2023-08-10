import { Nunito} from "next/font/google"
import './globals.css'
import type { Metadata } from 'next'
import Navbar from "./components/Navbar/Navbar"




export const metadata: Metadata = {
  title: 'Next Airbnd',
  description: 'Airbnb clone build with Nextjs with typescript ',
}

const font = Nunito ({
  subsets:['latin']
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
