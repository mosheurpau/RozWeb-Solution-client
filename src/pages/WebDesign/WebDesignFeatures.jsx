import { useState } from 'react';

function WebDesignFeatures() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      title: 'Research & Discovery',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
          />
        </svg>
      ),
      description:
        'In-depth research and analysis to understand your target audience, business goals, and industry trends.',
    },
    {
      title: 'Mood Boards and Concept Design',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      description:
        'Creating visual representations and conceptualising design ideas to capture the essence of your brand.',
    },
    {
      title: 'Custom Wireframes',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
      ),
      description:
        'Developing detailed wireframes to outline the structure and functionality of your website.',
    },
    {
      title: 'Brand Creation & Design',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          />
        </svg>
      ),
      description:
        'Crafting a unique brand identity that reflects your values and resonates with your target audience.',
    },
    {
      title: 'Innovation By Design',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
          />
        </svg>
      ),
      description:
        'Pushing the boundaries of design with innovative concepts and cutting-edge technology.',
    },
    {
      title: 'Simple, Beautiful, Logical',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      ),
      description:
        'Designing websites that are not only visually appealing but also intuitive and easy to navigate.',
    },
  ];

  return (
    <section className="bg-black max-w-6xl mx-auto text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-6xl text-start font-bold mb-5 md:mb-10">
          Expert Custom Web Design Solutions
        </h2>
        <p className="text-start text-xl md:text-2xl mb-10 text-gray-400">
          94% of first impressions are design-related. A well-designed website
          is crucial for establishing credibility and trust with your audience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex bg-[#202020] flex-col items-center transform hover:-translate-y-2 transition duration-300 relative py-20"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}>
              <div className="bg-blue-700 p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold">{feature.title}</h3>

              {/* Description Overlay */}
              {hoveredFeature === index && (
                <div className="absolute top-0 left-0 w-full h-full bg-blue-700 bg-opacity-95 flex flex-col justify-center items-center p-6">
                  <p className="text-lg text-center">{feature.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WebDesignFeatures;
