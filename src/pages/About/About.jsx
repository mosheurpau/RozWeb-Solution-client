import React from 'react';

const teamMembers = [
  {
    name: 'Ben',
    role: 'Founder & Managing Director',
    imageSrc: '/images/team-member-1.jpg', // Replace with actual image path
  },
  {
    name: 'Matt',
    role: 'Founder & Development Director',
    imageSrc: '/images/team-member-2.jpg', // Replace with actual image path
  },
  {
    name: 'Maxim',
    role: 'Head of Technical',
    imageSrc: '/images/team-member-3.jpg', // Replace with actual image path
  },
];

function AboutUs() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4 ">
        {/* About Us Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            We're a passionate team of developers specializing in bespoke web
            applications and mobile apps.
          </h2>
        </div>

        {/* Why Work With Us Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">
            WHY WORK WITH US?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* We Care */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              {' '}
              {/* Added hover effect */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">We Care</h3>
              <p className="text-gray-600">
                Each and every project, no matter the size, receives the same
                level of care and attention.
              </p>
            </div>

            {/* Quality > Quantity */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              {' '}
              {/* Added hover effect */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Quality {'>'} Quantity
              </h3>
              <p className="text-gray-600">
                We believe in putting standards first. You won't find us cutting
                any corners. Ever.
              </p>
            </div>

            {/* First-Class Support */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              {' '}
              {/* Added hover effect */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                First-Class Support
              </h3>
              <p className="text-gray-600">
                Launching your project is just the start. We pride ourselves on
                striking long-term working relationships with our clients.
              </p>
            </div>

            {/* Collaboration is Key */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              {' '}
              {/* Added hover effect */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Collaboration is Key
              </h3>
              <p className="text-gray-600">
                We value proper communication. With a dedicated project manager,
                you'll always have someone to speak to.
              </p>
            </div>

            {/* User First */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              {' '}
              {/* Added hover effect */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                User First
              </h3>
              <p className="text-gray-600">
                We put a lot of focus into the users' needs, ensuring projects
                not only visually appeal but also provide a user-friendly
                experience.
              </p>
            </div>

            {/* Nothing is Impossible */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              {' '}
              {/* Added hover effect */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Nothing is Impossible
              </h3>
              <p className="text-gray-600">
                Due to the bespoke approach to projects, your opportunities are
                endless.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1" // Added hover effect
              >
                <img
                  src={member.imageSrc}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
