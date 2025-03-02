import { useRef} from "react";
import useVideos from "../../hooks/useVideos";
import Loading from "../../../Shared/Loading/Loading";

const Video = () => {
  const [videos, loading] = useVideos();
  const videoRef = useRef(null);
  const reversedVideo = [...videos].reverse();



  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white py-4 mt-10">Videos</h2>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1">
          {reversedVideo.slice(0, 1).map((video) => (
            <div key={video.id} className="relative">
              <iframe
                ref={videoRef}
                className="w-full aspect-video bg-black"
                src={video.url + "?autoplay=1&mute=1"}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Video;