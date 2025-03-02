import { useState } from 'react';
import {
  FaLaptopCode,
  FaMobileAlt,
  FaShoppingCart,
  FaPalette,
  FaObjectUngroup,
  FaTools,
  FaDesktop,
  FaPaintBrush,
  FaChartLine,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: 'Web Development',
      link: 'web-development',
      icon: <FaLaptopCode className="h-12 w-12 text-blue-400" />,
      description:
        'Building responsive and scalable websites using the latest technologies. We focus on delivering high-performance web solutions tailored to your business needs.',
    },
    {
      title: 'App Development',
      link: 'app-development',
      icon: <FaMobileAlt className="h-12 w-12 text-purple-400" />,
      description:
        'Native Apple iOS and Android apps designed and developed in-house by our app developers. We create intuitive and engaging mobile experiences.',
    },
    {
      title: 'eCommerce Development',
      link: 'ecommerce',
      icon: <FaShoppingCart className="h-12 w-12 text-green-400" />,
      description:
        'Building robust and secure online stores with seamless user experiences. We integrate payment gateways, manage product catalogs, and optimize for conversions.',
    },
    {
      title: 'Web Design',
      link: 'web-design',
      icon: <FaPalette className="h-12 w-12 text-yellow-400" />,
      description:
        'Creating visually stunning and user-friendly website designs. We focus on brand identity, intuitive navigation, and responsive layouts.',
    },
    {
      title: 'UX & UI Design',
      link: 'ux-ui-design',
      icon: <FaObjectUngroup className="h-12 w-12 text-pink-400" />,
      description:
        'Designing intuitive user interfaces and seamless user experiences. We conduct user research, create wireframes, and prototype to ensure optimal usability.',
    },
    {
      title: 'Support & Maintenance',
      link: 'support-maintenance',
      icon: <FaTools className="h-12 w-12 text-indigo-400" />,
      description:
        'Providing ongoing support and maintenance to ensure your web and app solutions run smoothly. We offer bug fixes, updates, and performance optimization.',
    },
    {
      title: 'Desktop Application',
      link: 'desktop-application',
      icon: <FaDesktop className="h-12 w-12 text-teal-400" />,
      description:
        'Developing powerful and efficient desktop applications tailored to your business needs. We focus on performance, security, and user-friendliness.',
    },
    {
      title: 'Graphics Design',
      link: 'graphics-design',
      icon: <FaPaintBrush className="h-12 w-12 text-lime-400" />,
      description:
        'Creating visually appealing graphics for your brand, including logos, marketing materials, and social media content. We ensure your brand stands out.',
    },
    {
      title: 'Digital Marketing',
      link: 'digital-marketing',
      icon: <FaChartLine className="h-12 w-12 text-orange-400" />,
      description:
        'Driving traffic and generating leads through effective digital marketing strategies. We specialize in SEO, social media marketing, and content marketing.',
    },
  ];

  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          Experts in Web, App and Software Development
        </h2>
        <p className="text-lg text-center mb-12">
          We&apos;re a forward-thinking web design & app development agency
          based in Birmingham providing a full-stack service for any project
          requirement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link to={service.link} key={index}>
              {' '}
              {/* Use Link component and pass service.link */}
              <div
                className={`bg-gray-800 py-20 p-6 rounded-lg relative overflow-hidden group transition-all duration-300 
                  ${
                    hoveredIndex === index
                      ? 'transform scale-105 shadow-lg'
                      : ''
                  }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}>
                <div className="absolute top-4 right-4 text-gray-500 group-hover:text-white transition-colors duration-300">
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
                </div>
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {service.title}
                </h3>
                {hoveredIndex === index && (
                  <div className="absolute top-0 left-0 w-full h-full bg-blue-600 bg-opacity-90 flex flex-col justify-center items-center p-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-lg text-center">{service.description}</p>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
