'use client'

import ApplySidebar from '@/app/components/ApplySidebar'
import Link from 'next/link'

export default function UndocumentedApplicants() {
  return (
    <>
      <div className="bg-[#f8f9fa] w-full py-8">
        <div className="container">
          <h1 className="text-4xl font-semibold text-center">Undocumented Applicants</h1>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="md:w-1/4">
            <ApplySidebar currentPath="/apply/undocumented" />
          </div>

          {/* Main Content */}
          <div className="md:w-3/4">
            <p className="text-xl mb-6">
              The Lu Memorial Scholarship Foundation welcomes and embraces students from all backgrounds who contribute immeasurably to our mission of recognizing and supporting academic excellence, innovative thinking, and commitment to creating positive change. Inclusion and nondiscrimination are core values of our community, and they extend to people from around the world regardless of citizenship.
            </p>
            
            <p className="text-xl mb-6">
              Citizenship and immigration status are not a condition of selection for the Lu Memorial Scholarship. We welcome applications from all students who demonstrate the values that Tingyu Lu represented.
            </p>
            
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li>The Lu Memorial Scholarship Foundation is committed to creating an inclusive and supportive community for all scholars, including undocumented students.</li>
              <li>Our selection process is based on identifying students who demonstrate academic excellence, innovative thinking, and commitment to creating positive change, regardless of citizenship or immigration status.</li>
              <li>We believe that talent and potential know no borders, and we are dedicated to recognizing and supporting exceptional students regardless of their immigration status.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Submitting Your Application</h2>
            <p className="mb-6">
              The Lu Memorial Scholarship Foundation treats all information provided in the application in a confidential manner. Undocumented students should feel comfortable providing as much accurate information as possible in the application to help us better understand their status.
            </p>
            
            <ul className="list-disc pl-6 space-y-3 mb-8">
              <li>The application process is the same for all applicants regardless of citizenship or country of residence.</li>
              <li>To apply, simply review and follow our standard <Link href="/apply/high-school" className="text-[#2c5282] hover:underline">High School Applicant Instructions</Link> or our <Link href="/apply/undergraduate" className="text-[#2c5282] hover:underline">Undergraduate Applicant Instructions</Link>.</li>
              <li>All applicants must apply online by submitting the <a href="http://portal.scholar.lu-memorial.org/apply" target="_blank" rel="noopener noreferrer" className="text-[#2c5282] hover:underline">Lu Scholar Application</a>.</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Reporting Citizenship Status on the Application</h2>
            <p className="mb-6">
              In order to accurately represent your citizenship status on the application, please select the appropriate option under the "Citizenship Status" section of the Lu Scholar Application. If you are an undocumented student, you can select "Undocumented" or "DACA recipient" as applicable.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Financial Support</h2>
            <p className="mb-6">
              The Lu Memorial Scholarship Foundation assesses undocumented students under the same selection process it uses for all applicants. Citizenship and immigration status are not factors in the selection process. The scholarship provides the same level of financial support to all selected scholars, regardless of citizenship status.
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