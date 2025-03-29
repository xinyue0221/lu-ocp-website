import { FaRegSquare, FaInfoCircle } from 'react-icons/fa'
import ApplySidebar from '@/app/components/ApplySidebar'

export default function HighSchoolApplicants() {
  return (
    <>
      <div className="bg-[#f8f9fa] w-full py-8">
        <div className="container">
          <h1 className="text-4xl font-semibold text-center">High School Applicants</h1>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="md:w-1/4">
            <ApplySidebar currentPath="/apply/high-school" />
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <h2 className="text-3xl font-semibold mb-6">Requirements and Deadlines</h2>
            
            <h3 className="text-2xl font-semibold mb-4">Required Application Components</h3>
            <ul className="mb-8 space-y-2">
              <li className="flex items-start gap-3">
                <FaRegSquare className="text-[#2c5282] mt-1.5" />
                <span>Lu Scholar Application</span>
              </li>
              <li className="flex items-start gap-3">
                <FaRegSquare className="text-[#2c5282] mt-1.5" />
                <span>ACT or SAT test scores (optional)</span>
              </li>
              <li className="flex items-start gap-3">
                <FaRegSquare className="text-[#2c5282] mt-1.5" />
                <span>School Report form and counselor letter of recommendation</span>
              </li>
              <li className="flex items-start gap-3">
                <FaRegSquare className="text-[#2c5282] mt-1.5" />
                <span>Official transcript(s) or academic results</span>
              </li>
              <li className="flex items-start gap-3">
                <FaRegSquare className="text-[#2c5282] mt-1.5" />
                <span>Letters of recommendation from 1 teacher (up to 2)</span>
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mb-4">Application Deadlines</h3>
            <p className="mb-6">Submit your Lu Scholar Application by 11:59 p.m. (in your local timezone) on the applicable deadline.</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse mb-8">
                <thead>
                  <tr>
                    <th className="bg-[#f8f8f8] border border-[#ddd] p-3 text-left w-[54%]">Event</th>
                    <th className="bg-[#f8f8f8] border border-[#ddd] p-3 text-left w-[24%]">Early Action</th>
                    <th className="bg-[#f8f8f8] border border-[#ddd] p-3 text-left w-[21%]">Regular Decision</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[#ddd] p-3">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Standard Application Deadline</span>
                        <FaInfoCircle 
                          className="text-[#2c5282] cursor-help"
                          title="This is the deadline for the Lu Scholar Application and required materials. Please visit the After Submitting Your Application page for additional information."
                        />
                      </div>
                    </td>
                    <td className="border border-[#ddd] p-3 font-semibold">March 1</td>
                    <td className="border border-[#ddd] p-3 font-semibold">May 1</td>
                  </tr>
                  <tr>
                    <td className="border border-[#ddd] p-3">Notification of Missing Documents</td>
                    <td className="border border-[#ddd] p-3">Mid-March</td>
                    <td className="border border-[#ddd] p-3">Mid-May</td>
                  </tr>
                  <tr>
                    <td className="border border-[#ddd] p-3">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">Decision Released By</span>
                        <FaInfoCircle 
                          className="text-[#2c5282] cursor-help"
                          title="The date and time of the decision release will be made available on our News & Announcements webpage a few days in advance of a decision release. Please refer to this page to confirm the date and time of decision releases. Applicants will be sent an email when the decision is available in their Lu Scholar Application portal if they are not already logged in at the time of the decision release."
                        />
                      </div>
                    </td>
                    <td className="border border-[#ddd] p-3 font-semibold">Early April</td>
                    <td className="border border-[#ddd] p-3 font-semibold">Late May</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="italic mb-8">
              The Lu Memorial Scholarship Foundation reserves the right to evaluate an application and render a final decision even if all pieces of the application have not been received.
            </p>

            <p className="text-xs text-gray-500">
              Updated on March 28, 2025
            </p>
          </div>
        </div>
      </div>
    </>
  )
} 