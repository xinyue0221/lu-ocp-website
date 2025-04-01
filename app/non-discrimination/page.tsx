import Link from 'next/link'

export default function NondiscriminationPolicyPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Nondiscrimination Policy</h1>
        
        <div className="prose lg:prose-xl">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Policy Statement</h2>
            <p className="text-lg text-[#333] mb-4">
              The Lu Memorial Foundation admits qualified students of any race, color, national or ethnic origin, sex, age, disability, religion, sexual orientation, gender identity, veteran status, or marital status to all the rights, privileges, programs, and activities generally accorded or made available to students at the Foundation.
            </p>
            <p className="text-lg text-[#333] mb-4">
              Consistent with its obligations under the law, in the administration of the Foundation's programs and activities, the Lu Memorial Foundation prohibits unlawful discrimination on the basis of race, color, national or ethnic origin, sex, age, disability, religion, sexual orientation, gender identity or expression, veteran status, marital status or any other characteristic protected by applicable law; the Foundation also prohibits unlawful harassment including sexual harassment and sexual violence.
            </p>
            <p className="text-lg text-[#333] mb-4">
              Race, color, or national origin includes shared ancestry or ethnic characteristics. This policy applies to all Lu Memorial Foundation programs and activities both on and off-campus, including overseas programs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Scope of Policy</h2>
            <p className="text-lg text-[#333] mb-4">
              This policy applies to all aspects of the Foundation's operations, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2 text-lg text-[#333]">Admissions and scholarship opportunities</li>
              <li className="mb-2 text-lg text-[#333]">Educational programs and activities</li>
              <li className="mb-2 text-lg text-[#333]">Employment practices and procedures</li>
              <li className="mb-2 text-lg text-[#333]">Mentorship and professional development programs</li>
              <li className="mb-2 text-lg text-[#333]">Community events and outreach</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Reporting Discrimination</h2>
            <p className="text-lg text-[#333] mb-4">
              The Lu Memorial Foundation encourages any individual who believes they have experienced or witnessed discrimination, harassment, or related retaliation to report such conduct promptly. Concerns may be reported to:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="text-lg text-[#333] mb-2">Email: <a href="mailto:contact@lu-memorial.org" className="text-[#2c5282] hover:underline">contact@lu-memorial.org</a></p>
              <p className="text-lg text-[#333] mb-2">Phone: +1 (626) 559-1589</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Response to Reports</h2>
            <p className="text-lg text-[#333] mb-4">
              The Lu Memorial Foundation takes all reports of discrimination and harassment seriously. When a report is received, the Foundation will:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2 text-lg text-[#333]">Respond promptly to all complaints</li>
              <li className="mb-2 text-lg text-[#333]">Conduct a thorough and impartial investigation</li>
              <li className="mb-2 text-lg text-[#333]">Maintain confidentiality to the extent possible</li>
              <li className="mb-2 text-lg text-[#333]">Take appropriate corrective action when warranted</li>
              <li className="mb-2 text-lg text-[#333]">Protect individuals from retaliation for reporting in good faith</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Commitment to Diversity and Inclusion</h2>
            <p className="text-lg text-[#333] mb-4">
              Beyond legal compliance, the Lu Memorial Foundation is committed to creating an environment that values diversity and promotes inclusion. The Foundation believes that a diverse community enriches the educational experience for all and prepares students for leadership in a diverse society.
            </p>
            <p className="text-lg text-[#333]">
              The Foundation actively works to increase representation of historically underrepresented groups in its programs and leadership, and to create a climate where all members can thrive.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Accommodations for Individuals with Disabilities</h2>
            <p className="text-lg text-[#333] mb-4">
              The Lu Memorial Foundation is committed to providing reasonable accommodations to qualified individuals with disabilities to ensure equal access to its programs, services, and activities. Individuals seeking accommodations should contact the Foundation's accessibility services at <a href="mailto:contact@lu-memorial.org" className="text-[#2c5282] hover:underline">contact@lu-memorial.org</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Training and Education</h2>
            <p className="text-lg text-[#333]">
              The Lu Memorial Foundation provides ongoing education and training on diversity, equity, and inclusion principles, as well as specific training on preventing discrimination and harassment. All Foundation staff, board members, and volunteers receive training appropriate to their roles.
            </p>
          </section>
        </div>

        <div className="border-t pt-8 mt-8">
          <p className="text-lg text-[#333] mb-4">Last Updated: April 1, 2025</p>
          <Link href="/" className="text-[#2c5282] hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}