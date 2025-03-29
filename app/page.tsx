import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white py-24">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://admission.stanford.edu/assets/cardinal/images/banners/apply/banner3XL.jpg"
            alt="University campus with Hoover Tower"
            fill
            className="object-cover brightness-75"
            priority
          />
        </div>
        {/* Content overlay */}
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white drop-shadow-md">
              Empowering Future Leaders Through Education
            </h1>
            <p className="text-xl mb-8 text-white drop-shadow-md">
              Join the Lu Memorial Foundation's scholarship programs and shape your future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/apply" className="bg-white text-[#2c5282] px-6 py-3 rounded font-medium hover:bg-gray-100">
                Apply Now
              </a>
              <a href="/discover" className="border-2 border-white text-white px-6 py-3 rounded font-medium hover:bg-white hover:text-[#2c5282]">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Programs</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#2c5282]">High School Scholarships</h3>
              <p className="text-gray-600 mb-4">
                Scholarships for exceptional high school students. We select up to 5 recipients across our high school and undergraduate programs.
              </p>
              <a href="/apply/high-school" className="text-[#2c5282] font-medium hover:underline">
                Learn more →
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#2c5282]">Undergraduate Scholarships</h3>
              <p className="text-gray-600 mb-4">
                Scholarships for outstanding undergraduate students. We select up to 5 recipients across our high school and undergraduate programs.
              </p>
              <a href="/apply/undergraduate" className="text-[#2c5282] font-medium hover:underline">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-wrap md:flex-nowrap gap-8">
            {/* Latest News */}
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold mb-8">Latest News</h2>
              <div className="space-y-8">
                <div className="border-b pb-8">
                  <h3 className="text-xl font-bold mb-2">EA Decision Release</h3>
                  <p className="text-gray-600 mb-4">
                    The Office of Scholarship Programs will release decisions to Early Action applicants on Friday, April 4th at 4 p.m. (PDT).
                  </p>
                  <a href="/news/ea-decision-release" className="text-[#2c5282] font-medium hover:underline">
                    Read more →
                  </a>
                </div>
                <div className="border-b pb-8">
                  <h3 className="text-xl font-bold mb-2">2025 Scholarship Applications Now Open</h3>
                  <p className="text-gray-600 mb-4">
                    Applications for the 2025-2026 academic year are now being accepted. Apply by May 1, 2025 to be considered for our full range of scholarship opportunities.
                  </p>
                  <a href="/news/2025-applications" className="text-[#2c5282] font-medium hover:underline">
                    Read more →
                  </a>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="w-full md:w-1/3">
              <h2 className="text-3xl font-bold mb-8">Upcoming Events</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-500">MAY 1, 2025</p>
                    <h3 className="font-bold mb-2">Application Deadline</h3>
                    <p className="text-gray-600">Last day to submit applications for 2025-2026 selection round.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#2c5282] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Begin Your Journey</h2>
            <p className="text-xl mb-8">
              Take the first step towards joining our community of scholars and innovators.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/apply" className="bg-white text-[#2c5282] px-6 py-3 rounded font-medium hover:bg-gray-100">
                Start Application
              </a>
              <a href="/contact" className="border-2 border-white text-white px-6 py-3 rounded font-medium hover:bg-white hover:text-[#2c5282]">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
} 