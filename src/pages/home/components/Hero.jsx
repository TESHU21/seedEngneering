import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FoodProcessorImage from "../../../assets/food processing plant.jpg";
import PLCImage from "../../../assets/PLC automation.jpg";
import ElectricalImage from "../../../assets/electricaltools.jpg"
import ScadaImage from "../../../assets/scada.jpg"
import WeldingImage from "../../../assets/Welding.jpg"
import InstallationImage from "../../../assets/Installation.jpg"
import HVACImage from "../../../assets/HVAC.jpg"
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const backgroundImages = [FoodProcessorImage, PLCImage,ElectricalImage,ScadaImage,WeldingImage,InstallationImage,HVACImage];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const token = sessionStorage.getItem("Token");

  // Auto change images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) =>
      (prev - 1 + backgroundImages.length) % backgroundImages.length
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const handleGetStarted = () => {
    navigate("/about")
  };

  return (
    <section className="relative w-full h-[700px] overflow-hidden text-white">
      {/* Background Images */}
      {backgroundImages.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          } z-[-1]`}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'https://placehold.co/1920x1080/CCCCCC/000000?text=Image+Error';
          }}
        />
      ))}

      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f073d] to-transparent opacity-80 z-0" />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col gap-5 justify-center h-full px-6 md:pl-[202px] max-w-[900px]">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight font-lato">
          Engineering Excellence, Manufacturing the Future. 

        </h1>
        <p className="text-base sm:text-lg max-w-[90%] md:max-w-[427px]">
            <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          Transform your vision into reality. Discover how our expertise in industrial automation, machinery, HVAC, and metal works can power your next project.
        </p>
        </p>
        <button
          onClick={handleGetStarted}
          className="bg-[#2c2d83] hover:bg-blue-900 text-white font-semibold py-3 px-6 w-fit rounded-md  cursor-pointer shadow-lg transition-colors duration-300"
        >
          Discover
        </button>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-opacity-20  cursor-pointer hover:bg-opacity-40 p-3 rounded-full z-20 focus:outline-none"
        aria-label="Previous"
      >
        <ChevronLeft className=" text-white"  size={36}/>
      </button>
      <button
        onClick={handleNextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer bg-opacity-20 hover:bg-opacity-40 p-3 rounded-full z-20 focus:outline-none"
        aria-label="Next"
      >
        <ChevronRight className=" text-white" size={36} />
      </button>
    </section>
  );
};

export default Hero;
