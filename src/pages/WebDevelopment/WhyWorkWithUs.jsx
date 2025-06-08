import {
  FaHeart,
  FaBalanceScale,
  FaHeadset,
  FaUsers,
  FaUserCheck,
  FaInfinity,
} from 'react-icons/fa'; // Import icons from react-icons

function WhyWorkWithUs() {
  const reasons = [
    {
      title: 'We Care',
      icon: <FaHeart className="text-blue-500" />,
      description:
        'Each and every project, no matter the size, receives the same level of care and attention.',
    },
    {
      title: 'Quality > Quantity',
      icon: <FaBalanceScale className="text-blue-500" />,
      description:
        "We believe in putting standards first. You won't find us cutting any corners. Ever.",
    },
    {
      title: 'First-Class Support',
      icon: <FaHeadset className="text-blue-500" />,
      description:
        'Launching your project is just the start. We pride ourselves on striking long-term working relationships with our clients.',
    },
    {
      title: 'Collaboration is Key',
      icon: <FaUsers className="text-blue-500" />,
      description:
        "We value proper communication. With a dedicated project manager, you'll always have someone to speak to.",
    },
    {
      title: 'User First',
      icon: <FaUserCheck className="text-blue-500" />,
      description:
        "We put a lot of focus into the users' needs, ensuring projects not only visually appeal but also provide a user-friendly experience.",
    },
    {
      title: 'Nothing is Impossible',
      icon: <FaInfinity className="text-blue-500" />,
      description:
        'Due to the bespoke approach to projects, your opportunities are endless.',
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-start">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 ">
            WHY WORK WITH US?
          </h2>
          <p className="mb-10 text-xl md:text-2xl">
            We&apos;re a passionate team of web developers and software
            engineers specialising in website development, systems engineering
            and web application projects.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-[#202020] hover:bg-gray-900 text-blue-600 p-6 hover:text-white shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  {' '}
                  {/* Added icon container */}
                  {reason.icon}
                  <h3 className="text-xl font-bold ml-3">{reason.title}</h3>
                </div>
                <p className="text-white hover:text-blue-600 text-start">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyWorkWithUs;
