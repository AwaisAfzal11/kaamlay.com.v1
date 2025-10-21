import React from 'react';
import Hero from './Hero';
import { ShieldCheck, Star } from 'lucide-react';
import { Zap, Wrench, Snowflake, Construction, Car, ThermometerSnowflake } from 'lucide-react';

const servicesData = [
  {
    icon: <Zap size={32} className="text-primary" />,
    title: "Electrical Works",
    description: "From wiring and lighting to panel repairs, our certified electricians handle every job with precision and safety."
  },
  {
    icon: <Wrench size={32} className="text-primary" />,
    title: "Plumbing Works",
    description: "We fix leaks, install fittings, and ensure smooth water flow for homes and offices. Your plumbing is in expert hands."
  },
  {
    icon: <Snowflake size={32} className="text-primary" />,
    title: "AC & Refrigerator Services",
    description: "Complete maintenance, gas refilling, and compressor repairs to keep you cool and comfortable all year long."
  },
  {
    icon: <Construction size={32} className="text-primary" />,
    title: "Carpenter Works",
    description: "Custom furniture repair, wood polish, and door fittings. Our skilled carpenters bring perfection to your interiors."
  },
  {
    icon: <Car size={32} className="text-primary" />,
    title: "Car Wash (Home Service)",
    description: "Professional car cleaning at your doorstep, including vacuuming, washing, and polishing by our trained staff."
  },
  {
    icon: <ShieldCheck size={32} className="text-primary" />,
    title: "Free Home General Check-Up",
    description: "Our free annual check-up for members helps prevent costly breakdowns by inspecting key systems in your home."
  },
  {
    icon: <ThermometerSnowflake size={32} className="text-primary" />,
    title: "Free Winter Check-Up",
    description: "We get your home winter-ready by checking insulation, geysers, and heating systems for your comfort and safety."
  },
];

const whyChooseUs = [
  {
    icon: <ShieldCheck size={40} className="text-primary" />,
    title: 'Verified Professionals',
    description: 'Our team consists of trained, verified, and reliable experts dedicated to top-quality service.'
  },
  {
    icon: <Star size={40} className="text-primary" />,
    title: 'Membership Benefits',
    description: 'Enjoy free services, priority bookings, and seasonal checkups with our flexible membership plans.'
  },
  {
    icon: <i className="fas fa-handshake text-primary text-4xl"></i>, // FontAwesome icon
    title: 'Technology & Trust',
    description: 'We use technology to provide transparency and build trust, connecting you with world-class technicians.'
  }
];

const Home = () => {
  return (
    <>
      <Hero />

      {/* Services Section */}
      <section id="services-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16" data-aos="fade-down">
            <h2 className="text-4xl font-extrabold text-gray-800">
              Comprehensive Maintenance Solutions
            </h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
              At Kaamlay.com, we deliver excellence in every task — from fixing the smallest fault to managing complete facility maintenance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-lg p-8 flex items-start gap-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={100 + (index % 3) * 100}
              >
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
     
    </>
  );
}

export default Home;