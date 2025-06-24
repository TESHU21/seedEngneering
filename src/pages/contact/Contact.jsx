import React, { useState } from 'react';
import {
  Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram,
} from 'lucide-react';
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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <div>
      {/* Breadcrumb Header */}
      <header
        className="relative flex items-center justify-center h-64 bg-cover bg-center"
       style={{ backgroundImage: `url(${BackgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-700/70 to-transparent z-0" />
        <div className="relative z-10 text-white text-3xl font-semibold">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-xl hover:underline">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-black" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-xl ">Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>

      {/* Main Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Contact Info */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center md:text-left">Get In Touch</h2>
            <p className="text-gray-700 mb-8 text-center md:text-left">
              Have a question or project in mind? Reach out via the form or our contact details.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Information</h3>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <MapPin className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <p className="font-semibold">Address:</p>
                    <p>Adis Ababa, Gerji, Ethiopia</p>
                  </div>
                </div>
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <Phone className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <p className="font-semibold">Phone:</p>
                    <p>+251923965946</p>
                    <p>+251936750862</p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-600 w-6 h-6 mt-1" />
                  <div>
                    <p className="font-semibold">Email:</p>
                    <p>support@seedengineeringplc.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Send Us a Message</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 resize-y"
                ></textarea>
              </div>
              {status && (
                <p className={`text-center ${status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
                  {status}
                </p>
              )}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'Submitting...'}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
                >
                  {status === 'Submitting...' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Social Media */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
          <div className="flex justify-center gap-6">
            <a href="https://facebook.com/seedengineeringplc" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
              <Facebook className="w-8 h-8" />
            </a>
            <a href="https://twitter.com/seedengineeringplc" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <Twitter className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com/company/seedengineeringplc" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="https://instagram.com/seedengineeringplc" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
              <Instagram className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
