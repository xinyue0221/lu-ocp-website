import Link from 'next/link'

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-16">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose lg:prose-xl">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-lg text-[#333] mb-4">
              This Privacy Policy applies to the Personal Information that Lu Memorial Foundation ("Foundation", "we", "us", "our") collects when you visit our website (www.lu-memorial.org) and other websites that we own or control and link to this Privacy Policy, including mobile applications and through communications such as subscription to newsletters and email updates.
            </p>
            <p className="text-lg text-[#333]">
              This Privacy Policy describes the types of Personal Information we collect, purposes for which we collect it, other parties with whom we may share it, measures taken to protect your personal information, your rights, and how you can contact us about our privacy practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Personal Information We Collect</h2>
            <p className="text-lg text-[#333] mb-4">
              When you access or use our website, we may collect and process the following types of information:
            </p>
            <h3 className="text-xl font-semibold mb-2">Personal Information:</h3>
            <p className="text-lg text-[#333] mb-4">
              "Personal Information" is any information that we can reasonably use to directly or indirectly identify you. We collect the following Personal Information when you provide it to us:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2 text-lg text-[#333]">Identification information, such as your first name, last name, postal address, email address, phone number, and any other relevant contact details</li>
              <li className="mb-2 text-lg text-[#333]">Information related to your scholarship application, such as your educational history, personal statements, reference letters, and any other relevant information provided in your application</li>
              <li className="mb-2 text-lg text-[#333]">Information related to your donation, such as the amount of your donation, giving history, and payment information</li>
              <li className="mb-2 text-lg text-[#333]">Information related to your exchanges with the Foundation, such as date, subject of your request, and preferred means of communication</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2">Automatically Collected Information:</h3>
            <p className="text-lg text-[#333] mb-4">
              Whenever you visit or interact with our website, we may use a variety of technologies that automatically or passively collect information about your online activity, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2 text-lg text-[#333]">Information collected through your browser, such as your IP address, browser type and version</li>
              <li className="mb-2 text-lg text-[#333]">Information collected through cookies and similar technologies</li>
              <li className="mb-2 text-lg text-[#333]">Information collected through web beacons, pixel tags, and other similar technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-lg text-[#333] mb-4">
              We use the Personal Information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2 text-lg text-[#333]">To create and manage your account on our website</li>
              <li className="mb-2 text-lg text-[#333]">To evaluate your candidacy for scholarships</li>
              <li className="mb-2 text-lg text-[#333]">To process and acknowledge your donations</li>
              <li className="mb-2 text-lg text-[#333]">To communicate with you about our programs, events, and other activities</li>
              <li className="mb-2 text-lg text-[#333]">To improve our website and your user experience</li>
              <li className="mb-2 text-lg text-[#333]">To comply with legal, regulatory, and jurisdictional obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Sharing Your Personal Information</h2>
            <p className="text-lg text-[#333] mb-4">
              We share your information internally at the Foundation to facilitate and manage the purposes listed above. This includes third parties whom the Foundation engages to process your Personal Information on our behalf for the stated purposes, such as vendors who help with our application processing, IT services, and web hosting.
            </p>
            <p className="text-lg text-[#333] mb-4">
              The Foundation may also share your Personal Information with government and law enforcement agencies, regulators or other relevant authorities to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2 text-lg text-[#333]">Comply with a legal process, subpoena, order or other legal or regulatory requirement applicable to us</li>
              <li className="mb-2 text-lg text-[#333]">Enforce our terms of use or other policies</li>
              <li className="mb-2 text-lg text-[#333]">Pursue available legal remedies or defend against legal claims</li>
            </ul>
            <p className="text-lg text-[#333]">
              The Lu Memorial Foundation does not sell any Personal Information to third parties for their use in direct marketing, advertising, or promotion of their products or services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Cookies and Similar Technologies</h2>
            <p className="text-lg text-[#333] mb-4">
              We use cookies and other similar technologies to enhance your experience on our website. Cookies are small text files that are stored on your device when you visit our website. They help us recognize your device and collect information about your website usage.
            </p>
            <p className="text-lg text-[#333]">
              You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Your Privacy Rights</h2>
            <p className="text-lg text-[#333] mb-4">
              Depending on your location, you may have certain rights regarding your Personal Information, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2 text-lg text-[#333]">The right to access your Personal Information</li>
              <li className="mb-2 text-lg text-[#333]">The right to correct or update your Personal Information</li>
              <li className="mb-2 text-lg text-[#333]">The right to request deletion of your Personal Information</li>
              <li className="mb-2 text-lg text-[#333]">The right to object to processing of your Personal Information</li>
              <li className="mb-2 text-lg text-[#333]">The right to restrict processing of your Personal Information</li>
              <li className="mb-2 text-lg text-[#333]">The right to data portability</li>
              <li className="mb-2 text-lg text-[#333]">The right to opt out of marketing communications</li>
            </ul>
            <p className="text-lg text-[#333]">
              If you wish to exercise any of these rights, please contact us at <a href="mailto:privacy@lu-memorial.org" className="text-[#2c5282] hover:underline">privacy@lu-memorial.org</a>. We will respond to your request within a reasonable timeframe and in accordance with applicable laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Data Security</h2>
            <p className="text-lg text-[#333]">
              The Lu Memorial Foundation takes the security of your Personal Information seriously. We implement appropriate technical, administrative, and physical safeguards designed to protect your information from unauthorized access, disclosure, use, and modification. However, no security system is impenetrable, and we cannot guarantee the absolute security of our systems.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Data Retention</h2>
            <p className="text-lg text-[#333]">
              We retain your Personal Information for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period, we consider the amount, nature, and sensitivity of the Personal Information, the potential risk of harm from unauthorized use or disclosure, and applicable legal requirements.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
            <p className="text-lg text-[#333]">
              Our website is not intended for children under 13 years of age. We do not knowingly collect Personal Information from children under 13. If you are a parent or guardian and believe that your child has provided us with Personal Information, please contact us at <a href="mailto:privacy@lu-memorial.org" className="text-[#2c5282] hover:underline">privacy@lu-memorial.org</a>, and we will take steps to delete such information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Third-Party Links</h2>
            <p className="text-lg text-[#333]">
              Our website may include links to third-party websites and services that we do not operate. If you visit a third-party website or service via a link on our website, you are subject to that third party's privacy practices and policies. This Privacy Policy does not apply to any Personal Information that you provide to third-party websites or services. A link to a third-party website or service does not mean that we endorse that third party or the quality or accuracy of the information presented on its website or service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">11. International Data Transfers</h2>
            <p className="text-lg text-[#333]">
              Your Personal Information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country. By using our website, you consent to the transfer of your information to the United States and other countries where the Lu Memorial Foundation operates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">12. Changes to This Privacy Policy</h2>
            <p className="text-lg text-[#333]">
              The Lu Memorial Foundation reserves the right to modify this Privacy Policy at any time. We will post any changes to this page and, if the changes are significant, we will provide a more prominent notice. Your continued use of the website after any modification to this Privacy Policy will constitute your acceptance of such modification.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">13. Contact Us</h2>
            <p className="text-lg text-[#333]">
              If you have any questions, concerns, or complaints about this Privacy Policy or our data practices, please contact us at <a href="mailto:privacy@lu-memorial.org" className="text-[#2c5282] hover:underline">privacy@lu-memorial.org</a>.
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