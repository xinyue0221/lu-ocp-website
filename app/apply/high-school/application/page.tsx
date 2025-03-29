import ApplySidebar from '@/app/components/ApplySidebar'
import Link from 'next/link'

export default function HighSchoolApplication() {
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
            <ApplySidebar currentPath="/apply/high-school/application" />
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <h2 className="text-3xl font-semibold mb-6">Application and Essays</h2>
            
            <p className="mt-6">
              If you would like to apply to become a Lu Scholar, please do so online by submitting the{' '}
              <Link href="http://portal.scholar.lu-memorial.org/apply" target="_blank" className="text-[#2c5282] hover:underline">
                Lu Scholar Application
              </Link>.
            </p>
            
            <p className="mt-6">
              When you apply to the Lu Memorial Scholarship, you are applying with other high school and undergraduate students, so it's okay if you do not have any future ideas yet. We encourage you to indicate prospective majors and career interests in the application, but please know you are not bound by these selections in any way.
            </p>
            
            <p className="mt-4">
              The Lu Scholar Application includes essay prompts for your personal essay. You may notice below that they look similar to{' '}
              <Link href="https://www.commonapp.org/blog/announcing-2025-2026-common-app-essay-prompts" target="_blank" className="text-[#2c5282] hover:underline">
                Common Application's essay prompts
              </Link>. In addition to the personal essay, we also require the Lu Scholar Questions, which you can access and submit through the Lu Scholar Application once you complete the personal essay.
            </p>
            
            <p className="mt-4">
              The essays are your chance to tell us about yourself in your own words; there are no right or wrong answers and you should allow your genuine voice to come through. These questions help us get to know you as a friend, a future scientist, and a person who may make a distinctive contribution to the world.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Personal Essay (500 words)</h3>
            <p className="mb-4">Choose ONE of the following prompts:</p>
            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li>Some aspects of our identity or background are so fundamental to who we are that our story feels incomplete without them. Reflect on an element of your identity, experience, or talent that has significantly shaped your values and aspirations. How has this influenced your perspective and goals?</li>
              <li>Describe a time when you faced a significant obstacle, setback, or failure. How did you respond to this adversity? What specific lessons emerged from this experience, and how have these insights influenced your approach to subsequent challenges?</li>
              <li>Discuss a topic, idea, or concept that captivates you so completely you lose track of time when exploring it. What sparked this passion? How do you pursue this interest, and what does your engagement with this subject reveal about who you are and how you think?</li>
              <li>Identify a pressing challenge in your community or the world that you feel called to address. What personal experiences connect you to this issue? Share your innovative approach to making a meaningful difference, including specific steps you've taken or would implement.</li>
              <li>Share an essay on any subject that illuminates an important aspect of yourself not covered elsewhere in your application. This may be a previously written piece or an entirely new composition.</li>
            </ol>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Lu Scholar Questions (200 words for each, all required)</h3>
            <ol className="list-decimal pl-6 space-y-4 mb-8">
              <li>If you could host a dinner party and invite any three people (living, historical, or fictional), who would you choose and what would you cook? What conversation topic would you introduce to spark the most interesting discussion between your guests?</li>
              <li>It's 2040, and a newspaper has just published a story about your impact on the world. Write the headline and first paragraph of this article. What did you accomplish, and why does it matter?</li>
              <li>Describe a book, film, song, or work of art that impacted you in a way its creator never intended. How did you discover meaning that others might have missed, and how has this alternative interpretation shaped an important aspect of your life?</li>
              <li>Identify an unspoken social convention or unwritten rule that you believe deserves to be questioned. Why does this invisible boundary exist, and what would be gained if more people were willing to examine or challenge it? What personal experience led you to notice this unwritten rule?</li>
            </ol>
            
            <p className="text-xs text-gray-500">
              Updated on March 28, 2025
            </p>
          </div>
        </div>
      </div>
    </>
  )
} 