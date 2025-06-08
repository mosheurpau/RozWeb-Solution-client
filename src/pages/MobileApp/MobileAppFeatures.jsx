import { useState } from 'react';

function MobileAppFeatures() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  const features = [
    {
      title: 'App UI/UX Design',
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
        'Crafting intuitive and user-friendly interfaces for a seamless mobile app experience.',
    },
    {
      title: '100% Customisation',
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
        'Tailoring every aspect of your app to align perfectly with your brand and business requirements.',
    },
    {
      title: 'Engaging Notifications',
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
        'Implementing strategic notifications to keep users informed and engaged with your app.',
    },
    {
      title: 'Robust Security & Data Protection',
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
        'Ensuring the highest level of security for your app and user data, protecting against threats and vulnerabilities.',
    },
    {
      title: 'Focused User Services',
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
        "Developing user-centric features and functionalities that cater to your target audience's specific needs and preferences.",
    },
    {
      title: 'Submission & Approval',
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      ),
      description:
        'Streamlining the app submission and approval process, ensuring a smooth and efficient launch on app stores.',
    },
  ];

  return (
    <section className="bg-black max-w-6xl mx-auto text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-6xl text-start font-bold mb-5 md:mb-10">
          Expert Custom Mobile App Solutions
        </h2>
        <p className="text-start text-xl md:text-2xl mb-10 text-gray-400">
          Users spend 90% of their mobile time on apps. A well-designed custom
          app can significantly enhance user engagement and brand loyalty.
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

export default MobileAppFeatures;
