import { Link } from "react-router-dom";
import useNews from "../../pages/hooks/useNews";

const Bangladesh = () => {
  const [news] = useNews();

  const bangladeshNews = news.filter((item) => item.category === "Bangladesh Porikroma");

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Bangladesh Porikroma News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {bangladeshNews.map((article) => (
          <div
            key={article._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={article?.img}
              alt={article?.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl text-gray-700 font-bold mb-2">
                {article?.title}
              </h2>
              <p className="text-gray-700 text-sm mb-2">
                {article?.date} - {article?.time}
              </p>
              <p className="text-gray-800 mb-4">{article?.body1}</p>
              <Link
                to={`/news/${article._id}`}
                className="text-blue-500 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bangladesh;