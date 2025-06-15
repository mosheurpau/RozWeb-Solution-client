import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactApiUrl = 'https://rozweb-solution-server.onrender.com/contact';

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const contactData = {
      name: data.name,
      company: data.company || '',
      email: data.email,
      phone: data.phone,
      projectDetails: data.projectDetails,
      submittedAt: new Date().toISOString(),
    };

    try {
      const response = await axios.post(contactApiUrl, contactData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

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
        reset();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Submission Error',
          text:
            response.data?.message ||
            'Could not process the request. Please try again.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text:
          error.response?.data?.message ||
          error.message ||
          'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                    href="mailto:info.rozweb@gmail.com"
                    className="text-xl md:text-2xl hover:underline">
                    info.rozweb@gmail.com
                  </a>
                </p>
                <p className="text-left">
                  <a href="tel:+447412403906" className="hover:underline">
                    +44 7412 403906
                  </a>{' '}
                  <a href="tel:+447403327077" className="hover:underline">
                    +44 7403 327077
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 md:pl-16">
            <div className="max-w-md mx-auto">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white font-bold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Name is required' })}
                    className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                  {errors.name && (
                    <p className="text-red-200">{errors.name.message}</p>
                  )}
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
                    {...register('company')}
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
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: 'Invalid email address',
                      },
                    })}
                    className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                  {errors.email && (
                    <p className="text-red-200">{errors.email.message}</p>
                  )}
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
                    {...register('phone', {
                      required: 'Phone number is required',
                    })}
                    className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600"
                  />
                  {errors.phone && (
                    <p className="text-red-200">{errors.phone.message}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="projectDetails"
                    className="block text-white font-bold mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="projectDetails"
                    {...register('projectDetails', {
                      required: 'Project details are required',
                    })}
                    className="w-full border border-gray-400 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-600"
                    rows="5"></textarea>
                  {errors.projectDetails && (
                    <p className="text-red-200">
                      {errors.projectDetails.message}
                    </p>
                  )}
                </div>

                <div className="md:col-span-2 flex items-center">
                  <input type="checkbox" id="robot" className="mr-2" />
                  <label htmlFor="robot" className="text-white">
                    I&apos;m not a robot
                  </label>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="ml-auto bg-white hover:bg-gray-100 text-blue-500 font-bold py-3 px-6 rounded-full">
                    {isSubmitting ? 'Sending...' : 'Enquire Now'}
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
