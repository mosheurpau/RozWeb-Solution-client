import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';

const DeleteVideo = () => {
  const [videos, setVideos] = useState();

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch(
          'https://rozweb-solution-server.onrender.com/allVideos'
        ); // Replace with your API endpoint
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchVideos();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://rozweb-solution-server.onrender.com/deleteVideo/${id}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Video link deleted',
          showConfirmButton: false,
          timer: 1500,
        });

        // Update the videos state after successful deletion
        setVideos((prevVideos) =>
          prevVideos.filter((video) => video._id !== id)
        );
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    } catch (error) {
      console.error('Error deleting video:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white text-center">
        Delete Videos
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Video ID</th>
              <th>URL</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {videos?.map((video, index) => (
              <tr key={video._id}>
                <th>{index + 1}</th>
                <td>{video.id}</td>
                <td>{video.url}</td>
                <td>
                  <button
                    className="btn btn-error btn-xs"
                    onClick={() => handleDelete(video._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeleteVideo;
