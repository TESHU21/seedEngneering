import React from 'react';
import { Hammer, Users, Rocket, Award } from 'lucide-react'; // Importing icons from lucide-react
import ElectromechanicalWeb from "../../../assets/ElectromechanicalWeb.webp"

const KeyMetrics = () => {
  // Directly using the contentFetchId for the uploaded background image

  const metrics = [
    {
      icon: <Hammer className="h-10 w-10 text-orange-400 mb-2" />, // Icon for Projects
      number: 21,
      label: 'Projects',
    },
    {
      icon: <Users className="h-10 w-10 text-blue-400 mb-2" />, // Icon for Clients
      number: 10,
      label: 'Clients',
    },
    {
      icon: <Rocket className="h-10 w-10 text-green-400 mb-2" />, // Icon for Success
      number: 14,
      label: 'Success',
    },
    {
      icon: <Award className="h-10 w-10 text-yellow-400 mb-2" />, // Icon for Awards
      number: 20,
      label: 'Awards',
    },
  ];

  return (
    <section
      className="relative w-full py-16 sm:py-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ElectromechanicalWeb})` }}
    >

      {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#050217] to-transparent opacity-80 z-0" />


      {/* Metrics Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-white text-center">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              {metric.icon}
              <span className="text-4xl sm:text-5xl font-bold mb-1">
                {metric.number}
              </span>
              <span className="text-lg sm:text-xl uppercase tracking-wide">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetrics;
