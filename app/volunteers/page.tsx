import Image from 'next/image'
import Link from 'next/link'

export default function VolunteersPage() {
  return (
    <>
      {/* Header Banner */}
      <div className="relative w-full h-[400px] mb-10">
        <Image
          src="https://visit.stanford.edu/assets/cardinal/images/explore-campus/self-guided-tour-stanford-gardens.jpg"
          alt="Lu Scholar volunteers at an event"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-10 left-[10%] right-[10%] bg-black/50 p-5 rounded">
          <h3 className="text-white text-2xl mb-2">ALUMNI VOLUNTEERS</h3>
          <p className="text-white">
            Alumni volunteers share their experiences and serve as resources for prospective students who want to learn more about the Lu Memorial Scholarship opportunity.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-semibold text-[#333] mb-8">Alumni Volunteers</h1>
          
          <p className="text-xl text-[#333] leading-relaxed mb-10">
            The Lu Scholars Alumni Network consists of previous scholarship recipients who serve as ambassadors across the United States and around the world. They represent the Lu Memorial Scholarship Foundation from the recruitment of applicants to the welcoming of newly selected scholars through alumni volunteer activities.
          </p>
          
          <h2 className="text-3xl font-semibold text-[#333] mb-6">Volunteer Opportunities</h2>
          <ul className="list-disc pl-6 mb-10 text-lg text-[#333]">
            <li className="mb-2">Represent the Lu Memorial Scholarship at local educational events and regional information sessions</li>
            <li className="mb-2">Serve on panels at foundation-sponsored events for prospective applicants</li>
            <li className="mb-2">Attend and/or host new scholar receptions</li>
            <li className="mb-2">Conduct evaluative applicant interviews</li>
            <li className="mb-2">Host volunteer training workshops</li>
            <li className="mb-2">Serve on a regional leadership team</li>
          </ul>
          
          <p className="text-lg text-[#333] mb-10">
            For most volunteers, the time commitment will be about 5-15 hours per year. Visit our <Link href="/volunteers/roles" className="text-[#2c5282] hover:underline">Volunteer Roles</Link> page for additional information.
          </p>
          
          <h2 className="text-3xl font-semibold text-[#333] mb-6">Eligibility</h2>
          <p className="text-lg text-[#333] mb-10">
            You are eligible to be an alumni volunteer if you are a previous Lu Scholar or family member of a current Lu Scholar. For more information, please read our specific <Link href="/volunteers/eligibility" className="text-[#2c5282] hover:underline">Eligibility Requirements</Link>.
          </p>
          
          <p className="text-lg text-[#333] mb-16">
            For questions about volunteer opportunities, please contact <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a>.
          </p>
          
          <div className="bg-[#2c5282] text-white p-10 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
              <p className="text-xl mb-8">
                Take the first step towards becoming a Lu Memorial volunteer and supporting the next generation of scholars.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-white text-[#2c5282] px-6 py-3 rounded font-medium hover:bg-gray-100">
                  Contact Us
                </Link>
                <Link href="/mailing-list" className="border-2 border-white text-white px-6 py-3 rounded font-medium hover:bg-white hover:text-[#2c5282]">
                  Join Mailing List
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