import Image from 'next/image'
import Link from 'next/link'

export default function VolunteerRolesPage() {
  return (
    <>
      {/* Header Banner */}
      <div className="relative w-full h-[400px] mb-10">
        <Image
          src="https://visit.stanford.edu/assets/cardinal/images/explore-campus/self-guided-tour-map.jpg"
          alt="Lu Scholar volunteers at an event"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-10 left-[10%] right-[10%] bg-black/50 p-5 rounded">
          <h3 className="text-white text-2xl mb-2">ALUMNI VOLUNTEERS</h3>
          <p className="text-white">
            Alumni volunteers share their experiences and serve as resources for prospective students who want to learn more about the Lu Memorial Scholarship opportunity.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link href="/volunteers" className="text-[#2c5282] hover:underline">
              ← Back to Alumni Volunteers
            </Link>
          </div>
          
          <h1 className="text-4xl font-semibold text-[#333] mb-8">Volunteer Roles</h1>
          
          <p className="text-xl text-[#333] leading-relaxed mb-10">
            Previous Lu Scholars may serve in all roles listed below. Family members of current scholars are only eligible to serve as an admit reception host/volunteer, informational event representative, or information session panelist/volunteer.
          </p>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">Alumni Interviewer</h2>
            <p className="text-lg text-[#333] mb-4">
              Previous Lu Scholars are invited to conduct evaluative interviews with scholarship applicants. Unlike many other scholarship programs, interviews for the Lu Memorial Scholarship are evaluative and will be considered in the selection process. Interviewers meet with applicants for a structured conversation designed to identify candidates who embody the values of academic excellence, innovative thinking, and commitment to positive change that Tingyu Lu represented.
            </p>
            <p className="text-lg text-[#333] mb-4">
              You are eligible to be an alumni interviewer if you are a previous Lu Scholar and you complete the required training. Additional eligibility requirements apply. Interviews are conducted between March and May. Interviewers of applicants who are selected may be invited to make congratulatory calls to those students.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">Admit Reception Host</h2>
            <p className="text-lg text-[#333] mb-4">
              Held at the conclusion of the Early Action (April) and Regular Decision (June) cycles, admit receptions are a celebration for selected scholars and their families. Hosts identify reception locations (typically in alumni homes), coordinate details for setup and refreshments, and support associated costs.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">Admit Reception Volunteer</h2>
            <p className="text-lg text-[#333] mb-4">
              Volunteers may be invited to attend receptions for selected scholars in their areas. Duties include meeting, greeting and congratulating new scholars and their families, sharing information about the Lu Memorial Scholarship program and serving as ambassadors to welcome them to the Lu Scholars community.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">Alumni Interview Training Host</h2>
            <p className="text-lg text-[#333] mb-4">
              Local, in-person interview training workshops (typically in February) are typically held in private homes or workplace conference rooms. Hosts identify workshop venues, coordinate details for setup and refreshments, and support associated costs.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">Regional Leadership Team Member</h2>
            <p className="text-lg text-[#333] mb-4">
              The highest level volunteers, leadership team members (including regional chairs), oversee other volunteers in their areas and serve as the point of contact for the Lu Memorial Scholarship Foundation. Leadership team duties can include: recruiting local volunteers; coordinating volunteers for receptions, information sessions and informational events; organizing and leading volunteer training sessions; and coordinating the local interview program.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">Informational Event Representative</h2>
            <p className="text-lg text-[#333] mb-4">
              Volunteers represent the Lu Memorial Scholarship at educational events worldwide, answering questions, distributing materials (provided by the Lu Memorial Scholarship Foundation) and serving as ambassadors when foundation staff cannot be present.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">Information Session Panelist</h2>
            <p className="text-lg text-[#333] mb-4">
              Information session panelists speak at selected regional events. They are invited to share their experiences as Lu Scholars as they pertain to how the scholarship impacted their academic journey, career path, community engagement, and personal growth. Panelists are often recent Lu Scholars. Family members may also occasionally serve as panelists, sharing their experience with other prospective families in attendance.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">Information Session Volunteer</h2>
            <p className="text-lg text-[#333] mb-4">
              Volunteers assist foundation staff with regional events designed to provide information about the Lu Memorial Scholarship to prospective applicants and their families. Duties may include: helping prepare a venue; meeting, greeting and checking in participants; mingling and answering questions; and serving as regional ambassadors for the Lu Memorial Scholarship program.
            </p>
          </section>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-[#333] mb-4">Educational Outreach Program</h2>
            <p className="text-lg text-[#333] mb-4">
              Volunteers make presentations to high school and college students to promote scholarship awareness and prepare them for the application process of selective scholarship programs. Using content provided by the Lu Memorial Scholarship Foundation, presentations are primarily made to students in community-based organizations and schools in under-resourced communities.
            </p>
          </section>
          
          <p className="text-lg text-[#333] mb-16">
            For questions about volunteer opportunities, please contact <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a>.
          </p>
          
          <div className="flex justify-between">
            <Link href="/volunteers" className="text-[#2c5282] hover:underline">
              ← Back to Alumni Volunteers
            </Link>
            <Link href="/volunteers/eligibility" className="text-[#2c5282] hover:underline">
              Eligibility Requirements →
            </Link>
          </div>
          
          <p className="text-sm text-gray-500 mt-12 text-center">
            Updated on March 28, 2025
          </p>
        </div>
      </div>
    </>
  )
} 