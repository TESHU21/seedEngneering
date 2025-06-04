import React from 'react';

// Directly using contentFetchIds for the uploaded images
const ExcavatorImage = 'uploaded:image_44156c.jpg-77f109fa-7fad-4acf-b9d4-02bae011d970'; 
// Placeholder for the bridge image, as only one image was provided.
// You can replace this with an actual image of a bridge or a relevant project from SEED Engineering.
const BridgeImage = 'https://placehold.co/600x400/9CA3AF/FFFFFF?text=Complex+Project'; 

const ExperienceSection = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        {/* Top Heading and Main Introductory Paragraph */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Decades of Electromechanical Expertise
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl">
            With extensive experience in the industry, SEED Engineering delivers robust and innovative solutions. We are committed to tackling complex challenges and achieving exceptional results in every project we undertake.
          </p>
        </div>

        {/* First Content Block: Image (Left on Desktop, Top on Mobile) and Description (Right on Desktop, Bottom on Mobile) */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <img
              src={ExcavatorImage}
              alt="Electromechanical project site with excavator"
              className="w-full max-w-lg h-auto rounded-lg shadow-xl"
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = `https://placehold.co/600x400/CCCCCC/000000?text=Image+Error`;
              }}
            />
          </div>
          {/* Description */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Precision in Every Detail
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              Our robust solutions begin with a deep understanding of industrial challenges. From foundational earthworks to complex site preparations and intricate system installations, we lay the groundwork for excellence in every electromechanical endeavor.
            </p>
          </div>
        </div>

        {/* Second Content Block: Description (Left on Desktop, Top on Mobile) and Image (Right on Desktop, Bottom on Mobile) */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 mb-12"> {/* md:flex-row-reverse to swap order on desktop */}
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <img
              src={BridgeImage}
              alt="Complex engineering project or infrastructure"
              className="w-full max-w-lg h-auto rounded-lg shadow-xl"
              onError={(e) => {
                e.target.onerror = null; // Prevent infinite loop
                e.target.src = `https://placehold.co/600x400/CCCCCC/000000?text=Image+Error`;
              }}
            />
          </div>
          {/* Description */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Building the Future, Together
            </h3>
            <p className="text-base text-gray-700 leading-relaxed">
              We bring intricate engineering projects to life, ensuring precision and durability from concept to completion. Our commitment to advanced technology and skilled execution guarantees successful outcomes for even the most demanding infrastructure and industrial system developments.
            </p>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="flex flex-col items-center text-center">
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mb-8 mx-auto">
            Ready to start your next project? Contact us today to discuss your electromechanical needs and discover how we can bring your vision to life with passion and precision.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
