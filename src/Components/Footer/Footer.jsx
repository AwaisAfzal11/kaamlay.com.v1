import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// IMPORTANT: Add a white version of your logo here
import FooterLogo from '../../Assets/Home/kaamlay_logo_orange.jpg'; 

const Footer = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://www.facebook.com/Kaamlay/", name: "Facebook" }, // Replace '#' with your actual social media links
    { icon: <FaInstagram />, href: "https://www.instagram.com/kaamlay.com1/", name: "Instagram" },
    // { icon: <FaLinkedinIn />, href: "#", name: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <img src={FooterLogo} alt="Kaamlay.com Logo" className="h-12 mb-4" />
            <p className="text-sm">
              Your trusted partner for home & office maintenance, simplifying your everyday life with professional, reliable services.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {links.map((link, i) => (
                <li key={i}>
                  <Link
                    to={link.path}
                    className="hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-primary flex-shrink-0" />
                <span>Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:Kaamlay.com@gmail.com" className="hover:text-primary">Kaamlay.com@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:03001311111" className="hover:text-primary">0300-1311111</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.href} 
                  aria-label={social.name} 
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Kaamlay.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;