import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#2c5282] text-white py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering Future Leaders Through Education
            </h1>
            <p className="text-xl mb-8">
              Join the Lu Memorial Foundation's prestigious scholarship programs and shape your future.
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
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#2c5282]">Undergraduate Scholarships</h3>
              <p className="text-gray-600 mb-4">
                Full-ride scholarships for exceptional students pursuing undergraduate degrees.
              </p>
              <a href="/scholarships/undergraduate" className="text-[#2c5282] font-medium hover:underline">
                Learn more →
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#2c5282]">Graduate Fellowships</h3>
              <p className="text-gray-600 mb-4">
                Supporting advanced research and graduate studies across disciplines.
              </p>
              <a href="/scholarships/graduate" className="text-[#2c5282] font-medium hover:underline">
                Learn more →
              </a>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-[#2c5282]">Research Grants</h3>
              <p className="text-gray-600 mb-4">
                Funding innovative research projects and academic initiatives.
              </p>
              <a href="/scholarships/research" className="text-[#2c5282] font-medium hover:underline">
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
                  <h3 className="text-xl font-bold mb-2">2024 Scholarship Applications Now Open</h3>
                  <p className="text-gray-600 mb-4">
                    Applications for the 2024-2025 academic year are now being accepted. Learn about our programs and eligibility requirements.
                  </p>
                  <a href="/news/2024-applications" className="text-[#2c5282] font-medium hover:underline">
                    Read more →
                  </a>
                </div>
                <div className="border-b pb-8">
                  <h3 className="text-xl font-bold mb-2">Scholar Spotlight: Innovation in Research</h3>
                  <p className="text-gray-600 mb-4">
                    Discover how our scholars are making breakthrough discoveries and advancing their fields of study.
                  </p>
                  <a href="/news/scholar-spotlight" className="text-[#2c5282] font-medium hover:underline">
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
                    <p className="text-sm text-gray-500">APR 15, 2024</p>
                    <h3 className="font-bold mb-2">Information Session</h3>
                    <p className="text-gray-600">Virtual information session for prospective scholars.</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">MAY 1, 2024</p>
                    <h3 className="font-bold mb-2">Application Deadline</h3>
                    <p className="text-gray-600">Last day to submit applications for Fall 2024.</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">MAY 15, 2024</p>
                    <h3 className="font-bold mb-2">Scholar Symposium</h3>
                    <p className="text-gray-600">Annual gathering of Lu Memorial scholars and researchers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Impact</h2>
            <div className="grid grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-4xl font-bold text-[#2c5282] mb-2">1000+</div>
                <div className="text-gray-600">Scholars Supported</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#2c5282] mb-2">50+</div>
                <div className="text-gray-600">Countries Represented</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#2c5282] mb-2">$25M</div>
                <div className="text-gray-600">In Scholarships Awarded</div>
              </div>
            </div>
            <a href="/impact" className="inline-block bg-[#2c5282] text-white px-6 py-3 rounded font-medium hover:bg-[#1e3a8a]">
              View Our Impact Report
            </a>
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