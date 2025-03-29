import Image from 'next/image'
import Link from 'next/link'

export default function ScholarshipsPage() {
  return (
    <>
      {/* Header Banner */}
      <div className="relative w-full h-[400px] mb-10">
        <Image
          src="https://apply-stanford-edu.cdn.technolutions.net/www/images/2018_04_26_Stanford_Admit_Weekend-88(1).jpg"
          alt="Lu Memorial Scholarship Recipients"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-10 left-[10%] right-[10%] bg-black/50 p-5 rounded">
          <h3 className="text-white text-2xl mb-2">SCHOLARSHIP PROGRAMS</h3>
          <p className="text-white">
            Explore our scholarship opportunities designed to support exceptional students at different educational levels.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-semibold text-[#333] mb-8">Our Scholarships</h1>
          
          <p className="text-xl text-[#333] leading-relaxed mb-12">
            The Lu Memorial Foundation offers scholarships to deserving students at various stages of their academic journey. Our scholarship programs are designed to provide not just financial support, but also mentorship, networking opportunities, and resources for personal and professional development.
          </p>

          {/* Current Scholarships */}
          <h2 className="text-3xl font-semibold text-[#333] mb-8">Current Scholarship Programs</h2>
          
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* High School Scholarship */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 w-full">
                <Image
                  src="https://admission.stanford.edu/assets/cardinal/images/afford-art-gallery.jpg"
                  alt="High School Students"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c5282] mb-4">High School Scholarship</h3>
                <p className="text-[#333] mb-4">
                  Our High School Scholarship identifies and supports exceptional students as they prepare for their transition to college. The scholarship offers:
                </p>
                <ul className="list-disc pl-5 mb-6 text-[#333]">
                  <li className="mb-2">Comprehensive financial support covering tuition, books, and fees</li>
                  <li className="mb-2">Personalized mentorship from leaders in various fields</li>
                  <li className="mb-2">Access to our network of educational resources and opportunities</li>
                  <li className="mb-2">Leadership development programs and workshops</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="font-medium text-[#333]">Eligibility: High school students with demonstrated academic excellence, leadership potential, and commitment to community service.</p>
                </div>
                <Link href="/apply/high-school" className="inline-block bg-[#2c5282] text-white px-5 py-2 rounded font-medium hover:bg-[#1e3a8a]">
                  Apply for High School Scholarship
                </Link>
              </div>
            </div>

            {/* Undergraduate Scholarship */}
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="relative h-64 w-full">
                <Image
                  src="https://admission.stanford.edu/assets/cardinal/images/afford-white-plaza.jpg"
                  alt="Undergraduate Students"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#2c5282] mb-4">Undergraduate Scholarship</h3>
                <p className="text-[#333] mb-4">
                  For students already enrolled in undergraduate programs, our scholarship provides:
                </p>
                <ul className="list-disc pl-5 mb-6 text-[#333]">
                  <li className="mb-2">Full-ride financial support for tuition and educational expenses</li>
                  <li className="mb-2">Research opportunities with leading scholars in their field</li>
                  <li className="mb-2">Internship placements with partner organizations</li>
                  <li className="mb-2">Career development resources and professional networking</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <p className="font-medium text-[#333]">Eligibility: Current undergraduate students with exceptional academic records, innovative thinking, and demonstrated impact in their field of study.</p>
                </div>
                <Link href="/apply/undergraduate" className="inline-block bg-[#2c5282] text-white px-5 py-2 rounded font-medium hover:bg-[#1e3a8a]">
                  Apply for Undergraduate Scholarship
                </Link>
              </div>
            </div>
          </div>

          {/* Coming Soon */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-semibold text-[#333] mb-6">Coming Soon: Graduate Fellowships</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="col-span-2">
                <p className="text-lg text-[#333] leading-relaxed mb-6">
                  The Lu Memorial Foundation is currently developing a Graduate Fellowship program to support advanced research and graduate studies across disciplines. This exciting new initiative will expand our impact to support the next generation of researchers, scholars, and leaders.
                </p>
                <p className="text-lg text-[#333] leading-relaxed mb-6">
                  The Graduate Fellowship program is currently in the planning stages, with an anticipated launch in the 2025-2026 academic year. The program will focus on supporting innovative research, interdisciplinary collaboration, and solutions to global challenges.
                </p>
                <div className="mt-8">
                  <Link href="/contact" className="text-[#2c5282] font-medium hover:underline">
                    Sign up for updates about our Graduate Fellowship program →
                  </Link>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#2c5282] mb-4">Get Notified</h3>
                <p className="text-[#333] mb-4">
                  Interested in our upcoming Graduate Fellowship? Join our mailing list to be the first to know when applications open.
                </p>
                <Link href="/mailing-list" className="inline-block bg-[#2c5282] text-white px-5 py-2 rounded font-medium hover:bg-[#1e3a8a] w-full text-center">
                  Join Mailing List
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#2c5282] text-white p-10 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Start Your Application</h2>
              <p className="text-xl mb-8">
                Ready to take the next step in your educational journey? Apply for one of our prestigious scholarship programs today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/apply" className="bg-white text-[#2c5282] px-6 py-3 rounded font-medium hover:bg-gray-100">
                  Apply Now
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