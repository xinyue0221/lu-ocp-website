import Link from 'next/link'

export default function PoliciesPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-[#333] mb-8">Foundation Policies</h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#333] mb-4">Privacy Notice</h2>
          <p className="text-gray-700 mb-4">
            The Lu Memorial Foundation is committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, store, and protect the information we gather through our website and scholarship application process. By using our website or submitting an application, you consent to the data practices described in this policy.
          </p>
          
          <p className="text-gray-700 mb-4">
            We collect personal information when you apply for our scholarship program or subscribe to our newsletter. This information may include your name, contact details, academic records, and other information necessary for scholarship evaluation. We use this information solely for the purpose of evaluating scholarship applications, administering the scholarship program, and communicating with applicants and recipients.
          </p>
          
          <p className="text-gray-700 mb-4">
            The Lu Memorial Foundation does not sell, rent, or lease your personal information to third parties. We may share your information with trusted partners who assist us in operating our website and conducting our scholarship program, but these parties are bound by confidentiality agreements and prohibited from using your information for any other purpose.
          </p>
          
          <p className="text-gray-700 mb-4">
            For complete information about how we collect and use your personal information, as well as a description of the rights and choices you have with regard to this personal information, please review our <a href="https://web.goalgetit.org/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-[#2c5282] hover:underline">complete Privacy Policy <span className="text-xs">↗</span></a>.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#333] mb-4">Lu Memorial Foundation Scholarship Code of Integrity</h2>
          <p className="text-gray-700 mb-4">
            The Lu Memorial Foundation Scholarship Code of Integrity embodies the values that Tingyu Lu represented throughout his life: honesty, integrity, and ethical conduct. All Lu Scholars are expected to uphold these principles in their academic pursuits and beyond.
          </p>
          
          <p className="text-gray-700 mb-4">As a Lu Scholar, you commit to:</p>
          <ul className="list-disc pl-6 mb-6 text-gray-700">
            <li className="mb-2">Maintaining academic honesty in all educational pursuits</li>
            <li className="mb-2">Submitting original work and properly attributing others' ideas and contributions</li>
            <li className="mb-2">Representing your achievements and qualifications accurately and truthfully</li>
            <li className="mb-2">Using scholarship funds responsibly and as intended</li>
            <li className="mb-2">Contributing positively to your academic and broader communities</li>
            <li className="mb-2">Upholding the values of the Lu Memorial Foundation in your academic work and personal conduct</li>
          </ul>
          
          <p className="text-gray-700 mb-4">
            We believe that adherence to these principles not only fosters an atmosphere of trust and respect but also honors the legacy of Tingyu Lu, who exemplified these values throughout his life and work. Lu Scholars are expected to demonstrate integrity in all aspects of their academic and professional development, and to contribute to creating a community based on mutual respect, ethical conduct, and a commitment to positive change.
          </p>
        </section>
        
        <section className="mb-10">
          <h2 id="np" className="text-2xl font-semibold text-[#333] mb-4">Non-discrimination Policy</h2>
          <p className="text-gray-700 mb-4">
            The Lu Memorial Foundation and the Office of Scholarship Programs is committed to equal opportunity and does not discriminate on the basis of race, color, religion, national origin, sex, sexual orientation, gender identity, age, disability, veteran status, or any other protected characteristic in the administration of its scholarship program.
          </p>
        </section>
        
        <div className="text-xs text-gray-500 mt-10">
          Updated on March 28, 2025
        </div>
      </div>
    </div>
  )
} 