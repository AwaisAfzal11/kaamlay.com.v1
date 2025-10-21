const Navbar = {
    links: [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Our Projects",
            path: "#", // This makes it non-clickable
            submenu: [
                { name: "Motorway South City", path: "/projects/motorway-south-city" },
                { name: "Goldmark Ventures", path: "/projects/goldmark-ventures" },
                { name: "Goldmine Residence", path: "/projects/goldmine-residence" },
                { name: "Goldmark Business Farms", path: "/projects/business-farms" },
                { name: "Goldmark Valley Kallar Kahar", path: "/projects/kallar-kahar" },
                { name: "Goldmark Avenue", path: "/projects/goldmark-avenue" },
                { name: "Goldmark Country Club", path: "/projects/country-club" },
            ]
        },
        {
            name: "Contact",
            path: "/contact"
        },        
    ]
};

export default Navbar;