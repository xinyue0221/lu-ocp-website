
import Link from 'next/link'

export default function CopyrightPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Copyright Policy</h1>
        
        <div className="prose lg:prose-xl">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Copyright Information</h2>
            <p className="text-lg text-[#333] mb-4">
              All content included on this website, such as text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of the Lu Memorial Foundation or its content suppliers and is protected by United States and international copyright laws.
            </p>
            <p className="text-lg text-[#333]">
              The compilation of all content on this website is the exclusive property of the Lu Memorial Foundation and is protected by United States and international copyright laws. All software used on this website is the property of the Lu Memorial Foundation or its software suppliers and is protected by United States and international copyright laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Report Alleged Copyright Infringement</h2>
            <p className="text-lg text-[#333] mb-4">
              The Lu Memorial Foundation has designated an agent to receive notifications of alleged copyright infringement in the lu-memorial.org domain. If you believe your copyrighted work is being infringed on a Lu Memorial Foundation site, please notify us using the contact information below.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="text-lg text-[#333] mb-2">Email: <a href="mailto:contact@lu-memorial.org" className="text-[#2c5282] hover:underline">contact@lu-memorial.org</a></p>
              <p className="text-lg text-[#333] mb-2">Phone: +1 (626) 559-1589</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Elements of Notification</h2>
            <p className="text-lg text-[#333] mb-4">
              When you notify us of the alleged copyright infringement, please be sure to include the following information:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2 text-lg text-[#333]">A description of the copyrighted work that is the subject of the claimed infringement (if multiple works are being infringed at a single site, a representative list of such works at that site is adequate)</li>
              <li className="mb-2 text-lg text-[#333]">A description of the infringing material and information sufficient to permit the Lu Memorial Foundation to locate the material</li>
              <li className="mb-2 text-lg text-[#333]">Contact information for you, including your address, telephone number, and/or email address</li>
              <li className="mb-2 text-lg text-[#333]">A statement by you that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, or its agent, or the law</li>
              <li className="mb-2 text-lg text-[#333]">A statement by you, signed under penalty of perjury, that the information in the notification is accurate and that you have the authority to enforce the copyrights that are claimed to be infringed</li>
              <li className="mb-2 text-lg text-[#333]">A physical or electronic signature of the copyright owner or a person authorized to act on its behalf</li>
            </ul>
            <p className="text-lg text-[#333]">
              Failure to include all of the above-listed information may result in a delay of the processing of your complaint. The Lu Memorial Foundation will terminate the online privileges of users who infringe the copyright of others.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Fair Use</h2>
            <p className="text-lg text-[#333] mb-4">
              The Lu Memorial Foundation respects the intellectual property of others and expects its users to do the same. Fair use of copyrighted material includes using it for purposes such as criticism, comment, news reporting, teaching, scholarship, or research. If you wish to use copyrighted material from this site for purposes that go beyond fair use, you must obtain permission from the copyright owner.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Digital Millennium Copyright Act (DMCA)</h2>
            <p className="text-lg text-[#333] mb-4">
              The Lu Memorial Foundation complies with the provisions of the Digital Millennium Copyright Act (DMCA). If you have any questions about the DMCA, we encourage you to visit the U.S. Copyright Office website for more information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Repeat Infringers</h2>
            <p className="text-lg text-[#333] mb-4">
              It is our policy to terminate the account of any user who repeatedly infringes copyright upon prompt notification to the Lu Memorial Foundation by the copyright owner or the copyright owner's legal agent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Permission to Use Materials</h2>
            <p className="text-lg text-[#333] mb-4">
              If you would like to use any materials published on the Lu Memorial Foundation website, please submit your request to <a href="mailto:contacts@lu-memorial.org" className="text-[#2c5282] hover:underline">contact@lu-memorial.org</a>. Your request should include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2 text-lg text-[#333]">Your name and organization</li>
              <li className="mb-2 text-lg text-[#333]">Your contact information</li>
              <li className="mb-2 text-lg text-[#333]">A description of the content you wish to use</li>
              <li className="mb-2 text-lg text-[#333]">The purpose for which you wish to use the content</li>
              <li className="mb-2 text-lg text-[#333]">How and where the content will be displayed</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Trademark Information</h2>
            <p className="text-lg text-[#333] mb-4">
              The Lu Memorial Foundation name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of the Lu Memorial Foundation or its affiliates. You may not use such marks without the prior written permission of the Lu Memorial Foundation.
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