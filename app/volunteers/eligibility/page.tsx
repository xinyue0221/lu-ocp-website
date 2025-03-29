import Image from 'next/image'
import Link from 'next/link'

export default function EligibilityPage() {
  return (
    <>
      {/* Header Banner */}
      <div className="relative w-full h-[400px] mb-10">
        <Image
          src="https://oga.stanford.edu/sites/g/files/sbiybj21581/files/styles/breakpoint_2xl_2x/public/media/image/screenshot-2025-02-11-095902.png.webp?itok=ZVRIeo06"
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
          <div className="mb-8">
            <Link href="/volunteers" className="text-[#2c5282] hover:underline">
              ← Back to Alumni Volunteers
            </Link>
          </div>
          
          <h1 className="text-4xl font-semibold text-[#333] mb-8">Eligibility Requirements</h1>
          
          <p className="text-xl text-[#333] leading-relaxed mb-10">
            You are eligible to be an alumni volunteer if you are a previous Lu Scholar or family member of a current Lu Scholar. An understanding of or willingness to learn about the Lu Memorial Scholarship program and its values is required to engage in volunteer activities.
          </p>
          
          <p className="text-lg font-semibold text-[#333] mb-4">You are <strong>not eligible</strong> to participate as an alumni volunteer if you:</p>
          
          <ul className="list-none mb-10">
            <li className="mb-6 border-l-4 border-gray-200 pl-4 py-2">
              <p className="text-lg text-[#333] font-medium mb-2">Have a family member (child, sibling, etc.) who is applying to the Lu Memorial Scholarship in the current cycle.</p>
              <p className="text-lg text-[#333] italic">Each year, a number of volunteers ask if they may remain active while they have a family member who is applying. We ask alumni who have family members applying to mark themselves as inactive for the year that the student is applying. Please contact the Lu Memorial Scholarship Foundation via email at <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a> if you have questions about your personal circumstances.</p>
            </li>
            
            <li className="mb-6 border-l-4 border-gray-200 pl-4 py-2">
              <p className="text-lg text-[#333] font-medium mb-2">Are a scholarship or college admission professional (including a high school guidance counselor or independent consultant).</p>
            </li>
            
            <li className="mb-6 border-l-4 border-gray-200 pl-4 py-2">
              <p className="text-lg text-[#333] font-medium mb-2">Interview for any other scholarship organization with a similar mission.</p>
            </li>
            
            <li className="mb-6 border-l-4 border-gray-200 pl-4 py-2">
              <p className="text-lg text-[#333] font-medium mb-2">Are engaged in volunteer or professional activities that may create a conflict of interest.</p>
              <p className="text-lg text-[#333] italic">The only approved activity related to other scholarship programs is writing recommendation letters. Should you write one for a Lu Memorial Scholarship applicant, please note that you are an alumni interviewer.</p>
            </li>
            
            <li className="mb-6 border-l-4 border-gray-200 pl-4 py-2">
              <p className="text-lg text-[#333] font-medium mb-2">Are a current Lu Memorial Scholarship Foundation employee or board member.</p>
            </li>
          </ul>
          
          <div className="bg-gray-50 p-8 rounded-lg mb-10">
            <p className="text-lg text-[#333] mb-6">
              These requirements are designed to avoid any appearance of a conflict of interest. By removing any suggestion of improper influence, we are able to create a comfortable environment for both applicants and volunteers, as well as to safeguard the best interests of the Foundation and its candidates for selection.
            </p>
            
            <p className="text-lg text-[#333] mb-0">
              Volunteers are asked to review and update their eligibility status annually to reflect their circumstances. Eligibility requirements extend to all volunteer activities, not just the interview program.
            </p>
          </div>
          
          <p className="text-lg text-[#333] mb-6">
            Service as an alumni volunteer is a privilege and not a right. A volunteer may elect to end participation at any time, and the Lu Memorial Scholarship Foundation reserves the right to remove or discontinue volunteers from program participation at any time, without the necessity of any reason or notice.
          </p>
          
          <p className="text-lg text-[#333] mb-16">
            For questions about eligibility requirements, please contact <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a>.
          </p>
          
          <div className="flex justify-between">
            <Link href="/volunteers/roles" className="text-[#2c5282] hover:underline">
              ← Volunteer Roles
            </Link>
            <Link href="/volunteers" className="text-[#2c5282] hover:underline">
              Back to Alumni Volunteers
            </Link>
          </div>
          
          <p className="text-sm text-gray-500 mt-12 text-center">
            Updated on March 28, 2025
          </p>
        </div>
      </div>
    </>
  )
}