import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from 'react-router-dom';
import BackgroundImage from "../../assets/PagesBackgroundImage.jpg"
import TafImage from "../../assets/our services/TafImage.jpg"
import ProjectItem from './components/ProjectItem'; 
const projectsList = [
  {
    image: 'https://placehold.co/600x337/F0F4F8/1A202C?text=SCADA+System',
    title: "Web-Based SCADA System Deployment",
    description: "Successful deployment of a web-based SCADA system for SHEMU GROUP, enhancing operational control and data acquisition capabilities.",
    link: "/projects/scada-system-shemu-group"
  },
  {
    image: 'https://placehold.co/600x337/D9E2EC/2D3748?text=HVAC+Installation',
    title: "Kitchen Hood & Toilet Ventilation Installation",
    description: "Installation of modern kitchen hood and toilet ventilation systems for a government training center, ensuring optimal air quality and comfort.",
    link: "/projects/ventilation-installation-training-center"
  },
  {
    image: 'https://placehold.co/600x337/C0CCDA/4A5568?text=Stainless+Steel+Works',
    title: "Stainless Steel Table & Kitchen Hood Manufacturing",
    description: "Manufacturing and installation of high-quality kitchen hoods and stainless-steel tables for Bon Royal Hotel, meeting stringent hygiene and durability standards.",
    link: "/projects/bon-royal-hotel"
  },
  {
    image: 'https://placehold.co/600x337/A7B3BF/6B7A8C?text=Duct+Work',
    title: "Duct Work Remodeling & Boiler Maintenance",
    description: "Comprehensive duct work remodeling and boiler burner and chimney maintenance for Executive Adama, improving HVAC efficiency and safety.",
    link: "/projects/executive-adama-maintenance"
  },
  {
    image: 'https://placehold.co/600x337/8F9AA6/8F9AA6?text=Dairy+Plant',
    title: "Wawi Milk: Dairy Plant Full Installation",
    description: "Complete installation of a dairy plant for Wawi Milk, including all necessary machinery and systems for efficient milk processing.",
    link: "/projects/wawi-milk-dairy-plant"
  },
  {
    image: TafImage,
    title: "TF Agro Processing PLC: Full Dairy Plant Installation",
    description: "Turnkey dairy plant installation for TF Agro processing plc, delivering state-of-the-art facilities for large-scale production.",
    link: "/projects/tf-agro-processing"
  },
  {
    image: 'https://placehold.co/600x337/5F656B/5F656B?text=Welding+Works',
    title: "Various Welding Works (Sub-contractor)",
    description: "Engaged in numerous welding works as sub-contractors, demonstrating our versatile capabilities in structural and pipeline welding.",
    link: "/projects/various-welding-works"
  },
  {
    image: 'https://placehold.co/600x337/4A5568/4A5568?text=Workshop+Mfg',
    title: "Workshop Manufactured Equipment",
    description: "Showcasing various equipment and components proudly manufactured in our own workshop, reflecting our in-house production capabilities.",
    link: "/projects/workshop-manufactured"
  },
];


const Project = () => {
  return (
    <div>
      {/* Breadcrumb Section:
          Displays navigation path (Home / Projects) with a background image and overlay.
      */}
      <div
        className='relative flex justify-center items-center h-48 sm:h-64 md:h-80 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        {/* Gradient overlay for better text readability on the background image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#828589] to-transparent opacity-80 z-0" />

        <Breadcrumb className="relative text-white text-3xl font-poppins font-semibold">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                {/* Link to Home page */}
                <Link to="/" className="hover:underline text-xl font-poppins font-semibold leading-6">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator /> {/* Separator between breadcrumb items */}

            <BreadcrumbItem>
              {/* Current page (Projects) */}
              <BreadcrumbPage className="text-xl font-poppins font-semibold leading-6">Projects</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Projects Grid Section:
          Displays a heading, introductory paragraph, and then maps over the projectsList
          to render individual ProjectItem components in a responsive grid.
      */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Our Completed Projects
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          Explore a selection of our successful electromechanical projects, showcasing our expertise in delivering high-quality solutions across various industries and applications.
        </p>

        {/* Grid of ProjectItem components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </section>

      {/* Call to Action Section (Optional):
          A section to encourage users to contact for new projects.
      */}
      <section className="bg-slate-500 my-4 mb-10 text-white py-12 px-4 sm:px-8 lg:px-16 text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're ready to partner with you to bring your electromechanical vision to life.
          </p>
          <Link
            to="/contact" // Assuming a /contact route for your ContactForm
            className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Project;
