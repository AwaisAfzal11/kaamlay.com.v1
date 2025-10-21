// ProjectsData.js

// Import your project hero images
import motorwayHero from '../Assets/Home/OurProjects/motorway-south-city.jpg';
import venturesHero from '../Assets/Home/OurProjects/goldmark-ventures.jpg';
import residenceHero from '../Assets/Home/OurProjects/Goldmine-Residence.jpg';
import farmsHero from '../Assets/Home/OurProjects/country-club.jpg';
import kaharHero from '../Assets/Home/OurProjects/GV-image.jpg';
import avenueHero from '../Assets/Home/OurProjects/goldmark-avenue.jpg';
import clubHero from '../Assets/Home/OurProjects/country-club.jpg';

// === STEP 1: Import each project's unique logo ===
// (Please replace these paths with your actual logo file locations)
import motorwayLogo from '../Assets/Home/ProjectHeroLogos/Motorway-southcity.png';
import venturesLogo from '../Assets/Home/ProjectHeroLogos/Goldmark-land-ventures.png';
import residenceLogo from '../Assets/Home/ProjectHeroLogos/Goldmine-Residence.png';
import farmsLogo from '../Assets/Home/ProjectHeroLogos/goldmark-bussiness-farm-logo.png';
import kaharLogo from '../Assets/Home/ProjectHeroLogos/Goldmark-valley.png';
import avenueLogo from '../Assets/Home/ProjectHeroLogos/Goldmark-Avenue-logo.png';
import clubLogo from '../Assets/Home/ProjectHeroLogos/Gold-Mark-country-club-Final-Logo.png';

