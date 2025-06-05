import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({ service }) => {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Service Image */}
      <div className="w-full h-72 mb-4 overflow-hidden rounded-lg">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => { // Fallback for broken images
            e.target.onerror = null;
            e.target.src = `https://placehold.co/400x200/CCCCCC/000000?text=${service.title.replace(/\s/g, '+')}`;
          }}
        />
      </div>

      {/* Service Title */}
      <h3 className="text-xl font-semibold text-gray-900 mb-2 px-2">
        {service.title}
      </h3>

      {/* Service Description */}
      <p className="text-gray-700 leading-relaxed mb-4 px-2">
        {service.description}
      </p>

      {/* See More Link */}
      {/* Assuming 'service.link' will navigate to a more detailed page for that service */}
      <Link
        to={service.link || "#"} // Fallback to '#' if no link is provided
        className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 uppercase text-sm tracking-wide"
      >
        SEE MORE
      </Link>
    </div>
  );
};

export default ServiceItem;
