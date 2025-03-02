import { motion } from 'framer-motion';
function CallToAction() {
  return (
    <section className="bg-blue-500 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            LIKE WHAT YOU SEE?
          </h2>
          <p className="text-white mb-8">
            Join our illustrious list of established website, application and
            software development clients. We offer a detailed free project audit
            to establish your needs and requirements before matching you to your
            ideal software solution with a tailored project quotation.
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
    </section>
  );
}

export default CallToAction;
