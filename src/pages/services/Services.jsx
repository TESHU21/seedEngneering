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
import IndustrialAutomationImage from "../../assets/PLC automation.jpg"
import HVACImage from "../../assets/HVAC2.jpg"
import ManufacturingImage from "../../assets/Manufacturing.jpg"
import MaintenanceImage from "../../assets/Maintenance.jpg"
import FoodPlantImage from "../../assets/FoodPlant.jpg"
import WeldingImage from "../../assets/Welding.jpg"

import ServiceItem from './components/ServiceItem'; // Adjust path if necessary based on your file structure


const servicesList = [
  {
    image: IndustrialAutomationImage,
    title: "Industrial Automation & SCADA Systems",
    description: "We design and implement intelligent industrial automation and SCADA systems, ensuring seamless operation, precise control, and optimized performance.",
    link: "/services/industrial-automation"
  },
  {
    image: HVACImage,
    title: "HVAC System Solutions",
    description: "Comprehensive HVAC design, supply, installation, and maintenance, providing optimal climate control and energy efficiency for all building types.",
    link: "/services/hvac-solutions"
  },
  {
    image: ManufacturingImage,
    title: "Precision Manufacturing & Fabrication",
    description: "Our expertise spans across manufacturing processes, including the production of small-scale machinery, and specialized stainless steel and metal works, providing high-quality fabrication and welding services.",
    link: "/services/manufacturing-fabrication"
  },
  {
    image: FoodPlantImage,
    title: "Food Processing Plant Installation",
    description: "We provide end-to-end solutions for food processing plants, encompassing design, supply, and complete installation. Our focus is on delivering efficient, hygienic, and compliant facilities tailored to your specific production requirements.",
    link: "/services/food-processing"
  },
  {
    image: MaintenanceImage,
    title: "Equipment Supply & Maintenance",
    description: "Ensuring longevity and peak performance through reliable equipment supply and comprehensive maintenance, keeping your machinery running smoothly.",
    link: "/services/equipment-maintenance"
  },
  {
    image: WeldingImage,
    title: "Structural & Pipeline Welding",
    description: "Specialized in all types of structural and pipeline welding, ensuring high-quality and reliable services for any project.",
    link: "/services/welding-services"
  },
];


const Services = () => {
  return (
    <div>
      {/* Breadcrumb Section */}
      <div
        className='relative flex justify-center items-center h-48 sm:h-64 md:h-80 bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        {/* Gradient overlay for better readability of breadcrumbs */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2d3135] to-transparent opacity-80 z-0" />

        <Breadcrumb className="relative text-white text-3xl font-poppins font-semibold">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>
                <Link to="/" className="hover:underline text-xl font-poppins font-semibold leading-6 ">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className=" "  />

            <BreadcrumbItem>
              <BreadcrumbPage className="text-xl font-poppins font-semibold leading-6 ">Services</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Services Introduction Section */}
      <section className="py-16 px-4 sm:px-8 lg:px-16 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
          Our Solutions
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
          At SEED Engineering, we are committed to delivering cutting-edge electromechanical services that drive efficiency, reliability, and innovation across various industries. Discover our core areas of expertise below.
        </p>

        {/* Services Grid - Mapping ServiceItem components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <ServiceItem key={index} service={service} />
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-700 text-white py-12 px-4 sm:px-8 lg:px-16 text-justify">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our expert team is ready to provide tailor-made electromechanical solutions. Contact us today to discuss your specific needs.
          </p>
          <Link
            to="/contact" // Assuming a /contact route for your ContactForm
            className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
