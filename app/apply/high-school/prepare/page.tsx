'use client'

import { useState } from 'react'
import ApplySidebar from '@/app/components/ApplySidebar'
import Link from 'next/link'

export default function HighSchoolPrepare() {
  const [openFaqs, setOpenFaqs] = useState<Record<string, boolean>>({})
  const [allExpanded, setAllExpanded] = useState(false)

  const toggleFaq = (id: string) => {
    setOpenFaqs(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const showAllFaqs = () => {
    const allOpen: Record<string, boolean> = {}
    faqData.forEach((faq) => {
      allOpen[faq.id] = true
    })
    setOpenFaqs(allOpen)
    setAllExpanded(true)
  }

  const hideAllFaqs = () => {
    setOpenFaqs({})
    setAllExpanded(false)
  }

  const faqData = [
    {
      id: '1',
      question: 'Do I need to be in the top of my class to apply for the Lu Memorial Scholarship?',
      answer: 'While we value academic excellence, we do not have specific GPA or class rank requirements. We evaluate each application holistically, taking into account the challenges and opportunities available at your school. We recognize that grading scales and academic rigor vary widely across different schools, so we emphasize your overall growth, intellectual curiosity, and commitment to learning rather than focusing solely on grades or class rank.'
    },
    {
      id: '2',
      question: 'How important are advanced courses (AP, IB, Honors) for my application?',
      answer: 'We value students who challenge themselves with rigorous coursework, but we also recognize that access to advanced courses varies widely across schools. We encourage you to take advantage of the most challenging courses available to you, but we evaluate your curriculum in the context of what\'s offered at your school. Quality of engagement is more important than the quantity or label of advanced courses. We\'re looking for evidence that you\'re intellectually curious and willing to challenge yourself, regardless of whether that happens in AP, IB, Honors, or regular courses.'
    },
    {
      id: '3',
      question: 'I\'m interested in a STEM career. Should I focus only on STEM courses?',
      answer: 'While we support students with strong interests in particular fields, the Lu Memorial Scholarship values a well-rounded education. Even students pursuing STEM careers benefit from developing strong communication skills, historical and cultural awareness, and ethical reasoning that come from a broad liberal arts education. We encourage you to pursue your interests deeply while also maintaining breadth across different disciplines. This approach fosters innovative thinking and the ability to make connections across fields, which are key values of the Lu Memorial Scholarship.'
    },
    {
      id: '4',
      question: 'My school doesn\'t offer many advanced courses. Will this hurt my chances?',
      answer: 'No. We evaluate your academic choices in the context of what\'s available at your school. We\'re interested in how you\'ve made the most of your educational opportunities, not in comparing the offerings at different schools. If your school offers limited advanced coursework, consider ways you\'ve supplemented your learning through independent projects, online courses, summer programs, or community college classes. In your application, you can use the Additional Information section to provide context about your school\'s academic offerings and how you\'ve sought out challenges within your environment.'
    }
  ]

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
            <ApplySidebar currentPath="/apply/high-school/prepare" />
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <h2 className="text-3xl font-semibold mb-6">Academic Preparation</h2>
            <p className="text-xl mb-6">
              All currently enrolled high school students are eligible to apply to become a Lu Scholar. Academic preparation is the foundation of your scholarship application. We value students who challenge themselves and demonstrate intellectual growth throughout their academic journey.
            </p>
            
            <p className="mb-4">Throughout your high school years, we recommend that you:</p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>Take a course load of reasonable and appropriate challenge in light of the academic opportunities available at your school</li>
              <li>Work hard and achieve at a high level across the five core liberal arts and science areas: English, math, social studies, science, and world language</li>
              <li>Take approximately five academic courses each semester, including during your final year</li>
              <li>Consult early on with your secondary school counselor</li>
            </ul>
            
            <p className="font-bold mb-6">
              Please note: In order to be considered for the Lu Memorial Scholarship, applicants must be currently enrolled in high school and plan to pursue higher education.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Academic Excellence</h3>
            <p className="mb-4">
              The Lu Memorial Scholarship values academic excellence, but we define this more broadly than just high grades or standardized test scores. We are looking for students who demonstrate:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>A willingness to challenge themselves intellectually</li>
              <li>Growth and improvement over time</li>
              <li>Intellectual curiosity and a love of learning</li>
              <li>Strong critical thinking and problem-solving skills</li>
              <li>The ability to make connections across different subject areas</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Innovative Thinking</h3>
            <p className="mb-4">
              Beyond academic achievement, we seek students who demonstrate innovative thinking in how they approach their education. This might be reflected in:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>Creative approaches to coursework or academic projects</li>
              <li>Independent research or self-directed learning</li>
              <li>Developing new solutions to academic or community challenges</li>
              <li>Bringing together concepts from different disciplines in unexpected ways</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Frequently Asked Questions</h3>
            <div className="mb-6 flex">
              <button 
                onClick={showAllFaqs}
                className={`px-4 py-2 bg-[#2c5282] text-white rounded mr-2 ${allExpanded ? 'hidden' : 'block'}`}
              >
                Show All
              </button>
              <button 
                onClick={hideAllFaqs}
                className={`px-4 py-2 bg-[#2c5282] text-white rounded ${allExpanded ? 'block' : 'hidden'}`}
              >
                Hide All
              </button>
            </div>
            
            <div className="space-y-4">
              {faqData.map((faq) => (
                <div key={faq.id} className="border border-gray-300 rounded overflow-hidden">
                  <div 
                    className="bg-gray-100 p-4 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <h4 className="text-lg font-medium">{faq.question}</h4>
                    <span className="text-gray-500">
                      {openFaqs[faq.id] ? '−' : '+'}
                    </span>
                  </div>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openFaqs[faq.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="p-4 border-t border-gray-300">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
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