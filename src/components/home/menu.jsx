import { useState } from "react";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";  

export default function Navbar() {
  const [active, setActive] = useState("HOME");

  const menuItems = ["HOME", "ABOUT US", "SERVICE", "Cities", "CONTACT"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0F3556] text-white px-6 py-4 flex items-center justify-between z-50">
      {/* Logo */}
      {/* <div className="text-4xl font-bold italic" style={{ fontFamily: "Beau Rivage" }}>
        <span className="text-white">Your</span>{" "}
        <span className="text-[#F8DDAC]">Compass</span>
      </div> */}

<Link to="/logo">
  <div className="text-4xl font-bold italic" style={{ fontFamily: "Beau Rivage" }}>
    <span className="text-white">Your</span>{" "}
    <span className="text-[#F8DDAC]">Compass</span>
  </div>
</Link>

      {/* Menu Items */}
      <div className="hidden md:flex gap-x-20 items-center">
        {menuItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setActive(item)}
            className={`uppercase font-semibold tracking-wide relative transition-all text-lg ${
              active === item ? "text-white" : "text-white !important"
            }`}
            style={{ color: 'white !important' }}
          >
            {item}
            {active === item && (
              <span className="absolute left-0 bottom-0 h-[2px] w-full bg-gold"></span>
            )}
          </a>
        ))}
      </div>

      {/* Language & Buttons */}
      <div className="flex items-center space-x-6 ml-6">

      <Link to="/tanger"> 
          <button className="login-btn px-4 py-1 rounded-full text-sm font-semibold">
            tanger
        </button>
      </Link>

        <Globe className="text-white h-6 w-6 cursor-pointer" />
        <Link to="/login"> 
          <button className="login-btn px-4 py-1 rounded-full text-sm font-semibold">
            Log in
          </button>
        </Link>


        <button className="signup-btn px-4 py-1 rounded-full text-sm font-semibold">
          Sign up
        </button>
      </div>
    </nav>
  );
}
