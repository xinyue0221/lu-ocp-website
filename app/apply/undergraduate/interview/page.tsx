'use client'

import { useState } from 'react'
import ApplySidebar from '@/app/components/ApplySidebar'
import Link from 'next/link'

export default function UndergraduateInterview() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    '6': true // Set section 6 open by default, as in the original
  })
  const [allExpanded, setAllExpanded] = useState(false)

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const showAllSections = () => {
    const allOpen: Record<string, boolean> = {}
    faqData.forEach((item) => {
      allOpen[item.id] = true
    })
    setOpenSections(allOpen)
    setAllExpanded(true)
  }

  const hideAllSections = () => {
    setOpenSections({ '6': true }) // Keep section 6 open as in the original
    setAllExpanded(false)
  }

  // FAQ data organized by steps
  const faqData = [
    // Step 1: Interview Overview
    {
      id: '1',
      question: 'How are interviews assigned?',
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Lu Memorial Scholarship extends interview invitations based on your application, not on geographical location.</li>
          <li>Your application will not be at a disadvantage if you are not offered an interview.</li>
          <li>Applicants may not request a specific interviewer, but may request an interview if they were not initially offered one.</li>
        </ul>
      ),
      step: 1
    },
    {
      id: '2',
      question: 'Who is eligible for an interview?',
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Undergraduate applicants who apply through either the Early Action or Regular Decision rounds may be invited to an optional interview.</li>
          <li>International applicants are also eligible for interviews, as all interviews are conducted online.</li>
          <li>Students from all majors and academic disciplines are eligible.</li>
        </ul>
      ),
      step: 1
    },
    {
      id: '3',
      question: 'When do interviews take place?',
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Interviews for Early Action applicants occur during the last two weeks of March.</li>
          <li>Interviews for Regular Decision applicants occur during the second and third weeks of May.</li>
        </ul>
      ),
      step: 1
    },
    {
      id: '4',
      question: 'Where do interviews take place?',
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>All interviews are conducted online via Zoom.</li>
          <li>You will receive a Zoom link 24 hours before your scheduled interview.</li>
          <li>Please ensure you have a stable internet connection and a quiet environment for your interview.</li>
          <li>If you have technical difficulties, please contact scholarship@lu-memorial.org immediately.</li>
        </ul>
      ),
      step: 1
    },
    {
      id: '5',
      question: 'Will declining or not receiving an interview reflect negatively on my application?',
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>No. Declining an interview will not negatively impact your selection decision, and you may decline for any reason. If you wish to decline your interview opportunity, please communicate this promptly by replying to the interview invitation email.</li>
          <li>If you do not receive an interview opportunity, your application will still be considered complete.</li>
        </ul>
      ),
      step: 1
    },
    
    // Step 2: Interview Assignments
    {
      id: '6',
      question: 'How will I be notified about my interview and how should I respond?',
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>You will receive an email from the Lu Memorial Scholarship Selection Committee with your interview date and time options.</li>
          <li>Please respond within 48 hours to confirm your preferred interview slot.</li>
          <li>If none of the provided times work for you, please suggest alternative times within the interview period.</li>
          <li>Once your interview time is confirmed, you will receive a calendar invitation with the Zoom link 24 hours before your scheduled interview.</li>
        </ul>
      ),
      step: 2
    },
    {
      id: '7',
      question: 'Why have I not been contacted for an interview?',
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Interview invitations are sent throughout the last two weeks of March (Early Action) and the second and third weeks of May (Regular Decision).</li>
          <li>Not all applicants will receive an interview invitation. This does not reflect negatively on your application.</li>
          <li>Please make sure you check your spam folder and the email address you provided in your application.</li>
          <li>If you haven't received an interview invitation by the end of the interview period and wish to be considered for an interview, you may email scholarship@lu-memorial.org with your request.</li>
        </ul>
      ),
      step: 2
    },
    
    // Step 3: Interview Preparation
    {
      id: '8',
      question: 'How should I prepare for my upcoming interview?',
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>The interview is meant to be a conversation, so no formal preparation is needed. There is no set list of questions that interviewers are required to ask.</li>
          <li>Prior to the interview, you may want to think about:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Your academic achievements at your university and how they demonstrate academic excellence.</li>
              <li>Research projects or coursework that showcase your innovative thinking.</li>
              <li>Campus or community involvement that demonstrates your commitment to creating positive change.</li>
              <li>How your academic and career goals align with the mission of the Lu Memorial Scholarship.</li>
              <li>Questions you have about the Lu Scholar Program and how it might support your educational goals.</li>
            </ul>
          </li>
          <li>Familiarize yourself with your application materials, as your interviewer may ask you to elaborate on aspects of your submission.</li>
        </ul>
      ),
      step: 3
    },
    {
      id: '9',
      question: 'How should I dress and what should I prepare?',
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Dress neatly but comfortably. Business casual attire is appropriate, but formal attire is not required.</li>
          <li>Ensure you have a quiet space with minimal background distractions.</li>
          <li>Test your camera and microphone before the interview.</li>
          <li>Have a glass of water nearby.</li>
          <li>You do not need to prepare any additional materials or presentations for the interview.</li>
        </ul>
      ),
      step: 3
    },
    
    // Step 4: During the Interview
    {
      id: '10',
      question: 'What should I expect during the interview?',
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Interviews typically last approximately 30 minutes.</li>
          <li>The interview will be conducted by either a member of the selection committee or a past Lu Scholar volunteer.</li>
          <li>Your interviewer will introduce themselves and explain the interview process.</li>
          <li>You will be informed if the interview is being recorded.</li>
          <li>The interview is a one-on-one experience. Friends, roommates, or family members should not be present during the interview.</li>
          <li>Be prepared to discuss your academic achievements, research interests, campus involvement, and future goals.</li>
          <li>You will have an opportunity to ask questions about the Lu Scholar Program.</li>
        </ul>
      ),
      step: 4
    },
    {
      id: '11',
      question: 'What is the role of the interviewer?',
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Your interviewer will learn about you through conversation and share information with the Selection Committee in a report that becomes part of your application.</li>
          <li>If your interviewer is a past Lu Scholar, they may share their experiences and insights about the program.</li>
          <li>The interviewer is looking for evidence of the key Lu Scholar values: academic excellence, innovative thinking, and commitment to positive change.</li>
          <li>They may ask about how a Lu Scholarship would impact your academic journey and career goals.</li>
        </ul>
      ),
      step: 4
    },
    
    // Step 5: After the Interview
    {
      id: '12',
      question: 'What should I do following the interview?',
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>You may send a brief thank-you email to your interviewer within 24 hours.</li>
          <li>Please direct any additional questions or communications to scholarship@lu-memorial.org.</li>
          <li>There is no need to send follow-up materials unless specifically requested by your interviewer.</li>
        </ul>
      ),
      step: 5
    },
    {
      id: '13',
      question: 'Who can I contact with further questions?',
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Email <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a> with any questions about interviews or your application.</li>
          <li>Please include your full name and application ID in all correspondence.</li>
        </ul>
      ),
      step: 5
    }
  ]

  // Group FAQ items by step
  const stepGroups: Record<number, typeof faqData> = {}
  faqData.forEach(item => {
    if (!stepGroups[item.step]) {
      stepGroups[item.step] = []
    }
    stepGroups[item.step].push(item)
  })

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
            <ApplySidebar currentPath="/apply/undergraduate/interview" />
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <h2 className="text-3xl font-semibold mb-6">Interview</h2>
            <p className="mb-4">
              The optional interview provides an opportunity for Early Action and Regular Decision applicants to have meaningful conversations with a selection committee member or past Lu Scholar volunteer who will be assigned as your interviewer. This two-way exchange allows you to learn more about the Lu Scholar Program while the selection committee learns more about you.
            </p>
            
            <p className="mb-6">
              All interviews will be conducted online via Zoom and may be recorded. The interview program operates for students from all around the world! You will not know your interviewer until the day of your interview.
            </p>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Step 1: Interview Overview</h3>
            <div className="mb-6 flex">
              <button 
                onClick={showAllSections}
                className={`px-4 py-2 bg-[#2c5282] text-white rounded mr-2 ${allExpanded ? 'hidden' : 'block'}`}
              >
                Show All
              </button>
              <button 
                onClick={hideAllSections}
                className={`px-4 py-2 bg-[#2c5282] text-white rounded ${allExpanded ? 'block' : 'hidden'}`}
              >
                Hide All
              </button>
            </div>
            
            <div className="space-y-4 mb-8">
              {stepGroups[1]?.map((item) => (
                <div key={item.id} className="border border-gray-300 rounded overflow-hidden">
                  <div 
                    className="bg-gray-100 p-4 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSection(item.id)}
                  >
                    <h4 className="text-lg font-medium">{item.question}</h4>
                    <span className="text-gray-500">
                      {openSections[item.id] ? '−' : '+'}
                    </span>
                  </div>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openSections[item.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="p-4 border-t border-gray-300">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Step 2: Interview Assignments</h3>
            <div className="space-y-4 mb-8">
              {stepGroups[2]?.map((item) => (
                <div key={item.id} className="border border-gray-300 rounded overflow-hidden">
                  <div 
                    className="bg-gray-100 p-4 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSection(item.id)}
                  >
                    <h4 className="text-lg font-medium">{item.question}</h4>
                    <span className="text-gray-500">
                      {openSections[item.id] ? '−' : '+'}
                    </span>
                  </div>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openSections[item.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="p-4 border-t border-gray-300">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Step 3: Interview Preparation</h3>
            <div className="space-y-4 mb-8">
              {stepGroups[3]?.map((item) => (
                <div key={item.id} className="border border-gray-300 rounded overflow-hidden">
                  <div 
                    className="bg-gray-100 p-4 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSection(item.id)}
                  >
                    <h4 className="text-lg font-medium">{item.question}</h4>
                    <span className="text-gray-500">
                      {openSections[item.id] ? '−' : '+'}
                    </span>
                  </div>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openSections[item.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="p-4 border-t border-gray-300">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Step 4: During the Interview</h3>
            <div className="space-y-4 mb-8">
              {stepGroups[4]?.map((item) => (
                <div key={item.id} className="border border-gray-300 rounded overflow-hidden">
                  <div 
                    className="bg-gray-100 p-4 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSection(item.id)}
                  >
                    <h4 className="text-lg font-medium">{item.question}</h4>
                    <span className="text-gray-500">
                      {openSections[item.id] ? '−' : '+'}
                    </span>
                  </div>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openSections[item.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="p-4 border-t border-gray-300">
                      {item.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-2xl font-semibold mt-8 mb-4">Step 5: After the Interview</h3>
            <div className="space-y-4 mb-8">
              {stepGroups[5]?.map((item) => (
                <div key={item.id} className="border border-gray-300 rounded overflow-hidden">
                  <div 
                    className="bg-gray-100 p-4 cursor-pointer flex justify-between items-center"
                    onClick={() => toggleSection(item.id)}
                  >
                    <h4 className="text-lg font-medium">{item.question}</h4>
                    <span className="text-gray-500">
                      {openSections[item.id] ? '−' : '+'}
                    </span>
                  </div>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openSections[item.id] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                    }`}
                  >
                    <div className="p-4 border-t border-gray-300">
                      {item.answer}
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