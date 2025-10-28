import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white text-dark-text pt-12 sm:pt-16 pb-16 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-display text-center mb-4">
            About <span className="text-primary">PQ Autos</span>
          </h1>
        </AnimatedSection>

        {/* Our Mission */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mt-12 sm:mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-primary mb-6 text-center">
              Your Premier One-Stop Shop
            </h2>
            <div className="bg-light p-6 sm:p-8 rounded-lg shadow-md">
              <p className="text-base sm:text-lg text-light-text mb-4">
                At PQ Autos, we're proud to be your <strong>one-stop shop for all automotive needs</strong>. We built our business on the principle of convenience, quality, and trust, ensuring you have a single, reliable partner for every aspect of your car's life.
              </p>
              <p className="text-base sm:text-lg text-light-text">
                Whether you need expert <strong>repairs and maintenance</strong>, secure <strong>state-to-state car transportation</strong>, or are looking to purchase high-quality <strong>pre-owned vehicle</strong>, our team is here to provide seamless, professional service.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Philosophy */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mt-12 sm:mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-primary mb-6 text-center">
              "We Treat Your Car Like It's a Ferrari"
            </h2>
            <div className="bg-light p-6 sm:p-8 rounded-lg shadow-md">
              <p className="text-base sm:text-lg text-light-text mb-4">
                This isn't just a slogan—it's our core philosophy. We know your vehicle is more than just transportation; it's an investment and a vital part of your daily life. That's why every car that enters our shop receives the "Ferrari Treatment."
              </p>
              <p className="text-base sm:text-lg text-light-text">
                It means meticulous attention to detail, precision diagnostics, and a level of care you won't find anywhere else. From a simple oil change to a complex engine repair, we treat your car with the respect and expertise it deserves, ensuring it leaves our shop in peak condition.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Call to Action */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mt-12 sm:mt-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-primary mb-8">
              Experience the PQ Autos Difference
            </h2>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-primary text-white font-bold font-display uppercase tracking-wider py-3 px-6 text-sm sm:text-base sm:py-4 sm:px-10 rounded-sm shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
              >
                Schedule a Service
              </Link>
              <Link 
                to="/sales" 
                className="bg-primary text-white font-bold font-display uppercase tracking-wider py-3 px-6 text-sm sm:text-base sm:py-4 sm:px-10 rounded-sm shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
              >
                View Our Cars
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;