import ApplySidebar from '@/app/components/ApplySidebar'
import Link from 'next/link'

export default function HighSchoolHomeschool() {
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
            <ApplySidebar currentPath="/apply/high-school/homeschool" />
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <h2 className="text-3xl font-semibold mb-6">Guidelines for Homeschooled Applicants</h2>
            <p className="text-xl mb-6">Homeschooled students, like all other students seeking the Lu Memorial Scholarship, apply using the Lu Scholar Application. These additional guidelines may be helpful as you complete your application.</p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Academic Record</h3>
            <p className="mb-4">
              We expect that you have successfully undertaken a rigorous course of study distributed across the humanities, sciences, math, social studies and languages. In addition to a transcript, we encourage you to submit a detailed description of your curriculum, but it is not necessary to follow a prescribed or approved homeschooling program. We are interested in how you have gone about the learning process, not how many courses you have completed.
            </p>
            
            <p className="mb-4">In particular, we would like to understand:</p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>how and why your family chose homeschooling</li>
              <li>how your learning process was organized</li>
              <li>what benefits accrued</li>
              <li>what, if any, choices you had to make to accomplish this type of education</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Optional Supplementary Testing</h3>
            <p className="mb-6">
              We welcome SAT Subject Test, AP and/or IB exam scores from homeschooled students as an additional measure of academic preparation, though these are not required.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Letters of Recommendation</h3>
            <p className="mb-6">
              We require two letters of recommendation: one from a teacher or instructor of the student's choice and one from a parent or guardian who has served as the primary educator. While a parent may write one of the letters, we prefer that at least one recommendation letter comes from an external instructor who has taught the student in an academic setting. For example, a community college professor, online course instructor, or local educational cooperative teacher.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Additional Materials</h3>
            <p className="mb-4">
              Homeschooled applicants are welcome to submit additional materials that demonstrate their academic preparation, intellectual curiosity, and commitment to positive change. This might include:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>Examples of significant research projects</li>
              <li>Documentation of community service or leadership</li>
              <li>Evidence of participation in academic competitions</li>
              <li>Samples of creative work (though these are not required)</li>
            </ul>
            
            <p className="mb-6">
              The Lu Memorial Scholarship values innovative approaches to education, and we recognize that homeschooling often fosters unique skills and perspectives. We encourage you to highlight the distinctive aspects of your educational journey in your application.
            </p>
            
            <p className="text-xs text-gray-500 mt-6">
              Updated on March 28, 2025
            </p>
          </div>
        </div>
      </div>
    </>
  )
} 