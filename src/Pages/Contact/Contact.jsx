import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
// Make sure to add a background image to your Assets folder
import contactBg from '../../Assets/Home/cotact1.jpg'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
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
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      }
    } catch (error) {
      setStatus({ 
        submitting: false, 
        msg: "Failed to send message. Please try again.", 
        type: 'error' 
      });
    }
  };
  
  const contactDetails = [
    { icon: <Mail size={24} />, title: "Email", line1: "Our friendly team is here to help...", link: "mailto:zemaydar@gmail.com", linkText: "zemaydar@gmail.com" },
    { icon: <Phone size={24} />, title: "Phone", line1: "Mon-Fri from 9am to 5pm.", link: "tel:+923331111114", linkText: "+92 333 111 111 4" },
    { icon: <MapPin size={24} />, title: "Office", line1: "A Goldmine and SouthCity Consortium", linkText: "Plot # 03, 04 & 05, Near Kiani House, Opposite ATTOCK Petrol Pump, DHA Phase 02, GT Road, Islamabad, Pakistan" }
  ];

  return (
    <div 
      className="relative min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${contactBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-24 flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Contact Us<span className="text-[#BD872E]">.</span>
          </h1>
          <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
            Get in touch now. We're here to help and answer any question you might have.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Column: Contact Info Cards */}
          <div className="space-y-6">
            {contactDetails.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 flex items-start gap-5 text-white">
                <div className="flex-shrink-0 w-12 h-12 bg-[#BD872E] rounded-full flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-300">{item.line1}</p>
                  {item.link ? (
                    <a href={item.link} className="font-semibold text-white hover:text-[#BD872E] transition-colors duration-300">
                      {item.linkText}
                    </a>
                  ) : (
                    <p className="font-semibold text-white">{item.linkText}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8">
            {status.msg && (
              <div className={`mb-4 p-3 rounded text-center text-sm font-medium ${status.type === 'success' ? 'bg-green-500/80 text-white' : 'bg-red-500/80 text-white'}`}>
                {status.msg}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-200 mb-1">Full Name</label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#BD872E] placeholder-gray-400" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-1">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#BD872E] placeholder-gray-400" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-1">Phone Number (Optional)</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#BD872E] placeholder-gray-400" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">Message</label>
                <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required className="w-full px-4 py-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#BD872E] placeholder-gray-400"></textarea>
              </div>
              <button type="submit" disabled={status.submitting} className="w-full bg-[#BD872E] text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-amber-600 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                {status.submitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;