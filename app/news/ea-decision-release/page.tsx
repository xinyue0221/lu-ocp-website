import Link from 'next/link'
import CountdownTimer from './CountdownTimer'

export default function EADecisionReleasePage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl">
        <article className="mb-16">
          <h1 className="text-4xl font-bold mb-4">EA Decision Release</h1>
          <p className="text-gray-500 mb-6">April 1, 2025</p>
          
          <CountdownTimer />
          
          <div className="prose lg:prose-xl">
            <p className="text-lg text-[#333] mb-6">
              The Office of Scholarship Programs will release decisions to Early Action applicants on Friday, April 11th at 4 p.m. (PDT).
            </p>
            
            <h3 className="text-xl font-semibold text-[#333] mt-8 mb-4">Access Your Decision</h3>
            <p className="text-lg text-[#333] mb-6">
              Decisions will be available in the <a href="https://portal.scholar.lu-memorial.org" className="text-[#2c5282] hover:underline">Lu Scholar Application portal</a>. If you have not yet logged in or are having difficulty logging into your portal, contact Office of Scholarship Programs by selecting "Need Help?" from the login page.
            </p>
            
            <h3 className="text-xl font-semibold text-[#333] mt-8 mb-4">What To Expect</h3>
            <p className="text-lg text-[#333] mb-6">
              All Early Action applicants will receive one of three possible decisions:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2 text-lg text-[#333]">Offered - You have been selected as a Lu Scholar</li>
              <li className="mb-2 text-lg text-[#333]">Deferred - Your application will be reconsidered in the regular decision round</li>
              <li className="mb-2 text-lg text-[#333]">Not Offered - Your application has not been selected. You may be eligible to apply in future rounds. Visit our<a href="https://scholar.lu-memorial.org/apply" className="text-[#2c5282] hover:underline">Application Steps</a> page for more information.</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-[#333] mt-8 mb-4">Next Steps</h3>
            <p className="text-lg text-[#333] mb-6">
              Selected scholars will receive detailed information about next steps and important deadlines for accepting the scholarship offer. Deferred applicants will be automatically considered in the regular decision round.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mt-8 mb-8">
              <p className="text-lg font-medium text-[#333] mb-2">Important Note:</p>
              <p className="text-lg text-[#333]">
                The Lu Scholar Application portal may experience high traffic during the decision release time. If you encounter difficulties accessing your decision, please wait a few minutes and try again.
              </p>
            </div>
            
            <p className="text-lg text-[#333]">
              For any additional questions, please contact the Office of Scholarship Programs at <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a>.
            </p>
          </div>
        </article>
        
        <div className="border-t pt-8">
          <Link href="/news" className="text-[#2c5282] hover:underline">
            ← Back to news
          </Link>
        </div>
      </div>
    </div>
  )
} 