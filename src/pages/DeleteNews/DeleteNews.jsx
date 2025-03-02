import { useState, useEffect } from "react";
import Swal from "sweetalert2";

const DeleteNews = () => {
  const [news, setNews] = useState();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://birmingham-banglatv-server.onrender.com/allNews"); // Replace with your API endpoint
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://birmingham-banglatv-server.onrender.com/deleteNews/${id}`, { // Replace with your API endpoint
        method: "DELETE",
      });

      if (response.ok) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "News deleted successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        // Update the news state after successful deletion
        setNews((prevNews) => prevNews.filter((item) => item._id !== id));
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } catch (error) {
      console.error("Error deleting news:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white text-center">Delete News</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-white">
            {news?.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.date}</td>
                <td>
                  <button
                    className="btn btn-error btn-xs"
                    onClick={() => handleDelete(item._id)}
                  >
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

export default DeleteNews;