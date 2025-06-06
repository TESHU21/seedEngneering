import React from 'react';
import { Lightbulb, CheckCircle, DollarSign } from 'lucide-react'; // Icons for features
import ExcellenceImage from "../../../assets/Exellence.jpg"
import { useNavigate } from 'react-router-dom';


// Directly using the contentFetchId for the uploaded image
const features = [
    {
      icon: <Lightbulb className="h-12 w-12 text-yellow-500" />, // Icon for Innovation
      title: 'Innovation',
      description: 'At SEED Engineering, we constantly strive to upgrade our technology to be in par with modern developments and provide our clients with the best solutions.',
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-blue-500" />, // Icon for Best Quality
      title: 'Best Quality',
      description: 'We are committed to providing quality services that meet or exceed customer expectations, ensuring excellence in every project.',
    },
    {
      icon: <DollarSign className="h-12 w-12 text-green-500" />, // Icon for Low Cost (adapted to value)
      title: 'Value & Efficiency', // Changed from "Low Cost" to "Value & Efficiency" for a more professional tone
      description: 'We optimize our processes to deliver cost-effective solutions without compromising on the high standards of our engineering and manufacturing.',
    },
  ];


const WelcomeSection = () => {
  const navigate=useNavigate()
  return (
    <div>
    <section className="flex flex-col md:flex-row items-center justify-center py-16 px-4 sm:px-8 lg:px-16 bg-white">
      {/* Left Image Area */}
      <div className="w-full md:h-[600px] md:w-1/2 lg:w-3/5 flex justify-center md:justify-start mb-8 md:mb-0 md:pr-8">
        <img
          src={ExcellenceImage}
          alt="Electromechanical works site"
          className="w-full max-w-lg md:max-w-none h-auto rounded-lg shadow-xl object-cover"
         
        />
      </div>

      {/* Right Content Area */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col items-center md:items-start text-center md:text-left">
        <p className="text-orange-600 font-semibold text-sm uppercase tracking-wider mb-2">
          Welcome to SEED Engineering
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
          Years of Experience in Electromechanical Excellence
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-6 max-w-md">
          We are ready to power your projects with unparalleled expertise. Specializing in comprehensive electro-mechanical solutions, we bring your industrial visions to life.
        </p>
        <p className="text-sm sm:text-base text-gray-600 mb-8 max-w-md">
          At SEED Engineering, we are proud to be a leading Electro Mechanical Contracting Company in Ethiopia, undertaking diverse projects across manufacturing processes, industrial automation, HVAC systems, and precision metal works. Our commitment to accuracy, quality, and prompt service ensures every endeavor meets the highest standards.
        </p>
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300 cursor-pointer"
        onClick={()=>navigate("/services")}
        >
          OUR SERVICES
        </button>
      </div>
    </section>
                      <h2 className="text-3xl font-bold text-orange-600 mb-2 text-center mt-4 mb-10">Our Values</h2>

    <section className="py-16 px-4 sm:px-8 lg:px-16 bg-gray-100">

      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default WelcomeSection;
