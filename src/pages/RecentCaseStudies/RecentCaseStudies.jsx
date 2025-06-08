function RecentCaseStudies() {
  const projects = [
    {
      title: 'Bespoke eCommerce Platform',
      description: 'Processing in excess of £350 million in annual sales',
      imageSrc: 'https://i.ibb.co/J5HpR70/mbaba-app.png',
    },
    {
      title: 'Bespoke Booking Engine & Unrivalled Online Trip Planner',
      description: 'Interactive Holiday & Trip Planner with Booking Engine',
      imageSrc: 'https://i.ibb.co/J5HpR70/mbaba-app.png',
    },
    {
      title: 'Custom Online Quote Builder & Interactive Dimension Calculator',
      description: 'Web App, Quote Builder and Sales Management System',
      imageSrc: 'https://i.ibb.co/J5HpR70/mbaba-app.png',
    },
  ];

  return (
    <section className="bg-slate-300 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-start ">
          <h2 className="text-3xl md:text-6xl font-bold text-gray-800 mb-6">
            Recent Case Studies
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl">
            A small selection of our most recent projects.
          </p>
        </div>

        <div className="mt-12">
          {projects.map((project, index) => (
            <div key={index} className="mb-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={project.imageSrc}
                  alt={project.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                  <a
                    href="#"
                    className="text-blue-500 hover:underline mt-3 inline-block">
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentCaseStudies;
