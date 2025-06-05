import React from 'react';
import { Link } from 'react-router-dom';

const ProjectItem = ({ project }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      {/* Project Image */}
      <div className="w-full h-56 overflow-hidden"> {/* Fixed height for image consistency */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => { // Fallback for broken images
            e.target.onerror = null;
            e.target.src = `https://placehold.co/400x224/CCCCCC/000000?text=${project.title.replace(/\s/g, '+')}`;
          }}
        />
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        {/* Project Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
          {project.title}
        </h3>

        {/* Project Description */}
        <p className="text-gray-700 leading-relaxed mb-4 text-sm flex-grow">
          {project.description}
        </p>

        {/* See More Link */}
        {/* Assuming 'project.link' will navigate to a more detailed page for that project */}
        <Link
          to={project.link || "#"} // Fallback to '#' if no link is provided
          className="inline-block self-start text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 uppercase text-sm tracking-wide"
        >
          VIEW DETAILS
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
