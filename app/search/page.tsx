'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import Fuse from 'fuse.js'

interface SearchResult {
  title: string
  path: string
  content: string
}

interface FuseResult {
  item: SearchResult
  refIndex: number
}

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchIndex, setSearchIndex] = useState<SearchResult[]>([])
  const [searchResults, setSearchResults] = useState<FuseResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const [isLoadingIndex, setIsLoadingIndex] = useState(true)
  const [errorLoading, setErrorLoading] = useState<string | null>(null)
  const [showTipsAndPopular, setShowTipsAndPopular] = useState(true)

  useEffect(() => {
    // Fetch the search index on component mount
    fetch('/search-index.json')
      .then(response => {
        if (!response.ok) {
          console.error(`Failed to fetch search index: ${response.status} ${response.statusText}`)
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        console.log(`Loaded search index with ${data.length} entries`)
        setSearchIndex(data)
        setIsLoadingIndex(false)
      })
      .catch(error => {
        console.error("Error loading search index:", error)
        setErrorLoading(`Could not load search data: ${error.message}`)
        setIsLoadingIndex(false)
      })
  }, [])

  const fuse = useMemo(() => {
    if (searchIndex.length === 0) return null
    return new Fuse(searchIndex, {
      keys: ['title', 'content'], // Fields to search in
      includeScore: true,        // Include search score for relevance
      threshold: 0.4,            // Adjust threshold for fuzziness (0=exact, 1=very fuzzy)
      minMatchCharLength: 2,     // Minimum characters to trigger search
    })
  }, [searchIndex])

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault() // Prevent form submission if event exists
    if (!searchQuery || !fuse) {
      setSearchResults([])
      setShowTipsAndPopular(true) // Show tips if query is cleared
      return
    }

    setIsSearching(true)
    const results = fuse.search(searchQuery)
    setSearchResults(results)
    setShowTipsAndPopular(false) // Hide tips when showing results
    setIsSearching(false)
  }

  // Clear results and show tips when search query is emptied
  useEffect(() => {
    if (searchQuery === '') {
      setSearchResults([])
      setShowTipsAndPopular(true)
    }
  }, [searchQuery])


  return (
    <div className="container py-16">
      <div className="max-w-4xl mx-auto"> {/* Centered container */}
        <h1 className="text-4xl font-bold mb-8 text-center">Search Scholarship Programs</h1>

        {/* Search Form Section */}
        <section className="mb-8">
          <form onSubmit={handleSearch} className="mb-4">
            <div className="flex gap-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search scholarships, programs, or policies..."
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2c5282] focus:border-transparent"
                disabled={isLoadingIndex || !!errorLoading}
                aria-label="Search query"
              />
              <button
                type="submit"
                disabled={isSearching || isLoadingIndex || !!errorLoading || !searchQuery}
                className="bg-[#2c5282] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#2b6cb0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSearching ? 'Searching...' : 'Search'}
              </button>
            </div>
            {isLoadingIndex && <p className="text-gray-600 mt-2">Loading search data...</p>}
            {errorLoading && <p className="text-red-600 mt-2">{errorLoading}</p>}
          </form>
        </section>

        {/* Search Results Section */}
        {!showTipsAndPopular && searchResults.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Search Results ({searchResults.length})</h2>
            <div className="space-y-4">
              {searchResults.map(({ item, refIndex }) => (
                <Link
                  href={item.path}
                  key={refIndex}
                  className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-[#2c5282] transition-colors"
                >
                  <h3 className="font-bold text-[#2c5282] mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{item.content}</p> {/* Show snippet, limit to 2 lines */}
                </Link>
              ))}
            </div>
          </section>
        )}
        {!showTipsAndPopular && !isSearching && searchResults.length === 0 && (
          <section className="mb-8 text-center">
            <p className="text-lg text-gray-600">No results found for "{searchQuery}". Try different keywords.</p>
          </section>
        )}

        {/* Tips and Popular Searches Section (Conditional) */}
        {showTipsAndPopular && (
          <>
            <section className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-xl font-bold mb-4 text-[#2c5282]">Search Tips</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-700">
                <li>Use specific keywords related to your search</li>
                <li>Try searching for program names or specific requirements</li>
                <li>Use quotation marks for exact phrases</li>
                <li>Check the spelling of your search terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Popular Searches</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/apply/high-school"
                  className="p-4 bg-white border border-gray-200 rounded-lg hover:border-[#2c5282] transition-colors"
                >
                  <h3 className="font-bold text-[#2c5282] mb-2">High School Scholarships</h3>
                  <p className="text-gray-600">Learn about scholarship opportunities for high school students</p>
                </Link>
                <Link
                  href="/apply/undergraduate"
                  className="p-4 bg-white border border-gray-200 rounded-lg hover:border-[#2c5282] transition-colors"
                >
                  <h3 className="font-bold text-[#2c5282] mb-2">Undergraduate Scholarships</h3>
                  <p className="text-gray-600">Explore scholarship programs for undergraduate students</p>
                </Link>
                <Link
                  href="/policies"
                  className="p-4 bg-white border border-gray-200 rounded-lg hover:border-[#2c5282] transition-colors"
                >
                  <h3 className="font-bold text-[#2c5282] mb-2">Scholarship Policies</h3>
                  <p className="text-gray-600">View policies and guidelines for scholarship programs</p>
                </Link>
                <Link
                  href="/apply"
                  className="p-4 bg-white border border-gray-200 rounded-lg hover:border-[#2c5282] transition-colors"
                >
                  <h3 className="font-bold text-[#2c5282] mb-2">Application Process</h3>
                  <p className="text-gray-600">Step-by-step guide to applying for scholarships</p>
                </Link>
              </div>
            </section>
          </>
        )}

        {/* Need Help Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="text-lg text-[#333] mb-4">
            If you need assistance finding specific information or have questions about our scholarship programs, please contact us:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-lg text-[#333]">
              Email: <a href="mailto:scholarship@lu-memorial.org" className="text-[#2c5282] hover:underline">scholarship@lu-memorial.org</a>
            </p>
          </div>
        </section>

        {/* Back to Home Link */}
        <div className="border-t pt-8 mt-8 text-center">
          <Link href="/" className="text-[#2c5282] hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
} 