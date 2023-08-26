import { Nunito} from "next/font/google"
import './globals.css'
import type { Metadata } from 'next'
import Navbar from "./components/Navbar/Navbar"
import ClinetOnly from "./components/ClientOnly"
import RegisterModal from "./components/Modals/RegisterModal"
import ToasterProvider from "./providers/ToastProviders"





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
        <ClinetOnly>
          <ToasterProvider/>
          <RegisterModal />
          <Navbar/>
        </ClinetOnly>
        {children}
        </body>
    </html>
  )
}
