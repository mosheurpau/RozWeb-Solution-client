function ContactSection() {
  return (
    <section className="bg-gray-800 pb-20 pt-4">
      <div className="container mx-auto px-4">
        <h1 className=" text-2xl py-8 bg-gradient-to-r from-cyan-200 to-blue-500 bg-clip-text text-transparent my-10 font-bold text-center md:text-6xl">
          Tell us about your project.
        </h1>
        <div className="flex flex-col md:flex-row">
          {/* Contact Form */}
          <div className="md:w-1/2 md:pr-16 mb-12 md:mb-0">
            <div className="max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                SEND A MESSAGE
              </h2>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-bold mb-2">
                    YOUR NAME *
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
                    COMPANY NAME
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
                    EMAIL ADDRESS *
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
                    PHONE NUMBER *
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
                    PROJECT DETAILS *
                  </label>
                  <textarea
                    id="projectDetails"
                    className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600"
                    rows="5"></textarea>
                </div>
                <div className="md:col-span-2 flex items-center">
                  <input type="checkbox" id="robot" className="mr-2" />
                  <label htmlFor="robot" className="text-white">
                    I'm not a robot
                  </label>
                  <button className="ml-auto bg-white hover:bg-gray-100 text-blue-500 font-bold py-3 px-6 rounded-full">
                    Enquire Now
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="md:w-1/2 md:pl-16 mt-12 md:mt-0">
            <div className="max-w-md mx-auto text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-6">DIRECT</h2>
              <p className="text-white mb-4">
                We politely decline any requests for us to outsource work to
                third parties.
              </p>
              <div className="text-white space-y-4">
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

                <p>
                  Address: Unit 3 First Floor, 483 Coventry Road, Birmingham,
                  United Kingdom, B10 0JS
                </p>
                <p className="text-[#6582F6]">→ Find us on Google Maps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
