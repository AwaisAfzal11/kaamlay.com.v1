import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1: Logo / Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">YourBrand</h2>
          <p className="text-sm">
            Building reliable digital experiences for modern businesses.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {links.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.path}
                  className="hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <a href="mailto:info@yourbrand.com" className="hover:text-blue-600">info@yourbrand.com</a></li>
            <li>Phone: <a href="tel:+1234567890" className="hover:text-blue-600">+1 (234) 567-890</a></li>
            <li>Address: 123 Main Street, City, Country</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
