import Link from 'next/link'

export default function AccessibilityPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Accessibility</h1>
        
        <div className="prose lg:prose-xl">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About Lu Memorial Foundation</h2>
            <p className="text-lg text-[#333] mb-6">
              The Lu Memorial Foundation serves as an educational outreach office for educational programs and scholarships of Goal Get It! We are committed to providing equal access to our scholarship opportunities and educational resources for all individuals.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Accessibility Information</h2>
            <p className="text-lg text-[#333] mb-6">
              For detailed information about accessibility policies, accommodations, and resources, please visit the Goal Get It! Accessibility Page. This page contains comprehensive information about:
            </p>
            <ul className="list-disc pl-6 mb-8">
              <li className="mb-2 text-lg text-[#333]">Accessibility standards and compliance</li>
              <li className="mb-2 text-lg text-[#333]">Accommodation requests and procedures</li>
              <li className="mb-2 text-lg text-[#333]">Accessible technology and resources</li>
              <li className="mb-2 text-lg text-[#333]">Contact information for accessibility support</li>
            </ul>

            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-4 text-[#2c5282]">Goal Get It! Accessibility Page</h3>
              <p className="text-lg text-[#333] mb-6">
                Visit the official Goal Get It! Accessibility Page for comprehensive information about accessibility policies and resources.
              </p>
              <a 
                href="https://accessibility.goalgetit.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#2c5282] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2b6cb0] transition-colors"
              >
                Visit Goal Get It! Accessibility Page
              </a>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-[#333]">
              If you have specific questions about accessibility at the Lu Memorial Foundation, please contact us at <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a>.
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