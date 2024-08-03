
import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Igor Kostoski || Personal Portfolio',
  description: 'Igor is a Software Engineer, with 2 years experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >


        <div className="bg-[#0ea5e9] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem]
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>

        <div className="bg-[#1d4ed8] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem]
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]
        xl:left-[25rem] 2xl:left-[-5rem]"></div>

          <ActiveSectionContextProvider>
            <Header />
            {children}
            
          </ActiveSectionContextProvider>
        
        </body>
    </html>
  );
}
