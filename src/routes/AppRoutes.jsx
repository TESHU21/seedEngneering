import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from '@/layout/Layout';
import Home from '@/pages/home/Home';
import Contact from '@/pages/contact/Contact';
import Services from '@/pages/services/Services';
import About from '@/pages/about/About';
import Project from '@/pages/projects/Project';

const AppRoutes = () => {
  return (
    
     <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact/>} />
        <Route path="services" element={<Services />} />
        <Route path='project' element={<Project/>}/>

      </Route>

    </Routes>
  )
}

export default AppRoutes