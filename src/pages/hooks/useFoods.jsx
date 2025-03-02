import { useEffect, useState } from "react";

const useFoods = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("/foods.json");
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        console.error("Error fetching foods:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return [foods, loading];
};

export default useFoods;
