// ProjectPageTemplate.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MapPin, Star, Sun, DollarSign, Briefcase } from 'lucide-react';

const FeatureList = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li key={index} className="flex items-start">
        <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const InfoCard = ({ icon, title, items }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
    <div className="flex items-center gap-4 mb-4">
      {icon}
      <h3 className="text-2xl font-bold text-black">{title}</h3>
    </div>
    {items && items.length > 0 ? <FeatureList items={items} /> : <p className="text-gray-500">Details coming soon.</p>}
  </div>
);

const ProjectPageTemplate = ({ project }) => {
  if (!project) return <div>Project not found.</div>;

  return (
    <>
      {/* Hero Section */}
      <div 
        className="relative h-[75vh] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${project.hero.image})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">

          {/* === UPDATED H1 SECTION === */}
          <h1 className="flex flex-col items-center justify-center gap-4 text-4xl md:text-5xl font-extrabold leading-tight max-w-5xl">
            {/* CHANGE 1: The logo is now bigger. Adjust h-20/h-24 as needed. */}
            {project.hero.logo && (
              <img 
                src={project.hero.logo} 
                alt={`${project.hero.title} Logo`} 
                className="h-[130px] md:h-[170px] w-auto mb-2" // Increased height and added a little margin-bottom
              />
            )}
            {/* CHANGE 2: The text will now always be below the logo because `md:flex-row` was removed from the h1. */}
            <span>{project.hero.title}</span>
          </h1>

        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          {/* About Section */}
          <section className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl font-bold text-black mb-4">About The Project</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{project.about}</p>
          </section>

          {/* Details Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <InfoCard icon={<MapPin size={28} className="text-[#BD872E]" />} title="Location" items={project.location} />
            <InfoCard icon={<Star size={28} className="text-[#BD872E]" />} title="Key Features" items={project.features} />
            <InfoCard icon={<Sun size={28} className="text-[#BD872E]" />} title="Amenities" items={project.amenities} />
          </section>

          {/* Investment & Payment Plan */}
          {(project.investment || project.paymentPlan) && (
            <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
              {project.investment && (
                <InfoCard icon={<DollarSign size={28} className="text-[#BD872E]" />} title={project.investment.title} items={project.investment.points} />
              )}
              {project.paymentPlan && (
                 <InfoCard icon={<Briefcase size={28} className="text-[#BD872E]" />} title={project.paymentPlan.title} items={project.paymentPlan.points} />
              )}
            </section>
          )}

          {/* CTA Section */}
          <section className="bg-[#BD872E] text-white text-center p-12 rounded-2xl max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">{project.cta}</h2>
            <Link to="/contact" className="mt-6 inline-block bg-white text-black font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors">
              Contact Us Now
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default ProjectPageTemplate;