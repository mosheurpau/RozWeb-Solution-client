import { useEffect, useState } from "react";

const useNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://birmingham-banglatv-server.onrender.com/allNews"); // Replace with your JSON file path or API endpoint
        const data = await response.json();
        setNews(data); 
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [news, loading];
};

export default useNews;