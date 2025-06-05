import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Link } from 'react-router-dom'

import WelcomeSection from './components/WelcomeSection'
import ExperienceSection from './components/ExperienceSection'
import BackgroundImage from "../../assets/PagesBackgroundImage.jpg"

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Background */}
      <div
        className="relative flex justify-center items-center h-48 sm:h-64 md:h-80 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#000001] to-transparent opacity-70 z-0" />

        {/* Breadcrumbs */}
        <Breadcrumb
          className="relative z-10 text-white text-xl sm:text-2xl md:text-3xl font-poppins font-semibold"
          aria-label="Breadcrumb"
        >
          <BreadcrumbList className="flex gap-2">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="hover:underline  leading-6 font-poppins text-xl">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className=" text-xl">About</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Welcome Section */}
      <div className="mt-8  sm:px-8 md:px-16">
        <WelcomeSection />
      </div>
      <div>
<ExperienceSection/>
      </div>
    </div>
  )
}

export default About
