import { useState } from 'react';

function RecentCaseStudies() {
  const [showProjects, setShowProjects] = useState(false);

  const projects = [
    {
      title: 'Roz Properties',
      description:
        'Roz Properties is a full-stack project designed for property management. It allows users to buy, sell, and let properties all in one platform.',
      imageSrc: 'https://i.ibb.co/HLmYbNpB/Screenshot-2025-06-15-133325.png',
      live: 'https://rozproperties.co.uk',
    },
    {
      title: 'Birmingham Bangla TV',
      description:
        'Birmingham Bangla TV is a full-stack community project. It focuses on serving the Bangladeshi community in Birmingham, UK, by highlighting key issues and providing a digital media platform.',
      imageSrc: 'https://i.ibb.co/tp5y3z4s/Screenshot-2025-06-15-133636.png',
      live: 'https://birminghambanglatv.co.uk',
    },
    {
      title: 'Al Faisal Restaurant',
      description:
        'Al Faisal Restaurant is a full-stack project built for a family-owned restaurant. It showcases over 20 years of authentic cuisine and provides an online presence for ordering and reservations.',
      imageSrc: 'https://i.ibb.co/JjtXpjz0/Screenshot-2025-06-15-133912.png',
      live: 'https://alfaisalrestaurant.co.uk',
    },
  ];

  return (
    <section className="bg-slate-300 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-start">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-6">
            Recent Case Studies
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl mb-6">
            A small selection of our most recent projects.
          </p>
          {!showProjects && (
            <button
              onClick={() => setShowProjects(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
              Request to View Projects
            </button>
          )}
        </div>

        {showProjects && (
          <div className="mt-12 space-y-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:w-2/3">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="p-6 md:w-1/3 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline font-semibold">
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default RecentCaseStudies;
