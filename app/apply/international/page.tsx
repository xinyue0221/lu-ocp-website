'use client'

import { useState } from 'react'
import ApplySidebar from '@/app/components/ApplySidebar'
import Link from 'next/link'

export default function InternationalApplicants() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({})
  const [showAllOpen, setShowAllOpen] = useState(false)

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const handleShowAll = () => {
    // Create an object with all sections set to true
    const allSections = {} as { [key: string]: boolean }
    for (let i = 1; i <= 8; i++) {
      allSections[i.toString()] = true
    }
    setOpenSections(allSections)
    setShowAllOpen(true)
  }

  const handleHideAll = () => {
    setOpenSections({})
    setShowAllOpen(false)
  }

  return (
    <>
      <div className="bg-[#f8f9fa] w-full py-8">
        <div className="container">
          <h1 className="text-4xl font-semibold text-center">International Applicants</h1>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="md:w-1/4">
            <ApplySidebar currentPath="/apply/international" />
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <p className="text-xl mb-6">The Lu Memorial Scholarship welcomes applicants from all around the world. International students are an integral part of our scholar community and contribute to a diverse network of future leaders and innovators.</p>
            
            <p className="mb-4">
              Our selection committee specializes in evaluating educational systems from countries around the world and will consider your application within the context of the resources available to you. We recognize the educational procedures within your school and country as well as cultural and regional differences.
            </p>
            
            <p className="mb-6">
              Please find frequently asked questions about applying as an international student below. You can find general application information in the <Link href="/apply/high-school" className="text-[#2c5282] hover:underline">High School Applicants</Link> and <Link href="/apply/undergraduate" className="text-[#2c5282] hover:underline">Undergraduate Applicants</Link> sections.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Frequently Asked Questions</h3>
            <div className="mb-4">
              <div className="flex gap-2 mb-4">
                {!showAllOpen ? (
                  <button 
                    onClick={handleShowAll}
                    className="px-3 py-1 border border-gray-300 rounded bg-white hover:bg-gray-100"
                  >
                    Show All
                  </button>
                ) : (
                  <button 
                    onClick={handleHideAll}
                    className="px-3 py-1 border border-gray-300 rounded bg-white hover:bg-gray-100"
                  >
                    Hide All
                  </button>
                )}
              </div>
            </div>
            
            <div className="space-y-3">
              {/* FAQ 1 */}
              <div className="border border-gray-200 rounded overflow-hidden">
                <div 
                  className="bg-gray-100 p-3 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleSection('1')}
                >
                  <h4 className="text-lg font-medium">What is the difference between applying as an international student versus as a domestic student?</h4>
                  <span>{openSections['1'] ? '−' : '+'}</span>
                </div>
                {openSections['1'] && (
                  <div className="p-4 bg-white">
                    <p className="mb-3"><strong>The application process is the same for all applicants regardless of citizenship or country of residence.</strong> Review and follow our <Link href="/apply/high-school" className="text-[#2c5282] hover:underline">High School Applicant Instructions</Link> or our <Link href="/apply/undergraduate" className="text-[#2c5282] hover:underline">Undergraduate Applicant Instructions</Link>.</p>
                    <p>At the Lu Memorial Scholarship Foundation, we believe that talent knows no borders. We are committed to providing equal opportunities to all applicants, regardless of their nationality or immigration status. Our selection process focuses on academic excellence, innovative thinking, and commitment to positive change.</p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="border border-gray-200 rounded overflow-hidden">
                <div 
                  className="bg-gray-100 p-3 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleSection('2')}
                >
                  <h4 className="text-lg font-medium">Am I eligible to apply if I am an international student?</h4>
                  <span>{openSections['2'] ? '−' : '+'}</span>
                </div>
                {openSections['2'] && (
                  <div className="p-4 bg-white">
                    <p>
                      Yes, the Lu Memorial Scholarship is open to all high school and undergraduate students, regardless of nationality or immigration status. We welcome applications from international students and evaluate all applications based on our primary criteria: academic excellence, innovative thinking, and commitment to positive change.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 3 */}
              <div className="border border-gray-200 rounded overflow-hidden">
                <div 
                  className="bg-gray-100 p-3 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleSection('3')}
                >
                  <h4 className="text-lg font-medium">How do I apply from a school with an international curriculum?</h4>
                  <span>{openSections['3'] ? '−' : '+'}</span>
                </div>
                {openSections['3'] && (
                  <div className="p-4 bg-white">
                    <p className="mb-3">
                      Members of our selection committee specialize in reviewing applications from countries around the world. We are familiar with the nuances of different education systems and consider your application within the context of the resources available to you. We will consider the educational procedures within your school and country, as well as cultural and regional differences. There is no need to have your marks converted into an American Grade Point Average (GPA).
                    </p>
                    <p className="mb-3">
                      While there are no specific courses required to apply for the Lu Memorial Scholarship, we recommend completing a challenging curriculum appropriate for your educational system. Our selection process considers your academic achievements in context.
                    </p>
                    <p>
                      Please have a school official submit all available internal and external final and predicted marks from your secondary school with your application.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 4 */}
              <div className="border border-gray-200 rounded overflow-hidden">
                <div 
                  className="bg-gray-100 p-3 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleSection('4')}
                >
                  <h4 className="text-lg font-medium">Do I need to translate my school documents into English?</h4>
                  <span>{openSections['4'] ? '−' : '+'}</span>
                </div>
                {openSections['4'] && (
                  <div className="p-4 bg-white">
                    <p>
                      Yes, transcripts and teacher recommendations must be translated into English. Original copies must also be submitted when applicable. Applicants cannot translate the documents themselves. We recommend asking your English teacher or other school official to translate for you.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 5 */}
              <div className="border border-gray-200 rounded overflow-hidden">
                <div 
                  className="bg-gray-100 p-3 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleSection('5')}
                >
                  <h4 className="text-lg font-medium">What type of high school curriculum should I take?</h4>
                  <span>{openSections['5'] ? '−' : '+'}</span>
                </div>
                {openSections['5'] && (
                  <div className="p-4 bg-white">
                    <p>
                      We do not have a preference for a specific curriculum (A-Level, IB, AP, National, etc.). You should complete the necessary coursework that demonstrates academic excellence within your educational system. The Lu Memorial Scholarship values students who challenge themselves academically while pursuing their intellectual interests.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 6 */}
              <div className="border border-gray-200 rounded overflow-hidden">
                <div 
                  className="bg-gray-100 p-3 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleSection('6')}
                >
                  <h4 className="text-lg font-medium">What should I do if my school does not have a guidance counselor?</h4>
                  <span>{openSections['6'] ? '−' : '+'}</span>
                </div>
                {openSections['6'] && (
                  <div className="p-4 bg-white">
                    <p>
                      If you do not have a guidance counselor, you may have another school official (such as a principal or teacher) submit the counselor letter of recommendation for you.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 7 */}
              <div className="border border-gray-200 rounded overflow-hidden">
                <div 
                  className="bg-gray-100 p-3 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleSection('7')}
                >
                  <h4 className="text-lg font-medium">Are standardized tests required?</h4>
                  <span>{openSections['7'] ? '−' : '+'}</span>
                </div>
                {openSections['7'] && (
                  <div className="p-4 bg-white">
                    <p>
                      The Lu Memorial Scholarship makes standardized testing optional. While you may submit ACT or SAT scores if you have them, they are not required for consideration. We evaluate applications holistically, focusing on your academic achievements in the context of your educational environment.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 8 */}
              <div className="border border-gray-200 rounded overflow-hidden">
                <div 
                  className="bg-gray-100 p-3 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleSection('8')}
                >
                  <h4 className="text-lg font-medium">Are English proficiency exams required?</h4>
                  <span>{openSections['8'] ? '−' : '+'}</span>
                </div>
                {openSections['8'] && (
                  <div className="p-4 bg-white">
                    <p>
                      No, we do not require any English proficiency exams. While these exams (TOEFL, IELTS, Duolingo English Test, etc.) are useful in helping us determine our applicants' English proficiency, you may feel your fluency will be clear in other aspects of your application. We have no preferred proficiency exam. Please note that proficiency in English is necessary to fully participate in the Lu Scholar community activities and events.
                    </p>
                  </div>
                )}
              </div>
            </div>
            
            <div className="bg-gray-100 p-4 border border-gray-200 rounded my-8">
              <p className="italic">The Lu Memorial Foundation and the Office of Scholarship Programs does not partner or work with paid agents or credentialing services. It is expected that all students complete their application materials without the use of such services.</p>
            </div>
            
            <p className="text-xs text-gray-500 mt-6">
              Updated on March 28, 2025
            </p>
          </div>
        </div>
      </div>
    </>
  )
} 