import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import axios from 'axios'; // For making HTTP requests
import Swal from 'sweetalert2'; // For displaying notifications

function ContactSection() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const {
    register, // Function to register inputs
    handleSubmit, // Function to handle form submission
    formState: { errors }, // Object containing form errors
    reset, // Function to reset form fields
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission status

  // --- !!! IMPORTANT: Replace this URL with your actual backend API endpoint !!! ---
  const contactApiUrl = 'https://rozweb-solution-server.onrender.com/contact'; // Example: '/api/saveContactMessage' or full URL

  // --- Function to execute on form submission ---
  const onSubmit = async (data) => {
    setIsSubmitting(true); // Indicate loading

    // Prepare data payload for the backend
    const contactData = {
      name: data.name,
      company: data.company || '', // Send empty string if optional field is empty
      email: data.email,
      phone: data.phone,
      projectDetails: data.projectDetails,
      submittedAt: new Date().toISOString(), // Add a timestamp
    };

    try {
      console.log('Sending data to backend:', contactData); // For debugging
      // Send POST request to the backend API
      const response = await axios.post(contactApiUrl, contactData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check if the backend responded successfully (adjust status code check if needed)
      if (
        response.status === 200 ||
        response.status === 201 ||
        response.data?.success
      ) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for your enquiry. We will be in touch soon.',
        });
        reset(); // Clear form fields on successful submission
      } else {
        // Handle cases where backend returns success status but indicates failure in data
        Swal.fire({
          icon: 'error',
          title: 'Submission Error',
          text:
            response.data?.message ||
            'Could not process the request. Please try again.',
        });
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      // Handle network errors or errors thrown by the backend
      const errorMessage =
        error.response?.data?.message || // Check for backend error message
        error.message ||
        'An unexpected error occurred. Please try again later.';
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: errorMessage,
      });
    } finally {
      setIsSubmitting(false); // Stop loading indicator regardless of outcome
    }
  };

  return (
    <section className="bg-black pb-20 pt-4">
      <div className="container mx-auto px-4">
        <h1 className=" text-2xl py-8 bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent my-10 font-bold text-center md:text-6xl">
          Tell us about your project.
        </h1>
        <div className="flex flex-col md:flex-row">
          {/* Contact Form */}
          <div className="md:w-1/2 md:pr-16 mb-12 md:mb-0">
            <div className="max-w-md mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                SEND A MESSAGE
              </h2>
              {/* Attach handleSubmit and the onSubmit function */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-bold mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full border ${
                      errors.name ? 'border-red-500' : 'border-gray-400'
                    } px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-black`} // Added bg/text color
                    {...register('name', { required: 'Your name is required' })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Company Input (Optional) */}
                <div>
                  <label
                    htmlFor="company"
                    className="block text-white font-bold mb-2">
                    COMPANY NAME
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-black"
                    {...register('company')} // No validation, optional field
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white font-bold mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full border ${
                      errors.email ? 'border-red-500' : 'border-gray-400'
                    } px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-black`}
                    {...register('email', {
                      required: 'Email address is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address format',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Input */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-white font-bold mb-2">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel" // Use type="tel" for phone numbers
                    id="phone"
                    className={`w-full border ${
                      errors.phone ? 'border-red-500' : 'border-gray-400'
                    } px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-black`}
                    {...register('phone', {
                      required: 'Phone number is required',
                    })}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Project Details Textarea */}
                <div className="md:col-span-2">
                  <label
                    htmlFor="projectDetails"
                    className="block text-white font-bold mb-2">
                    PROJECT DETAILS *
                  </label>
                  <textarea
                    id="projectDetails"
                    className={`w-full border ${
                      errors.projectDetails
                        ? 'border-red-500'
                        : 'border-gray-400'
                    } px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600 bg-white text-black`}
                    rows="5"
                    {...register('projectDetails', {
                      required:
                        'Please provide some details about your project',
                    })}></textarea>
                  {errors.projectDetails && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.projectDetails.message}
                    </p>
                  )}
                </div>

                {/* Robot Check & Submit Button */}
                <div className="md:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="robotCheck"
                      className={`mr-2 h-4 w-4 ${
                        errors.robotCheck ? 'border-red-500' : 'border-gray-400'
                      }`} // Basic styling, consider a proper CAPTCHA
                      {...register('robotCheck', {
                        required: 'Please confirm you are not a robot',
                      })}
                    />
                    <label
                      htmlFor="robotCheck"
                      className="text-white select-none">
                      {' '}
                      {/* Prevent text selection */}
                      I&apos;m not a robot *
                    </label>
                    {errors.robotCheck && (
                      <p className="text-red-500 text-xs ml-4">
                        {errors.robotCheck.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className={`bg-white hover:bg-gray-200 text-blue-600 font-bold py-3 px-8 rounded-full transition duration-200 ease-in-out ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    disabled={isSubmitting} // Disable button while submitting
                  >
                    {isSubmitting ? 'Sending...' : 'Enquire Now'}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info (Right Side - Unchanged) */}
          <div className="md:w-1/2 md:pl-16 mt-12 md:mt-0">
            <div className="max-w-md mx-auto text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-6">DIRECT</h2>
              <p className="text-white mb-4">
                We politely decline any requests for us to outsource work to
                third parties.
              </p>
              <div className="text-white space-y-4">
                <p className="text-left">
                  {/* Ensure mailto: prefix for email links */}
                  <a
                    href="mailto:info.rozweb@gmail.com"
                    className="text-xl md:text-2xl hover:underline break-all">
                    info.rozweb@gmail.com
                  </a>
                </p>
                <p className="text-left">
                  {/* Ensure tel: prefix for phone links */}
                  <a href="tel:+447412403906" className="hover:underline mr-4">
                    +44 7412 403 906
                  </a>
                  <a href="tel:+447403327077" className="hover:underline">
                    +44 7403 327 077
                  </a>
                </p>

                <p className="text-left">
                  {' '}
                  {/* Ensure text-left if desired */}
                  Address: Unit 3 First Floor, 483 Coventry Road, Birmingham,
                  United Kingdom, B10 0JS
                </p>
                <p className="text-left">
                  {' '}
                  {/* Ensure text-left if desired */}
                  {/* Link to Google Maps using the address */}
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Unit+3+First+Floor,+483+Coventry+Road,+Birmingham,+United+Kingdom,+B10+0JS"
                    target="_blank" // Open in new tab
                    rel="noopener noreferrer" // Security best practice
                    className="text-[#6582F6] hover:underline">
                    → Find us on Google Maps
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
