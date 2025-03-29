import Link from 'next/link'

export default function NewsPage() {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-12">Latest News</h1>
      
      <div className="max-w-4xl">
        <div className="space-y-8">
          <div className="border-b pb-8">
            <h3 className="text-xl font-bold mb-2">2025 Scholarship Applications Now Open</h3>
            <p className="text-gray-600 mb-4">
              Applications for the 2025-2026 academic year are now being accepted. Apply by May 1, 2025 to be considered for our full range of scholarship opportunities.
            </p>
            <Link href="/news/2025-applications" className="text-[#2c5282] font-medium hover:underline">
              Read more →
            </Link>
          </div>
        </div>
        
        <div className="mt-8">
          <Link href="/" className="text-[#2c5282] hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
} 