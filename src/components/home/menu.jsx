import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, ChevronDown } from "lucide-react"; // Import the ChevronDown icon

export default function Navbar() {
  const [active, setActive] = useState("HOME");
  const [isCitiesOpen, setIsCitiesOpen] = useState(false);

  const menuItems = [
    { label: "HOME", link: "/" },
    { label: "ABOUT US", link: "/about" },
    { label: "FAVORITE", link: "/favorites" },
    { label: "CITIES", link: "#cities", hasDropdown: true },  // Mark 'Cities' with dropdown
    { label: "CONTACT", link: "#contact" },
  ];

  const cities = ["Tanger", "Chefchaouen", "Marrakech", "Casablanca"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F3556] text-white px-6 py-4 flex items-center justify-between z-50">
      <div className="text-4xl font-bold italic" style={{ fontFamily: "Beau Rivage" }}>
        <span className="text-white">Your</span>{" "}
        <span className="text-[#F8DDAC]">Compass</span>
      </div>

      <div className="hidden md:flex gap-x-20 items-center">
        {menuItems.map((item) =>
          item.hasDropdown ? (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => setIsCitiesOpen(true)}
              onMouseLeave={() => setIsCitiesOpen(false)}
            >
              <a
                href={item.link}
                onClick={() => setActive(item.label)}
                className={`uppercase font-semibold tracking-wide relative transition-all text-lg ${
                  active === item.label ? "text-white" : "text-white"
                }`}
              >
                {item.label}
                {/* Add the dropdown icon */}
                <ChevronDown className="inline-block ml-2 text-white" />
                {active === item.label && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gold"></span>
                )}
              </a>
              {isCitiesOpen && (
                <div className="absolute top-full left-0 bg-[#0F3556] w-64 border-t border-[#F8DDAC]">
                  <ul>
                    {cities.map((city, index) => (
                      <li key={index}>
                        <Link
                          to={`/cities/${city.toLowerCase()}`}
                          onClick={() => setActive("CITIES")}
                          className="block py-2 px-4 text-white hover:bg-[#F8DDAC] transition-colors"
                        >
                          {city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.label}
              to={item.link}
              onClick={() => setActive(item.label)}
              className={`uppercase font-semibold tracking-wide relative transition-all text-lg ${
                active === item.label ? "text-white" : "text-white"
              }`}
            >
              {item.label}
              {active === item.label && (
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gold"></span>
              )}
            </Link>
          )
        )}
      </div>

      <div className="flex items-center space-x-6 ml-6">
        <Globe className="text-white h-6 w-6 cursor-pointer" />
        <Link to="/login">
          <button className="login-btn px-4 py-1 rounded-full text-sm font-semibold">Log in</button>
        </Link>
        <Link to="/signin">
          <button className="signup-btn px-4 py-1 rounded-full text-sm font-semibold">Sign up</button>
        </Link>
      </div>
    </nav>
  );
}
