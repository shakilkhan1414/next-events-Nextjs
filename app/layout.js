import Header from '@/components/layout/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { NotificationContextProvider } from '@/store/Notification-context'
import Notification from '@/components/ui/Notification'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Events',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  
  return (
    
    <html lang="en">
      <body className={inter.className}>
        <NotificationContextProvider>
          <Header/>
          {children}
          <Notification/>
        </NotificationContextProvider>
      </body>
    </html>
    
  )
}

