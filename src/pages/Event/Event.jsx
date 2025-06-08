import axios from 'axios';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Event = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Add reset function
  } = useForm({
    defaultValues: {
      status: 'false', // Default status to "Not Approved"
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        'https://rozweb-solution-server.onrender.com/bookingEvents',
        data
      );
      console.log('Success! Data sent:', response.data);
      Swal.fire({
        icon: 'success',
        title: 'Booking Successful!',
        text: 'Your event details have been submitted.',
      });

      // Reset the form after successful submission
      reset();
    } catch (error) {
      console.error('Error sending data:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'There was an error submitting your booking. Please try again.',
      });
    }
  };

  return (
    <div className="w-10/12 md:w-6/12 mx-auto my-10">
      <h2
        style={{ fontFamily: 'Dancing Script, cursive' }}
        className="lg:text-5xl text-4xl text-center font-bold mt-10 pb-10 text-[#6582F6]">
        Book your occasion
      </h2>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="p-4 sm:p-6 rounded-lg shadow-2xl border-2 text-[#6582F6]">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-[#6582F6] text-sm font-bold mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#6582F6] leading-tight focus:outline-none focus:shadow-outline"
              {...register('name', { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[#6582F6] text-sm font-bold mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#6582F6] leading-tight focus:outline-none focus:shadow-outline"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="telephone"
              className="block text-[#6582F6] text-sm font-bold mb-2">
              Telephone *
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#6582F6] leading-tight focus:outline-none focus:shadow-outline"
              {...register('telephone', { required: true })}
            />
            {errors.telephone && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-[#6582F6] text-sm font-bold mb-2">
              Date of Occasion *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#6582F6] leading-tight focus:outline-none focus:shadow-outline"
              {...register('date', { required: true })}
            />
            {errors.date && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="occasion"
              className="block text-[#6582F6] text-sm font-bold mb-2">
              Type of Occasion *
            </label>
            <input
              type="text"
              id="occasion"
              name="occasion"
              list="occasion-options"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#6582F6] leading-tight focus:outline-none focus:shadow-outline"
              {...register('occasion', { required: true })}
            />
            <datalist id="occasion-options">
              <option value="Birthday celebration" />
              <option value="Anniversary" />
              <option value="Wedding reception" />
              <option value="Corporate event" />
              <option value="Engagement party" />
              <option value="Others" />
              {/* Add more options as needed */}
            </datalist>
            {errors.occasion && (
              <span className="text-red-500 text-sm">
                This field is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-[#6582F6] text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-[#6582F6] leading-tight focus:outline-none focus:shadow-outline"
              {...register('message')}
            />
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto bg-[#6582F6] text-black hover:bg-yellow-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Event;
