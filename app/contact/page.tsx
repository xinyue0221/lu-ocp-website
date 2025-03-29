export default function Contact() {
  return (
    <>
      <div className="bg-[#f8f9fa] w-full py-8">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Contact Us</h1>
        </div>
      </div>
      
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          {/* Contact Info Section */}
          <div className="bg-gray-50 p-12 rounded-lg mb-16">
            <div className="flex items-start gap-6 mb-12">
              <svg className="w-6 h-6 text-[#2c5282] mt-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-1 14H5c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1z"/>
              </svg>
              <div>
                <h2 className="text-2xl font-bold mb-6">Hours</h2>
                <p className="text-gray-700 mb-2">Tuesday through Thursday</p>
                <p className="text-gray-700 mb-2">9 a.m. to 3 p.m.</p>
                <p className="text-gray-700 mb-2">Closed from 12:00 p.m. to 1:00 p.m.</p>
                <p className="text-gray-600">(Pacific time)</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex items-start gap-6">
                <svg className="w-6 h-6 text-[#2c5282] mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Main Phone Number</h2>
                  <p className="text-gray-700">(626) 559-1589</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <svg className="w-6 h-6 text-[#2c5282] mt-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Email</h2>
                  <p className="text-gray-700">scholarship@lu-memorial.org</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <p className="text-gray-600 mb-8">
              Thank you for your interest in Lu Memorial Scholarship. Your question is important to us. Due to the large volume of inquiries we receive, if the answer to your question can be found on our website, you may not receive a response. Please review our resources carefully.
            </p>
            <div className="aspect-[4/3] w-full">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeWU1rc6CC-8KkYy-EY30gH15bISxJopAFG_eLuw_EZkNLZMg/viewform?embedded=true"
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
      </div>
    </>
  )
} 