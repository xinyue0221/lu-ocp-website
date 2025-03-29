import Image from 'next/image'
import Link from 'next/link'

export default function Apply() {
  return (
    <>
      {/* Hidden H1 for accessibility */}
      <h1 className="sr-only" aria-label="Lu Memorial Scholarship">Lu Memorial Scholarship</h1>

      {/* Feature Banner */}
      <div className="relative w-full h-[400px] mb-10">
        <Image
          src="https://admission.stanford.edu/assets/cardinal/images/banners/afford/banner2XL.jpg"
          alt="Students in a classroom setting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-10 left-[10%] right-[10%] bg-black/50 p-5 rounded">
          <h3 className="text-white text-2xl mb-2">APPLICATION STEPS</h3>
          <p className="text-white">
            The Lu Memorial Scholarship application process is designed to discover students who embody academic excellence, innovative thinking, and a commitment to positive change.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-semibold text-[#333] mb-8">Apply</h1>
          
          <p className="text-xl text-[#333] leading-relaxed mb-12">
            Thank you for your interest in the Lu Memorial Scholarship. Our application will encourage you to spend time reflecting on who you are and what is important to you. We approach the selection process with sincere respect for each individual applicant and look forward to learning about your academic achievements, innovative thinking, and commitment to creating positive change.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            {[
              {
                title: 'Admission Overview',
                href: '/apply/overview',
                image: 'https://media.istockphoto.com/id/878934088/photo/group-of-college-students-collaborating-on-project-in-library.jpg?s=612x612&w=0&k=20&c=UpsNnjXiD1lhiIOICkIFvgdcxs3_22F-GJgat_w3e1g=',
                alt: 'Students collaborating on a project'
              },
              {
                title: 'High School Applicants',
                href: '/apply/high-school',
                image: 'https://media.istockphoto.com/id/1480277406/photo/graduation-group-and-back-view-of-students-celebrate-education-success-behind-of-excited.jpg?s=612x612&w=0&k=20&c=KRfzU9eeBsUdCNUXQSIx4yf6O2PlMD9XvckFgx-hndc=',
                alt: 'High school students with graduation caps'
              },
              {
                title: 'Undergraduate Applicants',
                href: '/apply/undergraduate',
                image: 'https://med.stanford.edu/education/undergrad-studies/_jcr_content/main/panel_builder/panel_0/story.img.476.high.jpg/undergrad-classroomlearning.jpg',
                alt: 'College students on campus'
              },
              {
                title: 'Graduate Applicants',
                href: '/apply/graduate',
                image: 'https://www.keg.com/hubfs/Keystone%20August%202018%20Folder/Images/52834_NAGAP_Thumbnail_2.jpg',
                alt: 'Graduate students in a laboratory'
              }
            ].map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                className="block no-underline text-[#333] hover:no-underline"
              >
                <div className="border border-[#e0e0e0] rounded overflow-hidden h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-[180px] w-full">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'International Applicants',
                href: '/apply/international',
                image: 'https://imageio.forbes.com/specials-images/imageserve/5c5ca76131358e2a162e99ee/960x0.jpg?format=jpg&width=1440',
                alt: 'International students with diverse backgrounds'
              },
              {
                title: 'Undocumented Applicants',
                href: '/apply/undocumented',
                image: 'https://d92mrp7hetgfk.cloudfront.net/images/sites/misc/minority-students-d/original.jpg?1627682493',
                alt: 'Students in a welcoming environment'
              }
            ].map((item, index) => (
              <Link 
                key={index} 
                href={item.href}
                className="block no-underline text-[#333] hover:no-underline"
              >
                <div className="border border-[#e0e0e0] rounded overflow-hidden h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="relative h-[180px] w-full">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold">{item.title}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
} 