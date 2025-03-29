import Link from 'next/link'
import { FaCaretRight } from 'react-icons/fa'

export default function AdmissionOverview() {
  return (
    <>
      <div className="bg-[#f8f9fa] w-full py-8">
        <div className="container">
          <h1 className="text-4xl font-semibold text-center">Admission Overview</h1>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="md:w-1/4">
            <div className="bg-[#f8f8f8] p-6 rounded">
              <h2 className="text-2xl font-semibold border-b border-[#ddd] pb-3 mb-4">APPLY</h2>
              <nav>
                <ul className="space-y-4">
                  <li>
                    <Link href="/apply/overview" className="text-[#2c5282] font-semibold">
                      Admission Overview
                    </Link>
                  </li>

                  <li className="mt-6">
                    <div className="mb-2">
                      <h5 className="text-lg font-semibold flex items-center gap-2">
                        <FaCaretRight className="text-[#2c5282]" />
                        High School Applicants
                      </h5>
                    </div>
                    <ul className="pl-6 space-y-2">
                      <li><Link href="/apply/high-school" className="text-[#2c5282] hover:underline">Requirements and Deadlines</Link></li>
                      <li><Link href="/apply/high-school/prepare" className="text-[#2c5282] hover:underline">Academic Preparation</Link></li>
                      <li><Link href="/apply/high-school/application" className="text-[#2c5282] hover:underline">Application and Essays</Link></li>
                      <li><Link href="/apply/high-school/forms" className="text-[#2c5282] hover:underline">Transcript and Required School Forms</Link></li>
                      <li><Link href="/apply/high-school/recommendation" className="text-[#2c5282] hover:underline">Letters of Recommendation</Link></li>
                      <li><Link href="/apply/high-school/interview" className="text-[#2c5282] hover:underline">Interview</Link></li>
                      <li><Link href="/apply/high-school/homeschool" className="text-[#2c5282] hover:underline">Guidelines for Homeschooled Applicants</Link></li>
                      <li><Link href="/apply/high-school/submitted" className="text-[#2c5282] hover:underline">After Submitting Your Application</Link></li>
                    </ul>
                  </li>

                  <li className="mt-6">
                    <div className="mb-2">
                      <h5 className="text-lg font-semibold flex items-center gap-2">
                        <FaCaretRight className="text-[#2c5282]" />
                        Undergraduate Applicants
                      </h5>
                    </div>
                    <ul className="pl-6 space-y-2">
                      <li><Link href="/apply/undergraduate" className="text-[#2c5282] hover:underline">Requirements and Deadlines</Link></li>
                      <li><Link href="/apply/undergraduate/prepare" className="text-[#2c5282] hover:underline">Academic Preparation</Link></li>
                      <li><Link href="/apply/undergraduate/application" className="text-[#2c5282] hover:underline">Application and Essays</Link></li>
                      <li><Link href="/apply/undergraduate/forms" className="text-[#2c5282] hover:underline">Transcript and Required School Forms</Link></li>
                      <li><Link href="/apply/undergraduate/recommendation" className="text-[#2c5282] hover:underline">Letters of Recommendation</Link></li>
                      <li><Link href="/apply/undergraduate/interview" className="text-[#2c5282] hover:underline">Interview</Link></li>
                      <li><Link href="/apply/undergraduate/submitted" className="text-[#2c5282] hover:underline">After Submitting Your Application</Link></li>
                    </ul>
                  </li>

                  <li className="mt-6">
                    <div className="mb-2">
                      <h5 className="text-lg font-semibold flex items-center gap-2">
                        <FaCaretRight className="text-[#2c5282]" />
                        Graduate Applicants
                      </h5>
                    </div>
                    <p className="pl-6 text-sm italic text-gray-600">
                      We are currently considering the opening of the graduate fellowship program. This information will be updated.
                    </p>
                  </li>

                  <li className="mt-6">
                    <Link href="/apply/international" className="text-[#2c5282] hover:underline">
                      International Applicants
                    </Link>
                  </li>

                  <li className="mt-4">
                    <Link href="/apply/undocumented" className="text-[#2c5282] hover:underline">
                      Undocumented Applicants
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <h2 className="text-3xl font-semibold mb-6">Holistic Selection</h2>
            <p className="text-xl mb-8">
              At the Lu Memorial Scholarship Foundation, we practice holistic selection. This means that each piece in your application is reviewed as part of an integrated and comprehensive whole.
            </p>

            <p className="mb-6">
              One piece tells us about your background and life experiences, another about your school and your academic achievement. We learn from others about your character and intellectual contributions. In your essays, we learn about your ideas and interests, and what is meaningful to you.
            </p>

            <p className="mb-6">
              Each year, we aim to select a diverse group of scholars with varied backgrounds and experiences, talents, academic interests, and ways of viewing the world.
            </p>

            <p className="mb-8">
              In a holistic review, we seek to understand how you, as a whole person, would grow, contribute, and make a positive impact with the support of our scholarship, and how you embody the values that Tingyu Lu represented.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Context</h3>
            <p className="mb-8">
              Just as no two Lu Scholars are the same, each applicant is unique. This means that as we review your application, we pay careful attention to your unique circumstances. We take into account your background, educational pathway, and work and family responsibilities. By focusing on your achievements in context, we evaluate how you have excelled in your environment and how you have taken advantage of opportunities available to you in your school and community.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Academic Excellence</h3>
            <p className="mb-6">
              A primary criterion for the Lu Memorial Scholarship is academic excellence. We look for your preparation and potential to succeed. We expect you to challenge yourself throughout your educational journey and to do very well by maintaining a strong academic record.
            </p>

            <p className="mb-8">
              The most important credential for evaluating your academic record is your transcript. Please know that our evaluation goes beyond any numerical formula. There is no minimum GPA or test score requirement to be considered for the scholarship. We evaluate each application in its entirety and in context.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Innovative Thinking</h3>
            <p className="mb-8">
              We want to see your commitment, dedication, and genuine interest in expanding your intellectual horizons, both in what you write about yourself and in what others write on your behalf. We look for evidence of creative problem-solving, original approaches to challenges, and the ability to think beyond conventional boundaries. Innovative thinking was a core value of Tingyu Lu, and we seek scholars who demonstrate this quality in various aspects of their lives.
            </p>

            <h3 className="text-2xl font-semibold mb-4">Commitment to Positive Change</h3>
            <p className="mb-6">
              Learning about your engagement with your community and dedication to making a positive impact helps us understand your potential as a Lu Scholar. We are interested in how you have worked to address challenges and create positive change, whether in your school, community, or broader society.
            </p>

            <p className="mb-6">
              Students often assume our primary concern is the number of activities in which an applicant participates. In fact, an exceptional depth of experience in one or two initiatives may demonstrate your commitment more than minimal participation in many different activities. You may also have work or family responsibilities. These are as important as any other activities.
            </p>

            <p className="mb-8">
              In general, we want to understand the impact you have had in your job, in your family, in a club, in your school, or in the larger community, and we want to learn of the impact that experience has had on you.
            </p>

            <hr className="my-8 border-t border-[#ddd]" />

            <p className="italic mb-8">
              It is important to know these elements are not listed in order of importance in our evaluation and selection process. We review applications holistically. No portion of the application is considered without the rest of the application.
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