export const projectsData = [
  {
    slug: "motorway-south-city",
    // === STEP 2: Add the 'logo' property to the hero object ===
    hero: { title: "Motorway South City – Turning Your Dream Home Into Reality", image: motorwayHero, logo: motorwayLogo },
    about: "Motorway South City is a modern housing scheme located at a prime spot near the Motorway. Designed to offer transparency, quality, and modern living standards, this project combines peace of mind with world-class facilities.",
    location: ["Direct access from Motorway", "Easy connectivity to Islamabad and Rawalpindi", "Safe and serene neighborhood"],
    features: ["Clear land titles and legal approvals", "Master-planned infrastructure", "Wide roads, green belts, and parks", "Residential and commercial plots available"],
    amenities: ["24/7 water, gas, and electricity", "Mosque, schools, and healthcare facilities", "Shopping areas and community centers"],
    investment: { title: "Investment Opportunities", points: ["Affordable plots in a prime location", "Rapidly appreciating property value", "Secure and transparent investment"] },
    paymentPlan: { title: "Payment Plan", points: ["Easy installment plan", "50% booking, 50% at possession"] },
    cta: "Book your plot today and start building your future home!"
  },
  {
    slug: "goldmark-ventures",
    hero: { title: "Collective Investment, Collective Growth", image: venturesHero, logo: venturesLogo },
    about: "Goldmark Ventures introduces Pakistan’s first Collective Land Model, where multiple investors pool their resources to own large-scale land collectively and enjoy greater returns.",
    location: ["Near Islamabad and Rawalpindi", "Strategically positioned for future development projects"],
    features: ["Shared ownership of large land parcels", "Transparent and legally protected model", "Low investment entry, high potential return", "Opportunity to participate in mega projects"],
    amenities: ["Collective farmhouses and commercial land", "Access to future development projects", "Community support and modern infrastructure"],
    investment: { title: "Why Choose Us", points: ["Secure and regulated investment", "Unique business model with high ROI", "Suitable for both small and large investors"] },
    cta: "Be part of Pakistan’s most innovative land investment model today!"
  },
  {
    slug: "goldmine-residence",
    hero: { title: "Luxury Living, Profitable Investment – All in One", image: residenceHero, logo: residenceLogo },
    about: "Goldmine Residence is a premium Hotel Apartments Project offering both residential comfort and rewarding investment opportunities. Investors receive annual profits as well as property appreciation.",
    location: ["Prime area in Islamabad", "Easy access to major highways and city centers"],
    features: ["Luxury hotel apartments", "Shareholding-based investment model", "60% annual profit sharing", "Property rights with resale value"],
    amenities: ["Modern interiors and premium finishing", "Restaurants, café, gym, and swimming pool", "24/7 security and concierge services"],
    investment: { title: "Investment Opportunities", points: ["Share-based ownership with guaranteed returns", "Property appreciation for long-term growth"] },
    cta: "Invest smart, live luxury – Book your share in Goldmine Residence today!"
  },
  {
    slug: "business-farms",
    hero: { title: "Where Investment Meets Agriculture", image: farmsHero, logo: farmsLogo },
    about: "Goldmark Business Farms is a unique agro-based project offering farmhouses with integrated dairy farming. It allows investors to combine property ownership with agricultural business income.",
    location: [],
    features: ["1, 2, 4, and 8 Kanal business farms", "Dairy farming and milk production units", "Long-term property appreciation", "Healthy and natural environment"],
    amenities: ["Purpose-built dairy sheds and infrastructure", "Reliable water supply and farm management", "Expert consultancy and marketing support"],
    investment: { title: "Investment Opportunities", points: ["Dual income: property + business revenue", "Ideal for investors looking for sustainable ventures"] },
    cta: "Turn your investment into a profitable agri-business today with Goldmark Business Farms."
  },
  {
    slug: "kallar-kahar",
    hero: { title: "Live Close to Nature, Invest in the Future", image: kaharHero, logo: kaharLogo },
    about: "Goldmark Valley is located in the beautiful hills of Kallar Kahar, offering a perfect blend of natural beauty and modern residential planning.",
    location: ["Near Kallar Kahar Lake", "Surrounded by scenic natural landscapes"],
    features: ["Residential and commercial plots", "High tourism and recreational potential", "Guaranteed long-term property value growth"],
    amenities: ["Resorts and guest houses", "Shopping areas and community spaces", "Parks, green belts, and recreational facilities"],
    investment: null,
    cta: "Invest in the beauty of Kallar Kahar – where nature meets opportunity."
  },
  {
    slug: "goldmark-avenue",
    hero: { title: "The Future of Real Estate Investment Near Islamabad Airport", image: avenueHero, logo: avenueLogo },
    about: "Goldmark Avenue is a modern residential and commercial project located just minutes away from the New Islamabad International Airport, making it the ultimate hotspot for living and investment.",
    location: ["Only a few minutes from Islamabad Airport", "Connected to major roads and CPEC routes"],
    features: ["Both residential and commercial plots", "Strategic airport-side location", "High ROI and rapid appreciation potential"],
    amenities: ["Modern infrastructure and wide roads", "Shopping avenue, schools, and healthcare", "24/7 security and gated community"],
    investment: null,
    cta: "Secure your investment today in the future hub of Islamabad real estate!"
  },
  {
    slug: "country-club",
    hero: { title: "Luxury Lifestyle, Peaceful Living", image: clubHero, logo: clubLogo },
    about: "Goldmark Country Club & Resorts is a premium leisure and residential project offering luxury villas, resorts, and world-class recreational facilities in a serene environment.",
    location: [],
    features: ["Country Club with exclusive facilities", "Golf course, swimming pool, and sports areas", "Luxury resorts and holiday villas", "Scenic natural environment"],
    amenities: ["5-star level dining and spa services", "Gym, clubhouse, and entertainment areas", "Secure gated community"],
    investment: { title: "Investment Opportunities", points: ["Ideal for vacation homes, rentals, and property appreciation", "Long-term value in lifestyle-based investment"] },
    cta: "Experience the perfect blend of luxury and leisure – Join Goldmark Country Club & Resorts today."
  }
];