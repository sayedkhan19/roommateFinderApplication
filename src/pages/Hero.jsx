import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Lottie from 'lottie-react';
import animationData from '../../public/roommate-animation.json';

const Hero = () => {
    return (
         <section className="bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left: Text */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect{' '}
            <span className="text-blue-600">
              <Typewriter
                words={['Roommate.', 'Rental.', 'Match.']}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            Join thousands of users to find safe, verified roommate options fast.
          </p>
        </div>

        {/* Right: Lottie Animation */}
        <div className="w-full md:w-1/2">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </section>
    );
};

export default Hero;