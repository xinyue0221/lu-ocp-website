import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lu Memorial | Office of Scholarship Programs',
  description: 'Lu Memorial Foundation Office of Scholarship Programs',
  icons: {
    icon: '/favicon-lu.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          {/* Top blue bar */}
          <div className="top-bar py-4">
            <div className="container">
              <div className="flex items-center">
                <h1 className="text-xl md:text-2xl font-serif">
                  <Link href="/" className="text-white">
                    <span className="font-bold">Lu Memorial</span>
                    <span className="px-2 text-gray-300">|</span>
                    <span className="font-normal">Office of Scholarship Programs</span>
                  </Link>
                </h1>
              </div>
            </div>
          </div>
          
          {/* Navigation bar */}
          <nav className="border-b border-gray-300">
            <div className="container">
              <div className="flex justify-between">
                {/* Main navigation */}
                <ul className="flex space-x-8 list-none">
                  <li className="py-3">
                    <Link href="/discover" className="text-gray-800 hover:text-blue-800 font-medium">
                      Discover <span className="hidden sm:inline">▾</span>
                    </Link>
                  </li>
                  <li className="py-3">
                    <Link href="/apply" className="text-gray-800 hover:text-blue-800 font-medium">
                      Apply
                    </Link>
                  </li>
                  <li className="py-3">
                    <Link href="/scholarships" className="text-gray-800 hover:text-blue-800 font-medium">
                      Scholarships
                    </Link>
                  </li>
                  <li className="py-3">
                    <Link href="/visit" className="text-gray-800 hover:text-blue-800 font-medium">
                      Visit
                    </Link>
                  </li>
                </ul>
                
                {/* Secondary navigation */}
                <ul className="hidden md:flex space-x-6 list-none">
                  <li className="py-3">
                    <Link href="/volunteers" className="text-gray-600 hover:text-blue-800 text-sm uppercase">
                      Foundation Volunteers
                    </Link>
                  </li>
                  <li className="py-3">
                    <Link href="/mentors" className="text-gray-600 hover:text-blue-800 text-sm uppercase">
                      Mentors
                    </Link>
                  </li>
                  <li className="py-3">
                    <Link href="/parents" className="text-gray-600 hover:text-blue-800 text-sm uppercase">
                      Parents
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <main>
          {children}
        </main>

        <footer role="contentinfo">
          {/* Main footer */}
          <div className="main-footer py-6">
            <div className="container">
              <div className="flex flex-wrap">
                {/* Left section */}
                <div className="w-full md:w-3/5 flex flex-wrap">
                  {/* Engage with us */}
                  <div className="w-full md:w-1/3 mb-6">
                    <h3 className="text-white font-bold mb-3">ENGAGE WITH US</h3>
                    <div className="flex space-x-2">
                      <a href="https://instagram.com/lumemorial">
                        <img alt="Instagram" src="//admission.stanford.edu/assets/cardinal/images/social/instagram@2x.png" width="48" height="48" />
                      </a>
                      <a href="https://twitter.com/lumemorial">
                        <img alt="X" src="//admission.stanford.edu/assets/cardinal/images/social/X@2x.png" width="48" height="48" />
                      </a>
                      <a href="https://youtube.com/lumemorial">
                        <img alt="YouTube" src="//admission.stanford.edu/assets/cardinal/images/social/youtube@2x.png" width="48" height="48" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Programs */}
                  <div className="w-full md:w-1/3 mb-6">
                    <h3 className="text-white font-bold mb-3">PROGRAMS</h3>
                    <ul className="list-none">
                      <li><a href="/programs" className="text-white hover:underline">Admission Forums, Student Programs, and Special Events</a></li>
                    </ul>
                  </div>
                  
                  {/* Brochures */}
                  <div className="w-full md:w-1/3 mb-6">
                    <h3 className="text-white font-bold mb-3">BROCHURES</h3>
                    <ul className="list-none">
                      <li><a href="/resources" className="text-white hover:underline">Lu Scholar Preview and Viewbook</a></li>
                    </ul>
                  </div>
                </div>
                
                {/* Right section - buttons */}
                <div className="w-full md:w-2/5 mb-6">
                  <div className="ml-0 md:ml-8 space-y-3">
                    <a href="/mailing-list" className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded block text-center">
                      <span className="mr-2">✉️</span> Join the Mailing List
                    </a>
                    <a href="/contact" className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded block text-center">
                      <span className="mr-2">💬</span> Contact Us
                    </a>
                    <a href="/policies" className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded block text-center">
                      <span className="mr-2">ℹ️</span> Foundation Policies
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Compliance line */}
              <div className="mt-2 border-t border-blue-700 pt-4">
                <p className="text-center text-sm text-white">
                  Lu Memorial Foundation complies with privacy and accessibility standards for all applicants.
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom footer */}
          <div className="bottom-footer py-4">
            <div className="container">
              <div className="flex flex-wrap">
                {/* Logo and brand */}
                <div className="w-full md:w-1/4 mb-4 md:mb-0">
                  <a href="https://lu-memorial.org" className="flex items-center">
                    <img src="/lu-logo-white.png" alt="Lu Memorial Foundation" className="h-16" />
                  </a>
                </div>
                
                {/* Main nav links */}
                <div className="w-full md:w-3/4">
                  <ul className="flex flex-wrap justify-start md:justify-end mb-2 space-x-4 list-none">
                    <li><a href="https://lu-memorial.org" className="text-white hover:underline">Lu Memorial Foundation Home</a></li>
                    <li><a href="/search" className="text-white hover:underline">Search</a></li>
                    <li><a href="/emergency-information" className="text-white hover:underline">Emergency Info</a></li>
                  </ul>
                  
                  {/* Policy links */}
                  <ul className="flex flex-wrap justify-start md:justify-end text-xs space-x-4 mt-2 list-none">
                    <li><a href="/terms-of-use" className="text-white hover:underline">Terms of Use</a></li>
                    <li><a href="/privacy-policy" className="text-white hover:underline">Privacy</a></li>
                    <li><a href="/copyright" className="text-white hover:underline">Copyright</a></li>
                    <li><a href="/non-discrimination" className="text-white hover:underline">Non-Discrimination</a></li>
                    <li><a href="/accessibility" className="text-white hover:underline">Accessibility</a></li>
                  </ul>
                  
                  {/* Copyright */}
                  <div className="mt-2 text-right text-xs">
                    <p>© {new Date().getFullYear()} Lu Memorial Foundation. All Rights Reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
} 