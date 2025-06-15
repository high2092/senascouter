import {Metadata} from 'next'
import './globals.css'
import Favicon from '../public/favicon.ico'
import {Navbar} from './_/field/navbar'

export const metadata: Metadata = {
  title: '세나리 시뮬레이터',
  icons: Favicon.src,
  description: '세븐나이츠 리버스 스펙, 팀구성, 전투 시뮬레이션 제공',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <body>
        <main className="h-[calc(100vh-40px)]">{children}</main>
        <Navbar />
      </body>
    </html>
  )
}
