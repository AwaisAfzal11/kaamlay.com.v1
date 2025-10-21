import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { TfiClose } from 'react-icons/tfi';
import NavbarData from '../../Data/Navbar';
import WhatsApp from './WhatsApp'; // Keep WhatsApp separate for clarity
import './Navbar.css';

// IMPORTANT: Add your logo files to these paths
import whiteLogo from '../../Assets/Home/kaamlay_logo_white.jpg';
import orangeLogo from '../../Assets/Home/kaamlay_logo_orange.jpg';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to toggle the mobile navigation
  const toggleNav = () => {
    setIsNavOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : 'auto';
      return !prev;
    });
  };
  
  // Function to close the mobile navigation
  const closeNav = () => {
    setIsNavOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Function for link clicks (scrolls to top and closes mobile nav)
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    closeNav();
  };

  // Effect to close mobile nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        closeNav();
      }
    };
    if (isNavOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isNavOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <NavLink to="/" onClick={handleLinkClick}>
                <img
                  src={isScrolled ? orangeLogo : whiteLogo}
                  alt="Kaamlay.com Logo"
                  className="h-12 w-auto transition-all duration-300"
                />
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-10">
              {NavbarData.links.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-colors duration-300 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-primary' 
                        : 'text-orange hover:text-white/80'
                    } ${isActive ? (isScrolled ? 'text-primary font-semibold' : 'font-bold') : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Navigation Trigger */}
            <div className="lg:hidden">
              <button
                onClick={toggleNav}
                aria-label="Open navigation menu"
                className="inline-flex items-center justify-center p-2 rounded-md"
              >
                <FaBars size={22} className={isScrolled ? 'text-primary' : 'text-white'} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      <div ref={sidebarRef} className={`navbar-menu ${isNavOpen ? 'open' : ''}`}>
        <div className="sticky bg-white shadow-xl h-screen">
          <div className="flex justify-end p-4">
            <button onClick={closeNav} aria-label="Close navigation menu">
              <TfiClose className="text-primary" size={24} />
            </button>
          </div>
          <nav className="px-6 space-y-2">
            {NavbarData.links.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  `block text-lg font-medium p-3 rounded-md transition-colors ${
                    isActive 
                      ? "bg-primary/10 text-primary" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      
      <WhatsApp />
    </>
  );
}

export default Navbar;