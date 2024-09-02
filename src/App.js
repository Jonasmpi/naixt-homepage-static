import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import WhyHireUsSection from './components/WhyHireUsSection';
import ImageAccordion from './components/ImageAccordion.js';
import ServicesSection from './components/Services.js';
import PricingSection from './components/Pricing.js';
import Imprint from './components/Imprint.js';
import PrivacyPolicy from './components/PrivacyNotice.js';
import ExperienceByTechnology from './components/ExperienceTechnology.js';

const LandingPage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-white h-screen sm:h-auto md:h-screen py-100 sm:py-32 md:py-48">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="/assets/background_hero_compressed.webp"
            alt="Background showing clouds with techlines"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,_#ffffff_0%,_#ffffff_40%,_rgba(255,255,255,0)_70%)]"></div>
          <div className="absolute inset-0 bg-[linear-gradient(0deg,_#ffffff_0%,_rgba(255,255,255,0)_70%)]"></div>
        </div>
        <div className="relative h-full flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="sm:text-left lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-[#010C80] sm:text-5xl md:text-6xl leading-tight">
                Empowering Decision Makers to Achieve AI Success
              </h1>
              <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Expert Consulting for AI Strategy, Development, and Management Tailored to Your Business Needs.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-start">
                <div className="rounded-md shadow">
                  <a href="#pricing" className="w-full flex items-center justify-center px-8 py-3 border border-[#010C80] text-base font-medium rounded-md text-white bg-[#010C80] hover:bg-opacity-90 md:py-4 md:text-lg md:px-10">Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Why Hire Us Section */}
      <WhyHireUsSection />
      <ServicesSection />
      <ImageAccordion />
      <ExperienceByTechnology></ExperienceByTechnology>
      <PricingSection />
    </>
  );
};

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="bg-white text-black min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <Link to="/" className="flex items-center">
                <img
                  src="/assets/naixt_logo_centered.png"
                  alt="nAIxt Technologies Logo"
                  className="h-8"
                />
              </Link>
              <div className="flex-shrink-0 flex items-center">
                <span className="font-bold text-xl text-black">nAIxt Technologies</span>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="/" className="text-black hover:text-[#010C80] px-3 py-2 text-sm font-medium">Home</a>
                <a href="#services" className="text-black hover:text-[#010C80] px-3 py-2 text-sm font-medium">Services</a>
                <a href="https://naixt-technologiesde.beehiiv.com/" className="text-black hover:text-[#010C80] px-3 py-2 text-sm font-medium">Blog</a>
                <a href="#pricing" className="text-black hover:text-[#010C80] px-3 py-2 text-sm font-medium">Contact</a>
              </div>
              <div className="sm:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#010C80]"
                >
                  {menuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu, show/hide based on menu state */}
          {menuOpen && (
            <div className="sm:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#010C80] hover:bg-gray-50">Home</a>
                <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#010C80] hover:bg-gray-50">Services</a>
                <a href="#experience" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#010C80] hover:bg-gray-50">Experience</a>
                <a href="https://naixt-technologiesde.beehiiv.com/" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#010C80] hover:bg-gray-50">Blog</a>
                <a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-black hover:text-[#010C80] hover:bg-gray-50">Contact</a>
              </div>
            </div>
          )}
        </nav>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/imprint" element={<Imprint />} />
          <Route path="/privacy-notice" element={<PrivacyPolicy />} />
          {/* Add more routes here as needed */}
        </Routes>

        {/* Footer */}
        <footer className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:justify-between">
              {/* Company Info */}
              <div className="flex items-start text-center md:text-left flex-1">
                <img
                  src="/assets/naixt_logo_centered.png"
                  alt="nAIxt Technologies Logo"
                  className="h-8 mr-3 mt-5"
                />
                <div className="flex flex-col justify-start">
                  <h2 className="text-lg font-semibold text-gray-900">nAIxt Technologies GmbH</h2>
                  <p className="text-gray-500">
                    Empowering Decision Makers in AI
                  </p>
                  <p className="text-gray-500">
                    Expert Consulting for AI Strategy, Development, and Management
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col justify-start mt-8 md:mt-0 text-center md:text-right flex-1">
                <p className="text-gray-500">
                  Email: <a href="mailto:info@naixt-technologies.de" className="text-[#010C80]">info@naixt-technologies.de</a>
                </p>
                <p className="text-gray-500">Phone: +49 8954196515</p>
                <p className="text-gray-500">Address: Am Forst 2, 82166 Gräfelfing, Germany</p>
              </div>
            </div>


            <div className="mt-8 flex justify-center md:justify-between">
              {/* Links */}
              <div className="text-center">
                <Link to="/imprint" className="text-gray-500 hover:text-gray-700">Imprint</Link>
                <Link to="/privacy-notice" className="ml-4 text-gray-500 hover:text-gray-700">Privacy Notice</Link>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 flex justify-center space-x-6 md:order-2">
              <a href="https://www.linkedin.com/company/naixt-technologies" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="mt-8 md:mt-0 text-center md:order-1">
              <p className="text-base text-gray-400">
                &copy; 2024 nAIxt Technologies GmbH. All rights reserved.
              </p>
            </div>
          </div>
        </footer>


      </div >
    </Router >
  );
};

export default App;
