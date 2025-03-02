import { Link } from 'react-router-dom';
import useNews from '../../hooks/useNews';

const News = () => {
  const [news] = useNews();

  // Reverse the order of news articles (newest first)
  const reversedNews = [...news].reverse().slice(0, 20);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white py-4">
        Latest News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reversedNews.map((article) => (
          <div
            key={article._id}
            className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={article?.img}
              alt={article?.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2 text-black">
                {article?.title}
              </h2>
              <p className="text-gray-600 text-sm mb-2">
                {article?.date} - {article?.time}
              </p>
              <p className="text-gray-800 mb-4">
                {article?.body1.slice(0, 150)}
              </p>
              <Link
                to={`/news/${article._id}`}
                className="text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
