import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useNews from '../hooks/useNews';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const NewsDetail = () => {
  const { id } = useParams();
  const [newsArticle, setNewsArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [news] = useNews();

  useEffect(() => {
    const fetchNewsArticle = async () => {
      try {
        const response = await fetch(
          `https://rozweb-solution-server.onrender.com/news/${id}`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch news article');
        }
        const data = await response.json();
        setNewsArticle(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNewsArticle();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const categoryNews = newsArticle
    ? news.filter((item) => item.category === newsArticle.category)
    : [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!newsArticle) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">News article not found!</p>
      </div>
    );
  }

  const keywords = Array.isArray(newsArticle.keywords)
    ? newsArticle.keywords.join(', ')
    : newsArticle.keywords || 'No keywords available';

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        // Show a success message using SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Link copied!',
          text: 'Share the article on social media!',
        });
      })
      .catch((err) => {
        console.error('Failed to copy link: ', err);
        // Optionally show an error message using SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Oops!',
          text: 'Something went wrong. Please try again.',
        });
      });
  };

  return (
    <div className="bg-gray-50 py-12 min-h-screen">
      <Helmet>
        <title>{newsArticle.title}</title>
        <meta name="description" content={newsArticle.body1} />
        <meta property="og:title" content={newsArticle.title} />
        <meta property="og:description" content={newsArticle.body1} />
        <meta
          property="og:image"
          content={newsArticle?.img || 'https://i.ibb.co/kyq3M7N/logo-bbtv.png'}
        />
        <meta
          property="og:url"
          content={`https://birminghambanglatv.co.uk/news/${newsArticle.id}`}
        />
      </Helmet>

      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg shadow-gray-300">
        <div className="mb-8">
          <h2 className="text-4xl/relaxed font-bold text-[#2C3E50]">
            {newsArticle.title}
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            {newsArticle.date} - {newsArticle.time}
          </p>
        </div>

        <div className="relative">
          <img
            src={newsArticle.img}
            alt="News"
            className="w-full h-96 object-cover rounded-xl shadow-xl transition-transform transform hover:scale-105"
          />
        </div>

        <div className="mt-8">
          {['body1', 'body2', 'body3', 'conclusion'].map((section, index) => (
            <section key={index} className="mb-6">
              <p className="text-gray-700 text-lg mt-2">
                {newsArticle[section]}
              </p>
            </section>
          ))}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <span className="font-semibold text-gray-800">Category:</span>
              <span className="ml-2 text-[#2C3E50]">
                {newsArticle.category}
              </span>
            </div>
            <div>
              <span className="font-semibold text-gray-800">Keywords:</span>
              <span className="ml-2 text-[#2C3E50]">{keywords}</span>
            </div>
            <div>
              <button
                onClick={handleCopyLink}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black">
          Related News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categoryNews.map((article) => (
            <div
              key={article._id}
              className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link
                to={`/news/${article._id}`}
                className="text-blue-500 hover:underline">
                <img
                  src={article?.img}
                  alt={article?.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl text-gray-700 font-bold mb-2">
                    {article?.title}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
