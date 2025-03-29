import Image from 'next/image'
import Link from 'next/link'

export default function VisitPage() {
  return (
    <>
      {/* Header Banner */}
      <div className="relative w-full h-[400px] mb-10">
        <Image
          src="https://admission.stanford.edu/assets/cardinal/images/banners/home/banner9XL.jpg"
          alt="Lu Memorial Foundation Campus"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-10 left-[10%] right-[10%] bg-black/50 p-5 rounded">
          <h3 className="text-white text-2xl mb-2">VISIT US</h3>
          <p className="text-white">
            Learn about opportunities to visit the Lu Memorial Foundation and connect with our community.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-semibold text-[#333] mb-8">Visit Opportunities</h1>
          
          <div className="bg-gray-50 p-10 rounded-lg mb-16">
            <div className="flex flex-col items-center text-center">
              <div className="text-6xl text-[#2c5282] mb-6">🏗️</div>
              <h2 className="text-3xl font-semibold text-[#333] mb-6">Coming Soon</h2>
              <p className="text-xl text-[#333] leading-relaxed max-w-3xl mb-8">
                We're currently developing a variety of visit opportunities for prospective scholars, current Lu Scholars, alumni, and the broader community to connect with the Lu Memorial Foundation.
              </p>
              <p className="text-xl text-[#333] leading-relaxed max-w-3xl mb-8">
                Our upcoming visit program will include information sessions, scholar showcases, and special events throughout the year.
              </p>
              <div className="mt-8">
                <Link href="/mailing-list" className="inline-block bg-[#2c5282] text-white px-6 py-3 rounded font-medium hover:bg-[#1e3a8a]">
                  Join Our Mailing List for Updates
                </Link>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-[#333] mb-8">Contact Us</h2>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-[#2c5282] mb-4">General Inquiries</h3>
              <p className="text-[#333] mb-4">
                If you have questions about visiting the Lu Memorial Foundation or would like to arrange a special visit, please contact our visitor services team.
              </p>
              <div className="mt-6">
                <p className="text-[#333] mb-2"><strong>Email:</strong> <a href="mailto:contact@lumemorial.org" className="text-[#2c5282] hover:underline">contact@lumemorial.org</a></p>
                <p className="text-[#333] mb-2"><strong>Phone:</strong> (626) 559-1589</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold text-[#2c5282] mb-4">Location</h3>
              <p className="text-[#333] mb-4">
                Our main campus is located in the heart of the city, easily accessible by public transportation.
              </p>
            </div>
          </div>

          <div className="bg-[#2c5282] text-white p-10 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Stay Connected</h2>
              <p className="text-xl mb-8">
                Join our mailing list to receive updates about upcoming visit opportunities, events, and program announcements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/mailing-list" className="bg-white text-[#2c5282] px-6 py-3 rounded font-medium hover:bg-gray-100">
                  Join Mailing List
                </Link>
                <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded font-medium hover:bg-white hover:text-[#2c5282]">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-12 text-center">
            Updated on March 28, 2025
          </p>
        </div>
      </div>
    </>
  )
} 