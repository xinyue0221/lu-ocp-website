'use client'

import { useState } from 'react'
import ApplySidebar from '@/app/components/ApplySidebar'
import { FaExternalLinkAlt } from 'react-icons/fa'

export default function HighSchoolSubmitted() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    '9': true // Set the withdraw panel open by default
  })
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
    for (let i = 1; i <= 9; i++) {
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
          <h1 className="text-4xl font-semibold text-center">High School Applicants</h1>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="md:w-1/4">
            <ApplySidebar currentPath="/apply/high-school/submitted" />
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <h2 className="text-3xl font-semibold mb-6">After Submitting Your Application</h2>
            <p className="text-xl mb-6">Thank you for taking the time to submit an application to the Lu Memorial Scholarship!</p>
            
            <p className="mb-4">
              Once we receive your application, you will be sent an acknowledgment email with instructions on how to log in to your <a href="https://portal.scholar.lu-memorial.org" target="_blank" rel="noopener noreferrer" className="text-[#2c5282] hover:underline">Lu Scholar portal <FaExternalLinkAlt className="inline text-xs ml-1" /></a> to check the status of your application. This message will be sent to the same email address that you used to submit your application.
            </p>
            
            <p className="mb-6">
              The Lu Scholar portal is where you can check to see if we have received required materials such as your transcript and letters of recommendation. This is also where you will log in to view your scholarship decision letter.
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
                  <h4 className="text-lg font-medium">I never received my acknowledgment email. What should I do?</h4>
                  <span>{openSections['1'] ? '−' : '+'}</span>
                </div>
                {openSections['1'] && (
                  <div className="p-4 bg-white">
                    <p>
                      Check your Junk/Spam/Promotions folders for an email with the subject line "Your Lu Memorial Scholarship Application." If you still cannot locate the email, it's possible that your acknowledgment email bounced, and we may only have one email address for you. Please email <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a> with an alternative email address, your application ID number, and the email address you used to apply, so that we can resend your acknowledgment email. We recommend using a non-school email address that you check frequently.
                    </p>
                  </div>
                )}
              </div>

              {/* FAQ 2 */}
              <div className="border border-gray-200 rounded overflow-hidden">
                <div 
                  className="bg-gray-100 p-3 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleSection('2')}
                >
                  <h4 className="text-lg font-medium">All my materials have been submitted. Why is my checklist not complete?</h4>
                  <span>{openSections['2'] ? '−' : '+'}</span>
                </div>
                {openSections['2'] && (
                  <div className="p-4 bg-white">
                    <p>
                      Materials submitted by others, including school officials, may take up to a week to process after we have received your submitted application, even if your materials were sent before your application was submitted. If your checklist is not complete by the deadline, simply continue to check your <a href="https://portal.scholar.lu-memorial.org" target="_blank" rel="noopener noreferrer" className="text-[#2c5282] hover:underline">Lu Scholar portal <FaExternalLinkAlt className="inline text-xs ml-1" /></a> regularly until we have received all items. If parts of the application for which you are not directly responsible, such as your transcripts or recommendation letters, reach us slightly after the deadline, you will not be penalized in our selection process and we will review your application when we receive all the required documents. Once we process all materials, we will contact you if you are still missing a required material.
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
                  <h4 className="text-lg font-medium">I submitted my application on the deadline, but the timestamp says the day after the deadline. Is my application late?</h4>
                  <span>{openSections['3'] ? '−' : '+'}</span>
                </div>
                {openSections['3'] && (
                  <div className="p-4 bg-white">
                    <p>
                      No; due to variation in time zones, your submission timestamp may show a date and time after the deadline. No need to worry. As long as you have received a Lu Memorial Scholarship acknowledgment email, we have your application.
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
                  <h4 className="text-lg font-medium">My teacher (or counselor) is unable to submit letters and/or materials for my application by the deadline. What should I do?</h4>
                  <span>{openSections['4'] ? '−' : '+'}</span>
                </div>
                {openSections['4'] && (
                  <div className="p-4 bg-white">
                    <p>
                      As a standard practice, we offer a grace period after the application deadline during which teachers and counselors may submit application materials. Please remind your teacher or counselor to submit the materials as soon as possible. Continue to check your <a href="https://portal.scholar.lu-memorial.org" target="_blank" rel="noopener noreferrer" className="text-[#2c5282] hover:underline">Lu Scholar portal <FaExternalLinkAlt className="inline text-xs ml-1" /></a> until we have received all items.
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
                  <h4 className="text-lg font-medium">My recommender is unable to submit a letter of recommendation online. Is there another way to send the document?</h4>
                  <span>{openSections['5'] ? '−' : '+'}</span>
                </div>
                {openSections['5'] && (
                  <div className="p-4 bg-white">
                    <p className="mb-3">
                      We only accept required documents, such as transcripts and letters of recommendation, sent from school personnel and recommenders.
                    </p>
                    <p className="mb-3">
                      We strongly prefer online submission through the Lu Scholar Application system. If your recommender is unable to submit a letter or other required documents online, then they may send the document as an email attachment to <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a>. Please ensure that your full legal name, school name, and date of birth are included on the required documents and in the email message.
                    </p>
                    <p>
                      <strong>If you need to have a letter of recommendation emailed to us, please have your recommender also indicate the type of recommendation (e.g., counselor, teacher) in the email.</strong>
                    </p>
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Application Updates</h3>

              {/* FAQ 6 */}
              <div className="border border-gray-200 rounded overflow-hidden">
                <div 
                  className="bg-gray-100 p-3 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleSection('6')}
                >
                  <h4 className="text-lg font-medium">How can I add new information to my application or make a correction?</h4>
                  <span>{openSections['6'] ? '−' : '+'}</span>
                </div>
                {openSections['6'] && (
                  <div className="p-4 bg-white">
                    <p>
                      To add new information, such as an award, to your submitted application, or if you forgot to enter something or discover an error in your application, please email <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a> with your full name, application ID, and the information you would like to update. Please use the subject line "Application Update - [Your Name]".
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
                  <h4 className="text-lg font-medium">What should I do if I need to request a change to my name or date of birth?</h4>
                  <span>{openSections['7'] ? '−' : '+'}</span>
                </div>
                {openSections['7'] && (
                  <div className="p-4 bg-white">
                    <p>
                      Email <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a> to request a change to your name or date of birth. In addition to the requested correction, please include your application ID, full name, school name, and date of birth as submitted in your application. Please note that if you are contacting us about a change to your legal name, you will need to provide verification.
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
                  <h4 className="text-lg font-medium">I have moved since I submitted my application. How do I update my address?</h4>
                  <span>{openSections['8'] ? '−' : '+'}</span>
                </div>
                {openSections['8'] && (
                  <div className="p-4 bg-white">
                    <p>
                      Email <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a> with your full name, application ID, and your updated address information. Please use the subject line "Address Update - [Your Name]".
                    </p>
                  </div>
                )}
              </div>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Withdraw</h3>

              {/* FAQ 9 */}
              <div className="border border-gray-200 rounded overflow-hidden">
                <div 
                  className="bg-gray-100 p-3 cursor-pointer flex justify-between items-center"
                  onClick={() => toggleSection('9')}
                >
                  <h4 className="text-lg font-medium">How do I withdraw my application?</h4>
                  <span>{openSections['9'] ? '−' : '+'}</span>
                </div>
                {openSections['9'] && (
                  <div className="p-4 bg-white">
                    <p>
                      To withdraw your application to the Lu Memorial Scholarship, please email <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a> with your full name and application ID. Please use the subject line "Application Withdrawal - [Your Name]".
                    </p>
                  </div>
                )}
              </div>
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