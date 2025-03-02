import useVideos from "../hooks/useVideos";

const Videos = () => {
  const [videos, loading] = useVideos();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <iframe
              className="w-full h-48"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{video.title}</h3>
              {/* You can add more details like description or duration here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;