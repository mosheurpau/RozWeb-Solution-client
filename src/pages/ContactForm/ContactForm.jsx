function ContactForm() {
  return (
    <section className="bg-blue-700 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Contact Info */}
          <div className="md:w-1/2 text-left md:pr-16 mb-12 md:mb-0">
            <div className="max-w-md mx-auto text-center md:text-left">
              <div className="flex items-center mb-12">
                <div className="h-1 w-16 bg-white mr-4"></div>
                <h2 className="text-xl md:text-2xl  text-white">
                  GET IN TOUCH
                </h2>
              </div>
              <h2 className="text-4xl text-left font-bold text-white mb-6">
                Let&apos;s Chat
              </h2>
              <p className="text-left text-xl md:text-2xl text-white mb-12">
                Tell us about your project and arrange a quote
              </p>

              <div className="text-xl md:text-2xl text-white space-y-4">
                <p className="text-left">
                  <a
                    href="info.rozweb@gmail.com"
                    className="text-xl md:text-2xl hover:underline">
                    info.rozweb@gmail.com
                  </a>
                </p>
                <p className="text-left">
                  <a href="+44 7412403906" className="hover:underline">
                    +44 7412403906
                  </a>{' '}
                  <a href="+44 7403 327077" className="hover:underline">
                    +44 7403 327077
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 md:pl-16">
            <div className="max-w-md mx-auto">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-bold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-white font-bold mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-bold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white font-bold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div className="md:col-span-2">
                  <label
                    htmlFor="projectDetails"
                    className="block text-white font-bold mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600"
                    rows="5"></textarea>
                </div>
                <div className="md:col-span-2 flex items-center">
                  <input type="checkbox" id="robot" className="mr-2" />
                  <label htmlFor="robot" className="text-white">
                    I&apos;m not a robot
                  </label>
                  <button className="ml-auto bg-white hover:bg-gray-100 text-blue-500 font-bold py-3 px-6 rounded-full">
                    Enquire Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
