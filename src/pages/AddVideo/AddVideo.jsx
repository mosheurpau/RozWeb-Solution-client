import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const AddVideo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      // Extract the src URL from the iframe code
      const iframeCode = data.iframe;
      const srcStartIndex = iframeCode.indexOf('src="') + 5;
      const srcEndIndex = iframeCode.indexOf('"', srcStartIndex);
      const srcUrl = iframeCode.substring(srcStartIndex, srcEndIndex);

      const videoData = {
        id: data.id,
        url: srcUrl, // Store the extracted src URL
      };

      const response = await fetch(
        'https://rozweb-solution-server.onrender.com/addVideo',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(videoData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        if (result.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Video link added',
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
          });
        }
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    } catch (error) {
      console.error('Error adding video link:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div className="bg-[#070709]">
      <div className="flex justify-center items-center">
        <div className="card w-96 shadow-2xl bg-black text-white border-2 border-white">
          <h2 className="text-2xl text-center text-[#6582F6] pt-5">
            Add Video Link
          </h2>
          <div className="card-body items-center text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Input field for iframe code */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text text-[#6582F6]">Iframe Code</span>
                </label>
                <textarea
                  className="textarea textarea-bordered w-80 h-72 text-black"
                  placeholder="Paste iframe code here"
                  {...register('iframe', {
                    required: {
                      value: true,
                      message: 'Iframe code is required',
                    },
                  })}
                />
                <label className="label">
                  {errors.iframe?.type === 'required' && (
                    <span className="label-text-alt text-red-500">
                      {errors.iframe.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="btn bg-gradient-to-r from-secondary-400 to-primary-500 hover:from-green-500 hover:to-blue-500 w-full max-w-xs text-[#6582F6]"
                type="submit"
                value="Add Video"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVideo;
