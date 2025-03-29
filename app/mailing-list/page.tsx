export default function MailingList() {
  return (
    <>
      <div className="bg-[#f8f9fa] w-full py-8">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Join Our Mailing List</h1>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-600 mb-8">
            Stay informed about scholarship opportunities, deadlines, workshops, and updates from the Lu Memorial Foundation Office of Scholarship Programs.
          </p>
          <div className="aspect-[3/4] w-full">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdsXKXoyzXcqzJAHcxQoevZaNYELmE6CBIyoEEc-paOfewoRQ/viewform?embedded=true"
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
            >
              Loading form...
            </iframe>
          </div>
        </div>
      </div>
    </>
  )
} 