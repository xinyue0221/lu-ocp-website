import Link from 'next/link'
import { FaCaretRight, FaCaretDown } from 'react-icons/fa'

type Props = {
  currentPath: string;
}

export default function ApplySidebar({ currentPath }: Props) {
  const isHighSchool = currentPath.includes('/high-school');
  const isUndergrad = currentPath.includes('/undergraduate');

  return (
    <div className="bg-[#f8f8f8] p-6 rounded">
      <h2 className="text-2xl font-semibold border-b border-[#ddd] pb-3 mb-4">APPLY</h2>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link 
              href="/apply/overview" 
              className={`text-[#2c5282] hover:underline ${currentPath === '/apply/overview' ? 'font-semibold' : ''}`}
            >
              Admission Overview
            </Link>
          </li>

          <li className="mt-6">
            <div className="mb-2">
              <h5 className="text-lg font-semibold flex items-center gap-2">
                {isHighSchool ? <FaCaretDown className="text-[#2c5282]" /> : <FaCaretRight className="text-[#2c5282]" />}
                High School Applicants
              </h5>
            </div>
            <ul className={`pl-6 space-y-2 ${isHighSchool ? 'block' : 'hidden md:block'}`}>
              <li><Link href="/apply/high-school" className={`text-[#2c5282] hover:underline ${currentPath === '/apply/high-school' ? 'font-bold text-black' : ''}`}>Requirements and Deadlines</Link></li>
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
                {isUndergrad ? <FaCaretDown className="text-[#2c5282]" /> : <FaCaretRight className="text-[#2c5282]" />}
                Undergraduate Applicants
              </h5>
            </div>
            <ul className={`pl-6 space-y-2 ${isUndergrad ? 'block' : 'hidden md:block'}`}>
              <li><Link href="/apply/undergraduate" className={`text-[#2c5282] hover:underline ${currentPath === '/apply/undergraduate' ? 'font-bold text-black' : ''}`}>Requirements and Deadlines</Link></li>
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
  )
} 