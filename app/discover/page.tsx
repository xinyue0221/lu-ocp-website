import Image from 'next/image'
import Link from 'next/link'

export default function DiscoverPage() {
  return (
    <>
      {/* Header Banner */}
      <div className="relative w-full h-[400px] mb-10">
        <Image
          src="https://www.stanford.edu/wp-content/uploads/2021/10/dish-andrew-lg-scaled.jpg"
          alt="Lu Memorial Foundation Building"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute bottom-10 left-[10%] right-[10%] bg-black/50 p-5 rounded">
          <h3 className="text-white text-2xl mb-2">DISCOVER OUR FOUNDATION</h3>
          <p className="text-white">
            Learn about the Lu Memorial Foundation's mission, history, and our commitment to educational excellence.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-semibold text-[#333] mb-8">About The Lu Memorial Foundation</h1>
          
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="col-span-2">
              <p className="text-lg text-[#333] leading-relaxed mb-6">
                The Lu Memorial Foundation was established to honor the memory and legacy of Tingyu Lu, who passed away in 2025 at the age of 19. His passion for education, innovation, and helping others inspired the creation of this foundation.
              </p>
              <p className="text-lg text-[#333] leading-relaxed mb-6">
                Our foundation is dedicated to identifying and supporting exceptional students with demonstrated academic excellence, innovative thinking, and commitment to positive change in their communities - values that Tingyu embodied throughout his life.
              </p>
              <p className="text-lg text-[#333] leading-relaxed mb-6">
                Since our establishment, we have committed to creating a living memorial that transforms lives and communities, just as Tingyu aspired to do throughout his brief but impactful journey.
              </p>
            </div>
            <div>
              <div className="aspect-square relative rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/tingyu-portrait.jpg"
                  alt="Tingyu Lu (2006-2025)"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-center mt-3 italic">Tingyu Lu (2006-2025)</p>
            </div>
          </div>
          
          {/* Commemoration Section */}
          <div className="bg-gray-50 p-8 rounded-lg mb-16 border-l-4 border-[#2c5282]">
            <h2 className="text-3xl font-semibold text-[#333] mb-6">In Commemoration of Tingyu Lu (2006-2025)</h2>
            <div className="grid md:grid-cols-1 gap-12">
              <div>
                <p className="text-lg text-[#333] leading-relaxed mb-6">
                  Despite his short life, Tingyu's passion for learning and dedication to helping others left an indelible mark on all who knew him. He exemplified academic excellence, innovative thinking, and a profound commitment to creating positive change.
                </p>
                <p className="text-lg text-[#333] leading-relaxed mb-6">
                  Tingyu believed deeply in the transformative power of education and its ability to uplift individuals and communities. Our scholarship programs continue his legacy by supporting young scholars who share his vision and commitment.
                </p>
                <p className="text-lg text-[#333] leading-relaxed">
                  Through our work, we strive to ensure that Tingyu's values and aspirations continue to inspire future generations of students and leaders around the world.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-[#333] mb-8">Our Programs</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#2c5282] mb-4">High School Scholarships</h3>
              <p className="text-[#333] mb-6">
                Our flagship program supports exceptional high school students as they prepare for college. Recipients receive comprehensive financial support, mentorship, and access to our network of educational resources.
              </p>
              <Link href="/apply/high-school" className="text-[#2c5282] font-medium hover:underline">
                Learn more about High School Scholarships →
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#2c5282] mb-4">Undergraduate Scholarships</h3>
              <p className="text-[#333] mb-6">
                For students already enrolled in undergraduate programs, our scholarship provides full financial support, research opportunities, and career development resources to help scholars excel in their chosen fields.
              </p>
              <Link href="/apply/undergraduate" className="text-[#2c5282] font-medium hover:underline">
                Learn more about Undergraduate Scholarships →
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-semibold text-[#333] mb-8">Our Values</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="text-5xl text-[#2c5282] mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3">Academic Excellence</h3>
              <p className="text-[#333]">
                We recognize and support students who demonstrate exceptional academic achievement and intellectual curiosity.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl text-[#2c5282] mb-4">💡</div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-[#333]">
                We value creative thinking and novel approaches to solving problems in all disciplines.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl text-[#2c5282] mb-4">🌏</div>
              <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
              <p className="text-[#333]">
                We support scholars who are committed to creating positive change in their communities and around the world.
              </p>
            </div>
          </div>

          <div className="bg-[#2c5282] text-white p-10 rounded-lg">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
              <p className="text-xl mb-8">
                Take the first step towards becoming a Lu Memorial Scholar and joining our global network of changemakers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/apply" className="bg-white text-[#2c5282] px-6 py-3 rounded font-medium hover:bg-gray-100">
                  Apply Now
                </Link>
                <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded font-medium hover:bg-white hover:text-[#2c5282]">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 mt-12 text-center">
            Updated on March 28, 2025
          </p>
        </div>
      </div>
    </>
  )
} 