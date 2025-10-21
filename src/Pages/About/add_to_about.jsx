import React from 'react';
import { Building, Gem, Target, Eye, Heart, ShieldCheck, Zap, TrendingUp, Handshake, CheckCircle2, Star } from 'lucide-react';

// Import your background images
// import aboutHero from '../../../src/Assets/Home/img33.jpg'; 
import aboutHero from '../../../src/Assets/Home/img33.jpg'
import whyUsBg from '../../../src/Assets/Home/img33.jpg';

// Reusable component for informational sections
const InfoCard = ({ icon, title, children }) => (
  <section className="mb-16 bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
    <div className="flex flex-col md:flex-row items-start gap-6">
      <div className="flex-shrink-0 text-[#BD872E]">{icon}</div>
      <div className="flex-1">
        <h2 className="text-3xl font-bold text-black mb-4">{title}</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  </section>
);

const About = () => {
  const missionPoints = [
    { icon: <ShieldCheck size={24} />, text: "Deliver safe, transparent, and legally compliant investment opportunities." },
    { icon: <Zap size={24} />, text: "Pioneer collective land and development models in Pakistan." },
    { icon: <Handshake size={24} />, text: "Bridge the gap between developers and individual investors." },
    { icon: <TrendingUp size={24} />, text: "Contribute towards sustainable growth in real estate and agriculture." },
  ];

  const coreValues = [
    { icon: <Star size={32} />, title: "Integrity", text: "Every project built on honesty and trust." },
    { icon: <Star size={32} />, title: "Transparency", text: "Clear, documented, and litigation-free structures." },
    { icon: <Star size={32} />, title: "Innovation", text: "Modern investment and development models." },
    { icon: <Star size={32} />, title: "Growth", text: "Long-term value for investors and developers." },
    { icon: <Star size={32} />, title: "Responsibility", text: "Ensuring sustainable and ethical practices." },
  ];

  const whyChooseUsPoints = [
    "Legally registered with SECP and FBR.",
    "Clear and transparent land acquisition processes.",
    "Unique collective investment model for all.",
    "Trusted by developers for litigation-free land.",
    "Long-term vision for profitability & sustainability."
  ];

  return (
    <>
      {/* 1. Hero Section (70vh) */}
      <div
        className="relative h-[80vh] bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${aboutHero})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Redefining Responsible Investing<span className="text-[#BD872E]">.</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light max-w-3xl">
            Combining corporate strength with innovative investment models to build a transparent and prosperous future.
          </p>
        </div>
      </div>
      {/* 2. Main Content Section */}
      <div className="bg-gray-50 py-24">
        <div className="container mx-auto px-6 max-w-5xl">

          {/* Intro Sections */}
          <InfoCard icon={<Building size={50} />} title="Zimaydar Ventures – The Company">
            <p>Zimaydar Ventures (Private) Limited is a SECP and FBR registered and approved company, operating as a professional platform for investment and development.</p>
            <p>We are dedicated to introducing transparent, secure, and sustainable investment opportunities in Pakistan, building trust by combining innovation with responsibility.</p>
          </InfoCard>

          <InfoCard icon={<Gem size={50} />} title="Goldmark Ventures – The Concept">
            <p>Goldmark Ventures is an innovative concept designed to transform collective investment into a structured model where investors pool resources to acquire large-scale land, which is then developed into housing, agricultural, and commercial projects.</p>
          </InfoCard>

          {/* Purpose Section */}
          <section className="text-center mb-24">
            <h2 className="text-3xl font-bold text-black mb-10">Our Dual Purpose</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 p-8 rounded-2xl border-t-4 border-[#BD872E]">
                <Building size={40} className="mx-auto text-[#BD872E] mb-4" />
                <h3 className="text-xl font-bold text-black mb-2">For Developers</h3>
                <p className="text-gray-700">To provide clear, transparent, and litigation-free land in large, compact blocks for sustainable development.</p>
              </div>
              <div className="bg-amber-50 p-8 rounded-2xl border-t-4 border-[#BD872E]">
                <Handshake size={40} className="mx-auto text-[#BD872E] mb-4" />
                <h3 className="text-xl font-bold text-black mb-2">For Investors</h3>
                <p className="text-gray-700">To empower individuals with access to clean, transparent, and secure investment opportunities.</p>
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section className="mb-24 bg-gray-800 text-white rounded-2xl p-12 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Target size={32} className="text-[#BD872E]" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <ul className="space-y-4">
                {missionPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 text-[#BD872E] mt-1">{point.icon}</div>
                    <p className="text-gray-300">{point.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <Eye size={32} className="text-[#BD872E]" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                We envision a future where investment in Pakistan is responsible, collective, and transparent, offering value not only in financial returns but also in nation-building.
              </p>
            </div>
          </section>

          {/* Core Values Section */}
          <section className="text-center mb-24">
            <h2 className="text-3xl font-bold text-black mb-12">Our Core Values</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {coreValues.map((value) => (
                <div key={value.title} className="flex flex-col items-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg border border-gray-100 text-[#BD872E] mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-black">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section
        className="relative py-24 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${whyUsBg})` }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-10">Why Choose Zemaydar Ventures?</h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {whyChooseUsPoints.map((point, index) => (
              <div key={index} className="flex items-center text-left">
                <CheckCircle2 className="h-6 w-6 text-green-400 mr-4 flex-shrink-0" />
                <span className="text-white text-lg">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;