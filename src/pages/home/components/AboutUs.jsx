import React from 'react';
import ElectroImage from "../../../assets/Motors.png"
import WelcomeSection from '@/pages/about/components/WelcomeSection';

const AboutUs = () => {
  // Directly using the contentFetchId for the uploaded image
  // This ensures the image path is resolved correctly in the Canvas environment.
  const AboutUsImage = 'uploaded:image_50cfd2.jpg-0faefb73-5667-4564-89f7-4198583a74d6'; 

  return (
    <div>
    <section className="flex flex-col md:flex-row items-center justify-center py-16 px-4 sm:px-8 lg:px-16 bg-gray-50">
      {/* Left Content Area */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0 md:pr-8">
        <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-2">
          ABOUT US
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          We are a Leading Electromechanical Company
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-md">
          At SEED Engineering, we are proud to be one of the best Electro Mechanical Contracting Companies in the Ethiopia market, undertaking diverse projects in manufacturing, industrial automation, HVAC, stainless steel, and metal works.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300">
          CONTACT US
        </button>
      </div>

      {/* Right Image Area */}
      <div className="w-full h-[400px] md:w-1/2 lg:w-3/5 flex justify-center md:justify-end">
        <img
          src={ElectroImage}
          alt="Large wheel loader"
          className="w-[600px] bg-inherit rounded-lg shadow-xl object-cover"
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = `https://placehold.co/600x400/CCCCCC/000000?text=Image+Error`;
          }}
        />
      </div>

    </section>
    <WelcomeSection/>
    </div>
  );
};

export default AboutUs;
