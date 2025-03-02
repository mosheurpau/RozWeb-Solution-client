import { useEffect, useState } from "react";

const useVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://birmingham-banglatv-server.onrender.com/allVideos"); // Replace with your JSON file path or API endpoint
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [videos, loading];
};

export default useVideos;