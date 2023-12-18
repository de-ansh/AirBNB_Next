import { Nunito} from "next/font/google"
import './globals.css'
import type { Metadata } from 'next'
import Navbar from "./components/Navbar/Navbar"
import ClinetOnly from "./components/ClientOnly"
import RegisterModal from "./components/Modals/RegisterModal"
import ToasterProvider from "./providers/ToastProviders"
import LoginModal from "./components/Modals/LoginModal"
import getCurrentUser from "./actions/getCurrentUser"





export const metadata: Metadata = {
  title: 'Next Airbnd',
  description: 'Airbnb clone build with Nextjs with typescript ',
}

const font = Nunito ({
  subsets:['latin']
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const CurrentUser= await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className}>
        <ClinetOnly>
          <ToasterProvider/>
          <LoginModal/>
          <RegisterModal />
          <Navbar currentUser= {CurrentUser}/>
        </ClinetOnly>
        {children}
        </body>
    </html>
  )
}
