import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <div className="bg-[#f8f9fa] w-full py-8">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Page Not Found</h1>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-lg mb-4">
              The page you requested cannot be found
            </p>
            <p className="text-gray-600 mb-8">
              You may have used an outdated link or may have typed the address (URL) incorrectly. 
              If you entered the URL manually, please check your spelling and try again.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <h2 className="font-bold text-xl mb-4">Office of Scholarship Programs</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-blue-700 hover:text-blue-900">
                    Home
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-xl mb-4">Lu Memorial Foundation</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="https://lu-memorial.org" className="text-blue-700 hover:text-blue-900">
                    Lu Memorial Foundation Home
                  </Link>
                </li>
                <li>
                  <Link href="https://lu-memorial.org/search" className="text-blue-700 hover:text-blue-900">
                    Lu Memorial Foundation Search
                  </Link>
                </li>
                <li>
                  <Link href="https://lu-memorial.org/programs" className="text-blue-700 hover:text-blue-900">
                    Lu Memorial Foundation Programs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold text-xl mb-4">Goal Get It!</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="https://goalgetit.org" className="text-blue-700 hover:text-blue-900">
                    Goal Get It! Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center text-gray-600">
            <p>
              If you think you have reached this page due to a server error, please report the issue at{' '}
              <Link 
                href="https://portal.it.goalgetit.org/hc/en-us/requests/new"
                className="text-blue-700 hover:text-blue-900"
              >
                IT Service Portal
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  )
} 