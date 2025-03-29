import ApplySidebar from '@/app/components/ApplySidebar'
import Link from 'next/link'

export default function HighSchoolRecommendation() {
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
            <ApplySidebar currentPath="/apply/high-school/recommendation" />
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <h2 className="text-3xl font-semibold mb-6">Letters of Recommendation</h2>
            <p className="text-xl mb-6">Up to 2 letters of recommendation are required for high school applicants.</p>
            
            <p className="mb-6">
              At least one of the two letters must be from a high school teacher who has taught you in an academic subject (English, mathematics, science, foreign language, social studies, or history). The second letter can come from another teacher, a school counselor, a coach, or a mentor who knows you well and can speak to your character, work ethic, and potential.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Recommender Guidelines</h3>
            <p className="mb-4">
              Strong letters of recommendation provide specific examples that demonstrate your academic excellence, innovative thinking, and commitment to positive change. We encourage you to select recommenders who can speak to these qualities and provide meaningful insights about you.
            </p>
            
            <p className="mb-6">
              Please give your recommenders sufficient time to write their letters. It's considerate to provide them with at least 2-3 weeks notice before the application deadline.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Optional Letter</h3>
            <p className="mb-6">
              You may submit <strong>one</strong> optional letter of recommendation if there is another person who knows you well and will provide new insights about you. This could be from an employer, community service leader, research mentor, or other individual who can speak to your qualities outside the classroom. Please ask your recommender to note your full legal name, school name, and date of birth at the top of the letter.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">How to Submit Letters of Recommendation</h3>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>Recommendation letters should be submitted online through the Lu Scholar Application portal whenever possible. This is the fastest method for materials to reach your file.</li>
              <li>If online submission is not possible, recommenders may send their letter as an email attachment to <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a>. They should include your full legal name, school name, and date of birth at the top of the letter and in their email.</li>
              <li>Materials submitted by recommenders may take up to one week to process after we have received your submitted application. As a standard practice, we offer a grace period after the application deadline during which recommenders may submit their letters.</li>
              <li>You can check the status of your recommendation letters in your Lu Scholar Application portal after submitting your application.</li>
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