import Link from 'next/link'

export default function EmergencyInformationPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Emergency Information</h1>
        
        <div className="prose lg:prose-xl">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About Lu Memorial Foundation</h2>
            <p className="text-lg text-[#333] mb-6">
              The Lu Memorial Foundation serves as an educational outreach office for educational programs and scholarships of Goal Get It! We are committed to ensuring the safety and well-being of all our scholars and community members.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Emergency Information</h2>
            <p className="text-lg text-[#333] mb-6">
              For comprehensive emergency information, procedures, and resources, please visit the Goal Get It! Emergency Information Page. This page contains important information about:
            </p>
            <ul className="list-disc pl-6 mb-8">
              <li className="mb-2 text-lg text-[#333]">Emergency contact numbers and procedures</li>
              <li className="mb-2 text-lg text-[#333]">Campus safety and security information</li>
              <li className="mb-2 text-lg text-[#333]">Emergency response protocols</li>
              <li className="mb-2 text-lg text-[#333]">Important notifications and alerts</li>
            </ul>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-[#2c5282]">Goal Get It! Emergency Information</h3>
              <p className="text-lg text-[#333] mb-6">
                Visit the official Goal Get It! Emergency Information Page for up-to-date emergency procedures and resources.
              </p>
              <a 
                href="https://emergency.goalgetit.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#2c5282] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2b6cb0] transition-colors"
              >
                Visit Goal Get It! Emergency Information
              </a>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-[#333]">
              For immediate assistance or specific questions about emergency procedures at the Lu Memorial Foundation, please contact us at <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a>.
            </p>
          </section>
        </div>

        <div className="border-t pt-8 mt-8">
          <Link href="/" className="text-[#2c5282] hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
} 