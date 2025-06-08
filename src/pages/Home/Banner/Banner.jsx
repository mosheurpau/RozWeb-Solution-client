import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bg from '../../../assets/black-bg.jpg';

const words = ['WEB', 'APP', 'ECOMMERCE', 'SOFTWARE'];

function WebDevBanner() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prevWord) => (prevWord + 1) % words.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  });

  return (
    <div
      className="relative overflow-hidden pt-20 pb-16"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
      {/* Content */}
      <div className="container max-w-6xl mx-auto px-4 relative z-0 text-start">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          YOUR NEXT{' '}
          <span className="bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
            {words[currentWord]}
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#77CDFA] to-blue-700 bg-clip-text text-transparent">
            DEVELOPMENT PARTNER
          </span>
        </h1>
        <p className="text-start text-lg md:text-xl bg-gradient-to-r font-bold from-white to-gray-200 bg-clip-text text-transparent max-w-4xl mb-8">
          With established clients all over the UK and beyond, we&apos;ve been
          delivering market leading web, app and software development projects
          for over 1 years.
        </p>
        <motion.button
          animate={{
            scale: [1, 1.1, 1], // Scale values for animation
            transition: {
              duration: 2, // Animation duration in seconds
              ease: 'easeInOut', // Easing function
              repeat: Infinity, // Repeat animation infinitely
              repeatType: 'reverse', // Reverse animation on repeat
            },
          }}
          className="bg-gradient-to-r from-cyan-500 to-blue-700 
                 hover:from-green-600 hover:to-cyan-600 
                  text-white font-bold py-2 px-4 
                 rounded-full shadow-2xl">
          Discuss your project today →
        </motion.button>
      </div>
    </div>
  );
}

export default WebDevBanner;
