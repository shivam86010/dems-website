import React from "react";
import { Menu, Shield } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const location = useLocation();

  const navItems = [
    { name: "Solutions", path: "/solutions" },
    { name: "Industries", path: "/industries" },
    { name: "Features", path: "/features" },
    { name: "Security", path: "/security" },
    { name: "Resources", path: "/resources" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
        <Link to="/home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl gradient-border flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-sm">D+</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-gray-800">
            DEMS<span className="text-indigo-700">+</span>
          </span>
          <span className="ml-2 text-[11px] font-medium bg-indigo-50 text-indigo-800 px-2 py-0.5 rounded-full border border-indigo-200 hidden sm:inline-block">
            Enterprise v3.0
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-7 text-gray-600 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`hover:text-indigo-700 transition-colors ${
                isActive(item.path) ? "text-indigo-800 font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden sm:block bg-indigo-900 hover:bg-indigo-800 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md transition-colors"
          >
            <Shield size={16} className="inline mr-1" /> Request Demo
          </Link>
          <button onClick={onMenuClick} className="md:hidden text-gray-700">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
