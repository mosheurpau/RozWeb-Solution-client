import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useState } from 'react'; // Fix: useState import

const AddNew = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false); // Fix: useState

  const imageStorageKey = '8a2fd622b09fe164cd5a3cd0097a5b35'; // ImgBB API key

  const onSubmit = async (data) => {
    setIsLoading(true); // Start loading state
    const image = data.image[0]; // Get image file from form data
    const formData = new FormData();
    formData.append('image', image);

    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`; // Fix: use template literals

    try {
      // Upload image to ImgBB
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        const img = result.data.url; // Get image URL from ImgBB response

        // Construct news article object
        const newsArticle = {
          title: data.title,
          date: data.date,
          time: data.time,
          body1: data.body1,
          body2: data.body2,
          body3: data.body3,
          conclusion: data.conclusion,
          category: data.category,
          keywords: data.keywords,
          img: img, // Add image URL to news article
        };

        // Send news article data to backend
        const newsResponse = await fetch(
          'https://birmingham-banglatv-server.onrender.com/addNew',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newsArticle),
          }
        );

        const inserted = await newsResponse.json();

        if (inserted.insertedId) {
          // If successfully added, show success alert
          Swal.fire({
            icon: 'success',
            title: 'News Added!',
            text: 'The news article has been submitted.',
          });
          reset(); // Reset form
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops!',
            text: 'Failed to add the news article.',
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Failed to upload image.',
        });
      }
    } catch (error) {
      console.error('Error adding news article:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops!',
        text: 'An error occurred while submitting the article.',
      });
    } finally {
      setIsLoading(false); // Stop loading state
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card p-10 w-96 shadow-2xl border-2 border-white mx-4">
        <h2 className="text-2xl text-center text-[#6582F6]">
          Add News Article
        </h2>
        <div className="text-center text-[#6582F6]">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Input field for Title */}
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text text-[#6582F6]">Title</span>
              </label>
              <input
                type="text"
                placeholder="News Title"
                className="input input-bordered w-full max-w-xs mx-auto"
                {...register('title', { required: 'Title is Required' })}
              />
              <label className="label">
                {errors.title && (
                  <span className="label-text text-red-500">
                    {errors.title.message}
                  </span>
                )}
              </label>
            </div>

            {/* Input field for Date */}
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text text-[#6582F6]">Date</span>
              </label>
              <input
                type="date"
                className="input input-bordered w-full max-w-xs mx-auto"
                {...register('date', { required: 'Date is Required' })}
              />
              <label className="label">
                {errors.date && (
                  <span className="label-text text-red-500">
                    {errors.date.message}
                  </span>
                )}
              </label>
            </div>

            {/* Input field for Time */}
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text text-[#6582F6]">Time</span>
              </label>
              <input
                type="time"
                className="input input-bordered w-full max-w-xs mx-auto"
                {...register('time', { required: 'Time is Required' })}
              />
              <label className="label">
                {errors.time && (
                  <span className="label-text text-red-500">
                    {errors.time.message}
                  </span>
                )}
              </label>
            </div>
            {/* Input fields for Body1, Body2, Body3, Conclusion */}
            {['body1', 'body2', 'body3', 'conclusion'].map((field) => (
              <div className="form-control w-full max-w-xs mx-auto" key={field}>
                <label className="label">
                  <span className="label-text text-[#6582F6]">
                    {field.charAt(0).toUpperCase() + field.slice(1)}
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-full max-w-xs mx-auto"
                  {...register(field)} // Removed the required validation
                />
                {/* Removed the error message label */}
              </div>
            ))}

            {/* Input field for Category */}
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text text-[#6582F6]">Category</span>
              </label>
              <select
                className="select select-bordered w-full max-w-xs mx-auto"
                {...register('category', { required: 'Category is Required' })}>
                <option value="">Select a Category</option>
                <option value="sports">Sports</option>
                <option value="travel">travel</option>
                <option value="community well-being">
                  Community Well-being
                </option>
                <option value="community news">Community News</option>
                <option value="global news">Global News</option>
                <option value="business and economics">
                  Business and Economics
                </option>
                <option value="Bangladesh Porikroma">
                  Bangladesh Porikroma
                </option>
              </select>
              <label className="label">
                {errors.category && (
                  <span className="label-text text-red-500">
                    {errors.category.message}
                  </span>
                )}
              </label>
            </div>

            {/* Input field for Keywords */}
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text text-[#6582F6]">Keywords</span>
              </label>
              <input
                type="text"
                placeholder="Enter keywords (comma-separated)"
                className="input input-bordered w-full max-w-xs mx-auto"
                {...register('keywords')}
              />
              <label className="label">
                {errors.keywords && (
                  <span className="label-text text-red-500">
                    {errors.keywords.message}
                  </span>
                )}
              </label>
            </div>

            {/* Input field for Image */}
            <div className="form-control w-full max-w-xs mx-auto">
              <label className="label">
                <span className="label-text text-[#6582F6]">Image</span>
              </label>
              <input
                type="file"
                className="input input-bordered w-full max-w-xs mx-auto"
                {...register('image', { required: 'Image is Required' })}
              />
              <label className="label">
                {errors.image && (
                  <span className="label-text text-red-500">
                    {errors.image.message}
                  </span>
                )}
              </label>
            </div>

            <input
              className="btn w-full max-w-xs text-[#6582F6] bg-gradient-to-r from-secondary-400 to-primary-500 hover:from-green-500 hover:to-blue-500"
              type="submit"
              value={isLoading ? 'Adding...' : 'Add News'}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
