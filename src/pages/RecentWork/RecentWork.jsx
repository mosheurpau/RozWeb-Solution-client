import alfaisal from '../../assets/images/al-faisal.png';

const projects = [
  {
    title: 'ECommerce',
    description:
      'Developed a robust eCommerce platform that handles over £350 million in annual sales, providing a seamless shopping experience for customers.',
    services: 'ECOMMERCE WEBSITE DESIGN & DEVELOPMENT',
    imageSrc: 'https://i.ibb.co/J5HpR70/mbaba-app.png',
  },
  {
    title: 'Restaurant',
    description:
      'Designed and developed a user-friendly web application for a restaurant, enabling online ordering, reservations, and loyalty programs.',
    services: 'WEB APP DESIGN + DEVELOPMENT',
    imageSrc: alfaisal,
  },
];

function RecentWork() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-12">
          <div className="h-1 w-16 bg-gray-800 mr-4"></div>
          <h2 className="text-3xl font-bold text-gray-800">Recent Work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105">
              <div className="flex flex-col md:flex-row">
                {' '}
                {/* Added flex-col and md:flex-row */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    className="w-full h-56 md:h-auto object-cover border-2 transition duration-300 hover:opacity-80"
                  />
                </div>
                <div className="w-full md:w-1/2 p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-sm text-gray-500 uppercase">
                    {project.services}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecentWork;
