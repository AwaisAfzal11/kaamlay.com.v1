import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import NavbarData from '../../Data/Navbar';
import whiteLogo from '../../Assets/Home/white_logo.png';
import goldenLogo from '../../Assets/Home/golden_logo.png';
import './Navbar.css';

function Desktop() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Effect to handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to top on link click
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
    setActiveDropdown(null); // Close dropdown when clicking a link
  };

  // Handle dropdown toggle
  const handleDropdownToggle = (linkName) => {
    setActiveDropdown(activeDropdown === linkName ? null : linkName);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };
    
    if (activeDropdown) {
      document.addEventListener('click', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [activeDropdown]);

  return (
    <div
      className={`hidden lg:flex fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" onClick={handleLinkClick}>
              <img
                src={isScrolled ? goldenLogo : whiteLogo}
                alt="Logo"
                className="h-12 w-auto transition-all duration-300"
              />
            </NavLink>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-10">
            {NavbarData.links.map((link, index) => (
              <div key={index} className="relative">
                {link.submenu ? (
                  // Dropdown menu item
                  <div className="relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDropdownToggle(link.name);
                      }}
                      className={`flex items-center space-x-1 text-lg font-medium transition-colors duration-300 ${
                        isScrolled 
                          ? 'text-[#BD872E] hover:text-opacity-80' 
                          : 'text-white hover:text-opacity-80'
                      }`}
                    >
                      <span>{link.name}</span>
                      <BsChevronDown
                        className={`transition-transform duration-200 ${
                          activeDropdown === link.name ? 'rotate-180' : ''
                        }`}
                        size={16}
                      />
                    </button>

                    {/* Dropdown Menu */}
                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-100 py-2 z-50">
                        {link.submenu.map((sublink, subIndex) => (
                          <NavLink
                            key={subIndex}
                            to={sublink.path}
                            onClick={handleLinkClick}
                            className={({ isActive }) =>
                              `block px-4 py-3 text-sm transition-colors duration-200 hover:bg-gray-50 hover:text-[#BD872E] ${
                                isActive ? 'text-[#BD872E] bg-gray-50' : 'text-gray-700'
                              }`
                            }
                          >
                            {sublink.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  // Regular menu item
                  <NavLink
                    to={link.path}
                    onClick={handleLinkClick}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors duration-300 ${
                        isScrolled 
                          ? `text-[#BD872E] hover:text-opacity-80 ${isActive ? 'opacity-100' : ''}` 
                          : `text-white hover:text-opacity-80 ${isActive ? 'opacity-100' : ''}`
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Desktop;