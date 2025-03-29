'use client'

import { useState } from 'react'
import ApplySidebar from '@/app/components/ApplySidebar'
import Link from 'next/link'

export default function UndergraduatePrepare() {
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
      question: 'Do I need a specific GPA to be competitive for the Lu Memorial Scholarship?',
      answer: 'While we value academic excellence, we do not have a specific GPA cutoff. We evaluate each application holistically, taking into account the rigor of your curriculum, the context of your institution, and your overall academic trajectory. We\'re particularly interested in your growth over time and how you\'ve challenged yourself intellectually. A strong GPA is beneficial, but it\'s only one factor among many that we consider in our evaluation process.'
    },
    {
      id: '2',
      question: 'I\'m studying in a field that doesn\'t traditionally emphasize innovation. How can I demonstrate innovative thinking?',
      answer: 'Innovation can take many forms across all disciplines. In humanities, it might involve bringing new perspectives to traditional texts or historical events. In social sciences, it could mean applying novel methodologies to understand human behavior. Even in highly structured fields like accounting or engineering, innovation might appear in how you approach problem-solving or communicate complex ideas. Focus on how you\'ve brought fresh approaches, made unexpected connections, or challenged conventional thinking in your field. Independent projects, research work, and interdisciplinary studies are all potential avenues to demonstrate innovative thinking regardless of your major.'
    },
    {
      id: '3',
      question: 'I\'ve changed my major several times. Will this hurt my application?',
      answer: 'Not at all. Exploration and intellectual growth are natural parts of the undergraduate experience. Changing majors can demonstrate intellectual curiosity and a willingness to pursue your evolving interests. What\'s important is that you can articulate the reasoning behind these changes and show how they\'ve contributed to your development. In your application, explain how each major has influenced your thinking and how your academic path, though perhaps not linear, has helped shape your current goals and interests. We value students who are thoughtful about their education, even when that involves changing direction.'
    },
    {
      id: '4',
      question: 'My transcript includes some lower grades from my first year. How will this affect my application?',
      answer: 'We understand that many students go through a period of adjustment when they begin college, and early grades may not reflect your true potential. We pay particular attention to patterns of growth and improvement over time. If your grades have improved since your first year, this demonstrates resilience and adaptability—qualities we value highly. In your application, you can address these early challenges and explain how you\'ve overcome them. Context matters in our evaluation process, and we\'re interested in your journey and growth as much as your final outcomes.'
    }
  ]

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
            <ApplySidebar currentPath="/apply/undergraduate/prepare" />
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <h2 className="text-3xl font-semibold mb-6">Academic Preparation</h2>
            <p className="text-xl mb-6">
              The primary criterion for the Lu Memorial Scholarship is academic excellence combined with innovative thinking and a commitment to positive change. We seek evidence of your preparation and potential to succeed in your academic record.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Eligibility for Undergraduate Students</h3>
            <p className="mb-4">
              Review these guidelines to determine your eligibility as an undergraduate applicant. Please note that the terms high school and secondary school are used interchangeably.
            </p>
            
            <h4 className="text-xl font-semibold mt-6 mb-4">Guidelines</h4>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>Students who have completed courses for college credit in an associates or bachelor's degree program since completing high school must apply as undergraduate applicants</li>
              <li>Coursework must be completed at an accredited degree-granting institution; coursework completed in vocational, technical, performance, or professional programs is not considered</li>
              <li>Students must have a high school diploma, the state/country equivalent of a high school diploma, or a GED</li>
              <li>Students who are dual-enrolled in both high school and college programs should apply as high school applicants</li>
              <li>Students who have already earned a bachelor's degree are not eligible to apply as undergraduate applicants</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Academic Excellence</h3>
            <p className="mb-4">
              We value students who challenge themselves academically and demonstrate intellectual growth throughout their undergraduate journey. Your transcript should reflect:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>A rigorous curriculum appropriate to your academic goals</li>
              <li>Strong performance in courses related to your field of study</li>
              <li>Intellectual curiosity beyond required coursework</li>
              <li>Growth and improvement over time</li>
            </ul>
            
            <p className="mb-6">
              There are no required courses for the Lu Memorial Scholarship. We recognize that undergraduate education pathways vary widely, and we evaluate each application in its own context. If you have attended college for more than one year, we expect that you have begun to focus on a potential major or area of study.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Innovative Thinking</h3>
            <p className="mb-4">
              Beyond academic achievement, we seek students who demonstrate innovative thinking in their approach to education and problem-solving. This might be reflected in:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>Research projects that explore new ideas or approaches</li>
              <li>Interdisciplinary coursework that bridges different fields</li>
              <li>Creative applications of classroom knowledge to real-world problems</li>
              <li>Academic work that challenges conventional thinking in a field</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Commitment to Positive Change</h3>
            <p className="mb-4">
              The Lu Memorial Scholarship looks for students who are committed to using their education to make a positive impact. This commitment might be demonstrated through:
            </p>
            <ul className="list-disc pl-6 space-y-3 mb-6">
              <li>Coursework focused on addressing social challenges or improving communities</li>
              <li>Research directed toward solving important problems</li>
              <li>Academic projects with practical applications for positive change</li>
              <li>A clear connection between academic interests and long-term goals for impact</li>
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