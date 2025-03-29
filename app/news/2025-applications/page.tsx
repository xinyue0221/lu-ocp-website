import Link from 'next/link'

export default function ScholarshipApplicationsPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl">
        <article className="mb-16">
          <h1 className="text-4xl font-bold mb-4">2025 Scholarship Applications Now Open</h1>
          <p className="text-gray-500 mb-6">March 28, 2025</p>
          
          <div className="prose lg:prose-xl">
            <p className="mb-4">
              Applications for the 2025-2026 academic year are now being accepted. Apply by May 1, 2025 to be considered for our full range of scholarship opportunities.
            </p>
            
            <p className="mb-4">
              The Lu Memorial Foundation is proud to announce that applications for our prestigious scholarship program for the 2025-2026 academic year are now open. We're seeking exceptional candidates who demonstrate academic excellence, leadership, and a commitment to making a positive impact.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">Key Dates</h3>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Application Opens: March 28, 2025</li>
              <li className="mb-2">Application Deadline: May 1, 2025</li>
              <li className="mb-2">Selection Notifications: June 15, 2025</li>
            </ul>
            
            <h3 className="text-xl font-bold mt-8 mb-4">About Our Programs</h3>
            <p className="mb-4">
              The Lu Memorial Foundation will select up to 5 recipients total across our high school and undergraduate scholarship programs. We offer:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">
                <strong>High School Scholarships:</strong> For exceptional high school students preparing for college
              </li>
              <li className="mb-2">
                <strong>Undergraduate Scholarships:</strong> For outstanding undergraduate students pursuing their degrees
              </li>
            </ul>
            
            <h3 className="text-xl font-bold mt-8 mb-4">Eligibility</h3>
            <p className="mb-4">
              Applicants must demonstrate:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li className="mb-2">Academic excellence with a strong GPA</li>
              <li className="mb-2">Leadership experience and potential</li>
              <li className="mb-2">Commitment to community service</li>
              <li className="mb-2">Financial need (for need-based scholarships)</li>
            </ul>
            
            <div className="mt-10">
              <Link href="/apply" className="bg-[#2c5282] text-white px-6 py-3 rounded font-medium hover:bg-[#1e3a8a]">
                Start Your Application
              </Link>
            </div>
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