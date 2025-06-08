import { useState } from 'react';

function UIUXDesignFeatures() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      title: 'User Research',
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
            d="M8 10h.01M12 10h.01M16 10h.01M9 16h6"
          />
        </svg>
      ),
      description:
        'Conducting research to understand user needs, goals, and behaviors for more effective design decisions.',
    },
    {
      title: 'Wireframing',
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
            d="M3 6h18M3 10h18M3 14h18M3 18h18"
          />
        </svg>
      ),
      description:
        'Creating low-fidelity layouts to plan structure, functionality, and user flow before detailed design.',
    },
    {
      title: 'Prototyping',
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
            d="M5 13l4 4L19 7"
          />
        </svg>
      ),
      description:
        'Building interactive mockups to test and validate design solutions quickly and efficiently.',
    },
    {
      title: 'Usability Testing',
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
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5"
          />
        </svg>
      ),
      description:
        'Evaluating product usability with real users to identify issues and improve user experience.',
    },
    {
      title: 'Interaction Design',
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
            d="M15 12H9m12 0A9 9 0 113 12a9 9 0 0118 0z"
          />
        </svg>
      ),
      description:
        'Designing intuitive interactions that enhance usability and engagement throughout the interface.',
    },
    {
      title: 'Accessibility Design',
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
            d="M12 4v16m8-8H4"
          />
        </svg>
      ),
      description:
        'Ensuring inclusive design by making interfaces usable for people with diverse abilities and needs.',
    },
  ];

  return (
    <section className="bg-black max-w-6xl mx-auto text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-6xl text-start font-bold mb-5 md:mb-10">
          UI & UX Design Expertise
        </h2>
        <p className="text-start text-xl md:text-2xl mb-10 text-gray-400">
          We design intuitive, accessible, and engaging digital experiences that
          prioritize your users&apos; needs. Our process is rooted in research,
          strategy, and user-centered design.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex bg-[#202020] flex-col items-center transform hover:-translate-y-2 transition duration-300 relative py-14"
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}>
              <div className="bg-blue-700 p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold">{feature.title}</h3>

              {hoveredFeature === index && (
                <div className="absolute top-0 left-0 w-full h-full bg-blue-700 bg-opacity-95 flex flex-col justify-center items-center p-6 transition-opacity duration-300 ease-in-out">
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

export default UIUXDesignFeatures;
