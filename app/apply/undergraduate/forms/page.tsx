import ApplySidebar from '@/app/components/ApplySidebar'
import Link from 'next/link'

export default function UndergraduateForms() {
  return (
    <>
      <div className="bg-[#f8f9fa] w-full py-8">
        <div className="container">
          <h1 className="text-4xl font-semibold text-center">Undergraduate Applicants</h1>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="md:w-1/4">
            <ApplySidebar currentPath="/apply/undergraduate/forms" />
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <h2 className="text-3xl font-semibold mb-6">Transcript and Required School Forms</h2>
            <p className="text-xl mb-6">
              An official high school transcript (or equivalent, such as a GED), official transcript(s) from every college/university attended, and a college report are required.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Transcripts</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>Ask your high school to submit your official high school transcript (including your graduation date). If you attended an international high school and you have leaving exams (such as A-Levels or IB results), you are required to submit these scores. If there are challenges to obtaining your high school transcript, you may send a copy of your high school diploma, a document that indicates you have graduated from high school, or a copy of your leaving exams.</li>
              <li>Request official transcripts from every college/university attended.</li>
              <li>A midyear transcript / mid-term report is not required for undergraduate applicants.</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">College Report</h3>
            <p className="mb-4">In a college report, your academic dean, advisor, or other school administrator enters your college GPA and information regarding your academic standing at the institution. This information is essential for the review of your application.</p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>Ask an official at your current institution to fill out a college report form.
                <ul className="list-disc pl-6 mt-2">
                  <li>The College Report form is available in the Lu Scholar Application portal. Your academic advisor will receive access to this form when you list them as a recommender in your application.</li>
                </ul>
              </li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Letters of Recommendation</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>A letter of recommendation from at least one teacher or professor is required (up to two permitted). For undergraduate applicants, we recommend requesting letters from professors in your field of study or in courses relevant to your academic interests.</li>
              <li>If there is another person who knows you well and can provide new insights about you, you may have <strong>one</strong> additional recommender submit a letter on your behalf. Please assign this person as your "Other Recommender" in the Lu Scholar Application. This is the fastest method for a letter to reach your file.</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">How to Submit Required Materials</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>High school and college officials may submit application materials online through the application or by email attachment to <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a>.</li>
              <li>When ordering college transcripts, please use <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a> as the contact email.</li>
              <li>Give school personnel ample time to complete and send the forms prior to the application deadline. It is your responsibility to ensure that we receive official copies of all required documents.</li>
              <li>Materials submitted by others may take several days to process. If your checklist is not complete by the deadline, please simply check your Lu Scholar portal regularly until we have processed all items.</li>
              <li>Visit our <Link href="/apply/undergraduate/submitted" className="text-[#2c5282] hover:underline">After Submitting Your Application</Link> page for more information.</li>
            </ul>
            
            <p className="text-xs text-gray-500 mt-6">
              Updated on March 28, 2025
            </p>
          </div>
        </div>
      </div>
    </>
  )
} 