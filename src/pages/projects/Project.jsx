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
import BackgroundImage from "../../assets/PagesBackgroundImage.webp"
import TafImage from "../../assets/our services/TafImage.webp"
import BoilerImage from "../../assets/our services/BoilerImage.webp"
import SHEMUSCADA from "../../assets/our services/SHEMU SCADA.webp"
import KitchenImage from "../../assets/our services/Kitchen.webp"
import KitchenManufacturing from "../../assets/our services/KitchenManufacturing.webp"
import NedamcoTWRImage from "../../assets/our services/Nedamco.webp"
import ProjectItem from './components/ProjectItem'; 
import WawiMilkImage from "../../assets/our services/WaWiImage.webp"
import NedamcoAutomation from "../../assets/our services/Nedamco Automation.webp"
import ControlPanelImage from "../../assets/our services/Control Panel.webp"
import SHEMUSCADAWEBImage from "../../assets/our services/SHEMUSCADA Design.webp"
import DuctImage from "../../assets/our services/Duct System.webp"
import VitaHMIImage from "../../assets/our services/VITA HMI.webp"
import OtherWorksImage from "../../assets/our services/OtherWorksImage.webp"

const projectsList = [
  {
    image: SHEMUSCADA,
    title: "Web-Based SCADA System Deployment",
    description: "Successful deployment of a web-based SCADA system for SHEMU GROUP, enhancing operational control and data acquisition capabilities.",
    link: "/projects/scada-system-shemu-group"
  },
  {
    image: SHEMUSCADAWEBImage,
    title: "SCADA User Interface Developed by Seed Engineering for SHEMU",
    description: "Seed Engineering designed and developed a user-friendly SCADA (Supervisory Control and Data Acquisition) interface for SHEMU, enabling real-time monitoring, control, and efficient data visualization of their industrial processes.",
    link: "/projects/scada-system-shemu-group"
  },
    {
    image: TafImage,
    title: "TF Agro Processing PLC: Full Dairy Plant Installation",
    description: "Turnkey dairy plant installation for TF Agro processing plc, delivering state-of-the-art facilities for large-scale production.",
    link: "/projects/tf-agro-processing"
  },
  {
    image: NedamcoTWRImage,
    title:"Trenchless Water Pipe Rehabilitation",
    description: "Partnered with Nedamco Africa to implement trenchless water repair solutions in collaboration with the Harar Water and Sewerage Authority and the Dire Dawa Water and Sewerage Authority, enhancing urban water infrastructure with minimal surface disruption.",
  
  },
  {
    image: NedamcoAutomation,
    title:"SCADA and Telemetry System Maintenance for HWSSA and DDWSSA",
    description: "In partnership with Nedamco Africa, we are maintaining and optimizing the SCADA and telemetry systems of the Harar Water and Sewerage Authority (HWSSA) and the Dire Dawa Water and Sewerage Authority (DDWSSA). This work supports efficient, real-time monitoring and control of critical water infrastructure."
  },
   {
    image: WawiMilkImage,
    title: "Wawi Milk: Dairy Plant Full Installation",
    description: "Complete installation of a dairy plant for Wawi Milk, including all necessary machinery and systems for efficient milk processing.",
    link: "/projects/wawi-milk-dairy-plant"
  },

  {
    image: VitaHMIImage,
    title:"Custom HMI Development for VITA Spring",
    description:  "Seed Engineering designed and developed a tailored Human-Machine Interface (HMI) for VITA Spring, providing intuitive control, real-time monitoring, and enhanced visualization to streamline their operational processes."
  },
  {
    image: ControlPanelImage,
    title:"Control Panel Developed by Seed Engineering",
    description: "We design and develop a wide range of custom control panels tailored for various applications, ensuring reliable performance and seamless integration across industrial and utility systems.",
  
  },
  {
    image: KitchenImage,
    title: "Kitchen Hood & Toilet Ventilation Installation",
    description: "Installation of modern kitchen hood and toilet ventilation systems for a government training center, ensuring optimal air quality and comfort.",
    link: "/projects/ventilation-installation-training-center"
  },
  {
    image: KitchenManufacturing,
    title: "Stainless Steel Table & Kitchen Hood Manufacturing",
    description: "Manufacturing and installation of high-quality kitchen hoods and stainless-steel tables for Bon Royal Hotel, meeting stringent hygiene and durability standards.",
    link: "/projects/bon-royal-hotel"
  },
  {
    image: BoilerImage,
    title: "Boiler Maintenance",
    description: "Comprehensive duct work remodeling and boiler burner and chimney maintenance for Executive Adama, improving HVAC efficiency and safety.",
    link: "/projects/executive-adama-maintenance"
  },
 
  {
    image: OtherWorksImage,
    title: "Various Welding Works (Sub-contractor)",
    description: "Engaged in numerous welding works as sub-contractors, demonstrating our versatile capabilities in structural and pipeline welding.",
    link: "/projects/various-welding-works"
  },
  {
    image: DuctImage,
    title: "Ductwork Remodeling and Boiler System Maintenance – Executive Adama",
    description: "Executed ductwork remodeling and provided maintenance for the boiler burner and chimney system at Executive Adama, ensuring improved energy efficiency, ventilation performance, and system safety.",
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
