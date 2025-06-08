import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="bg-blue-700 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            CUSTOM PROJECTS, TAILORED QUOTES
          </h2>
          <p className="text-white mb-6">
            Book a free initial scoping call with one of our expert web
            development consultants today.
          </p>
          <Link to="/contact">
            <button className="bg-black shadow-2xl hover:bg-gray-100 text-blue-500 font-bold py-3 px-6 rounded-full">
              Discuss your project today →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
