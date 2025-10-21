import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const [status, setStatus] = useState({ 
    submitting: false, 
    msg: '',
    type: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, msg: 'Sending...', type: '' });

    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });

      const response = await fetch("/send_email_global.php", {
        method: 'POST',
        body: formDataToSend
      });

      if (!response.ok) throw new Error("Submission failed");
      
      const result = await response.json();

      setStatus({
        submitting: false,
        msg: result.message || "Message sent successfully!",
        type: result.status
      });

      if (result.status === 'success') {
        setFormData({ fullName: "", email: "", phone: "", serviceType: "", message: "" });
      }
    } catch (error) {
      setStatus({ 
        submitting: false, 
        msg: "Failed to send message. Please try again.", 
        type: 'error' 
      });
    }
  };

  const serviceOptions = [
    "General Maintenance",
    "Plumbing",
    "Electrical Work",
    "AC Repair",
    "Cleaning Services",
    "Other",
  ];
  
  const socialLinks = [
    { icon: <FaFacebookF />, href: "#", name: "Facebook" },
    { icon: <FaInstagram />, href: "#", name: "Instagram" },
    { icon: <FaLinkedinIn />, href: "#", name: "LinkedIn" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We’re Here to Help — Anytime, Anywhere. At Kaamlay.com, your comfort and satisfaction are our top priorities.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 bg-white p-8 md:p-12 rounded-2xl shadow-lg">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
              <p className="text-gray-600">
                Have a question, suggestion, or feedback? Fill out the form and our team will get back to you as soon as possible.
              </p>
            </div>
            
            <div className="space-y-6">
              <InfoItem icon={<MapPin className="text-primary"/>} title="Head Office" content="Islamabad, Pakistan" />
              <InfoItem icon={<Phone className="text-primary"/>} title="Phone" content="0300-1311111" href="tel:03001311111" />
              <InfoItem icon={<Mail className="text-primary"/>} title="Email" content="Kaamlay.com@gmail.com" href="mailto:Kaamlay.com@gmail.com" />
              <InfoItem icon={<Globe className="text-primary"/>} title="Website" content="www.kaamlay.com" href="https://www.kaamlay.com" />
              <InfoItem icon={<Clock className="text-primary"/>} title="Working Hours" content="Mon – Sun: 9:00 AM to 9:00 PM" />
            </div>

            <div className="pt-4 border-t border-gray-200">
                <h3 className="font-semibold text-gray-700 mb-3">Connect With Us Online</h3>
                <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                        <a key={index} href={social.href} aria-label={social.name} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors duration-300">
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-gray-50 rounded-xl p-8">
            {status.msg && (
              <div className={`mb-4 p-3 rounded-md text-center text-sm font-medium ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {status.msg}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput label="Full Name" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />
              <FormInput label="Email Address" id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
              <FormInput label="Phone Number" id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
              
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">Select Service Type</label>
                <select id="serviceType" name="serviceType" value={formData.serviceType} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200">
                  <option value="" disabled>Please select a service...</option>
                  {serviceOptions.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required placeholder="Describe your query..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200"></textarea>
              </div>

              <button type="submit" disabled={status.submitting} className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                {status.submitting ? 'Submitting...' : 'Submit'} <Send size={18} />
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer line */}
        <p className="text-center text-gray-600 mt-16 text-lg italic">
            At Kaamlay.com, we don’t just fix problems — we build lasting relationships.
        </p>
      </div>
    </div>
  );
}

// Helper components for cleaner JSX
const InfoItem = ({ icon, title, content, href }) => (
  <div className="flex items-start gap-4">
    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
      {icon}
    </div>
    <div>
      <h3 className="font-bold text-gray-800">{title}</h3>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
          {content}
        </a>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  </div>
);

const FormInput = ({ label, ...props }) => (
  <div>
    <label htmlFor={props.id} className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input {...props} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition duration-200" />
  </div>
);

export default Contact;