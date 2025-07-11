import WebDevSection from './DevSection';
import WebDevFeatures from './WebDevFeatures';
import CallToAction from './CallToAction';
import WhyWorkWithUs from './WhyWorkWithUs';
import ContactForm from '../ContactForm/ContactForm';
import { useEffect } from 'react';
function WebDevelopment() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <section>
      <div className="bg-black text-white py-10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-start p-6">
          <h1 className="text-4xl md:text-6xl font-extrabold ">
            YOUR NEXT <span className="text-blue-600"> WEB DEVELOPMENT</span>{' '}
            PARTNER
          </h1>
          <p className="text-lg max-w-2xl md:text-2xl my-5 md:my-10">
            Over the last 1 years we&apos;ve developed innovative, market
            leading web apps, websites and web based platforms across a wide
            range of sectors, for clients all over the UK.
          </p>
          <button className="shadow-2xl bg-gradient-to-r from-blue-500 to-blue-700 hover:from-green-600 hover:to-cyan-600 text-white font-extrabold py-3 px-6 rounded-full">
            Discuss your project today →
          </button>
        </div>
      </div>
      <WebDevSection></WebDevSection>
      <WebDevFeatures></WebDevFeatures>
      <CallToAction></CallToAction>
      <WhyWorkWithUs></WhyWorkWithUs>
      <ContactForm></ContactForm>
    </section>
  );
}

export default WebDevelopment;
