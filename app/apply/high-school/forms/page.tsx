import ApplySidebar from '@/app/components/ApplySidebar'
import Link from 'next/link'

export default function HighSchoolForms() {
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
            <ApplySidebar currentPath="/apply/high-school/forms" />
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <h2 className="text-3xl font-semibold mb-6">Transcript and Required School Forms</h2>
            <p className="text-xl mb-6">
              We require an official high school transcript, a school report form and recommendation from your counselor, and a letter of recommendation from at least one teacher (up to two).
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Transcript</h3>
            <p className="mb-3">An official transcript (grades 9–12) is required for all students.</p>
            <p className="mb-4">For students pursuing an international curriculum (e.g., A-Level, national curriculum, or IB Diploma outside the US), academic results and predictions are required if available.</p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>All official transcripts and results must be sent directly from a school official. We will not accept transcripts from applicants.</li>
              <li>Official transcripts are required for high school, college, university, or online courses not reported on your current high school transcript.</li>
              <li>A midyear transcript is due within two weeks after the application deadline.</li>
              <li>A final transcript, <strong>with the graduation date</strong>, is due by July 1 if you are selected as a Lu Scholar.</li>
              <li>A high school diploma or the equivalent is required for the Lu Memorial Scholarship.</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">School Report Form and Counselor Recommendation</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>These documents must be submitted by your high school college counselor or another school administrator.</li>
              <li>In the <strong>Lu Scholar Application</strong>, students invite a counselor to complete the School Report form and Counselor Recommendation form, which includes a recommendation letter.</li>
              <li><strong>Note</strong>: the School Report form is a required form located in the application and submitted by your counselor. The School Report form tells us about your academic strengths in the context of the academic programs available in your school.</li>
              <li>Your high school may have a published school profile, but this profile on its own does not fulfill the School Report form requirement.</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Letters of Recommendation</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>A letter of recommendation from at least one teacher is required (up to two permitted). We recommend requesting letters from grade 11 or 12 teachers in English, math, science, world language, or history/social studies. You may request a letter from a grade 10 teacher if the coursework was advanced (e.g., Honors, AP, IB). Letters from classroom teachers are strongly preferred.</li>
              <li>If there is another person who knows you well and can provide new insights about you, you may have <strong>one</strong> additional recommender submit a letter on your behalf. Please assign this person as your "Other Recommender" in the Lu Scholar Application. This is the fastest method for a letter to reach your file.</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4" id="how-to-submit">How to Submit Required Materials</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>We request that school personnel use the Lu Scholar Application online forms whenever possible to submit documents. This is the fastest method for materials to reach your file.</li>
              <li>If online submission is not possible, school personnel may send materials as an email attachment to <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a>. Ask your school to include your full legal name, school, and date of birth on all correspondence with the scholarship office.</li>
              <li>When ordering college transcripts, please use <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a> as the contact email.</li>
              <li>As a standard practice, we offer a grace period after the application deadline during which teachers and counselors may submit application materials.</li>
              <li>Materials submitted by others may take several weeks to process. If your checklist is not complete by the deadline, simply continue to check your Lu Scholar portal until we have received all items.</li>
              <li>Visit our <Link href="/apply/high-school/submitted" className="text-[#2c5282] hover:underline">After Submitting Your Application</Link> page for more information.</li>
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